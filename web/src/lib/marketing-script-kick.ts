/** Re-run legacy JS inits after Next.js client navigations (scripts load only once). */

type MarketingWindow = Window & {
  ScrollTrigger?: { refresh: () => void };
  cotechRefreshMarketingPage?: () => void;
  cotechRefreshServiceUI?: () => void;
  cotechRefreshAboutSections?: () => void;
  cotechRefreshAllPagesNav?: () => void;
  cotechObserveScrollIn?: (root: ParentNode) => void;
  lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void };
};

function revealInViewportAnimateNodes() {
  const vh = window.innerHeight;
  document.querySelectorAll("[data-ns-animate]").forEach((el) => {
    const node = el as HTMLElement;
    if (node.getAttribute("data-ns-animate-bound") === "1") return;
    const rect = node.getBoundingClientRect();
    if (rect.top < vh * 0.92 && rect.bottom > vh * 0.06) {
      node.style.opacity = "1";
      node.style.filter = "none";
      node.style.transform = "none";
    }
  });
}

function resetScrollAfterNavigation() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  const w = window as MarketingWindow;
  w.lenis?.scrollTo(0, { immediate: true });
}

export function kickMarketingScripts() {
  if (typeof window === "undefined") return;

  resetScrollAfterNavigation();

  const w = window as MarketingWindow;
  if (!w.cotechRefreshMarketingPage) return;

  w.cotechRefreshMarketingPage?.();
  w.cotechRefreshServiceUI?.();
  w.cotechRefreshAboutSections?.();
  w.cotechRefreshAllPagesNav?.();
  w.cotechObserveScrollIn?.(document);

  window.requestAnimationFrame(() => {
    revealInViewportAnimateNodes();
    w.ScrollTrigger?.refresh();

    document.querySelectorAll(".header-scroll").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
  });

  window.setTimeout(() => {
    w.cotechRefreshMarketingPage?.();
    w.cotechRefreshServiceUI?.();
    w.cotechRefreshAboutSections?.();
    w.cotechObserveScrollIn?.(document);
    w.ScrollTrigger?.refresh();
    revealInViewportAnimateNodes();

    document.querySelectorAll(".header-scroll").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });

    document.documentElement.classList.add("cotech-js-ready");
  }, 200);
}

/** Wait for deferred `main.js` bundle, then kick (after React hydration). */
export function kickMarketingScriptsWhenReady() {
  if (typeof window === "undefined") return;

  let attempts = 0;
  let timer: number | undefined;
  const run = () => {
    attempts += 1;
    const w = window as MarketingWindow;
    if (!w.cotechRefreshMarketingPage) {
      if (attempts > 100 && timer !== undefined) window.clearInterval(timer);
      return;
    }
    kickMarketingScripts();
    if (timer !== undefined) window.clearInterval(timer);
  };

  run();
  timer = window.setInterval(run, 50);
}
