import Link from "next/link";
import { ReactNode } from "react";

export type TocItem = {
  id: string;
  label: string;
};

type Breadcrumb = {
  label: string;
  href?: string;
};

type PillarLayoutProps = {
  breadcrumbs?: Breadcrumb[];
  title: string;
  description?: string;
  heroImage?: string;
  heroImageSrcSet?: string;
  updatedAt?: string;
  author?: string;
  toc?: TocItem[];
  children: ReactNode;
  related?: ReactNode;
};

function Breadcrumbs({ items }: { items?: Breadcrumb[] }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-slate-600 hover:text-brand-orange font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{item.label}</span>
            )}
            {idx < items.length - 1 ? <span className="text-slate-400">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Toc({ items }: { items?: TocItem[] }) {
  if (!items?.length) return null;
  return (
    <aside className="sticky top-24 hidden h-fit min-w-[260px] rounded-2xl border border-slate-100 bg-white p-6 lg:block">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
        On this page
      </p>
      <ul className="mt-4 space-y-0 text-base text-slate-800 leading-6">
        {items.map((item) => (
          <li key={item.id} className="group">
            <a
              href={`#${item.id}`}
              className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition hover:border-sky-200 hover:bg-sky-50 hover:text-brand-orange"
            >
              <span className="invisible text-brand-orange text-lg group-hover:visible">›</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PillarLayout({
  breadcrumbs,
  title,
  description,
  heroImage,
  heroImageSrcSet,
  updatedAt,
  author,
  toc,
  children,
  related,
}: PillarLayoutProps) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={breadcrumbs} />
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-orange/15 via-white to-brand-blue/10">
          <div className="grid gap-6 p-8">
            <div className="mx-auto max-w-4xl text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Pillar Page
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
              {description ? (
                <p className="mt-3 text-base text-slate-700 md:text-lg">{description}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {updatedAt ? <span>Last Updated: {updatedAt}</span> : null}
                {author ? <span>Author: {author}</span> : null}
              </div>
              {heroImage ? (
                <div className="mt-6 mb-1 overflow-hidden rounded-xl">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full object-cover"
                    srcSet={
                      heroImageSrcSet ?? `${heroImage} 1200w, ${heroImage} 768w, ${heroImage} 500w`
                    }
                    sizes="(max-width: 1024px) 768px, (max-width: 640px) 500px, 1200px"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-6">{children}</div>
        <Toc items={toc} />
      </div>

      {related ? <div className="mt-10">{related}</div> : null}
    </main>
  );
}

export { Breadcrumbs, Toc };
