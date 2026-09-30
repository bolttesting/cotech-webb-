import { readLegacyMainHtml } from "@/lib/legacy-html";

/** Blog index: legacy `<main>` from `blog.html` until full React conversion. */
export function BlogPageContent() {
  const html = readLegacyMainHtml("blog.html");
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
  );
}
