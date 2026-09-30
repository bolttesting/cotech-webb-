#!/usr/bin/env node
/**
 * Vercel builds with Root Directory = `web`. Symlinks in `public/` → `../../assets`
 * break Next's static copy ("Cannot copy … to a subdirectory of itself").
 * On Vercel only, replace symlinks with real copies from the repo root.
 */
import fs from "fs";
import path from "path";
import { cpSync, copyFileSync } from "fs";

if (process.env.VERCEL !== "1") {
  console.log("[sync-public-static] skipped (local dev keeps public/ symlinks)");
  process.exit(0);
}

const webRoot = process.cwd();
const repoRoot = path.join(webRoot, "..");
const publicDir = path.join(webRoot, "public");

function removeTarget(dest) {
  try {
    const stat = fs.lstatSync(dest);
    if (stat.isSymbolicLink()) fs.unlinkSync(dest);
    else fs.rmSync(dest, { recursive: true, force: true });
  } catch (e) {
    if (e?.code !== "ENOENT") throw e;
  }
}

function copyDir(name) {
  const src = path.join(repoRoot, name);
  const dest = path.join(publicDir, name);
  if (!fs.existsSync(src)) {
    console.warn(`[sync-public-static] missing ${src}`);
    return;
  }
  removeTarget(dest);
  cpSync(src, dest, { recursive: true, dereference: true });
  console.log(`[sync-public-static] copied ${name}/`);
}

function copyFile(name) {
  const src = path.join(repoRoot, name);
  const dest = path.join(publicDir, name);
  if (!fs.existsSync(src)) return;
  removeTarget(dest);
  copyFileSync(src, dest);
  console.log(`[sync-public-static] copied ${name}`);
}

for (const dir of ["assets", "images", "vendor"]) copyDir(dir);
for (const file of ["favicon.ico", "favicon.svg"]) copyFile(file);
