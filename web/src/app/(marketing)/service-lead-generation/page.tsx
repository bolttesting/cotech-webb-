import type { Metadata } from "next";
import { ServiceLeadGenerationPageContent } from "@/components/pages/ServiceLeadGenerationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-lead-generation");
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
