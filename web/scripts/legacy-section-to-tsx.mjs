#!/usr/bin/env node
/**
 * Extract section N from a legacy `.html` file's <main> and emit a React component.
 * Home `index.html` was removed after full React conversion; point `indexPath` at another file if needed.
 * Usage: node scripts/legacy-section-to-tsx.mjs <sectionIndex> <ComponentName>
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Home is fully React; keep a copy of index.html locally only if re-running this script.
const indexPath = path.join(__dirname, "../legacy/index.html");

function extractSections(mainInner) {
  const sections = [];
  let pos = 0;
  while (pos < mainInner.length) {
    const start = mainInner.slice(pos).search(/<section[\s>]/i);
    if (start === -1) break;
    const i = pos + start;
    let depth = 0;
    let j = i;
    for (; j < mainInner.length; j++) {
      if (/^<section[\s>]/i.test(mainInner.slice(j))) depth++;
      else if (/^<\/section>/i.test(mainInner.slice(j))) {
        depth--;
        if (depth === 0) {
          j += 10;
          break;
        }
      }
    }
    sections.push(mainInner.slice(i, j));
    pos = j;
  }
  return sections;
}

function htmlFilenameToPath(href) {
  const match = href.match(/^(\.\/)?([^/?#]+\.html)(.*)$/i);
  if (!match) return href.startsWith("/") ? href : `/${href}`;
  const base = match[2].replace(/\.html$/i, "");
  const suffix = match[3] ?? "";
  const slug = base.toLowerCase() === "index" ? "" : base;
  return `/${slug}${suffix}`;
}

function escapeJsxCurlyInPreCode(html) {
  return html.replace(/<(pre|code)([\s\S]*?)<\/\1>/gi, (block) =>
    block.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;"),
  );
}

function htmlToJsx(html) {
  let s = escapeJsxCurlyInPreCode(html);
  s = s.replace(/\{=\$class\}/g, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/\bhref=(["'])([^"']+)\1/gi, (_, q, href) => {
    if (/^(https?:|mailto:|tel:|#|\/)/i.test(href.trim())) return `href=${q}${href}${q}`;
    return `href=${q}${htmlFilenameToPath(href)}${q}`;
  });
  s = s.replace(/\bsrc=(["'])\.\/images\//gi, "src=$1/images/");
  s = s.replace(/\bsrcset=(["'])([^"']*)\1/gi, (_, q, val) => {
    return `srcSet=${q}${val.replace(/\.\/images\//g, "/images/")}${q}`;
  });
  const attrMap = {
    class: "className",
    for: "htmlFor",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-width": "strokeWidth",
    "stroke-miterlimit": "strokeMiterlimit",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    viewbox: "viewBox",
    tabindex: "tabIndex",
    readonly: "readOnly",
    maxlength: "maxLength",
    autocomplete: "autoComplete",
  };
  for (const [from, to] of Object.entries(attrMap)) {
    s = s.replace(new RegExp(`\\b${from}=`, "gi"), `${to}=`);
  }
  s = s.replace(/<(img|br|hr|input|meta|link)([^>]*?)(?<!\/)>/gi, (m, tag, attrs) => {
    if (attrs.trim().endsWith("/")) return m;
    return `<${tag}${attrs} />`;
  });
  s = s.replace(/<number-flow([^>]*)><\/number-flow>/gi, "<number-flow$1 />");
  s = s.replace(/<number-flow([^>]*)\s*\/><\/number-flow>/gi, "<number-flow$1 />");
  return s;
}

const sectionIndex = parseInt(process.argv[2], 10);
const componentName = process.argv[3];
if (!sectionIndex || !componentName) {
  console.error("Usage: legacy-section-to-tsx.mjs <1-based sectionIndex> <ComponentName>");
  process.exit(1);
}

const raw = fs.readFileSync(indexPath, "utf8");
const mainMatch = raw.match(/<main[^>]*>([\s\S]*)<\/main>/i);
if (!mainMatch) throw new Error("No <main> in index.html");
const sections = extractSections(mainMatch[1]);
const section = sections[sectionIndex - 1];
if (!section) throw new Error(`Section ${sectionIndex} not found (${sections.length} total)`);

const jsx = htmlToJsx(section);
const needsNumberFlow = jsx.includes("number-flow");

const header = needsNumberFlow
  ? `import type React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "number-flow": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "data-counter-number"?: boolean },
        HTMLElement
      >;
    }
  }
}

`
  : "";

const out = `${header}export function ${componentName}() {
  return (
    <>
${jsx
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </>
  );
}
`;

const outDir = path.join(__dirname, "../src/components/pages/home");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, `${componentName}.tsx`);
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath, section.length, "chars");
