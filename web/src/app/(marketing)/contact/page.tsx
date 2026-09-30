import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";
import { getContactSettings } from "@/lib/site-settings";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("contact");
}

export default async function ContactPage() {
  const contact = await getContactSettings();
  return (
    <MarketingPageLayout>
      <ContactPageContent contact={contact} />
    </MarketingPageLayout>
  );
}
