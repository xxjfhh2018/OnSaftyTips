import { ReactNode } from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { TableOfContents } from "@/components/shared/TableOfContents";

export type TocItem = {
  id: string;
  label: string;
};

type PillarLayoutProps = {
  breadcrumbs?: { label: string; href?: string }[];
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
        <Breadcrumb items={breadcrumbs ?? []} separator="/" />
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
        {toc?.length ? (
          <TableOfContents
            items={toc.map((item) => ({ id: item.id, text: item.label, level: 2 }))}
            title="On this page"
          />
        ) : null}
      </div>

      {related ? <div className="mt-10">{related}</div> : null}
    </main>
  );
}
