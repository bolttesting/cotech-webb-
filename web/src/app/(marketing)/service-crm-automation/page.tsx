import type { Metadata } from "next";
import { ServiceCrmAutomationPageContent } from "@/components/pages/ServiceCrmAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-crm-automation");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceCrmAutomationPage() {
  return (
    <MarketingPageLayout>
      <ServiceCrmAutomationPageContent />
    </MarketingPageLayout>
  );
}
