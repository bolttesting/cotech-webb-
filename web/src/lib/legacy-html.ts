import fs from "fs";
import path from "path";
import { LEGACY_PAGES } from "./legacy-pages";

/** Legacy page HTML under `web/legacy/` (not repo-root HTML). */
const LEGACY_HTML_DIR = path.join(process.cwd(), "legacy");

const filenameToSlugFromRegistry = (() => {
  if (!fs.existsSync(path.join(process.cwd(), "src/lib/legacy-pages.ts"))) {
    return null;
  }
  const map = new Map<string, string>();
  for (const [slug, file] of Object.entries(LEGACY_PAGES)) {
    map.set(file.toLowerCase(), slug);
  }
  return map;
})();

function slugFromFilename(filename: string): string {
  const base = filename.replace(/\.html$/i, "");
  if (base.toLowerCase() === "index") return "/";
  return `/${base}`;
}

function htmlFilenameToCleanPath(filename: string): string {
  const slug = filenameToSlugFromRegistry?.get(filename.toLowerCase());
  if (slug !== undefined) return slug === "index" ? "/" : `/${slug}`;
  return slugFromFilename(filename);
}

function shouldLeaveHrefUnchanged(href: string): boolean {
  const trimmed = href.trim();
  if (!trimmed) return true;
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return true;
  if (trimmed.startsWith("#")) return true;
  if (trimmed.startsWith("/")) return true;
  return false;
}

function rewriteHrefValue(href: string): string {
  if (shouldLeaveHrefUnchanged(href)) return href;
  const match = href.match(/^(\.\/)?([^/?#]+\.html)(.*)$/i);
  if (!match) return href;
  const filename = match[2];
  const suffix = match[3] ?? "";
  return htmlFilenameToCleanPath(filename) + suffix;
}

/** Rewrite internal legacy `.html` hrefs to Next.js clean paths. */
export function rewriteLegacyLinks(html: string): string {
  return html.replace(/\bhref=(["'])([^"']*)\1/gi, (full, quote: string, href: string) => {
    const next = rewriteHrefValue(href);
    return next === href ? full : `href=${quote}${next}${quote}`;
  });
}

/** Body markup from a legacy `.html` file (scripts stripped). */
export function readLegacyBodyHtml(filename: string): string {
  const filePath = path.join(LEGACY_HTML_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Legacy page not found: ${filename} (expected under web/legacy/)`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return "";
  const body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "").trim();
  return rewriteLegacyLinks(body);
}

