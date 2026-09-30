import Link from "next/link";

const STACK_BASE = "/images/icons/stack";

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

function DesktopStackIcon({ name }: { name: string }) {
  return (
    <figure className="bg-background-2 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
      <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
        <img
          src={`${STACK_BASE}/${name}.svg`}
          className="size-full"
          alt="integration icon"
        />
      </div>
    </figure>
  );
}

function MobileStackIcon({ name, delay }: { name: string; delay: string }) {
  return (
    <figure
      data-ns-animate
      data-delay={delay}
      className="bg-background-2 flex size-14 items-center justify-center rounded-full sm:size-[75px]"
    >
      <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
        <img
          src={`${STACK_BASE}/${name}.svg`}
          className="size-full"
          alt="integration icon"
        />
      </div>
    </figure>
  );
}

const MOBILE_STACK_ICONS: { name: string; delay: string }[] = [
  { name: "whatsapp", delay: "0.4" },
  { name: "gmail", delay: "0.4" },
  { name: "hubspot", delay: "0.4" },
  { name: "notion", delay: "0.4" },
  { name: "make", delay: "0.5" },
  { name: "zapier", delay: "0.5" },
  { name: "openai", delay: "0.5" },
  { name: "notion", delay: "0.5" },
  { name: "slack", delay: "0.6" },
  { name: "meta", delay: "0.6" },
  { name: "google", delay: "0.6" },
  { name: "salesforce", delay: "0.6" },
  { name: "microsoft", delay: "0.7" },
  { name: "stripe", delay: "0.7" },
];

export function IntegrationPageContent() {
  return (
    <main className="bg-background-13">
      <section className="pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
        <div
          data-ns-animate
          data-delay="0.1"
          data-offset="80"
          className="relative z-10 mx-auto w-[95%] rounded-4xl bg-white px-10 py-[70px] md:min-h-[740px] md:px-[75px] 2xl:max-w-[1440px]"
        >
          <div className="relative z-10 mx-auto w-fit max-w-[410px] text-center lg:mt-20">
            <h2 data-ns-animate data-delay="0.2" className="mb-3">
              Tools &amp; tech <br className="hidden lg:block" />
              we work with.
            </h2>
            <p data-ns-animate data-delay="0.3" className="mb-14">
              We connect the platforms and tools your team already uses — CRM, messaging, ads,
              automation, and reporting.
            </p>
            <div data-ns-animate data-delay="0.4" className="flex items-center justify-center">
              <Link href="/contact">
                <button
                  type="button"
                  data-button-wrapper
                  className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98]"
                >
                  <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                    <span className="relative inline-block overflow-hidden leading-none">
                      <span data-button-upper-text className="block text-nowrap">
                        Discuss your stack
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Discuss your stack
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

          <div className="bottom-0 left-5 hidden lg:absolute lg:top-0 lg:bottom-auto lg:left-10 lg:block lg:w-1/2 lg:max-w-[400px] xl:left-20 2xl:left-0 2xl:max-w-[582px]">
            <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:ps-[70px]">
              <div
                data-ns-animate
                data-delay="0.4"
                className="flex gap-5 lg:ms-[60px] lg:gap-8 xl:ms-[100px] xl:gap-[75px]"
              >
                <DesktopStackIcon name="whatsapp" />
              </div>
              <div
                data-ns-animate
                data-delay="0.5"
                className="flex gap-5 lg:gap-8 lg:self-start xl:gap-[75px]"
              >
                <DesktopStackIcon name="gmail" />
                <DesktopStackIcon name="hubspot" />
              </div>
              <div
                data-ns-animate
                data-delay="0.6"
                className="flex gap-5 lg:ms-[60px] lg:gap-8 xl:ms-[100px] xl:gap-[75px]"
              >
                <DesktopStackIcon name="notion" />
                <DesktopStackIcon name="make" />
              </div>
              <div
                data-ns-animate
                data-delay="0.7"
                className="flex gap-5 lg:ms-[100px] lg:gap-8 xl:ms-[185px] xl:gap-[75px]"
              >
                <DesktopStackIcon name="zapier" />
                <DesktopStackIcon name="openai" />
              </div>
            </div>
          </div>

          <div className="right-5 bottom-0 hidden lg:absolute lg:top-0 lg:right-10 lg:bottom-auto lg:block lg:w-1/2 lg:max-w-[400px] xl:right-28 2xl:right-0 2xl:max-w-[582px]">
            <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:pe-[70px]">
              <div data-ns-animate data-delay="0.4" className="flex lg:me-[60px] lg:self-end xl:me-[100px]">
                <DesktopStackIcon name="notion" />
              </div>
              <div
                data-ns-animate
                data-delay="0.5"
                className="flex gap-8 lg:gap-[50px] lg:self-end xl:gap-[75px]"
              >
                <DesktopStackIcon name="slack" />
                <DesktopStackIcon name="meta" />
              </div>
              <div
                data-ns-animate
                data-delay="0.6"
                className="flex gap-8 lg:me-[60px] lg:gap-[50px] lg:self-end xl:me-[100px] xl:gap-[75px]"
              >
                <DesktopStackIcon name="google" />
                <DesktopStackIcon name="salesforce" />
              </div>
              <div
                data-ns-animate
                data-delay="0.7"
                className="flex gap-8 self-end lg:me-[100px] lg:gap-[50px] xl:me-[185px] xl:gap-[75px]"
              >
                <DesktopStackIcon name="microsoft" />
                <DesktopStackIcon name="stripe" />
              </div>
            </div>
          </div>

          <div className="integration-list-1 mt-8 flex flex-wrap items-center justify-center gap-4 px-6 sm:px-10 md:mt-20 lg:hidden">
            {MOBILE_STACK_ICONS.map((icon, index) => (
              <MobileStackIcon
                key={`${icon.name}-${icon.delay}-${index}`}
                name={icon.name}
                delay={icon.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="lg:py-28 py-18">
        <div className="main-container">
          <div className="space-y-8">
            <div className="space-y-5">
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
                    CTA
                  </span>
                </div>
              </div>
              <div className="space-y-3 text-center">
                <h2 data-text-reveal data-delay="0.2" className="max-w-[700px] mx-auto">
                  Ready to build something that grows with your brand?
                </h2>
                <p data-text-reveal data-delay="0.3" className="max-w-[600px] mx-auto">
                  Tell us about your goals—we’ll map the design, development, and marketing path
                  that gets you from vision to measurable results.
                </p>
              </div>
            </div>

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
                        Contact Us
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Contact Us
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
