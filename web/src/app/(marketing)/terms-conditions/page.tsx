import type { Metadata } from "next";
import { TermsConditionsPageContent } from "@/components/pages/TermsConditionsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("terms-conditions");
}

export default function TermsConditionsPage() {
  return (
    <MarketingPageLayout>
      <TermsConditionsPageContent />
    </MarketingPageLayout>
  );
}
