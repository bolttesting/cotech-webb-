import type { Metadata } from "next";
import { ServiceDetailsPageContent } from "@/components/pages/ServiceDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-details");
}

export default function ServiceDetailsPage() {
  return (
    <MarketingPageLayout>
      <ServiceDetailsPageContent />
    </MarketingPageLayout>
  );
}
