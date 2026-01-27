// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
var extractHeadings = (raw) => {
  const lines = raw.split(/\r?\n/);
  const headings = [];
  const counts = {};
  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.*)$/);
    if (!match)
      return;
    const level = match[1].length;
    const text = match[2].trim();
    const base = slugify(text) || "section";
    const current = counts[base] ?? 0;
    counts[base] = current + 1;
    const id = current ? `${base}-${current}` : base;
    headings.push({ id, text, level });
  });
  return headings;
};
var ContentPage = defineDocumentType(() => ({
  name: "ContentPage",
  filePathPattern: "**/*.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "string", required: false },
    author: { type: "string", required: false },
    thumbnail: { type: "string", required: false },
    featuredImage: { type: "string", required: false }
  },
  computedFields: {
    category: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[0]
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        return parts.slice(1).join("/") || "index";
      }
    },
    url: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        const category = parts[0];
        const slug = parts.slice(1).join("/") || "index";
        return slug === "index" ? `/${category}` : `/${category}/${slug}`;
      }
    },
    headings: {
      type: "json",
      resolve: (doc) => extractHeadings(doc.body.raw)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [ContentPage]
});
export {
  ContentPage,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CYTY4UGQ.mjs.map
