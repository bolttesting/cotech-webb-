import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pages/PricingPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("pricing");
}

export default function PricingPage() {
  return (
    <MarketingPageLayout>
      <PricingPageContent />
    </MarketingPageLayout>
  );
}
