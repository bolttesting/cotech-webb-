import { AdminShell } from "@/components/admin/AdminShell";
import { PostForm } from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <AdminShell title="New post">
      <PostForm />
    </AdminShell>
  );
}
