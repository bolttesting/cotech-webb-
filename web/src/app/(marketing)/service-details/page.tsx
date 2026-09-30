import type { Metadata } from "next";
import { ServiceDetailsPageContent } from "@/components/pages/ServiceDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-details");
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
