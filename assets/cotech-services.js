/**
 * Service lines registry — edit when offerings change.
 * Visuals source: /Website Visuals/ (deployed copies live in /images/).
 */
function cotechIsNextApp() {
  if (typeof globalThis.__NEXT_DATA__ !== "undefined") return true;
  try {
    return document.documentElement.getAttribute("data-cotech-next") === "1";
  } catch (_e) {
    return false;
  }
}

/** Legacy `./images/...` → `/images/...` on Next.js clean URLs. */
function cotechPublicUrl(path) {
  if (!path) return path;
  if (cotechIsNextApp() && path.indexOf("./") === 0) return path.slice(1);
  return path;
}

/** Legacy `./service-foo.html` → `/service-foo` on Next.js. */
function cotechPageUrl(page) {
  if (!page || !cotechIsNextApp()) return page;
  var m = String(page).match(/^\.\/?([^/?#]+)\.html(\?[^#]*)?(#.*)?$/i);
  if (!m) return page;
  var slug = m[1].toLowerCase();
  var suffix = (m[2] || "") + (m[3] || "");
  if (slug === "index") return "/" + suffix;
  return "/" + slug + suffix;
}

function cotechNormalizeMedia(media) {
  if (!media) return media;
  return {
    mp4: cotechPublicUrl(media.mp4),
    webm: cotechPublicUrl(media.webm),
    gif: cotechPublicUrl(media.gif),
    poster: cotechPublicUrl(media.poster),
    fallback: cotechPublicUrl(media.fallback),
    alt: media.alt,
  };
}

function cotechSvcMedia(base, opts) {
  opts = opts || {};
  var img = "./images/" + base + ".jpg";
  return {
    mp4: "./images/" + base + ".mp4",
    webm: "./images/" + base + ".webm",
    gif: "./images/" + base + ".gif",
    poster: opts.poster || img,
    fallback: opts.fallback || img,
  };
}

globalThis.COTECH_SERVICE_LINES = {
  "lead-generation": {
    title: "Lead Generation",
    page: "./service-lead-generation.html",
    order: "01",
    catalogSummary:
      "Turn traffic into qualified enquiries in front of sales within seconds.",
    media: cotechSvcMedia("cotech-svc-lead", {
      poster: "./images/cotech-svc-lead-poster.jpg",
      fallback: "./images/cotech-svc-lead.jpg",
    }),
  },
  "crm-automation": {
    title: "CRM Automation",
    page: "./service-crm-automation.html",
    order: "02",
    catalogSummary: "Pipeline configured around how the team sells.",
    media: cotechSvcMedia("cotech-svc-crm", {
      poster: "./images/cotech-svc-crm-poster.jpg",
      fallback: "./images/cotech-svc-crm.jpg",
    }),
  },
  "ai-agents": {
    title: "AI Agents",
    page: "./service-ai-agents.html",
    order: "03",
    catalogSummary:
      "Trained assistant on website and WhatsApp to answer, qualify, and book.",
    media: cotechSvcMedia("cotech-svc-ai", {
      poster: "./images/cotech-svc-ai-poster.jpg",
      fallback: "./images/cotech-svc-ai.jpg",
    }),
  },
  "business-automation": {
    title: "Business Automation",
    page: "./service-business-automation.html",
    order: "04",
    catalogSummary: "Connect systems already paid for and stop re-typing.",
    media: cotechSvcMedia("cotech-svc-automation", {
      poster: "./images/cotech-svc-automation-poster.jpg",
      fallback: "./images/cotech-svc-automation.jpg",
    }),
  },
  "web-platforms": {
    title: "Web Platforms",
    page: "./service-web-platforms.html",
    order: "05",
    catalogSummary:
      "Websites and platforms that generate, sell, or replace spreadsheets.",
    media: cotechSvcMedia("cotech-svc-web", {
      poster: "./images/cotech-svc-web-poster.jpg",
      fallback: "./images/cotech-svc-web.jpg",
    }),
  },
  "digital-business-systems": {
    title: "Digital Business Systems",
    page: "./service-digital-business-systems.html",
    order: "06",
    catalogSummary: "Acquisition, sales, and service as one connected system.",
    media: cotechSvcMedia("cotech-svc-systems", {
      poster: "./images/cotech-svc-systems-poster.jpg",
      fallback: "./images/cotech-svc-systems.jpg",
    }),
  },
  "sales-calling": {
    title: "Centralised Sales Calling",
    page: "./service-sales-calling.html",
    order: "07",
    catalogSummary:
      "UAE business numbers with recording, AI summaries, and CRM logging.",
    media: cotechSvcMedia("cotech-svc-sales-calling"),
  },
  "corporate-websites": {
    title: "Corporate Websites",
    page: "./service-corporate-websites.html",
    order: "08",
    catalogSummary:
      "Professional company sites with bilingual support and CRM-connected enquiries.",
    media: cotechSvcMedia("cotech-svc-corporate-web"),
  },
  "whatsapp-lead-capture": {
    title: "WhatsApp Lead Capture",
    page: "./contact.html",
    order: "09",
    catalogSummary:
      "One tap from the site into WhatsApp with source tagging and CRM logging.",
    media: cotechSvcMedia("cotech-whatsapp-lead-capture"),
  },
  "ai-whatsapp-agent": {
    title: "AI WhatsApp Agent",
    page: "./contact.html",
    order: "10",
    catalogSummary:
      "After-hours qualification and booking on WhatsApp with human handoff.",
    media: cotechSvcMedia("cotech-ai-whatsapp-agent"),
  },
  "system-integrations": {
    title: "System Integrations",
    page: "./contact.html",
    order: "11",
    catalogSummary:
      "Website, WhatsApp, payments, and accounting synced into one CRM record.",
    media: cotechSvcMedia("cotech-system-integrations"),
  },
  "lead-gen-websites": {
    title: "Lead-Gen Websites",
    page: "./contact.html",
    order: "12",
    catalogSummary:
      "Conversion-focused sites with fast mobile performance and tracked enquiries.",
    media: cotechSvcMedia("cotech-lead-gen-websites"),
  },
  "quote-automation": {
    title: "Quote Automation",
    page: "./contact.html",
    order: "13",
    catalogSummary:
      "CRM deal data turned into VAT-correct quotes sent, viewed, and accepted online.",
    media: cotechSvcMedia("cotech-quote-automation"),
  },
  "executive-dashboards": {
    title: "Executive Dashboards",
    page: "./contact.html",
    order: "14",
    catalogSummary:
      "Live KPIs, revenue vs target, lead sources, and team performance.",
    media: cotechSvcMedia("cotech-executive-dashboards"),
  },
  "connected-operations": {
    title: "Connected Operations",
    page: "./contact.html",
    order: "15",
    catalogSummary:
      "One customer journey automated across capture, sales, delivery, and billing.",
    media: cotechSvcMedia("cotech-connected-operations"),
  },
};

function cotechListServiceLines() {
  var lines = globalThis.COTECH_SERVICE_LINES;
  if (!lines) return [];
  return Object.keys(lines)
    .map(function (key) {
      var row = lines[key];
      row._key = key;
      return row;
    })
    .filter(function (row) {
      return row.page && !row.hidden;
    })
    .sort(function (a, b) {
      return String(a.order || "").localeCompare(String(b.order || ""), undefined, {
        numeric: true,
      });
    });
}

function cotechResolveServiceMedia(main) {
  if (!main) return null;
  var gif = main.getAttribute("data-svc-media") || "";
  var mp4 = main.getAttribute("data-svc-media-mp4") || "";
  var webm = main.getAttribute("data-svc-media-webm") || "";
  var fallback =
    main.getAttribute("data-svc-media-fallback") ||
    main.getAttribute("data-svc-media-poster") ||
    "";
  var poster = main.getAttribute("data-svc-media-poster") || fallback;
  var alt = main.getAttribute("data-svc-media-alt") || "";
  var id = main.getAttribute("data-svc-id");
  var lines = globalThis.COTECH_SERVICE_LINES;
  if (id && lines && lines[id]) {
    var entry = lines[id];
    var m = entry.media || {};
    if (!mp4) mp4 = m.mp4 || "";
    if (!webm) webm = m.webm || "";
    if (!gif) gif = m.gif || m.src || "";
    if (!fallback) fallback = m.fallback || m.poster || "";
    if (!poster) poster = m.poster || fallback;
    if (!alt) alt = entry.title || "";
  }
  if (!mp4 && !webm && !gif) return null;
  return cotechNormalizeMedia({
    mp4: mp4,
    webm: webm,
    gif: gif,
    fallback: fallback,
    poster: poster,
    alt: alt,
  });
}

function cotechMountServiceMediaFigure(figure, media) {
  if (!figure) return;
  media = cotechNormalizeMedia(media);
  if (figure.querySelector("img, video")) {
    var needsRemount =
      cotechIsNextApp() &&
      Array.prototype.slice
        .call(figure.querySelectorAll("source, img"))
        .some(function (el) {
          var s = el.getAttribute("src") || el.src || "";
          return s.indexOf("./") === 0;
        });
    if (!needsRemount) return;
    figure.textContent = "";
  }

  var poster = media.poster || media.fallback;
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce && media.mp4) {
    var video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.preload = "metadata";
    if (poster) video.poster = poster;
    if (media.alt) video.setAttribute("aria-label", media.alt);
    if (media.webm) {
      var sWebm = document.createElement("source");
      sWebm.src = media.webm;
      sWebm.type = "video/webm";
      video.appendChild(sWebm);
    }
    var sMp4 = document.createElement("source");
    sMp4.src = media.mp4;
    sMp4.type = "video/mp4";
    video.appendChild(sMp4);
    video.addEventListener("error", function () {
      if (video.dataset.fallbackApplied || !media.gif) return;
      video.dataset.fallbackApplied = "1";
      video.replaceWith(cotechCreateServiceMediaImg(media));
    });
    figure.appendChild(video);
    return;
  }

  figure.appendChild(cotechCreateServiceMediaImg(media));
}

function cotechCreateServiceMediaImg(media) {
  var img = document.createElement("img");
  img.src = reduceGifOrPoster(media);
  img.alt = media.alt || "";
  img.width = 864;
  img.height = 864;
  img.loading = "lazy";
  img.decoding = "async";
  if (media.fallback && media.gif) {
    img.addEventListener("error", function onErr() {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "1";
      img.src = media.fallback;
    });
  }
  return img;
}

function reduceGifOrPoster(media) {
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !media.gif) return media.poster || media.fallback || media.gif;
  return media.gif;
}

function cotechInitServiceDetailMedia() {
  var main = document.querySelector("main.cotech-svc-detail");
  var media = cotechResolveServiceMedia(main);
  if (!media) return;
  main.querySelectorAll("[data-svc-media-mount]").forEach(function (figure) {
    cotechMountServiceMediaFigure(figure, media);
  });
}

function cotechBuildSpotlightColumn(row) {
  var m = row.media || {};
  var poster = cotechPublicUrl(m.fallback || m.poster || "");
  var col = document.createElement("div");

  var shell = document.createElement("div");
  shell.setAttribute("data-spotlight-card", "");
  shell.className =
    "w-full relative overflow-hidden rounded-xl will-change-transform";

  var a = document.createElement("a");
  a.href = cotechPageUrl(row.page);
  a.className = "block size-full relative";

  var figure = document.createElement("figure");
  figure.className = "size-full overflow-hidden";
  var img = document.createElement("img");
  img.src = poster;
  img.alt = row.title || "";
  img.className = "size-full object-cover";
  img.loading = "lazy";
  figure.appendChild(img);

  var grad = document.createElement("div");
  grad.className =
    "pointer-events-none select-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_75.12%,#000_99.96%)]";

  var text = document.createElement("div");
  text.className =
    "absolute bottom-6 left-6 z-10 flex flex-wrap items-end gap-x-4 gap-y-1 max-w-[92%]";
  var h3 = document.createElement("h3");
  h3.className = "text-heading-5 text-white shrink-0";
  h3.textContent = row.title || "";
  var sub = document.createElement("p");
  sub.className = "text-tagline-2 text-white line-clamp-2";
  sub.textContent = row.catalogSummary || "";
  text.appendChild(h3);
  text.appendChild(sub);

  a.appendChild(figure);
  a.appendChild(grad);
  a.appendChild(text);
  shell.appendChild(a);
  col.appendChild(shell);
  return col;
}

function cotechBuildServiceCard(row) {
  var m = row.media || {};
  var poster = cotechPublicUrl(m.fallback || m.poster || m.gif || "");
  var a = document.createElement("a");
  a.href = cotechPageUrl(row.page);
  a.className = "cotech-svc-card";
  a.setAttribute("data-scroll-in", "");

  var fig = document.createElement("figure");
  fig.className = "cotech-svc-card-media";
  var img = document.createElement("img");
  img.src = poster;
  img.alt = row.title || "";
  img.width = 864;
  img.height = 1152;
  img.loading = "lazy";
  fig.appendChild(img);

  var body = document.createElement("div");
  body.className = "cotech-svc-card-body";

  var meta = document.createElement("div");
  meta.className = "cotech-svc-card-meta";
  var num = document.createElement("span");
  num.className = "font-inter-tight text-tagline-1 font-normal";
  num.textContent = row.order || "";
  meta.appendChild(num);

  var copy = document.createElement("div");
  copy.className = "space-y-2";
  var h3 = document.createElement("h3");
  h3.className = "text-heading-5";
  h3.textContent = row.title || "";
  var p = document.createElement("p");
  p.textContent = row.catalogSummary || "";
  copy.appendChild(h3);
  copy.appendChild(p);

  var cta = document.createElement("span");
  cta.className = "cotech-svc-card-cta";
  cta.textContent =
    row.page.indexOf("contact.html") !== -1
      ? "Discuss this →"
      : "Explore service →";

  body.appendChild(meta);
  body.appendChild(copy);
  body.appendChild(cta);
  a.appendChild(fig);
  a.appendChild(body);
  return a;
}

function cotechInitServicesCatalog() {
  var grids = document.querySelectorAll("[data-cotech-services-catalog]");
  if (!grids.length) return;
  var items = cotechListServiceLines();

  grids.forEach(function (grid) {
    grid.textContent = "";
    var useSpotlight =
      grid.getAttribute("data-cotech-services-catalog-variant") === "spotlight" ||
      grid.classList.contains("cotech-svc-spotlight-grid");
    items.forEach(function (row) {
      if (useSpotlight) {
        grid.appendChild(cotechBuildSpotlightColumn(row));
      } else {
        grid.appendChild(cotechBuildServiceCard(row));
      }
    });
  });

  cotechObserveScrollIn(grids.length === 1 ? grids[0] : document);
}

function cotechInitServicesSpotlight() {
  var mount = document.querySelector("[data-cotech-services-spotlight]");
  if (!mount) return;
  var limit = parseInt(mount.getAttribute("data-cotech-services-limit") || "0", 10);
  var items = cotechListServiceLines();
  if (limit > 0) items = items.slice(0, limit);
  mount.textContent = "";

  items.forEach(function (row) {
    mount.appendChild(cotechBuildSpotlightColumn(row));
  });
}

function cotechInitServicesNav() {
  document.querySelectorAll("[data-cotech-services-nav]").forEach(function (ul) {
    ul.textContent = "";

    var navLimit = parseInt(ul.getAttribute("data-cotech-services-nav-limit") || "0", 10);
    if (!navLimit) {
      var bi = document.createElement("li");
      var biA = document.createElement("a");
      biA.href = cotechPageUrl("./services.html");
      biA.className = "footer-link-v2";
      biA.textContent = "All services";
      bi.appendChild(biA);
      ul.appendChild(bi);
    }
    var navItems = cotechListServiceLines();
    if (navLimit > 0) navItems = navItems.slice(0, navLimit);

    navItems.forEach(function (row) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = cotechPageUrl(row.page);
      a.className = "footer-link-v2";
      a.textContent = row.title || "";
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
}

function cotechDestroyScrollIn() {
  if (typeof globalThis.__cotechScrollInDetach === "function") {
    globalThis.__cotechScrollInDetach();
    globalThis.__cotechScrollInDetach = null;
  }
}

function cotechObserveScrollIn(root) {
  cotechDestroyScrollIn();
  var scope = root && root.querySelectorAll ? root : document;
  var items = scope.querySelectorAll
    ? scope.querySelectorAll("[data-scroll-in]:not(.is-in)")
    : document.querySelectorAll("[data-scroll-in]:not(.is-in)");
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

  if (typeof IntersectionObserver === "undefined") {
    items.forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );

  items.forEach(function (el) {
    io.observe(el);
  });

  globalThis.__cotechScrollInDetach = function () {
    io.disconnect();
  };

  var syncInView = function () {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    items.forEach(function (el) {
      if (el.classList.contains("is-in")) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > vh * 0.06) {
        el.classList.add("is-in");
        io.unobserve(el);
      }
    });
  };
  requestAnimationFrame(function () {
    requestAnimationFrame(syncInView);
  });
}

globalThis.cotechObserveScrollIn = cotechObserveScrollIn;

function initCotechServiceLines() {
  cotechInitServiceDetailMedia();
  cotechInitServicesCatalog();
  cotechInitServicesSpotlight();
  cotechInitServicesNav();
  cotechObserveScrollIn(document);
}

globalThis.cotechRefreshServiceUI = initCotechServiceLines;

if (!cotechIsNextApp()) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCotechServiceLines);
  } else {
    initCotechServiceLines();
  }
}
