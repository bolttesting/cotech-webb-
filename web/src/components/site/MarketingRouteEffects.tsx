"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { kickMarketingScriptsWhenReady } from "@/lib/marketing-script-kick";

/** Re-initialize GSAP / service catalog after route changes (and once after mount). */
export function MarketingRouteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("cotech-js-ready");
    const id = window.setTimeout(() => kickMarketingScriptsWhenReady(), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
