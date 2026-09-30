import type { Metadata } from "next";
import { TermsConditionsPageContent } from "@/components/pages/TermsConditionsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("terms-conditions");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function TermsConditionsPage() {
  return (
    <MarketingPageLayout>
      <TermsConditionsPageContent />
    </MarketingPageLayout>
  );
}
