import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { LeadStatusForm } from "@/components/admin/LeadStatusForm";
import { createClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ id: string }> };

export default async function AdminLeadDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: lead } = await supabase.from("contact_leads").select("*").eq("id", id).maybeSingle();

  if (!lead) notFound();

  return (
    <AdminAppShell
      title={lead.name}
      description={`Received ${new Date(lead.created_at).toLocaleString()}`}
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Leads", href: "/admin/leads" },
        { label: lead.name },
      ]}
    >
      <div className="space-y-6 rounded-2xl border border-[#0b2e33]/8 bg-white p-6 shadow-sm">
        <LeadStatusForm leadId={lead.id} status={lead.status as "new" | "read" | "archived"} />
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[#0b2e33]/50">Email</dt>
            <dd className="font-medium">
              <a href={`mailto:${lead.email}`} className="text-[#0d666c] hover:underline">
                {lead.email}
              </a>
            </dd>
          </div>
          {lead.phone ? (
            <div>
              <dt className="text-[#0b2e33]/50">Phone</dt>
              <dd className="font-medium">
                <a href={`tel:${lead.phone.replace(/\s/g, "")}`} className="text-[#0d666c] hover:underline">
                  {lead.phone}
                </a>
              </dd>
            </div>
          ) : null}
          {lead.company ? (
            <div>
              <dt className="text-[#0b2e33]/50">Company</dt>
              <dd className="font-medium">{lead.company}</dd>
            </div>
          ) : null}
        </dl>
        <div>
          <h2 className="text-sm font-semibold text-[#0b2e33]/50">Message</h2>
          <p className="mt-2 whitespace-pre-wrap text-[#0b2e33]">{lead.message}</p>
        </div>
      </div>
    </AdminAppShell>
  );
}
