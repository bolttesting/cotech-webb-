import type { Metadata } from "next";
import { BlogDetailsPageContent } from "@/components/pages/BlogDetailsPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("blog-details.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function BlogDetailsPage() {
  return (
    <MarketingPageLayout>
      <BlogDetailsPageContent />
    </MarketingPageLayout>
  );
}
