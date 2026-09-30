"use server";

import { createClient, getAdminUser } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

async function requireAdmin() {
  if (!isSupabaseConfigured()) throw new Error("Supabase not configured");
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
}

export async function uploadBlogMedia(formData: FormData): Promise<{ path: string; publicUrl: string }> {
  await requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Choose a file to upload");
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
  const safeExt = ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(ext) ? ext : "jpg";
  const objectPath = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${safeExt}`;

  const supabase = await createClient();
  const bytes = Buffer.from(await file.arrayBuffer());
  const { error } = await supabase.storage.from("blog-media").upload(objectPath, bytes, {
    contentType: file.type || undefined,
    upsert: false,
  });
  if (error) throw new Error(error.message);

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publicUrl = base
    ? `${base}/storage/v1/object/public/blog-media/${objectPath}`
    : objectPath;

  return { path: objectPath, publicUrl };
}
