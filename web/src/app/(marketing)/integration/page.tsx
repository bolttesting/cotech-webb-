import type { Metadata } from "next";
import { IntegrationPageContent } from "@/components/pages/IntegrationPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("integration");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function IntegrationPage() {
  return (
    <MarketingPageLayout>
      <IntegrationPageContent />
    </MarketingPageLayout>
  );
}
