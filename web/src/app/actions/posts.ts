"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, getAdminUser } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { slugify, type BlogPostStatus, type BlogBodyFormat } from "@/lib/blog/types";

async function requireAdmin() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured. Set env vars in web/.env.local.");
  }
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

function boolField(formData: FormData, name: string): boolean {
  return formData.get(name) === "on";
}

export async function upsertPost(formData: FormData) {
  const user = await requireAdmin();
  const supabase = await createClient();

  const id = (formData.get("id") as string) || null;
  const title = (formData.get("title") as string)?.trim();
  let slug = (formData.get("slug") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim() || null;
  const body = (formData.get("body") as string) || "";
  const body_format = (formData.get("body_format") as BlogBodyFormat) || "html";
  const category = (formData.get("category") as string)?.trim() || null;
  const status = formData.get("status") as BlogPostStatus;
  const cover_image_path = (formData.get("cover_image_path") as string)?.trim() || null;

  const meta_title = (formData.get("meta_title") as string)?.trim() || null;
  const meta_description = (formData.get("meta_description") as string)?.trim() || null;
  const og_title = (formData.get("og_title") as string)?.trim() || null;
  const og_description = (formData.get("og_description") as string)?.trim() || null;
  const og_image_path = (formData.get("og_image_path") as string)?.trim() || null;
  const canonical_path = (formData.get("canonical_path") as string)?.trim() || null;
  const seo_noindex = boolField(formData, "seo_noindex");

  if (!title) throw new Error("Title is required");
  if (!slug) slug = slugify(title);
  if (!slug) throw new Error("Slug is required");

  const now = new Date().toISOString();
  const published_at =
    status === "published" ? (formData.get("published_at") as string) || now : null;

  const row = {
    title,
    slug,
    excerpt,
    body,
    body_format,
    category,
    status,
    published_at,
    author_id: user.id,
    cover_image_path,
    meta_title,
    meta_description,
    og_title,
    og_description,
    og_image_path,
    canonical_path,
    seo_noindex,
  };

  if (id) {
    const { error } = await supabase.from("blog_posts").update(row).eq("id", id);
    if (error) throw new Error(error.message);
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/admin/posts");
    redirect(`/admin/posts/${id}/edit?saved=1`);
  }

  const { data, error } = await supabase.from("blog_posts").insert(row).select("id").single();
  if (error) throw new Error(error.message);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
  redirect(`/admin/posts/${data.id}/edit?saved=1`);
}

export async function deletePost(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing id");

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}
