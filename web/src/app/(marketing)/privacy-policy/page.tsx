import type { Metadata } from "next";
import { PrivacyPolicyPageContent } from "@/components/pages/PrivacyPolicyPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("privacy-policy");
}

export default function PrivacyPolicyPage() {
  return (
    <MarketingPageLayout>
      <PrivacyPolicyPageContent />
    </MarketingPageLayout>
  );
}
