"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    L?: {
      map: (
        el: HTMLElement,
        opts: Record<string, unknown>,
      ) => {
        setView: (
          coords: [number, number],
          zoom: number,
        ) => {
          on: (event: string, fn: () => void) => void;
          invalidateSize: () => void;
          remove: () => void;
        };
      };
      tileLayer: (
        url: string,
        opts: Record<string, unknown>,
      ) => { addTo: (map: unknown) => void };
      marker: (coords: [number, number]) => {
        addTo: (map: unknown) => {
          bindPopup: (popup: unknown) => { openPopup: () => void };
        };
      };
      popup: (opts: Record<string, unknown>) => {
        setLatLng: (coords: [number, number]) => {
          setContent: (html: string) => {
            openPopup: () => void;
          };
        };
      };
    };
    cotechObserveScrollIn?: (root: Document | Element) => void;
  }
}

function initContactMap() {
  const el = document.getElementById("cotech-contact-map");
  const showBtn = document.getElementById("cotech-map-show-popup");
  if (!el || !window.L) return null;

  const L = window.L;
  const lat = 25.1867;
  const lng = 55.2744;
  const map = L.map(el, {
    scrollWheelZoom: false,
    attributionControl: true,
  }).setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([lat, lng]).addTo(map);
  const popupHtml =
    '<div class="cotech-map-popup">' +
    "<h3>COTech UAE</h3>" +
    "<p>Business Intelligence Solutions — a division of CO Consultants. Meetings by appointment.</p>" +
    '<a href="mailto:info@cotechme.com">info@cotechme.com</a>' +
    "</div>";

  const popup = L.popup({
    closeButton: true,
    autoClose: false,
    closeOnClick: false,
    maxWidth: 280,
    className: "cotech-leaflet-popup",
  })
    .setLatLng([lat, lng])
    .setContent(popupHtml);

  function openPopup() {
    marker.bindPopup(popup).openPopup();
    if (showBtn) showBtn.hidden = true;
  }

  function onPopupClose() {
    if (showBtn) showBtn.hidden = false;
  }

  map.on("popupclose", onPopupClose);
  openPopup();

  if (showBtn) {
    showBtn.addEventListener("click", openPopup);
  }

  const invalidateTimer = window.setTimeout(() => {
    map.invalidateSize();
  }, 200);
  const onResize = () => map.invalidateSize();
  window.addEventListener("resize", onResize);

  return () => {
    window.clearTimeout(invalidateTimer);
    window.removeEventListener("resize", onResize);
    if (showBtn) showBtn.removeEventListener("click", openPopup);
    map.remove();
  };
}

