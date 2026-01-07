type PillarSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type PillarPageProps = {
  title: string;
  description: string;
  sections: PillarSection[];
};

export function PillarPage({ title, description, sections }: PillarPageProps) {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <header className="rounded-3xl bg-gradient-to-r from-brand-orange/15 via-white to-brand-blue/10 p-8 shadow-sm border border-slate-100">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">Pillar Page</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 max-w-3xl text-base text-slate-700">{description}</p>
      </header>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs?.map((para) => (
              <p key={para.slice(0, 30)} className="mt-3 text-sm leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}

export type { PillarSection, PillarPageProps };
