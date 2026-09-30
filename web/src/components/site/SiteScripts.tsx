"use client";

import Script from "next/script";

const VENDOR = [
  "/vendor/leaflet.min.js",
  "/vendor/vanilla-infinite-marquee.min.js",
  "/vendor/split-text.min.js",
  "/vendor/gsap.min.js",
  "/vendor/scroll-trigger.min.js",
  "/vendor/gsap-flip.min.js",
  "/vendor/draw-svg.min.js",
  "/vendor/motion-path.min.js",
  "/vendor/lenis.min.js",
  "/vendor/springer.min.js",
  "/vendor/number-flow.min.js",
  "/vendor/stack-card.min.js",
  "/vendor/swiper.min.js",
  "/vendor/custom-ease.min.js",
  "/vendor/morph-svg.min.js",
];

export function SiteScripts() {
  return (
    <>
      {VENDOR.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
      <Script src="/assets/cotech-services.js?v=svcuni6" strategy="afterInteractive" />
      <Script src="/assets/cotech-about-sections.js?v=about3" strategy="afterInteractive" />
      <Script src="/assets/cotech-all-pages-nav.js?v=apnav6" strategy="afterInteractive" />
      <Script src="/assets/main.js?v=nextkick8" strategy="afterInteractive" />
    </>
  );
}
