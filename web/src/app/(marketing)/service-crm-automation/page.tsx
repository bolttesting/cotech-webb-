import type { Metadata } from "next";
import { ServiceCrmAutomationPageContent } from "@/components/pages/ServiceCrmAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-crm-automation.html");
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
