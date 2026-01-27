export type Heading = { id: string; text: string; level: 2 | 3 };

const renderInline = (text: string) => {
  let result = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  result = result.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-[90%] font-mono text-slate-800">$1</code>');
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return result;
};

const slugify = (text: string, counts: Record<string, number>) => {
  const base =
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";
  const current = counts[base] ?? 0;
  counts[base] = current + 1;
  return current ? `${base}-${current}` : base;
};

export function markdownToHtml(markdown: string): { html: string; headings: Heading[] } {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  const headings: Heading[] = [];
  const slugCounts: Record<string, number> = {};
  let inList = false;
  let inBlockquote = false;

  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  const closeBlockquote = () => {
    if (inBlockquote) {
      html.push("</blockquote>");
      inBlockquote = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      closeBlockquote();
      return;
    }

    if (trimmed.startsWith("### ")) {
      closeList();
      closeBlockquote();
      const text = trimmed.slice(4).trim();
      const id = slugify(text, slugCounts);
      headings.push({ id, text, level: 3 });
      html.push(
        `<h3 id="${id}" class="scroll-mt-28 mt-6 text-xl font-semibold text-slate-900">${renderInline(
          text
        )}</h3>`
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      closeBlockquote();
      const text = trimmed.slice(3).trim();
      const id = slugify(text, slugCounts);
      headings.push({ id, text, level: 2 });
      html.push(
        `<h2 id="${id}" class="scroll-mt-28 mt-8 text-2xl font-bold text-slate-900">${renderInline(
          text
        )}</h2>`
      );
      return;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/);
    if (imageMatch) {
      closeList();
      closeBlockquote();
      const [, alt, src, title] = imageMatch;
      const caption = title || alt;
      html.push(
        `<figure class="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><img src="${src}" alt="${renderInline(
          alt
        )}" loading="lazy" class="w-full object-cover" />${
          caption
            ? `<figcaption class="px-4 py-3 text-sm font-semibold text-slate-800">${renderInline(
                caption
              )}</figcaption>`
            : ""
        }</figure>`
      );
      return;
    }

    const calloutMatch = trimmed.match(/^<(Tip|Info|Warning|Quote)>(.+)<\/\1>$/i);
    if (calloutMatch) {
      closeList();
      closeBlockquote();
      const type = calloutMatch[1].toLowerCase();
      const text = renderInline(calloutMatch[2].trim());
      const base = "my-6 flex gap-3 rounded-lg p-4 leading-relaxed";
      if (type === "tip") {
        html.push(
          `<div class="${base} border border-green-200 bg-green-50 text-green-900"><span class="text-xl">💡</span><div>${text}</div></div>`
        );
      } else if (type === "info") {
        html.push(
          `<div class="${base} border border-blue-200 bg-blue-50 text-blue-900"><span class="text-xl">ℹ️</span><div>${text}</div></div>`
        );
      } else if (type === "warning") {
        html.push(
          `<div class="${base} border border-yellow-300 bg-yellow-50 text-yellow-900"><span class="text-xl">⚠️</span><div>${text}</div></div>`
        );
      } else if (type === "quote") {
        html.push(
          `<blockquote class="relative my-8 rounded-lg border-l-4 border-gray-300 bg-gray-50 p-6 text-gray-700"><span class="absolute left-3 top-3 text-3xl text-gray-300">❝</span><p class="pl-6 italic leading-relaxed">${text}</p></blockquote>`
        );
      }
      return;
    }

    if (trimmed.startsWith(">")) {
      closeList();
      if (!inBlockquote) {
        html.push(
          '<blockquote class="border-l-4 border-brand-orange/60 bg-brand-yellow/10 px-4 py-3 rounded-lg">'
        );
        inBlockquote = true;
      }
      const quoteText = trimmed.replace(/^>\s?/, "");
      html.push(`<p>${renderInline(quoteText)}</p>`);
      return;
    }

    if (trimmed.startsWith("- ")) {
      closeBlockquote();
      if (!inList) {
        html.push('<ul class="my-4 ml-5 list-disc space-y-2 text-slate-700">');
        inList = true;
      }
      html.push(`<li class="leading-relaxed">${renderInline(trimmed.slice(2).trim())}</li>`);
      return;
    }

    closeList();
    closeBlockquote();
    html.push(`<p class="my-4 text-slate-700 leading-relaxed">${renderInline(trimmed)}</p>`);
  });

  closeList();
  closeBlockquote();
  return { html: html.join("\n"), headings };
}
