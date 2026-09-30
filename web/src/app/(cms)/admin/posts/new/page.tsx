import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { PostForm } from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <AdminAppShell
      title="New post"
      description="Draft a new blog article with the rich editor and SEO fields."
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Blog posts", href: "/admin/posts" },
        { label: "New" },
      ]}
    >
      <PostForm />
    </AdminAppShell>
  );
}
