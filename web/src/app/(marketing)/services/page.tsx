import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("services");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServicesPage() {
  return (
    <MarketingPageLayout>
      <ServicesPageContent />
    </MarketingPageLayout>
  );
}
