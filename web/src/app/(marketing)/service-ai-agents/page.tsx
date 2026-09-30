import type { Metadata } from "next";
import { ServiceAiAgentsPageContent } from "@/components/pages/ServiceAiAgentsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-ai-agents.html");
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
