import { MARKETING_SEO_ROUTES } from "@/lib/seo/routes";
import { isBlogSchemaMissing, isSupabaseConfigured } from "@/lib/supabase/env";
import { tryCreateClient } from "@/lib/supabase/server";

export type RecentLead = {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
};

export type RecentPost = {
  id: string;
  title: string;
  slug: string;
  status: string;
  updated_at: string;
};

export type DashboardSnapshot = {
  supabaseConfigured: boolean;
  schemaMissing: boolean;
  stats: {
    newLeads: number;
    totalLeads: number;
    readLeads: number;
    archivedLeads: number;
    draftPosts: number;
    publishedPosts: number;
    totalPosts: number;
    seoOverrides: number;
    seoTotalPages: number;
  };
  recentLeads: RecentLead[];
  recentPosts: RecentPost[];
};

const emptyStats = (): DashboardSnapshot["stats"] => ({
  newLeads: 0,
  totalLeads: 0,
  readLeads: 0,
  archivedLeads: 0,
  draftPosts: 0,
  publishedPosts: 0,
  totalPosts: 0,
  seoOverrides: 0,
  seoTotalPages: MARKETING_SEO_ROUTES.length,
});

export async function getDashboardSnapshot(): Promise<DashboardSnapshot> {
  const supabaseConfigured = isSupabaseConfigured();
  const seoTotalPages = MARKETING_SEO_ROUTES.length;

  if (!supabaseConfigured) {
    return {
      supabaseConfigured: false,
      schemaMissing: false,
      stats: { ...emptyStats(), seoTotalPages },
      recentLeads: [],
      recentPosts: [],
    };
  }

  const supabase = await tryCreateClient();
  if (!supabase) {
    return {
      supabaseConfigured: false,
      schemaMissing: false,
      stats: { ...emptyStats(), seoTotalPages },
      recentLeads: [],
      recentPosts: [],
    };
  }

  const [
    newLeadsRes,
    totalLeadsRes,
    readLeadsRes,
    archivedLeadsRes,
    draftsRes,
    publishedRes,
    totalPostsRes,
    seoRes,
    recentLeadsRes,
    recentPostsRes,
  ] = await Promise.all([
    supabase.from("contact_leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("contact_leads").select("*", { count: "exact", head: true }),
    supabase.from("contact_leads").select("*", { count: "exact", head: true }).eq("status", "read"),
    supabase.from("contact_leads").select("*", { count: "exact", head: true }).eq("status", "archived"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("page_seo").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_leads")
      .select("id, name, email, status, created_at")
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from("blog_posts")
      .select("id, title, slug, status, updated_at")
      .order("updated_at", { ascending: false })
      .limit(6),
  ]);

  const schemaMissing =
    (newLeadsRes.error && isBlogSchemaMissing(newLeadsRes.error.message)) ||
    (draftsRes.error && isBlogSchemaMissing(draftsRes.error.message));

  if (schemaMissing) {
    return {
      supabaseConfigured: true,
      schemaMissing: true,
      stats: { ...emptyStats(), seoTotalPages },
      recentLeads: [],
      recentPosts: [],
    };
  }

  return {
    supabaseConfigured: true,
    schemaMissing: false,
    stats: {
      newLeads: newLeadsRes.count ?? 0,
      totalLeads: totalLeadsRes.count ?? 0,
      readLeads: readLeadsRes.count ?? 0,
      archivedLeads: archivedLeadsRes.count ?? 0,
      draftPosts: draftsRes.count ?? 0,
      publishedPosts: publishedRes.count ?? 0,
      totalPosts: totalPostsRes.count ?? 0,
      seoOverrides: seoRes.error ? 0 : (seoRes.count ?? 0),
      seoTotalPages,
    },
    recentLeads: recentLeadsRes.data ?? [],
    recentPosts: recentPostsRes.data ?? [],
  };
}

export type NavBadges = {
  newLeads: number;
  draftPosts: number;
};

export async function getAdminNavBadges(): Promise<NavBadges> {
  const supabase = await tryCreateClient();
  if (!supabase) return { newLeads: 0, draftPosts: 0 };

  const [leads, drafts] = await Promise.all([
    supabase.from("contact_leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
  ]);

  if (leads.error && isBlogSchemaMissing(leads.error.message)) {
    return { newLeads: 0, draftPosts: 0 };
  }

  return {
    newLeads: leads.count ?? 0,
    draftPosts: drafts.count ?? 0,
  };
}
