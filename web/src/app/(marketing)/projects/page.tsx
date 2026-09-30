import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("projects");
}

export default function ProjectsPage() {
  return (
    <MarketingPageLayout>
      <ProjectsPageContent />
    </MarketingPageLayout>
  );
}
