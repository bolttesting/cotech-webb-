/**
 * About / Services zigzag steps + About zoom-stack cards (from legacy about.html inline scripts).
 */
function cotechIsNextApp() {
  if (typeof globalThis.__NEXT_DATA__ !== "undefined") return true;
  try {
    return document.documentElement.getAttribute("data-cotech-next") === "1";
  } catch (_e) {
    return false;
  }
}

function cotechDestroyAboutZigzag() {
  if (typeof globalThis.__cotechZigzagDetach === "function") {
    globalThis.__cotechZigzagDetach();
    globalThis.__cotechZigzagDetach = null;
  }
}

function cotechInitAboutZigzag() {
  cotechDestroyAboutZigzag();
  var items = document.querySelectorAll("[data-zigzag]");
  if (!items.length) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    items.forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }

  var pending = Array.prototype.slice.call(items);
  var reveal = function () {
    if (!pending.length) return;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var next = [];
    pending.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > vh * 0.08) {
        el.classList.add("is-in");
      } else {
        next.push(el);
      }
    });
    pending = next;
    if (!pending.length) cotechDestroyAboutZigzag();
  };

  globalThis.__cotechZigzagDetach = function () {
    window.removeEventListener("scroll", reveal);
    window.removeEventListener("resize", reveal);
    if (window.lenis && typeof window.lenis.off === "function") {
      window.lenis.off("scroll", reveal);
    }
  };

  reveal();
  window.addEventListener("scroll", reveal, { passive: true });
  window.addEventListener("resize", reveal);
  if (window.lenis && typeof window.lenis.on === "function") {
    window.lenis.on("scroll", reveal);
  } else {
    var tries = 0;
    var wait = setInterval(function () {
      tries += 1;
      if (window.lenis && typeof window.lenis.on === "function") {
        window.lenis.on("scroll", reveal);
        clearInterval(wait);
      } else if (tries > 40) {
        clearInterval(wait);
      }
    }, 100);
  }
}

function cotechDestroyAboutZoomStack() {
  if (typeof globalThis.__cotechZoomStackCleanup === "function") {
    globalThis.__cotechZoomStackCleanup();
    globalThis.__cotechZoomStackCleanup = null;
  }
}

