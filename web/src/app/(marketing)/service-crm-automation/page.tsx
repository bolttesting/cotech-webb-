import type { Metadata } from "next";
import { ServiceCrmAutomationPageContent } from "@/components/pages/ServiceCrmAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-crm-automation");
}

export default function ServiceCrmAutomationPage() {
  return (
    <MarketingPageLayout>
      <ServiceCrmAutomationPageContent />
    </MarketingPageLayout>
  );
}
