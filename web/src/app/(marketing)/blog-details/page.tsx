import type { Metadata } from "next";
import { BlogDetailsPageContent } from "@/components/pages/BlogDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("blog-details");
}

export default function BlogDetailsPage() {
  return (
    <MarketingPageLayout>
      <BlogDetailsPageContent />
    </MarketingPageLayout>
  );
}
