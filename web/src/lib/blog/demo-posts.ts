import type { BlogListPost } from "@/lib/blog/queries";

/** Shown when Supabase has no published posts yet (matches legacy blog demo content). */
export const DEMO_BLOG_POSTS: BlogListPost[] = [
  {
    slug: "conversion-focused-ux",
    title: "How conversion-focused UX turns visitors into qualified leads",
    excerpt:
      "Practical UX patterns we use to reduce friction, clarify value, and lift sign-up rates across B2B and consumer sites.",
    category: "Design",
    published_at: "2025-04-15T00:00:00.000Z",
    cover_image_path: null,
  },
  {
    slug: "brand-system-scales",
    title: "Building a brand system that scales across every touchpoint",
    excerpt: "From typography to motion, how we keep brand consistency without slowing delivery.",
    category: "Brand",
    published_at: "2025-04-12T00:00:00.000Z",
    cover_image_path: null,
  },
  {
    slug: "marketing-automation-ops",
    title: "Marketing automation that sales teams actually use",
    excerpt: "Connecting campaigns to CRM so marketing and sales share one source of truth.",
    category: "Marketing",
    published_at: "2025-04-10T00:00:00.000Z",
    cover_image_path: null,
  },
  {
    slug: "designing-for-conversion",
    title: "Designing for conversion",
    excerpt: "How we audit user flows, reduce drop-off, and prototype high-performing landing experiences.",
    category: "Design",
    published_at: "2025-03-28T00:00:00.000Z",
    cover_image_path: null,
  },
  {
    slug: "campaign-to-pipeline",
    title: "From campaign to pipeline in one workflow",
    excerpt: "Lead capture, scoring, and handoff patterns for UAE B2B teams.",
    category: "Marketing",
    published_at: "2025-03-20T00:00:00.000Z",
    cover_image_path: null,
  },
  {
    slug: "platform-reliability",
    title: "Platform reliability for client-facing systems",
    excerpt: "Monitoring, rollback, and support habits we use on production builds.",
    category: "Development",
    published_at: "2025-03-15T00:00:00.000Z",
    cover_image_path: null,
  },
];

const DEMO_COVERS = [
  "/images/ns-img-492.png",
  "/images/ns-img-465.png",
  "/images/ns-img-428.png",
  "/images/ns-img-459.png",
  "/images/ns-img-464.png",
  "/images/ns-img-491.png",
];

export function demoCoverForIndex(index: number): string {
  return DEMO_COVERS[index % DEMO_COVERS.length];
}

/** Demo posts link to the static article template until CMS content exists. */
export function postHref(slug: string, fromCms: boolean): string {
  return fromCms ? `/blog/${slug}` : "/blog-details";
}
