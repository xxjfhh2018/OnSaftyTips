import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content-page";
import { CATEGORIES } from "@/lib/categories";
import { allContentPages } from "contentlayer/generated";

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
  const category = CATEGORIES.find((cat) => cat.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const pillar = allContentPages.find(
    (doc) => doc.category === category.slug && doc.slug === "index"
  );

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

      <ArticleBody code={pillar.body.code} />
    </main>
  );
}
