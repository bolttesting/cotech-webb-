import type { Metadata } from "next";
import { ServiceBusinessAutomationPageContent } from "@/components/pages/ServiceBusinessAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-business-automation");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceBusinessAutomationPage() {
  return (
    <MarketingPageLayout>
      <ServiceBusinessAutomationPageContent />
    </MarketingPageLayout>
  );
}
