import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminStatCard({
  label,
  value,
  href,
  hint,
  icon: Icon,
  accent = "teal",
}: {
  label: string;
  value: number | string;
  href: string;
  hint?: string;
  icon: LucideIcon;
  accent?: "teal" | "amber" | "slate" | "violet";
}) {
  const accents = {
    teal: "from-[#0d666c]/12 to-white text-[#0d666c]",
    amber: "from-amber-100/80 to-white text-amber-800",
    slate: "from-[#0b2e33]/8 to-white text-[#0b2e33]",
    violet: "from-violet-100/80 to-white text-violet-800",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#0b2e33]/8 bg-gradient-to-br p-5 shadow-sm transition",
        "hover:border-[#0d666c]/25 hover:shadow-md",
        accents[accent],
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums">{value}</p>
          {hint ? <p className="mt-1 text-xs opacity-60">{hint}</p> : null}
        </div>
        <span className="rounded-xl bg-white/80 p-2.5 shadow-sm ring-1 ring-black/5">
          <Icon className="size-5 opacity-80" aria-hidden />
        </span>
      </div>
      <span className="mt-3 inline-block text-xs font-semibold opacity-0 transition group-hover:opacity-100">
        Open →
      </span>
    </Link>
  );
}

export function AdminSection({
  title,
  description,
  href,
  linkLabel = "View all",
  children,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#0b2e33]/8 bg-white shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#0b2e33]/6 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-[#0b2e33]">{title}</h2>
          {description ? <p className="mt-0.5 text-sm text-[#0b2e33]/55">{description}</p> : null}
        </div>
        {href ? (
          <Link href={href} className="text-sm font-semibold text-[#0d666c] hover:underline">
            {linkLabel}
          </Link>
        ) : null}
      </div>
      <div className="p-1">{children}</div>
    </section>
  );
}

export function AdminStatusBadge({
  kind,
  value,
}: {
  kind: "lead" | "post";
  value: string;
}) {
  const v = value.toLowerCase();
  let className = "bg-[#0b2e33]/8 text-[#0b2e33]/65";

  if (kind === "lead") {
    if (v === "new") className = "bg-[#0d666c]/15 text-[#0d666c]";
    else if (v === "read") className = "bg-sky-100 text-sky-800";
    else if (v === "archived") className = "bg-[#0b2e33]/10 text-[#0b2e33]/50";
  } else if (kind === "post") {
    if (v === "published") className = "bg-emerald-100 text-emerald-800";
    else if (v === "draft") className = "bg-amber-100 text-amber-900";
  }

  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase", className)}>
      {value}
    </span>
  );
}

export function AdminEmptyRow({ message }: { message: string }) {
  return (
    <p className="px-4 py-10 text-center text-sm text-[#0b2e33]/50">{message}</p>
  );
}

export function AdminFilterTabs({
  basePath,
  tabs,
  current,
}: {
  basePath: string;
  current: string;
  tabs: { id: string; label: string; count?: number }[];
}) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = current === tab.id;
        const href = tab.id === "all" ? basePath : `${basePath}?status=${tab.id}`;
        return (
          <Link
            key={tab.id}
            href={href}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition",
              active
                ? "bg-[#0d666c] text-white shadow-sm"
                : "border border-[#0b2e33]/12 bg-white text-[#0b2e33]/70 hover:border-[#0d666c]/30",
            )}
          >
            {tab.label}
            {typeof tab.count === "number" ? (
              <span
                className={cn(
                  "rounded-full px-1.5 text-[10px]",
                  active ? "bg-white/20" : "bg-[#0b2e33]/8",
                )}
              >
                {tab.count}
              </span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}

export function AdminBreadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  if (items.length <= 1) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[#0b2e33]/55">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="font-medium text-[#0d666c] hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#0b2e33]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
