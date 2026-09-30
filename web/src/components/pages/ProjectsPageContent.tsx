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

function StarEyebrow({ label, variant = "dark" }: { label: string; variant?: "dark" | "light" }) {
  const starClass = variant === "light" ? "fill-white size-4.25" : "fill-primary-500 size-4.25";
  const labelClass =
    variant === "light"
      ? "font-inter-tight text-tagline-2 font-normal text-white/80 uppercase"
      : "font-inter-tight text-tagline-2 font-normal text-secondary uppercase";
  const lineBefore =
    variant === "light"
      ? "before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#fff_100%)]"
      : "before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)]";
  const lineAfter =
    variant === "light"
      ? "after:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0)_100%)]"
      : "after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)]";

  return (
    <div
      className={`relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 ${lineBefore} before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 ${lineAfter} after:opacity-50 after:content-['']`}
    >
      <span className="shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className={starClass}>
          <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
        </svg>
      </span>
      <span className={labelClass}>{label}</span>
    </div>
  );
}

const ENGAGEMENT_STEPS = [
  {
    num: "01",
    title: "Blueprint",
    body: "We map the funnel, operations, tools, constraints, and handoff requirements so the project is properly scoped.",
    image: "/images/cotech-svc-systems.jpg",
  },
  {
    num: "02",
    title: "Build",
    body: "Pages, automations, dashboards, CRM stages, AI flows, and integrations are delivered against the signed scope.",
    image: "/images/cotech-svc-automation.jpg",
  },
  {
    num: "03",
    title: "Go-live",
    body: "We test, document, walk your team through the setup, and cover launch-related fixes during the 30-day warranty window.",
    image: "/images/cotech-svc-web.jpg",
  },
];

const RECEIVE_ITEMS = [
  { num: "01", title: "Fixed-price scope", body: "Defined deliverables before build starts." },
  { num: "02", title: "Two review cycles", body: "Structured feedback without endless drift." },
  {
    num: "03",
    title: "Accounts in your name",
    body: "Access and ownership stay with the client wherever possible.",
  },
  {
    num: "04",
    title: "Handover and warranty",
    body: "Documentation, walkthrough, and 30 days of launch-related fixes.",
  },
];

