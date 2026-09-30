import type { Metadata } from "next";
import { ProjectClinicLeadEnginePageContent } from "@/components/pages/ProjectClinicLeadEnginePageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("project-details");
}

export default function ProjectDetailsPage() {
  return (
    <MarketingPageLayout>
      <ProjectClinicLeadEnginePageContent />
    </MarketingPageLayout>
  );
}
