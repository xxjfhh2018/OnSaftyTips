type PillarSectionProps = {
  id?: string;
  heading: string;
  kicker?: string;
  children: React.ReactNode;
};

export function PillarSection({ id, heading, kicker, children }: PillarSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-dashed border-slate-200/70 pt-8 first:border-t-0 first:pt-0 pb-6"
    >
      <div className="flex flex-col gap-2">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">{kicker}</p>
        ) : null}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-left">
          {heading}
        </h2>
      </div>
      <div className="mt-4 prose prose-slate max-w-none">{children}</div>
    </section>
  );
}

export type { PillarSectionProps };
