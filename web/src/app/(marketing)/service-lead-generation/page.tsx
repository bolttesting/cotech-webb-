import type { Metadata } from "next";
import { ServiceLeadGenerationPageContent } from "@/components/pages/ServiceLeadGenerationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-lead-generation");
}

export default function ServiceLeadGenerationPage() {
  return (
    <MarketingPageLayout>
      <ServiceLeadGenerationPageContent />
    </MarketingPageLayout>
  );
}
