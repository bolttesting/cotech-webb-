import type { Metadata } from "next";
import { BlogPageContent } from "@/components/pages/BlogPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("blog");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function BlogPage() {
  return (
    <MarketingPageLayout>
      <BlogPageContent />
    </MarketingPageLayout>
  );
}
