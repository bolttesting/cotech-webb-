import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pages/PricingPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("pricing.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function PricingPage() {
  return (
    <MarketingPageLayout>
      <PricingPageContent />
    </MarketingPageLayout>
  );
}
