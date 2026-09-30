import Link from "next/link";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { AdminSection } from "@/components/admin/AdminUi";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { getMarketingMetadata } from "@/lib/marketing-metadata";
import { MARKETING_SEO_ROUTES } from "@/lib/seo/routes";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

export default async function AdminSeoListPage() {
  const supabase = await tryCreateClient();
  let schemaMissing = false;
  const overrides = new Map<string, { meta_title: string | null; updated_at: string }>();

  if (supabase) {
    const { data, error } = await supabase
      .from("page_seo")
      .select("page_key, meta_title, updated_at");
    if (error && isBlogSchemaMissing(error.message)) {
      schemaMissing = true;
    } else if (data) {
      for (const row of data) {
        overrides.set(row.page_key, {
          meta_title: row.meta_title,
          updated_at: row.updated_at,
        });
      }
    }
  }

  const customCount = overrides.size;
  const total = MARKETING_SEO_ROUTES.length;
  const pct = total > 0 ? Math.round((customCount / total) * 100) : 0;

  return (
    <AdminAppShell
      title="Page SEO"
      description="Edit meta tags, Open Graph, and robots settings for every marketing page."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Page SEO" },
      ]}
    >
      {schemaMissing ? <MigrationNotice className="mb-6" /> : null}

      <div className="mb-6 rounded-2xl border border-[#0b2e33]/8 bg-white p-5 shadow-sm">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-[#0b2e33]">Coverage</p>
            <p className="text-xs text-[#0b2e33]/55">
              {customCount} of {total} pages have custom SEO in the database
            </p>
          </div>
          <p className="text-2xl font-semibold text-[#0d666c]">{pct}%</p>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-[#0b2e33]/8">
          <div className="h-full rounded-full bg-[#0d666c]" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <AdminSection title="All pages" description="Click Edit to override defaults from code">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#0b2e33]/8 bg-[#f8f9fb] text-xs uppercase tracking-wide text-[#0b2e33]/55">
            <tr>
              <th className="px-4 py-3 font-semibold">Page</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">Path</th>
              <th className="px-4 py-3 font-semibold">Meta title</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#0b2e33]/6">
            {MARKETING_SEO_ROUTES.map((route) => {
              const override = overrides.get(route.pageKey);
              const fallback = getMarketingMetadata(route.pageKey);
              const title = override?.meta_title?.trim() || fallback.title;
              return (
                <tr key={route.pageKey} className="hover:bg-[#f8fafb]/80">
                  <td className="px-4 py-3 font-medium capitalize text-[#0b2e33]">{route.label}</td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-[#0b2e33]/60 sm:table-cell">
                    {route.path}
                  </td>
                  <td className="max-w-xs truncate px-4 py-3 text-[#0b2e33]/80">{title}</td>
                  <td className="px-4 py-3">
                    {override ? (
                      <span className="rounded-full bg-[#0d666c]/10 px-2 py-0.5 text-xs font-medium text-[#0d666c]">
                        Custom
                      </span>
                    ) : (
                      <span className="text-xs text-[#0b2e33]/45">Default</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/seo/${encodeURIComponent(route.pageKey)}`}
                      className="text-sm font-semibold text-[#0d666c] hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </AdminSection>
    </AdminAppShell>
  );
}
