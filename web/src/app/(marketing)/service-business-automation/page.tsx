import type { Metadata } from "next";
import { ServiceBusinessAutomationPageContent } from "@/components/pages/ServiceBusinessAutomationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-business-automation.html");
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
