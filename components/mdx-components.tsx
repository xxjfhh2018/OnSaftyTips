import { ReactNode } from "react";
import { Info, Quote, Tip, Warning, DoDont } from "@/components/content";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const textFromChildren = (children: ReactNode): string => {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textFromChildren).join(" ");
  if (children && typeof children === "object" && "props" in children) {
    // @ts-expect-error accessing props for React element extraction
    return textFromChildren(children.props?.children);
  }
  return "";
};

const H2 = ({ children }: { children: ReactNode }) => {
  const id = slugify(textFromChildren(children)) || "section";
  return (
    <h2 id={id} className="scroll-mt-28 mt-8 text-2xl font-bold text-slate-900">
      {children}
    </h2>
  );
};

const H3 = ({ children }: { children: ReactNode }) => {
  const id = slugify(textFromChildren(children)) || "section";
  return (
    <h3 id={id} className="scroll-mt-28 mt-6 text-xl font-semibold text-slate-900">
      {children}
    </h3>
  );
};

const P = ({ children }: { children: ReactNode }) => (
  <p className="my-4 leading-relaxed text-slate-700">{children}</p>
);

const Ul = ({ children }: { children: ReactNode }) => (
  <ul className="my-4 ml-5 list-disc space-y-2 text-slate-700">{children}</ul>
);

const Li = ({ children }: { children: ReactNode }) => (
  <li className="leading-relaxed">{children}</li>
);

export const mdxComponents = {
  Tip,
  Info,
  Warning,
  Quote,
  DoDont,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
};
