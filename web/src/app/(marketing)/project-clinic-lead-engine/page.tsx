import type { Metadata } from "next";
import { ProjectClinicLeadEnginePageContent } from "@/components/pages/ProjectClinicLeadEnginePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("project-clinic-lead-engine.html");
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
