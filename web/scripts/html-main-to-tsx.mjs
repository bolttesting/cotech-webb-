#!/usr/bin/env node
import fs from "fs";
import path from "path";

const HREF_MAP = {
  "./index.html": "/",
  "index.html": "/",
  "./about.html": "/about",
  "./services.html": "/services",
  "./projects.html": "/projects",
  "./blog.html": "/blog",
  "./contact.html": "/contact",
  "./team.html": "/team",
  "./pricing.html": "/pricing",
  "./faq.html": "/faq",
  "./process.html": "/process",
  "./features.html": "/features",
  "./integration.html": "/integration",
  "./security.html": "/security",
  "./privacy-policy.html": "/privacy-policy",
  "./terms-conditions.html": "/terms-conditions",
};

function mapHref(href) {
  if (!href || href === "#") return href;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return href;
  return HREF_MAP[href] ?? href.replace(/^\.\//, "/").replace(/\.html$/, "");
}

function isInternalLink(href) {
  if (!href || href === "#") return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return false;
  return true;
}

function extractMain(html) {
  const open = html.match(/<main[\s\S]*?>/i);
  if (!open) throw new Error("no <main>");
  const start = open.index;
  const close = html.indexOf("</main>", start);
  if (close === -1) throw new Error("no </main>");
  return html.slice(start, close + "</main>".length);
}

function convertHtml(html, componentName) {
  let s = html;

  s = s.replace(/\{=\$class\}/g, "");
  s = s.replace(/<\/a\s*\n\s*>/g, "</a>");
  s = s.replace(/(<\/[^>]+)\s*\n\s*>/g, "$1>");

  s = s.replace(/\sclass=/g, " className=");
  s = s.replace(/\sstroke-linecap=/g, " strokeLinecap=");
  s = s.replace(/\sstroke-linejoin=/g, " strokeLinejoin=");
  s = s.replace(/\sstroke-width=/g, " strokeWidth=");
  s = s.replace(/\stabindex=/g, " tabIndex=");
  s = s.replace(/\sfor=/g, " htmlFor=");
  s = s.replace(/src="\.\/images\//g, 'src="/images/');
  s = s.replace(/&amp;/g, "&");

  s = s.replace(/<!--([\s\S]*?)-->/g, (_, inner) => `{/*${inner.trim()} */}`);

  s = s.replace(
    /<li>\s*<a\s+href="\.\/team\.html"/g,
    '<li className="hidden" aria-hidden="true">\n <Link href="/team" tabIndex={-1}'
  );
  s = s.replace(
    /<li><a href="\.\/team\.html"/g,
    '<li className="hidden" aria-hidden="true"><Link href="/team" tabIndex={-1}'
  );

  s = s.replace(/<a\s+([^>]*?)href="([^"]+)"([^>]*)>/g, (match, before, href, after) => {
    if (!isInternalLink(href)) return `<a ${before}href="${href}"${after}>`;
    const mapped = mapHref(href);
    const attrs = `${before}${after}`.trim();
    return `<Link href="${mapped}"${attrs ? ` ${attrs}` : ""}>`;
  });

  const parts = [];
  let i = 0;
  let lastIndex = 0;
  const stack = [];
  const src = s;
  while (i < src.length) {
    const linkMatch = src.slice(i).match(/^<(Link|a)\s/);
    const closeMatch = src.slice(i).match(/^<\/a>/);
    if (linkMatch && (!closeMatch || linkMatch.index <= (closeMatch?.index ?? 0))) {
      const tag = linkMatch[1];
      parts.push(src.slice(lastIndex, i));
      stack.push(tag);
      parts.push(`<${tag} `);
      i += linkMatch[0].length;
      lastIndex = i;
      continue;
    }
    if (closeMatch) {
      parts.push(src.slice(lastIndex, i));
      const closeTag = stack.length ? stack.pop() : "a";
      parts.push(`</${closeTag}>`);
      i += closeMatch[0].length;
      lastIndex = i;
      continue;
    }
    i += 1;
  }
  parts.push(src.slice(lastIndex));
  s = parts.join("");

  s = s.replace(/\stabIndex="-1"/g, " tabIndex={-1}");

  const body = s.trim();

  return `import Link from "next/link";

export function ${componentName}() {
  return (
${body
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
  );
}
`;
}

const repoRoot = path.resolve(import.meta.dirname, "../..");
const pagesDir = path.resolve(import.meta.dirname, "../src/components/pages");

const jobs = [
  {
    html: "service-corporate-websites.html",
    component: "ServiceCorporateWebsitesPageContent",
  },
  {
    html: "service-digital-business-systems.html",
    component: "ServiceDigitalBusinessSystemsPageContent",
  },
  {
    html: "service-sales-calling.html",
    component: "ServiceSalesCallingPageContent",
  },
  {
    html: "service-web-platforms.html",
    component: "ServiceWebPlatformsPageContent",
  },
];

for (const job of jobs) {
  const htmlPath = path.join(repoRoot, job.html);
  const raw = fs.readFileSync(htmlPath, "utf8");
  const main = extractMain(raw);
  const tsx = convertHtml(main, job.component);
  const outPath = path.join(pagesDir, `${job.component}.tsx`);
  fs.writeFileSync(outPath, tsx);
  console.log("Wrote", outPath);
}
