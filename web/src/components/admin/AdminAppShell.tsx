import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getAdminNavBadges } from "@/lib/admin/dashboard";
import { AdminMobileNav, AdminSidebarNav } from "@/components/admin/AdminNav";
import { AdminBreadcrumbs } from "@/components/admin/AdminUi";

export async function AdminAppShell({
  children,
  title,
  description,
  actions,
  breadcrumbs,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[] | null;
}) {
  const [supabase, badges] = await Promise.all([createClient(), getAdminNavBadges()]);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const crumbItems =
    breadcrumbs === undefined
      ? [{ label: "Dashboard", href: "/admin" }, { label: title }]
      : (breadcrumbs ?? []);

  return (
    <div className="flex min-h-screen bg-[#eef2f4] text-[#0b2e33]">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[#0b2e33]/10 bg-[#0b2e33] text-white md:flex">
        <div className="border-b border-white/10 px-5 py-6">
          <Link href="/admin" className="block">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7ec8c9]">COTech</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">Admin</p>
          </Link>
        </div>
        <AdminSidebarNav badges={badges} userEmail={user?.email} />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-[#0b2e33]/8 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="flex items-center justify-between gap-2">
            <Link href="/admin" className="font-semibold text-[#0d666c]">
              COTech Admin
            </Link>
            <Link href="/" className="text-xs font-medium text-[#0b2e33]/60 underline-offset-2 hover:underline">
              View site
            </Link>
          </div>
          <div className="mt-3">
            <AdminMobileNav badges={badges} />
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
          {crumbItems.length > 1 ? <AdminBreadcrumbs items={crumbItems} /> : null}

          <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#0b2e33] sm:text-3xl">{title}</h1>
              {description ? (
                <p className="mt-1 max-w-2xl text-sm text-[#0b2e33]/60">{description}</p>
              ) : null}
            </div>
            {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
