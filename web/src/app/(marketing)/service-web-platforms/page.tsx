import type { Metadata } from "next";
import { ServiceWebPlatformsPageContent } from "@/components/pages/ServiceWebPlatformsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-web-platforms.html");
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
