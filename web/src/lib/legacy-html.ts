import fs from "fs";
import path from "path";
import { LEGACY_PAGES } from "./legacy-pages";

const REPO_ROOT = path.join(process.cwd(), "..");

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

/** `<main>...</main>` from a legacy `.html` file (scripts stripped, links rewritten). */
export function readLegacyMainHtml(filename: string): string {
  const filePath = path.join(REPO_ROOT, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Legacy page not found: ${filename}`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const mainMatch = raw.match(/<main[^>]*>[\s\S]*<\/main>/i);
  if (!mainMatch) return "";
  const main = mainMatch[0].replace(/<script[\s\S]*?<\/script>/gi, "").trim();
  return rewriteLegacyAssetPaths(rewriteLegacyLinks(main));
}

/** `./images/...` → `/images/...` for Next clean URLs. */
function rewriteLegacyAssetPaths(html: string): string {
  return html
    .replace(/\bsrc=(["'])\.\/images\//gi, "src=$1/images/")
    .replace(/\bsrcset=(["'])([^"']*)\1/gi, (_full, quote: string, srcset: string) => {
      const next = srcset.replace(/(?:^|,|\s)\.\/images\//g, (m) => m.replace("./", "/"));
      return `srcset=${quote}${next}${quote}`;
    });
}

/** Body markup from a legacy `.html` file (scripts stripped). */
export function readLegacyBodyHtml(filename: string): string {
  const filePath = path.join(REPO_ROOT, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Legacy page not found: ${filename}`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return "";
  const body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "").trim();
  return rewriteLegacyLinks(body);
}

export function legacyPageMetadata(filename: string): { title?: string; description?: string } {
  const filePath = path.join(REPO_ROOT, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const title = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = raw.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1];
  return { title, description };
}
