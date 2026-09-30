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
        Apply the blog CMS migration{" "}
        <code className="text-xs">supabase/migrations/20260328180000_blog_cms.sql</code> in your
        Supabase project, then reload.
      </p>
    </div>
  );
}
