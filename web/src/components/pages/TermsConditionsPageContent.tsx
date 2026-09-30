import type { ReactNode } from "react";
import Link from "next/link";

function ArrowButtonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
    >
      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarEyebrow({ label }: { label: string }) {
  return (
    <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
      <span className="shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 16"
          fill="none"
          className="fill-primary-500 size-4.25"
        >
          <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
        </svg>
      </span>
      <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">
        {label}
      </span>
    </div>
  );
}

const TOPICS: { num: string; title: string; body: ReactNode }[] = [
  {
    num: "01",
    title: "Website use",
    body: "Content on this website is provided for general information about COTech services. Browsing the site does not create a client relationship by itself.",
  },
  {
    num: "02",
    title: "Project agreements",
    body: "Actual service terms, deliverables, timing, pricing, revision limits, and handover terms are defined in the project-specific agreement or proposal approved by the client.",
  },
  {
    num: "03",
    title: "Fixed-price scope",
    body: "Where a project is sold on a fixed-price basis, that pricing applies to the agreed scope only. Material changes or additions may require a revised quote or change request.",
  },
  {
    num: "04",
    title: "Reviews and approvals",
    body: "Scoped builds include the review cycles agreed in the proposal. Delays in feedback, approvals, or client-side dependencies can affect timelines.",
  },
  {
    num: "05",
    title: "Warranty and support",
    body: "Unless stated otherwise in writing, launch-related bug fixes within the delivered scope are covered for 30 days from handover. Ongoing changes, optimization, and new feature work may be handled under a separate retainer or follow-on scope.",
  },
  {
    num: "06",
    title: "Ownership and access",
    body: "Where possible, accounts and tools should be created in the client's name. Final ownership, licenses, and transfer details are governed by the signed project agreement.",
  },
  {
    num: "07",
    title: "Contact",
    body: (
      <>
        For questions about these terms or an active engagement, contact{" "}
        <a href="mailto:info@cotechme.com" className="underline">
          info@cotechme.com
        </a>
        .
      </>
    ),
  },
];

const BEFORE_ENGAGE_LINKS: { href: string; label: string }[] = [
  { href: "/pricing", label: "How scoping and Blueprint work" },
  { href: "/process", label: "Blueprint → Build → Go-live → Support" },
  { href: "/security", label: "Access and handoff practices" },
  { href: "/privacy-policy", label: "How inquiry data is handled" },
];

export function TermsConditionsPageContent() {
  return (
    <main className="bg-background-13 cotech-legal">
      <section className="cotech-svc-hero" aria-label="Terms and conditions hero">
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
              <StarEyebrow label="Terms" />
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                Clear expectations for website use and engagements.
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                An honest terms stub for COTech, a division of CO Consultants, UAE. It summarizes
                general expectations for website use and prospective work — it does not replace a
                signed proposal, statement of work, or legal agreement.
              </p>
            </div>
            <div className="cotech-svc-hero-ctas" data-ns-animate data-delay="0.4">
              <Link href="/contact" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Book a scoping call
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Book a scoping call
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <ArrowButtonIcon />
                    </span>
                  </div>
                </button>
              </Link>
              <Link href="/privacy-policy" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-background-4 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Privacy policy
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Privacy policy
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <ArrowButtonIcon />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cotech-svc-included" aria-label="Terms topics">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Topics" />
            </div>
            <h2 data-text-reveal data-delay="0.2">What these terms cover</h2>
            <p data-text-reveal data-delay="0.3">
              Website use, scoped builds, reviews, warranty, and ownership — locked in writing per
              engagement.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            {TOPICS.map((item) => (
              <li key={item.num} className="cotech-svc-included-row" data-scroll-in>
                <span className="cotech-svc-included-num" aria-hidden="true">
                  {item.num}
                </span>
                <div className="cotech-svc-included-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cotech-scoping-prep" aria-label="Before you engage">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
                <StarEyebrow label="Before you engage" />
              </div>
              <h2 data-text-reveal data-delay="0.2">Before you engage</h2>
              <p data-ns-animate data-delay="0.3">
                Commercial reality sits in the Blueprint and signed scope — not in this stub alone.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              {BEFORE_ENGAGE_LINKS.map((link) => (
                <li key={link.href} data-scroll-in>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Talk about an engagement">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">Ready to scope a real engagement?</h2>
            <p data-text-reveal data-delay="0.3">
              Share the business problem and systems involved. We will confirm the right starting
              point — Blueprint only or a larger scoped build.
            </p>
            <div data-ns-animate data-delay="0.4">
              <Link href="/contact" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Book a free 30-minute scoping call
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Book a free 30-minute scoping call
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <ArrowButtonIcon />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
