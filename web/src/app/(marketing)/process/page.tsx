import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("process");
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
