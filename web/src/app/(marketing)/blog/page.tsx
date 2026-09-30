import type { Metadata } from "next";
import { BlogPageContent } from "@/components/pages/BlogPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { fetchPublishedPosts } from "@/lib/blog/queries";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("blog");
}

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();

  return (
    <MarketingPageLayout>
      <BlogPageContent posts={posts} />
    </MarketingPageLayout>
  );
}
