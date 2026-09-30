"use server";

import { revalidatePath } from "next/cache";
import { createClient, getAdminUser, tryCreateClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

export async function submitContactLead(formData: FormData): Promise<SubmitLeadResult> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim() || null;
  const company = (formData.get("company") as string)?.trim() || null;
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email, and message are required." };
  }

  const supabase = await tryCreateClient();
  if (!supabase) {
    return {
      ok: false,
      error: "Contact form is not configured yet. Email us directly at info@cotechme.com.",
    };
  }

  const { error } = await supabase.from("contact_leads").insert({
    name,
    email,
    phone,
    company,
    message,
    status: "new",
  });

  if (error) {
    console.error("[contact] insert lead:", error.message);
    return { ok: false, error: "Could not send your inquiry. Please try again or email us directly." };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  return { ok: true };
}

async function requireAdmin() {
  if (!isSupabaseConfigured()) throw new Error("Supabase not configured");
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function updateLeadStatus(leadId: string, status: "new" | "read" | "archived") {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("contact_leads").update({ status }).eq("id", leadId);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
}

export async function deleteLead(leadId: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("contact_leads").delete().eq("id", leadId);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
}
