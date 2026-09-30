import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { ContactSettingsForm } from "@/components/admin/ContactSettingsForm";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { getContactSettings } from "@/lib/site-settings";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

export default async function AdminSettingsPage() {
  const supabase = await tryCreateClient();
  let schemaMissing = false;
  if (supabase) {
    const { error } = await supabase.from("site_settings").select("key").limit(1);
    if (error && isBlogSchemaMissing(error.message)) schemaMissing = true;
  }

  const contact = await getContactSettings();

  return (
    <AdminAppShell
      title="Site settings"
      description="Contact details shown on the marketing contact page. Changes apply after save."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Site settings" },
      ]}
    >
      {schemaMissing ? <MigrationNotice className="mb-4" /> : null}
      <ContactSettingsForm initial={contact} />
    </AdminAppShell>
  );
}
