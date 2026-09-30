import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("about");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function AboutPage() {
  return (
    <MarketingPageLayout>
      <AboutPageContent />
    </MarketingPageLayout>
  );
}
