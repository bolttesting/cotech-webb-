import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/pages/FeaturesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("features");
}

export default function FeaturesPage() {
  return (
    <MarketingPageLayout>
      <FeaturesPageContent />
    </MarketingPageLayout>
  );
}
