import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyHtmlPage } from "@/components/site/LegacyHtmlPage";
import { readLegacyBodyHtml } from "@/lib/legacy-html";
import { resolveMarketingMetadata } from "@/lib/seo/page-seo";
import { LEGACY_PAGES } from "@/lib/legacy-pages";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return Object.keys(LEGACY_PAGES).map((page) => ({ page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const file = LEGACY_PAGES[page];
  if (!file) return {};
  return resolveMarketingMetadata(file);
}

export default async function LegacyMarketingPage({ params }: Props) {
  const { page } = await params;
  const file = LEGACY_PAGES[page];
  if (!file) notFound();
  const html = readLegacyBodyHtml(file);
  return <LegacyHtmlPage html={html} />;
}
