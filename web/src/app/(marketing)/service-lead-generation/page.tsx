import type { Metadata } from "next";
import { ServiceLeadGenerationPageContent } from "@/components/pages/ServiceLeadGenerationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-lead-generation.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceLeadGenerationPage() {
  return (
    <MarketingPageLayout>
      <ServiceLeadGenerationPageContent />
    </MarketingPageLayout>
  );
}
