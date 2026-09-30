import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

export default async function AdminDashboardPage() {
  const supabase = await tryCreateClient();
  let draftCount = 0;
  let pubCount = 0;
  let schemaMissing = false;

  if (supabase) {
    const [drafts, published] = await Promise.all([
      supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
      supabase
        .from("blog_posts")
        .select("*", { count: "exact", head: true })
        .eq("status", "published"),
    ]);
    if (drafts.error && isBlogSchemaMissing(drafts.error.message)) {
      schemaMissing = true;
    } else {
      draftCount = drafts.count ?? 0;
    }
    if (published.error && isBlogSchemaMissing(published.error.message)) {
      schemaMissing = true;
    } else {
      pubCount = published.count ?? 0;
    }
  }

  return (
    <AdminShell title="Dashboard">
      {schemaMissing ? <MigrationNotice className="mb-6" /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#0b2e33]/8 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#0b2e33]/60">Published posts</p>
          <p className="mt-1 text-3xl font-semibold">{pubCount}</p>
        </div>
        <div className="rounded-2xl border border-[#0b2e33]/8 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#0b2e33]/60">Drafts</p>
          <p className="mt-1 text-3xl font-semibold">{draftCount}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/posts/new"
          className="rounded-full bg-[#0d666c] px-5 py-2.5 text-sm font-semibold text-white"
        >
          New post
        </Link>
        <Link
          href="/admin/posts"
          className="rounded-full border border-[#0b2e33]/15 px-5 py-2.5 text-sm font-semibold"
        >
          All posts
        </Link>
      </div>
    </AdminShell>
  );
}
