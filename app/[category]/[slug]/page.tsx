import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getCategoryBySlug, getPost, getPostsByCategory } from "@/lib/content";
import TableOfContents from "./table-of-contents";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const post = await getPost(categorySlug, slug);

  if (!post) {
    notFound();
  }

  const latestInCategory = (await getPostsByCategory(category.slug)).filter(
    (entry) => entry.slug !== post.slug
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link
              href="/"
              className="font-semibold text-brand-orange transition hover:text-brand-dark"
            >
              Home
            </Link>
          </li>
          <li className="text-slate-400">/</li>
          <li>
            <Link
              href={`/${category.slug}`}
              className="font-semibold text-brand-orange transition hover:text-brand-dark"
            >
              {category.name}
            </Link>
          </li>
          <li className="text-slate-400">/</li>
          <li className="text-slate-500">{post.title}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-5xl text-center">
        <h1
          className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl"
          style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif' }}
        >
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{post.description}</p>
        ) : null}
        <div className="mt-5 flex flex-col items-center gap-2 text-sm text-slate-600">
          {post.author ? <span className="font-semibold text-brand-orange">By {post.author}</span> : null}
          <span>Published: {post.date ? post.date : "Updated regularly"}</span>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
          <img
            src={post.featuredImage || "/images/placeholder-featured.svg"}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div
            className="prose lg:prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-blockquote:text-slate-800 prose-img:rounded-xl prose-img:shadow-sm prose-figcaption:text-sm prose-figcaption:text-slate-500"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <TableOfContents headings={post.headings} />

          {latestInCategory.length ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Latest articles
              </p>
              <div className="mt-4 space-y-3">
                {latestInCategory.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.category}/${item.slug}`}
                    className="group block rounded-xl border border-slate-100 px-4 py-3 transition hover:border-brand-orange/60 hover:bg-brand-orange/5"
                  >
                    <p className="text-xs text-slate-500">
                      {item.date ? item.date : "Updated regularly"}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-brand-orange">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
