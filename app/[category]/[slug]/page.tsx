import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticleBody,
  ArticleFooter,
  ArticleHeader,
  ContentPageLayout,
  ContentRelatedArticles,
  type BreadcrumbItem,
} from "@/components/content-page";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { CATEGORIES } from "@/lib/categories";
import { allContentPages } from "contentlayer/generated";

export const revalidate = 86400;

export async function generateStaticParams() {
  return allContentPages
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({
      category: doc.category,
      slug: doc.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const post = allContentPages.find(
    (doc) => doc.category === categorySlug && doc.slug === slug
  );

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.url,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const post = allContentPages.find(
    (doc) => doc.category === categorySlug && doc.slug === slug
  );

  if (!post) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: category.name, href: `/${category.slug}` },
    { label: post.title },
  ];

  const relatedCandidates = allContentPages.filter(
    (entry) => entry.category === category.slug && entry.slug !== post.slug && entry.slug !== "index"
  );

  const relatedItems =
    relatedCandidates
      .slice(0, 5)
      .map((item) => ({
        title: item.title,
        description: item.description || category.description,
        href: `/${item.category}/${item.slug}`,
        thumbnail: item.thumbnail,
      })) ?? [];

  return (
    <ContentPageLayout
      breadcrumbs={breadcrumbs}
      toc={
        post.headings.length ? (
          <TableOfContents
            items={post.headings.map((h) => ({ id: h.id, text: h.text, level: h.level as 2 | 3 }))}
            title="Table of Contents"
          />
        ) : null
      }
      header={
        <ArticleHeader
          title={post.title}
          description={post.description}
          meta={{ category: category.name, author: post.author, updatedAt: post.date }}
        />
      }
      body={<ArticleBody code={post.body.code} />}
      related={
        relatedItems.length >= 2 ? (
          <ContentRelatedArticles items={relatedItems.slice(0, 5)} />
        ) : undefined
      }
      footer={
        <ArticleFooter
          backHref={`/${category.slug}`}
          backLabel={`${category.name} pillar`}
          lastUpdated={post.date}
        />
      }
    />
  );
}
