import type { Metadata } from "next";
import { ServiceCorporateWebsitesPageContent } from "@/components/pages/ServiceCorporateWebsitesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-corporate-websites.html");
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
