import { LoginForm } from "@/components/ui/login-form";
import { SupabaseSetupNotice, MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
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

  const alerts = (
    <>
      {!configured ? <SupabaseSetupNotice /> : null}
      {params.error === "config" ? <SupabaseSetupNotice /> : null}
      {params.error === "migration" ? <MigrationNotice /> : null}
      {params.error === "not_admin" ? (
        <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900">
          This account is not an admin. Ask an owner to set{" "}
          <code className="text-xs">profiles.role = admin</code> in Supabase.
        </p>
      ) : null}
      {params.error === "auth" ? (
        <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-800">
          Sign-in link expired or was invalid. Try again.
        </p>
      ) : null}
    </>
  );

  return (
    <LoginForm nextPath={nextPath} disabled={!configured} alerts={alerts} />
  );
}
