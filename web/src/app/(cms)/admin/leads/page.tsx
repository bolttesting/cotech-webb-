import Link from "next/link";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import {
  AdminEmptyRow,
  AdminFilterTabs,
  AdminSection,
  AdminStatusBadge,
} from "@/components/admin/AdminUi";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { getDashboardSnapshot } from "@/lib/admin/dashboard";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

type Props = { searchParams: Promise<{ status?: string }> };

export default async function AdminLeadsPage({ searchParams }: Props) {
  const { status: statusFilter } = await searchParams;
  const filter = statusFilter && ["new", "read", "archived"].includes(statusFilter) ? statusFilter : "all";

  const [snapshot, supabase] = await Promise.all([getDashboardSnapshot(), tryCreateClient()]);
  let leads: {
    id: string;
    name: string;
    email: string;
    status: string;
    created_at: string;
  }[] = [];
  let schemaMissing = snapshot.schemaMissing;

  if (supabase && !schemaMissing) {
    let query = supabase
      .from("contact_leads")
      .select("id, name, email, status, created_at")
      .order("created_at", { ascending: false });
    if (filter !== "all") query = query.eq("status", filter);
    const { data, error } = await query;
    if (error && isBlogSchemaMissing(error.message)) {
      schemaMissing = true;
    } else {
      leads = data ?? [];
    }
  }

  const { stats } = snapshot;

  return (
    <AdminAppShell
      title="Leads"
      description="Inquiries from the contact form on your marketing site."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Leads" },
      ]}
      actions={
        <Link
          href="/contact"
          className="rounded-full border border-[#0b2e33]/15 px-4 py-2 text-sm font-semibold text-[#0b2e33] hover:border-[#0d666c]/35"
        >
          Open contact page
        </Link>
      }
    >
      {schemaMissing ? <MigrationNotice className="mb-4" /> : null}

      <AdminFilterTabs
        basePath="/admin/leads"
        current={filter}
        tabs={[
          { id: "all", label: "All", count: stats.totalLeads },
          { id: "new", label: "New", count: stats.newLeads },
          { id: "read", label: "Read", count: stats.readLeads },
          { id: "archived", label: "Archived", count: stats.archivedLeads },
        ]}
      />

      <AdminSection title={`${filter === "all" ? "All" : filter} leads`} description={`${leads.length} shown`}>
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#0b2e33]/8 bg-[#f8f9fb] text-xs uppercase tracking-wide text-[#0b2e33]/55">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">Email</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">Received</th>
              <th className="px-4 py-3 font-semibold" />
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-[#0b2e33]/6 last:border-0 hover:bg-[#f8fafb]/80">
                <td className="px-4 py-3 font-medium">{lead.name}</td>
                <td className="hidden px-4 py-3 sm:table-cell">{lead.email}</td>
                <td className="px-4 py-3">
                  <AdminStatusBadge kind="lead" value={lead.status} />
                </td>
                <td className="hidden px-4 py-3 text-[#0b2e33]/60 md:table-cell">
                  {new Date(lead.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/leads/${lead.id}`} className="font-semibold text-[#0d666c] hover:underline">
                    Open
                  </Link>
                </td>
              </tr>
            ))}
            {!leads.length ? (
              <tr>
                <td colSpan={5}>
                  <AdminEmptyRow message="No leads in this view. Submissions from /contact will appear here." />
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </AdminSection>
    </AdminAppShell>
  );
}
