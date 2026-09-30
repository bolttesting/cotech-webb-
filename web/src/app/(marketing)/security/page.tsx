import type { Metadata } from "next";
import { SecurityPageContent } from "@/components/pages/SecurityPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("security");
  return { title: title ?? undefined, description: description ?? undefined };
}

export default function SecurityPage() {
  return (
    <MarketingPageLayout>
      <SecurityPageContent />
    </MarketingPageLayout>
  );
}
