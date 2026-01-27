// Use client to run MDX renderer with React client runtime
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  code: string;
};

export function ArticleBody({ code }: Props) {
  const MDXContent = useMDXComponent(code);

  return (
    <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-brand-orange">
      <MDXContent components={mdxComponents} />
    </article>
  );
}
