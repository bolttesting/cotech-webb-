"use server";

import { revalidatePath } from "next/cache";
import { createClient, getAdminUser } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import {
  DEFAULT_CONTACT_SETTINGS,
  parseContactSettings,
  type ContactSettings,
} from "@/lib/site-settings";

async function requireAdmin() {
  if (!isSupabaseConfigured()) throw new Error("Supabase not configured");
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function saveContactSettings(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const value: ContactSettings = {
    email: (formData.get("email") as string)?.trim() || DEFAULT_CONTACT_SETTINGS.email,
    phone: (formData.get("phone") as string)?.trim() || DEFAULT_CONTACT_SETTINGS.phone,
    phoneDisplay:
      (formData.get("phoneDisplay") as string)?.trim() || DEFAULT_CONTACT_SETTINGS.phoneDisplay,
    whatsapp: (formData.get("whatsapp") as string)?.trim() || DEFAULT_CONTACT_SETTINGS.whatsapp,
    whatsappDisplay:
      (formData.get("whatsappDisplay") as string)?.trim() ||
      DEFAULT_CONTACT_SETTINGS.whatsappDisplay,
    mapLat: Number(formData.get("mapLat")) || DEFAULT_CONTACT_SETTINGS.mapLat,
    mapLng: Number(formData.get("mapLng")) || DEFAULT_CONTACT_SETTINGS.mapLng,
    inquiryNote:
      (formData.get("inquiryNote") as string)?.trim() || DEFAULT_CONTACT_SETTINGS.inquiryNote,
  };

  const { error } = await supabase.from("site_settings").upsert({
    key: "contact",
    value,
    updated_at: new Date().toISOString(),
  });

  if (error) throw new Error(error.message);

  revalidatePath("/contact");
  revalidatePath("/admin/settings");
}
