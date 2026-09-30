import Link from "next/link";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      fill="none"
      className="fill-primary-500 size-4.25"
    >
      <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
    </svg>
  );
}

function CtaArrowIcon() {
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

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div
      data-ns-animate
      data-delay="0.1"
      className="flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
        <span className="shrink-0">
          <StarIcon />
        </span>
        <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

export function ServicesPageContent() {
  return (
    <main className="bg-background-13">
      <section className="cotech-svc-hero">
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
                  <StarIcon />
                </span>
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">
                  Our services
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                Business systems built to capture, convert, and deliver.
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                COTech helps UAE businesses connect enquiries, CRM, automation, AI, and web
                platforms so growth does not depend on manual follow-up and disconnected tools.
              </p>
            </div>
            <div className="cotech-svc-hero-ctas" data-ns-animate data-delay="0.4">
              <Link href="/contact" className="inline-flex w-[80%] md:w-auto">
                <button
                  data-button-wrapper
                  type="button"
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Book a call
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Book a call
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <CtaArrowIcon />
                    </span>
                  </div>
                </button>
              </Link>
              <Link href="/process" className="inline-flex w-[80%] md:w-auto">
                <button
                  data-button-wrapper
                  type="button"
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-background-4 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        How we work
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        How we work
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <CtaArrowIcon />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cotech-svc-catalog">
        <div className="main-container">
          <div className="space-y-10">
            <div className="max-w-[760px] space-y-3 text-center mx-auto">
              <h2 data-text-reveal data-delay="0.2">
                Start with one service or scope the full operating system
              </h2>
              <p data-text-reveal data-delay="0.3">
                Every service can stand alone, but they are designed to connect. Start with the
                bottleneck hurting performance today and build outward from there.
              </p>
            </div>
            <div
              className="cotech-svc-spotlight-grid"
              data-cotech-services-catalog
              data-cotech-services-catalog-variant="spotlight"
            />
          </div>
        </div>
      </section>

      <section className="cotech-svc-work" aria-label="How we work">
        <div className="main-container">
          <div className="cotech-about-head space-y-3 text-center mb-2">
            <SectionEyebrow label="How we work" />
            <h2 data-text-reveal data-delay="0.2">
              The same delivery model across every service line
            </h2>
            <p data-text-reveal data-delay="0.3" className="max-w-[760px] mx-auto">
              Whether you are fixing one handoff or building an end-to-end system, the engagement
              structure stays simple, fixed, and documented.
            </p>
          </div>
          <div className="cotech-about-steps" data-zigzag-track>
            <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
              <div className="cotech-zigzag-copy">
                <span className="cotech-about-step-num" aria-hidden="true">
                  01
                </span>
                <h3>Blueprint</h3>
                <p>
                  Two weeks. We map the process, audit your systems, and return a fixed-price
                  proposal credited in full against the build.
                </p>
              </div>
              <figure className="cotech-zigzag-media">
                <img
                  src="/images/cotech-svc-systems.jpg"
                  alt=""
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </figure>
            </article>
            <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
              <div className="cotech-zigzag-copy">
                <span className="cotech-about-step-num" aria-hidden="true">
                  02
                </span>
                <h3>Build</h3>
                <p>
                  Milestones, deposit to start, and two review cycles included on every
                  deliverable — fixed price in writing.
                </p>
              </div>
              <figure className="cotech-zigzag-media">
                <img
                  src="/images/cotech-svc-automation.jpg"
                  alt=""
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </figure>
            </article>
            <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
              <div className="cotech-zigzag-copy">
                <span className="cotech-about-step-num" aria-hidden="true">
                  03
                </span>
                <h3>Go-live</h3>
                <p>Deployed, tested, and your team trained on it with a 30-day defect warranty.</p>
              </div>
              <figure className="cotech-zigzag-media">
                <img
                  src="/images/cotech-svc-web.jpg"
                  alt=""
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </figure>
            </article>
            <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
              <div className="cotech-zigzag-copy">
                <span className="cotech-about-step-num" aria-hidden="true">
                  04
                </span>
                <h3>Support</h3>
                <p>Optional monitoring, updates, tuning, and a monthly report after launch.</p>
              </div>
              <figure className="cotech-zigzag-media">
                <img
                  src="/images/cotech-svc-crm.jpg"
                  alt=""
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </figure>
            </article>
          </div>
        </div>
      </section>

      <section className="cotech-svc-included" aria-label="Included">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <SectionEyebrow label="Included" />
            <h2 data-text-reveal data-delay="0.2">
              Fixed terms, clear ownership, and proper handover
            </h2>
            <p data-text-reveal data-delay="0.3">
              You keep control of the tools, the accounts, and the documentation. We do the build
              and make sure your team can run it after launch.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                01
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Fixed price</h3>
                <p>Agreed in writing before any work starts.</p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                02
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Two review cycles</h3>
                <p>Included on every deliverable.</p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                03
              </span>
              <div className="cotech-svc-included-copy">
                <h3>30-day warranty</h3>
                <p>Defect fixes after go-live.</p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                04
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Client-owned accounts</h3>
                <p>Third-party accounts kept in your name.</p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                05
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Clean handover</h3>
                <p>Documentation and training for your team.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="xl:py-39 md:py-28 py-18 bg-background-2">
        <div className="main-container">
          <div className="rounded-xl border border-stroke-11/25 bg-white p-6 md:p-10">
            <div className="max-w-[800px] mx-auto text-center space-y-6">
              <div className="space-y-3">
                <h2 data-text-reveal data-delay="0.2">
                  Ready to scope the right service mix?
                </h2>
                <p data-text-reveal data-delay="0.3">
                  Book a free 30-minute scoping call and we will help you decide whether to start
                  with lead capture, CRM, automation, AI, platforms, or the full connected system.
                </p>
              </div>
              <div
                data-ns-animate
                data-delay="0.4"
                className="flex w-full flex-col items-center justify-center gap-y-4 md:w-auto md:flex-row md:gap-x-8 md:gap-y-0"
              >
                <Link href="/contact" className="inline-flex w-[80%] md:w-auto">
                  <button
                    data-button-wrapper
                    type="button"
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
                        <CtaArrowIcon />
                      </span>
                    </div>
                  </button>
                </Link>
                <div className="rounded-xl bg-background-2 px-5 py-4 text-left">
                  <p>
                    <a href="mailto:info@cotechme.com" className="font-medium text-black">
                      info@cotechme.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+971586188058" className="font-medium text-black">
                      +971 58 618 8058
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
