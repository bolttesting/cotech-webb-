import { tryCreateClient } from "@/lib/supabase/server";

export type ContactSettings = {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  mapLat: number;
  mapLng: number;
  inquiryNote: string;
};

export const DEFAULT_CONTACT_SETTINGS: ContactSettings = {
  email: "info@cotechme.com",
  phone: "+971586188058",
  phoneDisplay: "+971 58 618 8058",
  whatsapp: "https://wa.me/971586188058",
  whatsappDisplay: "WhatsApp",
  mapLat: 25.1867,
  mapLng: 55.2744,
  inquiryNote: "We reply with next-step clarity — not a sales script.",
};

export function parseContactSettings(raw: unknown): ContactSettings {
  if (!raw || typeof raw !== "object") return DEFAULT_CONTACT_SETTINGS;
  const o = raw as Record<string, unknown>;
  return {
    email: typeof o.email === "string" ? o.email : DEFAULT_CONTACT_SETTINGS.email,
    phone: typeof o.phone === "string" ? o.phone : DEFAULT_CONTACT_SETTINGS.phone,
    phoneDisplay:
      typeof o.phoneDisplay === "string" ? o.phoneDisplay : DEFAULT_CONTACT_SETTINGS.phoneDisplay,
    whatsapp: typeof o.whatsapp === "string" ? o.whatsapp : DEFAULT_CONTACT_SETTINGS.whatsapp,
    whatsappDisplay:
      typeof o.whatsappDisplay === "string"
        ? o.whatsappDisplay
        : DEFAULT_CONTACT_SETTINGS.whatsappDisplay,
    mapLat: typeof o.mapLat === "number" ? o.mapLat : DEFAULT_CONTACT_SETTINGS.mapLat,
    mapLng: typeof o.mapLng === "number" ? o.mapLng : DEFAULT_CONTACT_SETTINGS.mapLng,
    inquiryNote:
      typeof o.inquiryNote === "string" ? o.inquiryNote : DEFAULT_CONTACT_SETTINGS.inquiryNote,
  };
}

export async function getContactSettings(): Promise<ContactSettings> {
  const supabase = await tryCreateClient();
  if (!supabase) return DEFAULT_CONTACT_SETTINGS;

  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "contact")
    .maybeSingle();

  if (error || !data) return DEFAULT_CONTACT_SETTINGS;
  return parseContactSettings(data.value);
}
