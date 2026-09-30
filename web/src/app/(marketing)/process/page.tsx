import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("process");
}

export default function ProcessPage() {
  return (
    <MarketingPageLayout>
      <ProcessPageContent />
    </MarketingPageLayout>
  );
}
