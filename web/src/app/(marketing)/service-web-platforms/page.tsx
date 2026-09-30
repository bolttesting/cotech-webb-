import type { Metadata } from "next";
import { ServiceWebPlatformsPageContent } from "@/components/pages/ServiceWebPlatformsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-web-platforms");
}

export default function ServiceWebPlatformsPage() {
  return (
    <MarketingPageLayout>
      <ServiceWebPlatformsPageContent />
    </MarketingPageLayout>
  );
}
