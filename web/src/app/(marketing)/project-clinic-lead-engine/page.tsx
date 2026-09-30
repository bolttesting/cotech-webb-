import type { Metadata } from "next";
import { ProjectClinicLeadEnginePageContent } from "@/components/pages/ProjectClinicLeadEnginePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("project-clinic-lead-engine");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ProjectClinicLeadEnginePage() {
  return (
    <MarketingPageLayout>
      <ProjectClinicLeadEnginePageContent />
    </MarketingPageLayout>
  );
}
