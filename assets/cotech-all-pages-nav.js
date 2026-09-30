/**
 * Premium "All pages" mega menu — same links/icons as template; Team hidden.
 */
function cotechHideTeamLinks() {
  document.querySelectorAll('a[href="./team.html"], a[href="team.html"]').forEach(function (a) {
    var li = a.closest("li");
    if (li) {
      li.classList.add("hidden");
      li.setAttribute("aria-hidden", "true");
    } else {
      a.classList.add("hidden");
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("tabindex", "-1");
    }
  });
}

function cotechCollectMegaMenuItems(menu) {
  var items = [];
  menu.querySelectorAll("ul a[href]").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (/team\.html/i.test(href)) return;
    var li = a.closest("li");
    if (!li) return;
    items.push(li.cloneNode(true));
  });
  return items;
}

function cotechEnhanceAllPagesMega() {
  var menu = document.getElementById("all-pages-mega-menu");
  if (!menu || menu.dataset.cotechApEnhanced === "1") return;

  var items = cotechCollectMegaMenuItems(menu);
  if (!items.length) return;

  menu.dataset.cotechApEnhanced = "1";
  menu.classList.add("cotech-ap-premium");

  var shell = document.createElement("div");
  shell.className = "cotech-ap-premium-shell";

  var aside = document.createElement("aside");
  aside.className = "cotech-ap-premium-aside";
  aside.setAttribute("aria-hidden", "true");
  aside.innerHTML =
    '<div class="cotech-ap-premium-aside-inner">' +
    '<p class="cotech-ap-premium-eyebrow">All pages</p>' +
    '<p class="cotech-ap-premium-aside-title">Scoping, delivery &amp; trust</p>' +
    '<p class="cotech-ap-premium-aside-lede">Links to how we scope work, run projects, connect tools, and handle security and legal.</p>' +
    '<div class="cotech-ap-premium-aside-accent" aria-hidden="true"></div>' +
    "</div>";

  var body = document.createElement("div");
  body.className = "cotech-ap-premium-body";

  var grid = document.createElement("ul");
  grid.className = "cotech-ap-premium-grid";

  items.forEach(function (li) {
    var link = li.querySelector("a");
    if (link) link.classList.add("cotech-ap-premium-link");
    grid.appendChild(li);
  });

  body.appendChild(grid);
  shell.appendChild(aside);
  shell.appendChild(body);

  menu.textContent = "";
  menu.appendChild(shell);
}

function cotechEnhanceAllPagesMobile() {
  var panel = document.querySelector('[data-panel="all-pages"]');
  if (!panel || panel.dataset.cotechApEnhanced === "1") return;

  panel.dataset.cotechApEnhanced = "1";
  panel.classList.add("cotech-ap-mobile-premium");

  var scroll = panel.querySelector(".min-h-0.flex-1");
  if (scroll) scroll.classList.add("cotech-ap-mobile-scroll");
}

function initCotechAllPagesNav() {
  cotechHideTeamLinks();
  cotechEnhanceAllPagesMega();
  cotechEnhanceAllPagesMobile();
}

globalThis.cotechRefreshAllPagesNav = initCotechAllPagesNav;

function cotechIsNextApp() {
  if (typeof globalThis.__NEXT_DATA__ !== "undefined") return true;
  try {
    return document.documentElement.getAttribute("data-cotech-next") === "1";
  } catch (_e) {
    return false;
  }
}
if (!cotechIsNextApp()) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCotechAllPagesNav);
  } else {
    initCotechAllPagesNav();
  }
}
