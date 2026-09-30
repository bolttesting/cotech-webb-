"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, getAdminUser } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { MARKETING_SEO_ROUTES } from "@/lib/seo/routes";

async function requireAdmin() {
  if (!isSupabaseConfigured()) throw new Error("Supabase not configured");
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function savePageSeo(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const pageKey = (formData.get("page_key") as string)?.trim();
  const route = MARKETING_SEO_ROUTES.find((r) => r.pageKey === pageKey);
  if (!route) throw new Error("Unknown page");

  const row = {
    page_key: pageKey,
    path: route.path,
    meta_title: (formData.get("meta_title") as string)?.trim() || null,
    meta_description: (formData.get("meta_description") as string)?.trim() || null,
    og_title: (formData.get("og_title") as string)?.trim() || null,
    og_description: (formData.get("og_description") as string)?.trim() || null,
    og_image_path: (formData.get("og_image_path") as string)?.trim() || null,
    canonical_url: (formData.get("canonical_url") as string)?.trim() || null,
    focus_keyword: (formData.get("focus_keyword") as string)?.trim() || null,
    robots_index: formData.get("robots_index") === "on",
    robots_follow: formData.get("robots_follow") === "on",
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("page_seo").upsert(row);
  if (error) throw new Error(error.message);

  revalidatePath(route.path);
  revalidatePath("/admin/seo");
  revalidatePath(`/admin/seo/${pageKey}`);
  redirect(`/admin/seo/${encodeURIComponent(pageKey)}?saved=1`);
}
