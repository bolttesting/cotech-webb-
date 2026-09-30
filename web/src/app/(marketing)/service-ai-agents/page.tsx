import type { Metadata } from "next";
import { ServiceAiAgentsPageContent } from "@/components/pages/ServiceAiAgentsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("service-ai-agents");
}

export default function ServiceAiAgentsPage() {
  return (
    <MarketingPageLayout>
      <ServiceAiAgentsPageContent />
    </MarketingPageLayout>
  );
}
