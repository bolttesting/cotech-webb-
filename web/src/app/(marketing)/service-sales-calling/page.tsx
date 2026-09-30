import type { Metadata } from "next";
import { ServiceSalesCallingPageContent } from "@/components/pages/ServiceSalesCallingPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("service-sales-calling.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ServiceSalesCallingPage() {
  return (
    <MarketingPageLayout>
      <ServiceSalesCallingPageContent />
    </MarketingPageLayout>
  );
}
