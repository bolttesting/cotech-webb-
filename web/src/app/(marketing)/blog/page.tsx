import type { Metadata } from "next";
import { BlogPageContent } from "@/components/pages/BlogPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { fetchPublishedPosts } from "@/lib/blog/queries";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("blog");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();

  return (
    <MarketingPageLayout>
      <BlogPageContent posts={posts} />
    </MarketingPageLayout>
  );
}
