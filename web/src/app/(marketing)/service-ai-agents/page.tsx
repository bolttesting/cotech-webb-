import type { Metadata } from "next";
import { ServiceAiAgentsPageContent } from "@/components/pages/ServiceAiAgentsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("service-ai-agents");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceAiAgentsPage() {
  return (
    <MarketingPageLayout>
      <ServiceAiAgentsPageContent />
    </MarketingPageLayout>
  );
}
