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
    title: "Who this policy covers",
    body: "This page applies to visitors who browse the COTech website, contact us by email, use the inquiry form, or communicate with us about potential or active work.",
  },
  {
    num: "02",
    title: "What we may collect",
    body: "We may receive contact details such as your name, company, email address, phone number, and the message you send us. Basic website analytics, device information, or server logs may also be collected through normal site operation.",
  },
  {
    num: "03",
    title: "How we use it",
    body: "We use inquiry and project information to reply to you, assess fit, prepare scope or proposals, deliver agreed work, support active engagements, and maintain business records.",
  },
  {
    num: "04",
    title: "How long we keep it",
    body: "We keep information for as long as it is reasonably needed for communication, delivery, record-keeping, and compliance, then remove or archive it according to our internal practices.",
  },
  {
    num: "05",
    title: "Third-party tools",
    body: "If we use analytics, hosting, email, CRM, automation, or collaboration tools, relevant information may pass through those providers only as needed to operate the website or deliver services.",
  },
  {
    num: "06",
    title: "Your questions",
    body: (
      <>
        If you want to ask about information you have shared with us, contact{" "}
        <a href="mailto:info@cotechme.com" className="underline">
          info@cotechme.com
        </a>
        .
      </>
    ),
  },
  {
    num: "07",
    title: "Updates",
    body: "We may update this stub as our website, tools, or legal requirements change.",
  },
];

const RELATED_LINKS: { href: string; label: string }[] = [
  { href: "/security", label: "How we protect client engagements" },
  { href: "/terms-conditions", label: "Terms & conditions for website use" },
  { href: "/contact", label: "Book a scoping call" },
  { href: "mailto:info@cotechme.com", label: "Email info@cotechme.com" },
];

export function PrivacyPolicyPageContent() {
  return (
    <main className="bg-background-13 cotech-legal">
      <section className="cotech-svc-hero" aria-label="Privacy policy hero">
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
              <StarEyebrow label="Privacy" />
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                How COTech handles website and inquiry data.
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                A plain-language privacy stub for COTech, a division of CO Consultants, UAE. It
                explains at a high level how website and inquiry data may be handled — not a
                substitute for jurisdiction-specific legal advice.
              </p>
            </div>
            <div className="cotech-svc-hero-ctas" data-ns-animate data-delay="0.4">
              <a href="mailto:info@cotechme.com" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Contact privacy questions
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Contact privacy questions
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <ArrowButtonIcon />
                    </span>
                  </div>
                </button>
              </a>
              <Link href="/security" className="inline-flex w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-background-4 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Security practices
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Security practices
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

      <section className="cotech-svc-included" aria-label="Privacy topics">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Topics" />
            </div>
            <h2 data-text-reveal data-delay="0.2">What this policy covers</h2>
            <p data-text-reveal data-delay="0.3">
              Clear expectations for visitors, inquiries, and how information moves through
              delivery tools.
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

      <section className="cotech-scoping-prep" aria-label="Related pages">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
                <StarEyebrow label="Related" />
              </div>
              <h2 data-text-reveal data-delay="0.2">Related pages</h2>
              <p data-ns-animate data-delay="0.3">
                Security practices and commercial terms sit alongside this privacy stub.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              {RELATED_LINKS.map((link) => (
                <li key={link.href} data-scroll-in>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Contact about privacy">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">Questions about data you have shared?</h2>
            <p data-text-reveal data-delay="0.3">
              Reach out and we will explain how inquiry or project information is handled for your
              case.
            </p>
            <div data-ns-animate data-delay="0.4">
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
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Email info@cotechme.com
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <ArrowButtonIcon />
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
