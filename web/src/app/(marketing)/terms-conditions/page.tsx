import type { Metadata } from "next";
import { TermsConditionsPageContent } from "@/components/pages/TermsConditionsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("terms-conditions.html");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function TermsConditionsPage() {
  return (
    <MarketingPageLayout>
      <TermsConditionsPageContent />
    </MarketingPageLayout>
  );
}
