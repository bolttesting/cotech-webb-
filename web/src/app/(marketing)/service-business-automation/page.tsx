import type { Metadata } from "next";
import { ServiceBusinessAutomationPageContent } from "@/components/pages/ServiceBusinessAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-business-automation");
}

export default function ServiceBusinessAutomationPage() {
  return (
    <MarketingPageLayout>
      <ServiceBusinessAutomationPageContent />
    </MarketingPageLayout>
  );
}
