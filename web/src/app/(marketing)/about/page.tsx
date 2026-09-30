import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("about");
}

export default function AboutPage() {
  return (
    <MarketingPageLayout>
      <AboutPageContent />
    </MarketingPageLayout>
  );
}
