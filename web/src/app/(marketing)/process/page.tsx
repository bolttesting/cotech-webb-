import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("process.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ProcessPage() {
  return (
    <MarketingPageLayout>
      <ProcessPageContent />
    </MarketingPageLayout>
  );
}
