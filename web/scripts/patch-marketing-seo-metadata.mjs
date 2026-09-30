import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const webRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const marketingDir = join(webRoot, "src/app/(marketing)");
const files = execSync(`find ${JSON.stringify(marketingDir)} -name page.tsx`, { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean);

const importRe = /import \{ getMarketingMetadata \} from "@\/lib\/marketing-metadata";/;
const importReplace =
  'import { resolveMarketingMetadata } from "@/lib/seo/page-seo";';

const blockRe =
  /export function generateMetadata\(\): Metadata \{[\s\S]*?getMarketingMetadata\("([^"]+)"\);[\s\S]*?\n\}/;

const dynamicBlockRe =
  /export async function generateMetadata\(\{ params \}: Props\): Promise<Metadata> \{[\s\S]*?getMarketingMetadata\(([^)]+)\);[\s\S]*?\n\}/;

for (const file of files) {
  if (file.includes("/blog/[slug]/")) continue;

  let content = readFileSync(file, "utf8");
  if (!content.includes("getMarketingMetadata")) continue;

  content = content.replace(importRe, importReplace);

  if (dynamicBlockRe.test(content)) {
    content = content.replace(dynamicBlockRe, (match, keyExpr) => {
      return `export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const file = LEGACY_PAGES[page];
  if (!file) return {};
  return resolveMarketingMetadata(file);
}`;
    });
  } else if (blockRe.test(content)) {
    content = content.replace(blockRe, (_, pageKey) => {
      return `export async function generateMetadata(): Promise<Metadata> {
  return resolveMarketingMetadata("${pageKey}");
}`;
    });
  } else {
    console.warn("Skip (no block):", file);
    continue;
  }

  writeFileSync(file, content);
  console.log("Patched", file);
}
