import type { Metadata } from "next";
import { ServiceCorporateWebsitesPageContent } from "@/components/pages/ServiceCorporateWebsitesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-corporate-websites");
}

export default function ServiceCorporateWebsitesPage() {
  return (
    <MarketingPageLayout>
      <ServiceCorporateWebsitesPageContent />
    </MarketingPageLayout>
  );
}
