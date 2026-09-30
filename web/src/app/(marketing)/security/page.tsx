import type { Metadata } from "next";
import { SecurityPageContent } from "@/components/pages/SecurityPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("security");
}

export default function SecurityPage() {
  return (
    <MarketingPageLayout>
      <SecurityPageContent />
    </MarketingPageLayout>
  );
}
