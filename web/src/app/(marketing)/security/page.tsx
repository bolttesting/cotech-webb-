import type { Metadata } from "next";
import { SecurityPageContent } from "@/components/pages/SecurityPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("security.html");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function SecurityPage() {
  return (
    <MarketingPageLayout>
      <SecurityPageContent />
    </MarketingPageLayout>
  );
}
