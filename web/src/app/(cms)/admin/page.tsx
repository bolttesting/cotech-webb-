import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { DashboardHome } from "@/components/admin/DashboardHome";
import { getDashboardSnapshot } from "@/lib/admin/dashboard";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const [data, supabase] = await Promise.all([getDashboardSnapshot(), createClient()]);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <AdminAppShell
      title="Dashboard"
      description="Your command center for leads, content, and SEO."
      breadcrumbs={null}
    >
      <DashboardHome data={data} userEmail={user?.email} />
    </AdminAppShell>
  );
}
