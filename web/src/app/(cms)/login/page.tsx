import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { SupabaseSetupNotice } from "@/components/cms/SupabaseSetupNotice";
import { MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import { getSupabaseEnv } from "@/lib/supabase/env";

export const metadata = {
  title: "Sign in | COTech Admin",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const nextPath = params.next ?? "/admin";
  const configured = Boolean(getSupabaseEnv());

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-[#0b2e33] via-[#0a4a50] to-[#0d666c] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0d666c]">
          COTech
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[#0b2e33]">Admin sign in</h1>
        <p className="mt-1 text-sm text-[#0b2e33]/60">
          Manage blog posts and site content.
        </p>
        {!configured ? <SupabaseSetupNotice className="mt-4" /> : null}
        {params.error === "config" ? <SupabaseSetupNotice className="mt-4" /> : null}
        {params.error === "migration" ? <MigrationNotice className="mt-4" /> : null}
        {params.error === "not_admin" ? (
          <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
            This account is not an admin. Ask an owner to set{" "}
            <code className="text-xs">profiles.role = admin</code> in Supabase.
          </p>
        ) : null}
        {params.error === "auth" ? (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">
            Sign-in link expired or was invalid. Try again.
          </p>
        ) : null}
        <div className="mt-6">
          <LoginForm nextPath={nextPath} disabled={!configured} />
        </div>
        <p className="mt-6 text-center text-xs text-[#0b2e33]/45">
          <Link href="/blog" className="hover:text-[#0d666c]">
            ← Back to blog
          </Link>
        </p>
      </div>
    </div>
  );
}
