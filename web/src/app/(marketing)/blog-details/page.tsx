import type { Metadata } from "next";
import { BlogDetailsPageContent } from "@/components/pages/BlogDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("blog-details");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function BlogDetailsPage() {
  return (
    <MarketingPageLayout>
      <BlogDetailsPageContent />
    </MarketingPageLayout>
  );
}
