import type { Metadata } from "next";
import { PrivacyPolicyPageContent } from "@/components/pages/PrivacyPolicyPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("privacy-policy.html");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function PrivacyPolicyPage() {
  return (
    <MarketingPageLayout>
      <PrivacyPolicyPageContent />
    </MarketingPageLayout>
  );
}