function cotechInitAboutZoomStack() {
  cotechDestroyAboutZoomStack();
  var root = document.querySelector("[data-zoom-stack]");
  if (!root) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cards = Array.prototype.slice.call(root.querySelectorAll("[data-zs-card]"));
  if (!cards.length) return;

  var smoothTau = parseFloat(root.getAttribute("data-zs-smooth") || "0.26") || 0.26;
  var perspective = parseFloat(root.getAttribute("data-zs-perspective") || "1400") || 1400;
  var cardWidth = parseFloat(root.getAttribute("data-zs-card-width") || "880") || 880;
  var cardHeight = parseFloat(root.getAttribute("data-zs-card-height") || "0.68") || 0.68;
  var radius = parseFloat(root.getAttribute("data-zs-radius") || "22") || 22;
  var peek = parseFloat(root.getAttribute("data-zs-peek") || "26") || 26;
  var scaleStep = parseFloat(root.getAttribute("data-zs-scale-step") || "0.07") || 0.07;
  var blurPx = parseFloat(root.getAttribute("data-zs-blur") || "4") || 4;
  var dim = parseFloat(root.getAttribute("data-zs-dim") || "0.28") || 0.28;
  var depth = parseInt(root.getAttribute("data-zs-depth") || "3", 10) || 3;
  var showProgress = root.getAttribute("data-zs-progress") !== "false";
  var showCounter = root.getAttribute("data-zs-counter") !== "false";

  root.style.setProperty("--zs-w", "min(" + cardWidth + "px, calc(100vw - 2.5rem))");
  root.style.setProperty("--zs-h", "min(calc(100dvh * " + cardHeight + "), 560px)");
  root.style.setProperty("--zs-radius", radius + "px");
  root.style.setProperty("--zs-perspective", perspective + "px");
  root.style.setProperty("--zs-peek", peek + "px");

  var stage = root.querySelector("[data-zs-stage]");
  if (stage) stage.style.perspective = perspective + "px";

  var counterEl = root.querySelector("[data-zs-counter-el]");
  var currentEl = root.querySelector("[data-zs-current]");
  var totalEl = root.querySelector("[data-zs-total]");
  var progressEl = root.querySelector("[data-zs-progress]");
  if (totalEl) totalEl.textContent = String(cards.length).padStart(2, "0");
  if (!showCounter && counterEl) counterEl.hidden = true;
  if (!showProgress && progressEl && progressEl.parentElement) {
    progressEl.parentElement.hidden = true;
  }

  var n = cards.length;
  var scrollSteps = Math.max(1, n - 1);
  var scrollStepVh = window.innerWidth <= 640 ? 64 : 72;

  function pad(i) {
    return String(i + 1).padStart(2, "0");
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function setStackHeight() {
    root.style.setProperty("--zs-scroll-steps", String(scrollSteps));
    root.style.setProperty("--zs-scroll-step", scrollStepVh + "vh");
    root.style.height =
      "calc(100dvh + " + scrollSteps + " * " + scrollStepVh + "vh)";
  }

  var current = 0;
  var target = 0;
  var raf = 0;
  var lastTime = 0;

  function pinOffsetPx() {
    var pin = root.querySelector(".cotech-zoom-stack-pin");
    if (!pin) return 0;
    var top = getComputedStyle(pin).top;
    var val = parseFloat(top) || 0;
    if (top.indexOf("rem") !== -1) {
      val *= parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    }
    return val;
  }

  function scrollTargetIndex() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var pinPx = pinOffsetPx();
    var range = Math.max(1, root.offsetHeight - vh + pinPx);
    var scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    var y = scrollY + pinPx - root.offsetTop;
    y = Math.min(range, Math.max(0, y));
    if (n <= 1) return 0;
    return (y / range) * (n - 1);
  }

  function apply(value) {
    var activeIdx = Math.round(Math.min(n - 1, Math.max(0, value)));
    if (currentEl) currentEl.textContent = pad(activeIdx);
    if (progressEl) {
      var pct = n <= 1 ? 100 : (value / (n - 1)) * 100;
      progressEl.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }

    for (var i = 0; i < n; i++) {
      var card = cards[i];
      var offset = i - value;

      if (offset < -0.001) {
        var leave = Math.min(1, -offset);
        var leaveE = easeOutCubic(leave);
        var scaleOut = 1 + leaveE * 0.065;
        var yOut = -leaveE * (peek * 1.8);
        var opOut = 1 - easeInOutCubic(leave);
        card.style.zIndex = String(Math.max(1, Math.round(20 - leaveE * 18)));
        card.style.transform =
          "translate3d(0," + yOut.toFixed(3) + "px,0) scale(" + scaleOut.toFixed(5) + ")";
        card.style.filter =
          leaveE > 0.02 ? "blur(" + (leaveE * blurPx * 0.85).toFixed(2) + "px)" : "none";
        card.style.opacity = String(Math.max(0, opOut));
        card.style.pointerEvents = "none";
        continue;
      }

      if (offset > depth) {
        card.style.zIndex = "0";
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        card.style.transform =
          "translate3d(0," +
          (peek * depth).toFixed(3) +
          "px,0) scale(" +
          (1 - depth * scaleStep).toFixed(5) +
          ")";
        card.style.filter = "blur(" + (blurPx * depth).toFixed(2) + "px)";
        continue;
      }

      var o = Math.max(0, offset);
      var falloff = o <= 1 ? easeInOutCubic(o) : o;
      var scale = 1 - falloff * scaleStep;
      var y = falloff * peek;
      var blur = falloff * blurPx;
      var opacity = 1 - falloff * dim;
      var abs = Math.abs(offset);

      card.style.zIndex = String(Math.round(100 - o * 10));
      card.style.transform =
        "translate3d(0," + y.toFixed(3) + "px,0) scale(" + scale.toFixed(5) + ")";
      card.style.filter = blur > 0.04 ? "blur(" + blur.toFixed(2) + "px)" : "none";
      card.style.opacity = String(Math.max(0.18, Math.min(1, opacity)));
      card.style.pointerEvents = abs < 0.4 ? "auto" : "none";
    }
  }

  function tick(now) {
    if (!lastTime) lastTime = now;
    var dt = Math.min(0.048, (now - lastTime) / 1000);
    lastTime = now;
    var alpha = 1 - Math.exp(-dt / Math.max(0.08, smoothTau));
    current += (target - current) * alpha;
    if (Math.abs(target - current) < 0.0005) current = target;
    apply(current);
    if (current !== target) raf = requestAnimationFrame(tick);
    else {
      raf = 0;
      lastTime = 0;
    }
  }

  function ensureTick() {
    if (!raf) {
      lastTime = 0;
      raf = requestAnimationFrame(tick);
    }
  }

  function onScroll() {
    if (reduce) return;
    target = scrollTargetIndex();
    ensureTick();
  }

  function onResize() {
    scrollStepVh = window.innerWidth <= 640 ? 64 : 72;
    setStackHeight();
    root.style.setProperty("--zs-h", "min(calc(100dvh * " + cardHeight + "), 560px)");
    onScroll();
  }

  setStackHeight();
  if (reduce) {
    apply(0);
    return;
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  if (globalThis.lenis && typeof globalThis.lenis.on === "function") {
    globalThis.lenis.on("scroll", onScroll);
  }

  globalThis.__cotechZoomStackCleanup = function () {
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    if (globalThis.lenis && typeof globalThis.lenis.off === "function") {
      globalThis.lenis.off("scroll", onScroll);
    }
    cards.forEach(function (card) {
      card.style.transform = "";
      card.style.filter = "";
      card.style.opacity = "";
      card.style.pointerEvents = "";
      card.style.zIndex = "";
    });
    root.style.height = "";
  };
}

function cotechRefreshAboutSections() {
  cotechInitAboutZigzag();
  cotechInitAboutZoomStack();
  if (typeof globalThis.ScrollTrigger !== "undefined" && globalThis.ScrollTrigger.refresh) {
    globalThis.ScrollTrigger.refresh();
  }
}

globalThis.cotechRefreshAboutSections = cotechRefreshAboutSections;

if (!cotechIsNextApp()) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cotechRefreshAboutSections);
  } else {
    cotechRefreshAboutSections();
  }
}
