import { MARKETING_PAGE_METADATA } from "@/lib/marketing-metadata";

/** Marketing routes editable in admin SEO (excludes login/signup). */
export const MARKETING_SEO_ROUTES: { pageKey: string; path: string; label: string }[] =
  Object.keys(MARKETING_PAGE_METADATA)
    .filter((k) => !["login", "signup"].includes(k))
    .map((pageKey) => ({
      pageKey,
      path: pageKey === "index" ? "/" : `/${pageKey}`,
      label: pageKey === "index" ? "Home" : pageKey.replace(/-/g, " "),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

export function pageKeyFromPath(path: string): string {
  if (path === "/" || path === "") return "index";
  return path.replace(/^\//, "").replace(/\/$/, "");
}
