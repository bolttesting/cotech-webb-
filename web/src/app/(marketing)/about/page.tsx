import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("about.html");
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
