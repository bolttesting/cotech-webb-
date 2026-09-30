import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/pages/FeaturesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("features");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function FeaturesPage() {
  return (
    <MarketingPageLayout>
      <FeaturesPageContent />
    </MarketingPageLayout>
  );
}
