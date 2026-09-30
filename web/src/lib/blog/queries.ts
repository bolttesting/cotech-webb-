import { isBlogSchemaMissing } from "@/lib/supabase/env";
import { tryCreateClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/blog/types";

export type BlogListPost = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "published_at" | "cover_image_path"
>;

export async function fetchPublishedPosts(): Promise<BlogListPost[]> {
  const supabase = await tryCreateClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, category, published_at, cover_image_path")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) {
    if (isBlogSchemaMissing(error.message)) return [];
    console.error("[blog] fetchPublishedPosts:", error.message);
    return [];
  }

  return data ?? [];
}
