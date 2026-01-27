type Props = {
  backHref: string;
  backLabel: string;
  lastUpdated?: string;
};

export function ArticleFooter({ backHref, backLabel, lastUpdated }: Props) {
  return (
    <footer className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <a className="text-sm font-semibold text-brand-orange hover:underline" href={backHref}>
        Back to {backLabel}
      </a>
      {lastUpdated ? (
        <p className="text-xs uppercase tracking-wide text-slate-500">Last updated {lastUpdated}</p>
      ) : null}
    </footer>
  );
}
