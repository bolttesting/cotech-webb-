import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { tryCreateClient } from "@/lib/supabase/server";
import { isBlogSchemaMissing } from "@/lib/supabase/env";
import { deletePost } from "@/app/actions/posts";

export default async function AdminPostsPage() {
  const supabase = await tryCreateClient();
  let posts: {
    id: string;
    title: string;
    slug: string;
    status: string;
    updated_at: string;
  }[] = [];
  let schemaMissing = false;

  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, status, updated_at")
      .order("updated_at", { ascending: false });
    if (error && isBlogSchemaMissing(error.message)) {
      schemaMissing = true;
    } else {
      posts = data ?? [];
    }
  }

  return (
    <AdminShell title="Blog posts">
      {schemaMissing ? <MigrationNotice className="mb-4" /> : null}
      <div className="mb-4">
        <Link
          href="/admin/posts/new"
          className="inline-flex rounded-full bg-[#0d666c] px-5 py-2 text-sm font-semibold text-white"
        >
          New post
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#0b2e33]/8 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#0b2e33]/8 bg-[#f8f9fb] text-[#0b2e33]/60">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Status</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Updated</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-[#0b2e33]/6 last:border-0">
                <td className="px-4 py-3 font-medium">{post.title}</td>
                <td className="hidden px-4 py-3 capitalize sm:table-cell">{post.status}</td>
                <td className="hidden px-4 py-3 text-[#0b2e33]/60 md:table-cell">
                  {new Date(post.updated_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-[#0d666c] hover:underline"
                    >
                      Edit
                    </Link>
                    {post.status === "published" ? (
                      <Link href={`/blog/${post.slug}`} className="text-[#0b2e33]/60 hover:underline">
                        View
                      </Link>
                    ) : null}
                    <form action={deletePost}>
                      <input type="hidden" name="id" value={post.id} />
                      <button type="submit" className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {!posts.length ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-[#0b2e33]/50">
                  No posts yet. Create your first one.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
