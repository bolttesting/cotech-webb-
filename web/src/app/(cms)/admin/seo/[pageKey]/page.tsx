import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { PageSeoForm } from "@/components/admin/PageSeoForm";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { MARKETING_SEO_ROUTES } from "@/lib/seo/routes";
import { getPageSeoByKey } from "@/lib/seo/page-seo";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

type Props = {
  params: Promise<{ pageKey: string }>;
  searchParams: Promise<{ saved?: string }>;
};

export default async function AdminSeoEditPage({ params, searchParams }: Props) {
  const { pageKey } = await params;
  const { saved } = await searchParams;
  const route = MARKETING_SEO_ROUTES.find((r) => r.pageKey === pageKey);
  if (!route) notFound();

  const supabase = await tryCreateClient();
  let schemaMissing = false;
  let existing = await getPageSeoByKey(pageKey);

  if (supabase && !existing) {
    const { error } = await supabase.from("page_seo").select("page_key").limit(1);
    if (error && isBlogSchemaMissing(error.message)) schemaMissing = true;
  }

  return (
    <AdminAppShell
      title={`SEO — ${route.label}`}
      description="Overrides apply on the live site when Supabase is connected."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Page SEO", href: "/admin/seo" },
        { label: route.label },
      ]}
    >
      {saved === "1" ? (
        <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-900">
          SEO settings saved.
        </p>
      ) : null}
      {schemaMissing ? <MigrationNotice className="mb-6" /> : null}
      <PageSeoForm pageKey={pageKey} label={route.label} path={route.path} existing={existing} />
    </AdminAppShell>
  );
}
