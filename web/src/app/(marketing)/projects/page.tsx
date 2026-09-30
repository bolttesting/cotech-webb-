import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("projects");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function ProjectsPage() {
  return (
    <MarketingPageLayout>
      <ProjectsPageContent />
    </MarketingPageLayout>
  );
}
