import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function AdminShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#0b2e33]">
      <header className="border-b border-[#0b2e33]/8 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-semibold tracking-tight text-[#0d666c]">
              COTech Admin
            </Link>
            <nav className="hidden gap-4 text-sm sm:flex">
              <Link href="/admin/posts" className="hover:text-[#0d666c]">
                Posts
              </Link>
              <Link href="/blog" className="hover:text-[#0d666c]">
                View blog
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-[#0b2e33]/60 sm:inline">{user?.email}</span>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="rounded-lg border border-[#0b2e33]/10 px-3 py-1.5 hover:bg-[#f4f6f8]"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h1>
        {children}
      </main>
    </div>
  );
}
