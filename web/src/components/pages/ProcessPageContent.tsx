import Link from "next/link";

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

function SectionBadge({ label }: { label: string }) {
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

export function ProcessPageContent() {
  return (
    <main className="bg-background-13 cotech-process">
      <section className="cotech-svc-hero" aria-label="Process hero">
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
              <SectionBadge label="Process" />
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                From scope to a live business system.
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                Every COTech engagement moves through Blueprint, Build, Go-live, and Support. You
                always know what happens first, what ships next, and how the system is maintained
                after launch.
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
                      <CtaArrowIcon />
                    </span>
                  </div>
                </button>
              </Link>
              <Link href="/pricing" className="inline-flex w-[80%] md:w-auto">
                <button
                  data-button-wrapper
                  type="button"
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-background-4 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        How scoping works
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        How scoping works
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

      <section className="cotech-svc-included" aria-label="Four steps">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <SectionBadge label="The path" />
            </div>
            <h2 data-text-reveal data-delay="0.2">
              Four steps. No guessing mid-build.
            </h2>
            <p data-text-reveal data-delay="0.3">
              Planning is paid. Build is scoped in writing. Go-live includes warranty. Support
              continues when you want ongoing help.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                01
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Blueprint</h3>
                <p>
                  Paid planning that maps process, systems, and the right build path before
                  production starts. Delivered over about two weeks and credited in full against
                  the build.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                02
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Build</h3>
                <p>
                  Production against agreed milestones, demos, and review checkpoints. Scope and
                  fee stay locked to the Blueprint you approved.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                03
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Go-live</h3>
                <p>
                  Launch checklist, final QA, and handoff with a 30-day warranty for agreed launch
                  issues once the system is live.
                </p>
              </div>
            </li>
            <li className="cotech-svc-included-row" data-scroll-in>
              <span className="cotech-svc-included-num" aria-hidden="true">
                04
              </span>
              <div className="cotech-svc-included-copy">
                <h3>Support</h3>
                <p>
                  Optional after warranty. Updates, monitoring, and improvements sized to your
                  stack so the system keeps pace with the business.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="cotech-scoping-prep" aria-label="What you leave with">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
                <SectionBadge label="Outcomes" />
              </div>
              <h2 data-text-reveal data-delay="0.2">
                What you leave with
              </h2>
              <p data-ns-animate data-delay="0.3">
                Commercial decisions stay clear at every stage. Nothing moves to production on a
                verbal estimate.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              <li data-scroll-in>A scoped plan before build begins</li>
              <li data-scroll-in>Milestones and approvals tied to delivery</li>
              <li data-scroll-in>A clean Go-live handoff with warranty coverage</li>
              <li data-scroll-in>Optional monthly support once the warranty ends</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Book a scoping call">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">
              Want to map your own Blueprint and build path?
            </h2>
            <p data-text-reveal data-delay="0.3">
              Share the business problem, launch target, and systems involved. We will confirm
              whether to start with Blueprint only or move into a larger scoped build.
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
                      <CtaArrowIcon />
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
