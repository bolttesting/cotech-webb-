import type { Metadata } from "next";
import { ServiceDigitalBusinessSystemsPageContent } from "@/components/pages/ServiceDigitalBusinessSystemsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-digital-business-systems");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceDigitalBusinessSystemsPage() {
  return (
    <MarketingPageLayout>
      <ServiceDigitalBusinessSystemsPageContent />
    </MarketingPageLayout>
  );
}
