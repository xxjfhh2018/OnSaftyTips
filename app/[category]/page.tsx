import { notFound } from "next/navigation";
import { CATEGORIES, getCategoryBySlug, getPost } from "@/lib/content";

export const revalidate = 86400;

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const pillar = await getPost(category.slug, "index");

  if (!pillar) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
          {category.name}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {pillar.title || `${category.name} Guides`}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          {pillar.description || category.description}
        </p>
      </div>

      <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-brand-orange">
        <div dangerouslySetInnerHTML={{ __html: pillar.html }} />
      </article>
    </main>
  );
}
