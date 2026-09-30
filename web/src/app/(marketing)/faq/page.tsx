import type { Metadata } from "next";
import { FaqPageContent } from "@/components/pages/FaqPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("faq.html");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function FaqPage() {
  return (
    <MarketingPageLayout>
      <FaqPageContent />
    </MarketingPageLayout>
  );
}
