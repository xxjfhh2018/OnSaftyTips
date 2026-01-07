import Link from "next/link";

export type RelatedArticle = {
  title: string;
  href: string;
  description?: string;
  date?: string;
};

type RelatedArticlesProps = {
  title?: string;
  items: RelatedArticle[];
};

export function RelatedArticles({
  title = "Related Articles",
  items,
}: RelatedArticlesProps) {
  if (!items?.length) return null;

  return (
    <section className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex h-full flex-col rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-brand-orange/50 hover:bg-white"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-base font-semibold text-slate-900 group-hover:text-brand-orange">
                {item.title}
              </p>
              <span aria-hidden className="text-brand-orange">→</span>
            </div>
            {item.description ? (
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            ) : null}
            {item.date ? (
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {item.date}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
