export type BlogPostStatus = "draft" | "published";

export type BlogBodyFormat = "markdown" | "html";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  body_format: BlogBodyFormat;
  cover_image_path: string | null;
  category: string | null;
  status: BlogPostStatus;
  published_at: string | null;
  author_id: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_path: string | null;
  canonical_path: string | null;
  seo_noindex: boolean;
  created_at: string;
  updated_at: string;
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function coverPublicUrl(path: string | null): string | null {
  return mediaPublicUrl(path);
}

export function mediaPublicUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http") || path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base}/storage/v1/object/public/blog-media/${path}`;
}
