"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, getAdminUser } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { slugify, type BlogPostStatus } from "@/lib/blog/types";

async function requireAdmin() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured. Set env vars in web/.env.local.");
  }
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function upsertPost(formData: FormData) {
  const user = await requireAdmin();
  const supabase = await createClient();

  const id = (formData.get("id") as string) || null;
  const title = (formData.get("title") as string)?.trim();
  let slug = (formData.get("slug") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim() || null;
  const body = (formData.get("body") as string) || "";
  const category = (formData.get("category") as string)?.trim() || null;
  const status = formData.get("status") as BlogPostStatus;

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
    category,
    status,
    published_at,
    author_id: user.id,
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
