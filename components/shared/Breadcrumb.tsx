export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  separator?: string;
};

export function Breadcrumb({ items, separator = "→" }: Props) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a className="text-brand-orange hover:underline" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span className="font-semibold text-slate-900">{item.label}</span>
              )}
              {!isLast && <span aria-hidden="true" className="text-slate-400">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
