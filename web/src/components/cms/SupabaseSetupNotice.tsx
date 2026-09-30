import { SUPABASE_SETUP_HINT } from "@/lib/supabase/env";

export function SupabaseSetupNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 ${className}`}
      role="status"
    >
      <p className="font-medium">CMS backend not connected</p>
      <p className="mt-1 text-amber-900/90">{SUPABASE_SETUP_HINT}</p>
    </div>
  );
}

export function MigrationNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-950 ${className}`}
      role="status"
    >
      <p className="font-medium">Database schema missing</p>
      <p className="mt-1 text-sky-900/90">
        Run migrations in Supabase SQL Editor:{" "}
        <code className="text-xs">20260328180000_blog_cms.sql</code>,{" "}
        <code className="text-xs">20260930100000_admin_leads_settings.sql</code>,{" "}
        <code className="text-xs">20260930120000_seo_and_blog_rich.sql</code>, then reload.
      </p>
    </div>
  );
}
