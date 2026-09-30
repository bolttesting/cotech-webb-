import type { Metadata } from "next";
import { PrivacyPolicyPageContent } from "@/components/pages/PrivacyPolicyPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("privacy-policy");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function PrivacyPolicyPage() {
  return (
    <MarketingPageLayout>
      <PrivacyPolicyPageContent />
    </MarketingPageLayout>
  );
}
