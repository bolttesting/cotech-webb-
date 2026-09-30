import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { getMarketingMetadata } from "@/lib/marketing-metadata";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = getMarketingMetadata("contact");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function ContactPage() {
  return (
    <MarketingPageLayout>
      <ContactPageContent />
    </MarketingPageLayout>
  );
}
