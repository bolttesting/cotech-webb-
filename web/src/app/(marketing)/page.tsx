import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("index");
  return {
    title: title ?? "COTech",
    description: description ?? undefined,
  };
}

export default function MarketingHomePage() {
  return (
    <MarketingPageLayout>
      <HomePageContent />
    </MarketingPageLayout>
  );
}