export function ProjectsPageContent() {
  return (
    <main className="bg-background-13 cotech-projects">
      <section className="cotech-projects-hero" aria-label="Outcomes hero">
        <div className="cotech-projects-hero-media" aria-hidden="true">
          <img src="/images/cotech-svc-systems.jpg" alt="" width={1600} height={900} />
        </div>
        <div className="main-container cotech-projects-hero-inner">
          <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
            <StarEyebrow label="Outcomes" variant="light" />
          </div>
          <h1 data-text-reveal data-delay="0.2">
            How engagements with COTech typically look from scope to go-live
          </h1>
          <p data-text-reveal data-delay="0.3" className="cotech-projects-hero-lead">
            This page is intentionally outcome-led. Instead of named case studies or borrowed logos,
            it shows the kinds of business systems we build and how they are usually delivered.
          </p>
          <div className="cotech-projects-hero-ctas" data-ns-animate data-delay="0.4">
            <Link href="/contact" className="inline-flex w-[80%] md:w-auto">
              <button
                type="button"
                data-button-wrapper
                className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
              >
                <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                  <span className="relative inline-block overflow-hidden leading-none">
                    <span data-button-upper-text className="block text-nowrap">
                      Book a free call
                    </span>
                    <span
                      data-button-lower-text
                      className="absolute left-0 top-full block text-nowrap"
                    >
                      Book a free call
                    </span>
                  </span>
                  <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                    <ArrowButtonIcon />
                  </span>
                </div>
              </button>
            </Link>
            <Link href="/services" className="inline-flex w-[80%] md:w-auto">
              <button
                type="button"
                data-button-wrapper
                className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-white/35 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
              >
                <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-white/10 h-full flex items-center justify-between backdrop-blur-sm">
                  <span className="relative inline-block overflow-hidden leading-none">
                    <span data-button-upper-text className="block text-nowrap">
                      View services
                    </span>
                    <span
                      data-button-lower-text
                      className="absolute left-0 top-full block text-nowrap"
                    >
                      View services
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
      </section>

      <section className="cotech-projects-path" aria-label="Engagement shape">
        <div className="main-container">
          <div className="cotech-about-head space-y-3 text-center">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Engagement shape" />
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Blueprint to build to go-live
            </h2>
            <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">
              A fixed path so scope stays clear and your team knows what ships.
            </p>
          </div>
          <div className="cotech-about-steps" data-zigzag-track>
            {ENGAGEMENT_STEPS.map((step) => (
              <article key={step.num} className="cotech-about-step cotech-zigzag-item" data-zigzag>
                <div className="cotech-zigzag-copy">
                  <span className="cotech-about-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <figure className="cotech-zigzag-media">
                  <img src={step.image} alt="" width={640} height={400} loading="lazy" />
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cotech-projects-cases" aria-label="Selected work" data-projects-feed>
        <div className="main-container">
          <div className="cotech-about-head space-y-3 text-center mb-10">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Selected work" />
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Real engagements, anonymised for the client
            </h2>
            <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">
              Published case studies will appear here from the COTech dashboard. Until then, this
              sample shows the layout and the level of detail we share.
            </p>
          </div>

          <div className="cotech-projects-cases-list" data-projects-list>
            <article
              className="cotech-projects-case"
              data-scroll-in
              data-project-id="sample-clinic-lead"
              data-project-slug="clinic-lead-engine"
            >
              <Link
                href="/project-clinic-lead-engine"
                className="cotech-projects-case-link"
              >
                <figure className="cotech-projects-case-media">
                  <img
                    src="/images/cotech-svc-lead.jpg"
                    alt=""
                    width={960}
                    height={720}
                    loading="lazy"
                  />
                </figure>
                <div className="cotech-projects-case-body">
                  <div className="cotech-projects-case-meta">
                    <span>Healthcare · UAE</span>
                    <span>Lead generation · CRM</span>
                  </div>
                  <h3>Private clinic lead engine</h3>
                  <p>
                    Paid traffic and WhatsApp enquiries were landing in an inbox. We rebuilt capture,
                    routing, and follow-up so the sales desk sees every lead in seconds.
                  </p>
                  <span className="cotech-projects-case-cta">View project →</span>
                </div>
              </Link>
            </article>
          </div>

          <p className="cotech-projects-cases-note" data-projects-empty>
            More client work will publish here automatically once the dashboard goes live.
          </p>
        </div>
      </section>

      <section className="cotech-projects-outcomes" aria-label="Outcome types">
        <div className="main-container">
          <div className="cotech-about-head space-y-3 text-center mb-10">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Outcome types" />
            </div>
            <h2 data-text-reveal data-delay="0.2">Systems we typically deliver</h2>
            <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">
              Start with the bottleneck hurting performance today. Each outcome can stand alone or
              connect into a fuller operating system.
            </p>
          </div>
          <div
            className="cotech-projects-outcome-grid cotech-svc-catalog-grid"
            data-cotech-services-catalog
          />
        </div>
      </section>

      <section
        className="cotech-svc-included cotech-projects-receive"
        aria-label="What clients receive"
      >
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="What you receive" />
            </div>
            <h2 data-text-reveal data-delay="0.2">Fixed terms on every scoped engagement</h2>
            <p data-text-reveal data-delay="0.3">
              Clear ownership, structured reviews, and a proper handover — not open-ended retainers
              dressed as delivery.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            {RECEIVE_ITEMS.map((item) => (
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

      <section className="cotech-projects-cta" aria-label="Book a scoping call">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">
              Need help deciding which outcome fits your current bottleneck?
            </h2>
            <p data-text-reveal data-delay="0.3">
              Book a free 30-minute scoping call and we&apos;ll help you choose the most useful
              first system to build.
            </p>
            <div data-ns-animate data-delay="0.4" className="flex items-center justify-center">
              <Link href="/contact" className="w-[80%] md:w-auto">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Book a free call
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Book a free call
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
