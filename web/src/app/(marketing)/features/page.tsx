import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/pages/FeaturesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("features.html");
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
