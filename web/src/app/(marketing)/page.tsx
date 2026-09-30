import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("index.html");
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
