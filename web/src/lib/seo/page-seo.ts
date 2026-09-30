import type { Metadata } from "next";
import { getMarketingMetadata } from "@/lib/marketing-metadata";
import { tryCreateClient } from "@/lib/supabase/server";
import { mediaPublicUrl } from "@/lib/blog/types";

export type PageSeoRecord = {
  page_key: string;
  path: string;
  meta_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_path: string | null;
  canonical_url: string | null;
  robots_index: boolean;
  robots_follow: boolean;
  focus_keyword: string | null;
};

export async function getPageSeoByKey(pageKey: string): Promise<PageSeoRecord | null> {
  const supabase = await tryCreateClient();
  if (!supabase) return null;
  const { data } = await supabase
    .from("page_seo")
    .select("*")
    .eq("page_key", pageKey)
    .maybeSingle();
  return data as PageSeoRecord | null;
}

export async function resolveMarketingMetadata(pageKey: string): Promise<Metadata> {
  const fallback = getMarketingMetadata(pageKey);
  const row = await getPageSeoByKey(pageKey);

  const title = row?.meta_title?.trim() || fallback.title;
  const description = row?.meta_description?.trim() || fallback.description;
  const ogTitle = row?.og_title?.trim() || title;
  const ogDescription = row?.og_description?.trim() || description;
  const ogImage = row?.og_image_path ? mediaPublicUrl(row.og_image_path) : undefined;

  const robots =
    row && (!row.robots_index || !row.robots_follow)
      ? {
          index: row.robots_index,
          follow: row.robots_follow,
        }
      : undefined;

  return {
    title,
    description: description ?? undefined,
    alternates: row?.canonical_url ? { canonical: row.canonical_url } : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription ?? undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: ogTitle,
      description: ogDescription ?? undefined,
      images: ogImage ? [ogImage] : undefined,
    },
    robots,
  };
}

export async function resolveBlogPostMetadata(post: {
  title: string;
  excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_path: string | null;
  cover_image_path: string | null;
  canonical_path: string | null;
  seo_noindex: boolean;
  slug: string;
}): Promise<Metadata> {
  const title = post.meta_title?.trim() || `${post.title} | COTech Blog`;
  const description = post.meta_description?.trim() || post.excerpt?.trim() || undefined;
  const ogTitle = post.og_title?.trim() || title;
  const ogDescription = post.og_description?.trim() || description;
  const ogPath = post.og_image_path || post.cover_image_path;
  const ogImage = ogPath ? mediaPublicUrl(ogPath) : undefined;
  const canonical = post.canonical_path?.trim() || `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: post.seo_noindex ? { index: false, follow: true } : undefined,
  };
}
