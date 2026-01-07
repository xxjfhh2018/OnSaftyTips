"use client";

import { useEffect, useMemo, useState } from "react";
import type { Heading } from "@/lib/content";

type Props = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);

  useEffect(() => {
    if (!headingIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // offset for header + padding
      let current: string | null = headingIds[0];

      headingIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingIds]);

  if (!headings.length) {
    return null;
  }

  return (
    <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Table of Contents
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li key={heading.id} className={heading.level === 3 ? "pl-3" : undefined}>
              <a
                href={`#${heading.id}`}
                className={`block rounded-md px-2 py-1 transition ${
                  isActive
                    ? "bg-brand-orange/10 text-brand-orange font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
