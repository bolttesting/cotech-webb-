import type { Metadata } from "next";
import { BlogPageContent } from "@/components/pages/BlogPageContent";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { legacyPageMetadata } from "@/lib/legacy-html";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const { title, description } = legacyPageMetadata("blog.html");
  return {
    title: title ?? undefined,
    description: description ?? undefined,
  };
}

export default function BlogPage() {
  return (
    <MarketingPageLayout>
      <BlogPageContent />
    </MarketingPageLayout>
  );
}
