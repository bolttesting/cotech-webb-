import Link from "next/link";
import {
  FileText,
  Inbox,
  PenLine,
  Search,
  Settings,
  Sparkles,
  Globe,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  AdminEmptyRow,
  AdminSection,
  AdminStatCard,
  AdminStatusBadge,
} from "@/components/admin/AdminUi";
import { SupabaseSetupNotice, MigrationNotice } from "@/components/cms/SupabaseSetupNotice";
import type { DashboardSnapshot } from "@/lib/admin/dashboard";
import { MARKETING_SEO_ROUTES } from "@/lib/seo/routes";

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  return new Date(iso).toLocaleDateString();
}

export function DashboardHome({
  data,
  userEmail,
}: {
  data: DashboardSnapshot;
  userEmail?: string | null;
}) {
  const { stats } = data;
  const seoPct =
    stats.seoTotalPages > 0
      ? Math.round((stats.seoOverrides / stats.seoTotalPages) * 100)
      : 0;
  const displayName = userEmail?.split("@")[0] ?? "Admin";

  const attention: { text: string; href: string; tone: "warn" | "info" }[] = [];
  if (stats.newLeads > 0) {
    attention.push({
      text: `${stats.newLeads} new lead${stats.newLeads === 1 ? "" : "s"} to review`,
      href: "/admin/leads?status=new",
      tone: "warn",
    });
  }
  if (stats.draftPosts > 0) {
    attention.push({
      text: `${stats.draftPosts} draft post${stats.draftPosts === 1 ? "" : "s"} not published`,
      href: "/admin/posts?status=draft",
      tone: "info",
    });
  }
  if (seoPct < 30 && stats.seoTotalPages > 0) {
    attention.push({
      text: `Only ${seoPct}% of pages have custom SEO — consider updating key landing pages`,
      href: "/admin/seo",
      tone: "info",
    });
  }

  return (
    <div className="space-y-8">
      {!data.supabaseConfigured ? <SupabaseSetupNotice /> : null}
      {data.schemaMissing ? <MigrationNotice /> : null}

      <div className="rounded-2xl border border-[#0d666c]/15 bg-gradient-to-br from-[#0d666c]/10 via-white to-[#f0f3f5] p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-[#0d666c]">
              <Sparkles className="size-4" aria-hidden />
              Welcome back
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#0b2e33] capitalize">
              {displayName}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#0b2e33]/60">
              Manage contact leads, publish blog content, tune page SEO, and keep site contact details
              up to date — all from one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d666c] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0b2e33]"
            >
              <PenLine className="size-4" aria-hidden />
              New post
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#0b2e33]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b2e33] hover:border-[#0d666c]/35"
            >
              <Globe className="size-4" aria-hidden />
              Contact page
            </Link>
          </div>
        </div>
      </div>

      {attention.length > 0 ? (
        <ul className="space-y-2">
          {attention.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className={
                  item.tone === "warn"
                    ? "flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950 hover:bg-amber-100/80"
                    : "flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-950 hover:bg-sky-100/80"
                }
              >
                <AlertCircle className="size-4 shrink-0 opacity-70" aria-hidden />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          label="New leads"
          value={stats.newLeads}
          hint={`${stats.totalLeads} total inquiries`}
          href="/admin/leads?status=new"
          icon={Inbox}
          accent="teal"
        />
        <AdminStatCard
          label="Published posts"
          value={stats.publishedPosts}
          hint={`${stats.draftPosts} drafts`}
          href="/admin/posts?status=published"
          icon={FileText}
          accent="slate"
        />
        <AdminStatCard
          label="SEO customized"
          value={`${stats.seoOverrides}/${stats.seoTotalPages}`}
          hint={`${seoPct}% of marketing pages`}
          href="/admin/seo"
          icon={Search}
          accent="violet"
        />
        <AdminStatCard
          label="Draft posts"
          value={stats.draftPosts}
          hint={stats.draftPosts ? "Ready to publish?" : "All caught up"}
          href="/admin/posts?status=draft"
          icon={PenLine}
          accent="amber"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <AdminSection
            title="Recent leads"
            description="Latest contact form submissions"
            href="/admin/leads"
          >
            <table className="w-full text-left text-sm">
              <tbody>
                {data.recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-[#0b2e33]/6 last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-medium text-[#0b2e33] hover:text-[#0d666c]"
                      >
                        {lead.name}
                      </Link>
                      <p className="text-xs text-[#0b2e33]/50">{lead.email}</p>
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      <AdminStatusBadge kind="lead" value={lead.status} />
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-[#0b2e33]/50">
                      {relativeTime(lead.created_at)}
                    </td>
                  </tr>
                ))}
                {!data.recentLeads.length ? (
                  <tr>
                    <td colSpan={3}>
                      <AdminEmptyRow message="No leads yet. They will appear when visitors submit the contact form." />
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </AdminSection>

          <AdminSection
            title="Recent posts"
            description="Last updated articles in the CMS"
            href="/admin/posts"
          >
            <table className="w-full text-left text-sm">
              <tbody>
                {data.recentPosts.map((post) => (
                  <tr key={post.id} className="border-b border-[#0b2e33]/6 last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="font-medium text-[#0b2e33] hover:text-[#0d666c]"
                      >
                        {post.title}
                      </Link>
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      <AdminStatusBadge kind="post" value={post.status} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2 text-xs">
                        <span className="text-[#0b2e33]/50">{relativeTime(post.updated_at)}</span>
                        {post.status === "published" ? (
                          <Link href={`/blog/${post.slug}`} className="font-semibold text-[#0d666c]">
                            Live
                          </Link>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
                {!data.recentPosts.length ? (
                  <tr>
                    <td colSpan={3}>
                      <AdminEmptyRow message="No blog posts yet. Create your first article." />
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </AdminSection>
        </div>

        <div className="space-y-6">
          <AdminSection title="Quick actions" description="Common admin tasks">
            <ul className="divide-y divide-[#0b2e33]/6 px-2 pb-2">
              {[
                { href: "/admin/leads", label: "Review leads", icon: Inbox },
                { href: "/admin/posts/new", label: "Write a blog post", icon: PenLine },
                { href: "/admin/seo", label: "Edit page SEO", icon: Search },
                { href: "/admin/settings", label: "Contact & map settings", icon: Settings },
              ].map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#0b2e33] hover:bg-[#f8fafb]"
                  >
                    <Icon className="size-4 text-[#0d666c]" aria-hidden />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </AdminSection>

          <AdminSection title="SEO coverage" description={`${MARKETING_SEO_ROUTES.length} marketing pages`}>
            <div className="px-5 pb-5">
              <div className="mb-2 flex justify-between text-xs font-semibold text-[#0b2e33]/60">
                <span>Custom meta saved</span>
                <span>{seoPct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#0b2e33]/8">
                <div
                  className="h-full rounded-full bg-[#0d666c] transition-all"
                  style={{ width: `${Math.min(100, seoPct)}%` }}
                />
              </div>
              <Link
                href="/admin/seo"
                className="mt-4 inline-block text-sm font-semibold text-[#0d666c] hover:underline"
              >
                Manage all pages →
              </Link>
            </div>
          </AdminSection>

          <AdminSection title="System status">
            <ul className="space-y-3 px-5 pb-5 text-sm">
              <li className="flex items-start gap-2">
                {data.supabaseConfigured ? (
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" aria-hidden />
                ) : (
                  <AlertCircle className="mt-0.5 size-4 text-amber-600" aria-hidden />
                )}
                <span>
                  <span className="font-medium text-[#0b2e33]">Supabase</span>
                  <br />
                  <span className="text-[#0b2e33]/55">
                    {data.supabaseConfigured ? "Connected via .env.local" : "Not configured"}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                {!data.schemaMissing ? (
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" aria-hidden />
                ) : (
                  <AlertCircle className="mt-0.5 size-4 text-amber-600" aria-hidden />
                )}
                <span>
                  <span className="font-medium text-[#0b2e33]">Database schema</span>
                  <br />
                  <span className="text-[#0b2e33]/55">
                    {data.schemaMissing ? "Run pending SQL migrations" : "CMS tables available"}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" aria-hidden />
                <span>
                  <span className="font-medium text-[#0b2e33]">Lead pipeline</span>
                  <br />
                  <span className="text-[#0b2e33]/55">
                    {stats.readLeads} read · {stats.archivedLeads} archived
                  </span>
                </span>
              </li>
            </ul>
          </AdminSection>
        </div>
      </div>
    </div>
  );
}
