"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Inbox,
  LayoutDashboard,
  LogOut,
  Settings,
  ExternalLink,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  exact?: boolean;
  badgeKey?: "newLeads" | "draftPosts";
};

export const ADMIN_NAV: AdminNavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Inbox, badgeKey: "newLeads" },
  { href: "/admin/posts", label: "Blog posts", icon: FileText, badgeKey: "draftPosts" },
  { href: "/admin/seo", label: "Page SEO", icon: Search },
  { href: "/admin/settings", label: "Site settings", icon: Settings },
];

function navActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

type Badges = { newLeads: number; draftPosts: number };

export function AdminSidebarNav({
  badges,
  userEmail,
}: {
  badges: Badges;
  userEmail?: string | null;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {ADMIN_NAV.map(({ href, label, icon: Icon, exact, badgeKey }) => {
          const active = navActive(pathname, href, exact);
          const badge =
            badgeKey === "newLeads"
              ? badges.newLeads
              : badgeKey === "draftPosts"
                ? badges.draftPosts
                : 0;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-white/75 hover:bg-white/10 hover:text-white",
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="size-4 shrink-0 opacity-90" aria-hidden />
              <span className="flex-1">{label}</span>
              {badge > 0 ? (
                <span className="min-w-[1.25rem] rounded-full bg-[#7ec8c9] px-1.5 py-0.5 text-center text-[10px] font-bold text-[#0b2e33]">
                  {badge > 99 ? "99+" : badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 p-3">
        <Link
          href="/"
          className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="size-4" aria-hidden />
          View site
        </Link>
        {userEmail ? <p className="truncate px-3 text-xs text-white/45">{userEmail}</p> : null}
        <form action="/auth/signout" method="post" className="mt-2 px-1">
          <button
            type="submit"
            className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            <LogOut className="size-4" aria-hidden />
            Sign out
          </button>
        </form>
      </div>
    </>
  );
}

export function AdminMobileNav({ badges }: { badges: Badges }) {
  const pathname = usePathname();

  return (
    <div className="-mx-1 flex gap-1 overflow-x-auto pb-1">
      {ADMIN_NAV.map(({ href, label, exact, badgeKey }) => {
        const active = navActive(pathname, href, exact);
        const badge =
          badgeKey === "newLeads"
            ? badges.newLeads
            : badgeKey === "draftPosts"
              ? badges.draftPosts
              : 0;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap",
              active
                ? "bg-[#0d666c] text-white"
                : "bg-[#0b2e33]/6 text-[#0b2e33]/70 hover:bg-[#0b2e33]/10",
            )}
          >
            {label}
            {badge > 0 ? (
              <span className="rounded-full bg-white/25 px-1.5 text-[10px]">{badge}</span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
