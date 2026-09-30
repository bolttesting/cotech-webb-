import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("services.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServicesPage() {
  return (
    <MarketingPageLayout>
      <ServicesPageContent />
    </MarketingPageLayout>
  );
}
