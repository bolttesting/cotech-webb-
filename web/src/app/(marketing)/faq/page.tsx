import type { Metadata } from "next";
import { FaqPageContent } from "@/components/pages/FaqPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("faq");
}

export default function FaqPage() {
  return (
    <MarketingPageLayout>
      <FaqPageContent />
    </MarketingPageLayout>
  );
}
