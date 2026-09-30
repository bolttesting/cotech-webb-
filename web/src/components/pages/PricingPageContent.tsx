import Link from "next/link";

export function PricingPageContent() {
  return (
    <main className="bg-background-13 cotech-scoping">
      <section className="cotech-svc-hero" aria-label="Scoping hero">
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
                  Scoping
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                Fixed outcomes. Scope first. Fee in writing.
              </h1>
              <p
                data-text-reveal
                data-delay="0.3"
                className="max-w-[720px] mx-auto"
              >
                We do not publish a public price list. Every engagement starts with a free
                30-minute scoping call, then a Blueprint that locks deliverables and fee before
                build begins.
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
                      >
                        <path
                          d="M7 17L17 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
                        See the process
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        See the process
                      </span>
                    </span>
                    <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
                      >
                        <path
                          d="M7 17L17 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cotech-svc-included cotech-scoping-path" aria-label="How scoping works">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
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
                  The path
                </span>
              </div>
            </div>
            <h2 data-text-reveal data-delay="0.2">
              From first call to a fee you can approve
            </h2>
            <p data-text-reveal data-delay="0.3">
              No public menu of packages. You get a scoped proposal for your bottleneck, credited
              into the build when you proceed.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                01
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Free scoping call</h3>
                <p>
                  Thirty minutes to map the bottleneck, the tools you already pay for, and which
                  one or two services would move numbers first. No pitch deck required.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                02
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Blueprint</h3>
                <p>
                  A documented process map, system audit, and fixed-price proposal. The Blueprint
                  fee is credited in full against the build when you approve.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                03
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Fee in writing</h3>
                <p>
                  Deliverables, milestones, review cycles, and warranty sit in one document before
                  production starts. Nothing is left as a verbal estimate.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                04
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Build with certainty</h3>
                <p>
                  Agreed milestones, two review cycles, go-live training, and a 30-day defect
                  warranty once the system ships.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="cotech-scoping-blueprint" aria-label="What Blueprint covers">
        <div className="main-container">
          <div className="cotech-about-head space-y-3 text-center mb-10">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
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
                  Blueprint
                </span>
              </div>
            </div>
            <h2 data-text-reveal data-delay="0.2">What you walk away with</h2>
            <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">
              Blueprint is the paid planning phase. It is short, written, and designed so build
              does not start on assumptions.
            </p>
          </div>
          <div className="cotech-scoping-grid">
            <article className="cotech-scoping-item" data-scroll-in>
              <h3>Process map</h3>
              <p>
                How enquiries, sales, or ops actually move today, and where work stalls or gets
                retyped.
              </p>
            </article>
            <article className="cotech-scoping-item" data-scroll-in>
              <h3>System audit</h3>
              <p>
                What to keep, replace, or connect across CRM, forms, WhatsApp, ads, and reporting.
              </p>
            </article>
            <article className="cotech-scoping-item" data-scroll-in>
              <h3>Scope &amp; milestones</h3>
              <p>
                Clear deliverables, review points, launch criteria, and ownership after go-live.
              </p>
            </article>
            <article className="cotech-scoping-item" data-scroll-in>
              <h3>Fixed-price proposal</h3>
              <p>One fee for the agreed build path, with Blueprint credited when you proceed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cotech-scoping-prep" aria-label="What to bring">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
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
                    Before the call
                  </span>
                </div>
              </div>
              <h2 data-text-reveal data-delay="0.2">Useful to have ready</h2>
              <p data-ns-animate data-delay="0.3">
                Optional, but it makes the thirty minutes count. We can still start from a blank
                page.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              <li data-scroll-in>
                Where leads or tickets arrive today (web, WhatsApp, ads, email)
              </li>
              <li data-scroll-in>Tools you already pay for (CRM, forms, chat, automation)</li>
              <li data-scroll-in>The one delay or rework loop that hurts most</li>
              <li data-scroll-in>A rough launch window or decision deadline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Book a scoping call">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">Ready when you are</h2>
            <p data-text-reveal data-delay="0.3">
              Tell us what you want to automate, improve, or launch. We will tell you the right
              starting point, whether or not you decide to buy anything.
            </p>
            <div data-ns-animate data-delay="0.4">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
                      >
                        <path
                          d="M7 17L17 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
