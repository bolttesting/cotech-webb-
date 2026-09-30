import type { Metadata } from "next";
import { ServiceDetailsPageContent } from "@/components/pages/ServiceDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-details.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceDetailsPage() {
  return (
    <MarketingPageLayout>
      <ServiceDetailsPageContent />
    </MarketingPageLayout>
  );
}
