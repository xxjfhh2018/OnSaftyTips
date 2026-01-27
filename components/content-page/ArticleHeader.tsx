type Meta = {
  category?: string;
  author?: string;
  updatedAt?: string;
};

type Props = {
  title: string;
  description?: string;
  meta?: Meta;
};

export function ArticleHeader({ title, description, meta }: Props) {
  return (
    <header className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
      {description ? <p className="max-w-3xl text-base text-slate-700">{description}</p> : null}
      {(meta?.category || meta?.author || meta?.updatedAt) && (
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {meta?.category ? <span>{meta.category}</span> : null}
          {meta?.author ? <span className="text-slate-600">By {meta.author}</span> : null}
          {meta?.updatedAt ? (
            <span className="text-slate-600">Last updated {meta.updatedAt}</span>
          ) : null}
        </div>
      )}
    </header>
  );
}
