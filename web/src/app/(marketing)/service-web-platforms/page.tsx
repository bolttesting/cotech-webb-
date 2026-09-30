import type { Metadata } from "next";
import { ServiceWebPlatformsPageContent } from "@/components/pages/ServiceWebPlatformsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-web-platforms");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceWebPlatformsPage() {
  return (
    <MarketingPageLayout>
      <ServiceWebPlatformsPageContent />
    </MarketingPageLayout>
  );
}
