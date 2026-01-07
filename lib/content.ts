import fs from "fs/promises";
import path from "path";

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  category: string;
  author?: string;
  thumbnail?: string;
  featuredImage?: string;
};

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type Post = PostMeta & {
  html: string;
  headings: Heading[];
};

export const REVALIDATE_24H = 60 * 60 * 24;

export const CATEGORIES: Category[] = [
  {
    slug: "basic",
    name: "Basic",
    description: "Foundational online safety habits anyone can start today.",
  },
  {
    slug: "family",
    name: "Family",
    description: "Practical online safety tips for parents, kids, and households.",
  },
  {
    slug: "social",
    name: "Social",
    description: "Share smarter and protect your identity on social platforms.",
  },
  {
    slug: "device",
    name: "Device",
    description: "Protect phones, tablets, and computers from threats and misuse.",
  },
  {
    slug: "password",
    name: "Password",
    description: "Build and manage strong passwords to secure every account.",
  },
  {
    slug: "email",
    name: "Email",
    description: "Stay safe from phishing, spoofing, and inbox threats.",
  },
  {
    slug: "privacy",
    name: "Privacy",
    description: "Keep your personal data safe across devices and services.",
  },
  {
    slug: "scam",
    name: "Scam",
    description: "Spot, avoid, and respond to scams before they cause harm.",
  },
];

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

type FrontMatter = Record<string, string>;

function parseFrontMatter(markdown: string): { metadata: FrontMatter; body: string } {
  const fmMatch = markdown.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*[\r\n]+([\s\S]*)$/);
  if (!fmMatch) {
    return { metadata: {}, body: markdown.trim() };
  }

  const [, rawMeta, body] = fmMatch;
  const metadata: FrontMatter = {};

  rawMeta.split(/\r?\n/).forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      metadata[key.trim()] = rest.join(":").trim();
    }
  });

  return { metadata, body: body.trim() };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(text: string, counts: Record<string, number>): string {
  const base =
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";

  const current = counts[base] ?? 0;
  counts[base] = current + 1;

  return current ? `${base}-${current}` : base;
}

function markdownToHtml(markdown: string): { html: string; headings: Heading[] } {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  const headings: Heading[] = [];
  const slugCounts: Record<string, number> = {};
  let inList = false;
  let inBlockquote = false;
  let hasRenderedH1 = false;

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
      html.push(`<h3 id="${id}" class="scroll-mt-28">${escapeHtml(text)}</h3>`);
      return;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      closeBlockquote();
      const text = trimmed.slice(3).trim();
      const id = slugify(text, slugCounts);
      headings.push({ id, text, level: 2 });
      html.push(`<h2 id="${id}" class="scroll-mt-28">${escapeHtml(text)}</h2>`);
      return;
    }

    if (trimmed.startsWith("# ")) {
      closeList();
      closeBlockquote();
      if (!hasRenderedH1) {
        hasRenderedH1 = true;
        return;
      }

      html.push(`<h1>${escapeHtml(trimmed.slice(2).trim())}</h1>`);
      return;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imageMatch) {
      closeList();
      closeBlockquote();
      const [, alt, src] = imageMatch;
      html.push(
        `<figure class="my-6 overflow-hidden rounded-2xl shadow-sm"><img src="${escapeHtml(
          src
        )}" alt="${escapeHtml(alt)}" loading="lazy" class="w-full" /></figure>`
      );
      return;
    }

    if (trimmed.startsWith(">")) {
      closeList();
      if (!inBlockquote) {
        html.push('<blockquote class="border-l-4 border-brand-orange/60 bg-brand-yellow/10 px-4 py-3 rounded-lg">');
        inBlockquote = true;
      }
      const quoteText = trimmed.replace(/^>\s?/, "");
      html.push(`<p>${escapeHtml(quoteText)}</p>`);
      return;
    }

    if (trimmed.startsWith("- ")) {
      closeBlockquote();
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${escapeHtml(trimmed.slice(2).trim())}</li>`);
      return;
    }

    closeList();
    closeBlockquote();
    html.push(`<p>${escapeHtml(trimmed)}</p>`);
  });

  closeList();
  closeBlockquote();
  return { html: html.join("\n"), headings };
}

export async function getPostsByCategory(categorySlug: string): Promise<PostMeta[]> {
  const categoryPath = path.join(CONTENT_ROOT, categorySlug);
  let files: string[];

  try {
    files = await fs.readdir(categoryPath);
  } catch (error) {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const fullPath = path.join(categoryPath, file);
        const contents = await fs.readFile(fullPath, "utf8");
        const { metadata } = parseFrontMatter(contents);
        const slug = file.replace(/\.md$/, "");
        const title = metadata.title ?? slug;
        const description = metadata.description;
        const date = metadata.date;
        const author = metadata.author;
        const thumbnail = metadata.thumbnail || metadata.cover;
        const featuredImage = metadata.featuredImage || metadata.cover;

        return {
          slug,
          title,
          description,
          date,
          category: categorySlug,
          author,
          thumbnail,
          featuredImage,
        } satisfies PostMeta;
      })
  );

  return posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export async function getPost(categorySlug: string, slug: string): Promise<Post | null> {
  const postPath = path.join(CONTENT_ROOT, categorySlug, `${slug}.md`);

  try {
    const contents = await fs.readFile(postPath, "utf8");
    const { metadata, body } = parseFrontMatter(contents);
    const title = metadata.title ?? slug;
    const description = metadata.description;
    const date = metadata.date;
    const { html, headings } = markdownToHtml(body);
    const author = metadata.author;
    const thumbnail = metadata.thumbnail || metadata.cover;
    const featuredImage = metadata.featuredImage || metadata.cover;

    return {
      slug,
      title,
      description,
      date,
      category: categorySlug,
      html,
      headings,
      author,
      thumbnail,
      featuredImage,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await Promise.all(
    CATEGORIES.map((category) => getPostsByCategory(category.slug))
  );

  return posts.flat();
}
