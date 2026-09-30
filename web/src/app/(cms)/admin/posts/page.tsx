import Link from "next/link";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { AdminConfirmButton } from "@/components/admin/AdminConfirmButton";
import {
  AdminEmptyRow,
  AdminFilterTabs,
  AdminSection,
  AdminStatusBadge,
} from "@/components/admin/AdminUi";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { deletePost } from "@/app/actions/posts";
import { getDashboardSnapshot } from "@/lib/admin/dashboard";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";

type Props = { searchParams: Promise<{ status?: string }> };

export default async function AdminPostsPage({ searchParams }: Props) {
  const { status: statusFilter } = await searchParams;
  const filter =
    statusFilter && ["draft", "published"].includes(statusFilter) ? statusFilter : "all";

  const [snapshot, supabase] = await Promise.all([getDashboardSnapshot(), tryCreateClient()]);
  let posts: {
    id: string;
    title: string;
    slug: string;
    status: string;
    updated_at: string;
  }[] = [];
  let schemaMissing = snapshot.schemaMissing;

  if (supabase && !schemaMissing) {
    let query = supabase
      .from("blog_posts")
      .select("id, title, slug, status, updated_at")
      .order("updated_at", { ascending: false });
    if (filter !== "all") query = query.eq("status", filter);
    const { data, error } = await query;
    if (error && isBlogSchemaMissing(error.message)) {
      schemaMissing = true;
    } else {
      posts = data ?? [];
    }
  }

  const { stats } = snapshot;

  return (
    <AdminAppShell
      title="Blog posts"
      description="Create, edit, and publish articles for the public blog."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Blog posts" },
      ]}
      actions={
        <Link
          href="/admin/posts/new"
          className="rounded-full bg-[#0d666c] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0b2e33]"
        >
          New post
        </Link>
      }
    >
      {schemaMissing ? <MigrationNotice className="mb-4" /> : null}

      <AdminFilterTabs
        basePath="/admin/posts"
        current={filter}
        tabs={[
          { id: "all", label: "All", count: stats.totalPosts },
          { id: "published", label: "Published", count: stats.publishedPosts },
          { id: "draft", label: "Drafts", count: stats.draftPosts },
        ]}
      />

      <AdminSection title="Articles" description={`${posts.length} in this view`}>
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#0b2e33]/8 bg-[#f8f9fb] text-xs uppercase tracking-wide text-[#0b2e33]/55">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">Status</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">Updated</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-[#0b2e33]/6 last:border-0 hover:bg-[#f8fafb]/80">
                <td className="px-4 py-3 font-medium">{post.title}</td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <AdminStatusBadge kind="post" value={post.status} />
                </td>
                <td className="hidden px-4 py-3 text-[#0b2e33]/60 md:table-cell">
                  {new Date(post.updated_at).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link href={`/admin/posts/${post.id}/edit`} className="font-semibold text-[#0d666c] hover:underline">
                      Edit
                    </Link>
                    {post.status === "published" ? (
                      <Link href={`/blog/${post.slug}`} className="text-[#0b2e33]/60 hover:underline">
                        View live
                      </Link>
                    ) : null}
                    <form action={deletePost} className="inline">
                      <input type="hidden" name="id" value={post.id} />
                      <AdminConfirmButton
                        message={`Delete “${post.title}”? This cannot be undone.`}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </AdminConfirmButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {!posts.length ? (
              <tr>
                <td colSpan={4}>
                  <AdminEmptyRow message="No posts in this view. Create your first article." />
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </AdminSection>
    </AdminAppShell>
  );
}
