import type { Metadata } from "next";
import { ServiceCorporateWebsitesPageContent } from "@/components/pages/ServiceCorporateWebsitesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-corporate-websites");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceCorporateWebsitesPage() {
  return (
    <MarketingPageLayout>
      <ServiceCorporateWebsitesPageContent />
    </MarketingPageLayout>
  );
}
