import type { Metadata } from "next";
import { ServiceSalesCallingPageContent } from "@/components/pages/ServiceSalesCallingPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-sales-calling");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceSalesCallingPage() {
  return (
    <MarketingPageLayout>
      <ServiceSalesCallingPageContent />
    </MarketingPageLayout>
  );
}