export function ContactPageContent() {
  useEffect(() => {
    window.cotechObserveScrollIn?.(document);

    let cleanup: (() => void) | null = null;
    let attempts = 0;
    const tryMap = () => {
      if (window.L) {
        cleanup = initContactMap();
        return true;
      }
      return false;
    };

    if (!tryMap()) {
      const interval = window.setInterval(() => {
        attempts += 1;
        if (tryMap() || attempts > 50) {
          window.clearInterval(interval);
        }
      }, 100);
      return () => {
        window.clearInterval(interval);
        cleanup?.();
      };
    }

    return () => cleanup?.();
  }, []);

  return (
    <main className="bg-background-13 cotech-contact">
      <section className="cotech-svc-hero" aria-label="Contact hero">
        <div className="main-container">
          <div className="cotech-svc-hero-inner space-y-6">
            <img
              src="/images/logo/main-logo.svg"
              alt="COTech"
              className="cotech-svc-hero-brand"
              data-ns-animate
              data-delay="0.05"
            />
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                <span className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
                    <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                  </svg>
                </span>
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Contact</span>
              </div>
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                Book a free 30-minute scoping call
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                Tell us what you want to launch, automate, or clean up. We will review the bottleneck, outline the likely next step, and tell you honestly if we are a fit.
              </p>
            </div>
            <div className="cotech-svc-hero-ctas" data-ns-animate data-delay="0.4">
              <a href="#inquiry" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Send an inquiry
                      </span>
                      <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
                        Send an inquiry
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
                        <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </button>
              </a>
              <a
                href="https://wa.me/971586188058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-[80%] md:w-auto"
              >
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-background-4 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        WhatsApp us
                      </span>
                      <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
                        WhatsApp us
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
                        <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cotech-svc-included" aria-label="Direct channels">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                <span className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
                    <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                  </svg>
                </span>
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Reach us</span>
              </div>
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Three ways to start the conversation.
            </h2>
            <p data-text-reveal data-delay="0.3">
              Use the form below, or contact the team directly. Temporary phone and WhatsApp numbers will be replaced with live lines.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                01
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@cotechme.com">info@cotechme.com</a> — best for briefs, files, and follow-ups.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                02
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+971586188058">+971 58 618 8058</a> — for a quick scheduling conversation.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                03
              </span>
              <div className="cotech-svc-included-copy">
                <h3>WhatsApp</h3>
                <p>
                  <a href="https://wa.me/971586188058" target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>{" "}
                  — fastest for short questions and call booking.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="inquiry" className="cotech-contact-form-section" aria-label="Inquiry form">
        <div className="main-container">
          <div className="cotech-contact-form-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                <span className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
                    <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                  </svg>
                </span>
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Inquiry</span>
              </div>
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Send the brief in writing
            </h2>
            <p data-text-reveal data-delay="0.3">
              Share what you want to improve, automate, or launch. We reply with next-step clarity — not a sales script.
            </p>
          </div>
          <div data-ns-animate data-delay="0.35" className="cotech-contact-form-panel">
            <form action="mailto:info@cotechme.com" method="post" encType="text/plain" className="cotech-contact-form">
              <div className="cotech-contact-form-grid">
                <div className="cotech-contact-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required autoComplete="name" />
                </div>
                <div className="cotech-contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" name="phone" placeholder="Best number to reach you" autoComplete="tel" />
                </div>
                <div className="cotech-contact-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" />
                </div>
                <div className="cotech-contact-field">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company or business name" autoComplete="organization" />
                </div>
              </div>
              <div className="cotech-contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="What are you trying to improve, automate, or launch?"
                  required
                />
              </div>
              <p className="cotech-contact-form-note">
                This form opens your email app via mailto. For a live backend later, swap this endpoint without changing the layout.
              </p>
              <button
                type="submit"
                data-button-wrapper
                className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full sm:w-auto"
              >
                <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                  <span className="relative inline-block overflow-hidden leading-none">
                    <span data-button-upper-text className="block text-nowrap">
                      Send inquiry
                    </span>
                    <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
                      Send inquiry
                    </span>
                  </span>
                  <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
                      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="cotech-contact-map-section" aria-label="Office location map">
        <div className="main-container">
          <div className="cotech-contact-form-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                <span className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
                    <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                  </svg>
                </span>
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Location</span>
              </div>
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Based in the UAE
            </h2>
            <p data-text-reveal data-delay="0.3">
              COTech operates from Dubai. Meetings are by appointment — online or on-site after scoping.
            </p>
          </div>
          <div data-ns-animate data-delay="0.35" className="cotech-contact-map-wrap">
            <div id="cotech-contact-map" className="cotech-contact-map" role="region" aria-label="Map of COTech UAE location" />
            <button type="button" id="cotech-map-show-popup" className="cotech-contact-map-show" hidden>
              Show popup
            </button>
          </div>
        </div>
      </section>

      <section className="cotech-scoping-prep" aria-label="Before the call">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
                <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                  <span className="shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
                      <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                    </svg>
                  </span>
                  <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Before the call</span>
                </div>
              </div>
              <h2 data-text-reveal data-delay="0.2">
                Useful before we speak
              </h2>
              <p data-ns-animate data-delay="0.3">
                You do not need a perfect brief. A few notes make the call sharper.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              <li data-scroll-in>Current tools, lead sources, or systems involved</li>
              <li data-scroll-in>Where response, reporting, or handoff slows down</li>
              <li data-scroll-in>Launch target or urgency if there is one</li>
              <li data-scroll-in>Whether you want Blueprint only or a larger scoped build</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Prefer direct contact">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">
              Prefer not to use the form?
            </h2>
            <p data-text-reveal data-delay="0.3">
              Email the team or message WhatsApp. Same goal — a clear next step for your business system.
            </p>
            <div data-ns-animate data-delay="0.4" className="cotech-svc-hero-ctas" style={{ justifyContent: "center" }}>
              <a href="mailto:info@cotechme.com" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Email info@cotechme.com
                      </span>
                      <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
                        Email info@cotechme.com
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
                        <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
