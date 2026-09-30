import { readLegacyMainHtml } from "@/lib/legacy-html";

/** Home page: legacy `<main>` until section-by-section React conversion. */
export function HomePageContent() {
  const html = readLegacyMainHtml("index.html");
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
  );
}
