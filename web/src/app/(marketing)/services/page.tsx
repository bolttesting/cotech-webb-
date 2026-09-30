import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("services");
}

export default function ServicesPage() {
  return (
    <MarketingPageLayout>
      <ServicesPageContent />
    </MarketingPageLayout>
  );
}
