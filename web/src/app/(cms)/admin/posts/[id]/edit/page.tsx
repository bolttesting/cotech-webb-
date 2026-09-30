import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { PostForm } from "@/components/admin/PostForm";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const supabase = await createClient();
  const { data: post } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();

  if (!post) notFound();

  return (
    <AdminAppShell
      title="Edit post"
      description={post.title}
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Blog posts", href: "/admin/posts" },
        { label: "Edit" },
      ]}
    >
      {sp.saved ? (
        <p className="mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Saved successfully.
        </p>
      ) : null}
      <PostForm post={post} />
    </AdminAppShell>
  );
}
