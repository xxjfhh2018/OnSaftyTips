"use client";

import { useEffect, useMemo, useState } from "react";

export type TocEntry = {
  id: string;
  text?: string;
  label?: string;
  level?: 2 | 3;
};

type Props = {
  items: TocEntry[];
  title?: string;
  enableScrollSpy?: boolean;
  className?: string;
  sticky?: boolean;
  offset?: number;
};

export function TableOfContents({
  items,
  title = "On this page",
  enableScrollSpy = true,
  className,
  sticky = true,
  offset = 140,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const headingIds = useMemo(() => items.map((h) => h.id), [items]);

  useEffect(() => {
    if (!enableScrollSpy || !headingIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
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
  }, [enableScrollSpy, headingIds, offset]);

  if (!items.length) return null;

  return (
    <nav
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto ${
        sticky ? "lg:sticky lg:top-24" : ""
      } ${className ?? ""}`}
      aria-label="Table of contents"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => {
          const isActive = enableScrollSpy && activeId === item.id;
          const text = item.text || item.label || item.id;
          return (
            <li key={item.id} className={item.level === 3 ? "pl-3" : undefined}>
              <a
                href={`#${item.id}`}
                className={`block rounded-md px-2 py-1 transition ${
                  isActive
                    ? "bg-brand-orange/10 text-brand-orange font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
