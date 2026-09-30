import type { Metadata } from "next";
import { IntegrationPageContent } from "@/components/pages/IntegrationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("integration");
}

export default function IntegrationPage() {
  return (
    <MarketingPageLayout>
      <IntegrationPageContent />
    </MarketingPageLayout>
  );
}
