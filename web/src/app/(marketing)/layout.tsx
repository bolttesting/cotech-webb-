import type { ReactNode } from "react";

/**
 * Marketing pages use the original Tailwind build (main.css) + COTech overrides —
 * not the admin Tailwind bundle — so layout and motion stay pixel-identical.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/main.css" precedence="high" />
      <link rel="stylesheet" href="/assets/cotech.css?v=apnav4" precedence="high" />
      <link rel="stylesheet" href="/assets/cotech-next-marketing.css?v=3" precedence="high" />
      {children}
    </>
  );
}
