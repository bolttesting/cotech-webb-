import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("index");
}

export default function MarketingHomePage() {
  return (
    <MarketingPageLayout>
      <HomePageContent />
    </MarketingPageLayout>
  );
}
