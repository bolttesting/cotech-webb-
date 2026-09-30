import type { Metadata } from "next";
import { ServiceSalesCallingPageContent } from "@/components/pages/ServiceSalesCallingPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-sales-calling");
}

export default function ServiceSalesCallingPage() {
  return (
    <MarketingPageLayout>
      <ServiceSalesCallingPageContent />
    </MarketingPageLayout>
  );
}
