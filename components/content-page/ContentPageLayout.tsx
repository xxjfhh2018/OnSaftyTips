import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
  header: ReactNode;
  body: ReactNode;
  toc?: ReactNode;
  related?: ReactNode;
  footer?: ReactNode;
};

export function ContentPageLayout({ breadcrumbs, header, body, toc, related, footer }: Props) {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <Breadcrumb items={breadcrumbs} />
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          {header}
          {body}
          {related}
          {footer}
        </div>
        {toc ? <div className="hidden lg:block">{toc}</div> : null}
      </div>
    </main>
  );
}
