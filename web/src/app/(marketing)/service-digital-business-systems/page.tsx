import type { Metadata } from "next";
import { ServiceDigitalBusinessSystemsPageContent } from "@/components/pages/ServiceDigitalBusinessSystemsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-digital-business-systems.html");
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
