import type { Metadata } from "next";
import { ServiceDigitalBusinessSystemsPageContent } from "@/components/pages/ServiceDigitalBusinessSystemsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-digital-business-systems");
}

export default function ServiceDigitalBusinessSystemsPage() {
  return (
    <MarketingPageLayout>
      <ServiceDigitalBusinessSystemsPageContent />
    </MarketingPageLayout>
  );
}
