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

const PRACTICES: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Access",
    body: "Project files, staging, and admin access stay limited to people working the engagement. Credentials move through secured channels — not chat history.",
  },
  {
    num: "02",
    title: "Delivery",
    body: "Encrypted credentials, staged environments, and review checkpoints before go-live. Security is part of the build, not an afterthought.",
  },
  {
    num: "03",
    title: "Contracts",
    body: "NDA-ready engagements. Commercial and confidentiality terms are agreed before sensitive systems or customer lists are shared.",
  },
  {
    num: "04",
    title: "After launch",
    body: "You receive ownership of accounts, domains, and documentation so access is not locked inside a black box — and stays auditable.",
  },
];

const EXPECTATIONS = [
  "Restricted access to repos, files, and staging",
  "NDA-backed data handling on request",
  "Pre-launch reviews, SSL, and go-live checks",
  "Credential and hosting docs at handoff",
];

export function SecurityPageContent() {
  return (
    <main className="bg-background-13 cotech-security">
      <section className="cotech-svc-hero" aria-label="Security hero">
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
              <StarEyebrow label="Security" />
            </div>
            <div className="space-y-4">
              <h1 data-text-reveal data-delay="0.2">
                Client data and delivery handled with care.
              </h1>
              <p data-text-reveal data-delay="0.3" className="max-w-[720px] mx-auto">
                COTech engagements protect brand assets, credentials, and customer data from
                kickoff through handoff — and in ongoing support. Access, build practices, and
                ownership stay clear at every stage.
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
                        Ask on a scoping call
                      </span>
                      <span
                        data-button-lower-text
                        className="absolute left-0 top-full block text-nowrap"
                      >
                        Ask on a scoping call
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

      <section className="cotech-svc-included" aria-label="How we protect engagements">
        <div className="main-container">
          <div className="cotech-svc-included-head">
            <div data-ns-animate data-delay="0.1" className="flex items-center justify-center">
              <StarEyebrow label="Practices" />
            </div>
            <h2 data-text-reveal data-delay="0.2">Security built into every engagement.</h2>
            <p data-text-reveal data-delay="0.3">
              Least privilege, staged delivery, and clear ownership — especially where forms, CRMs,
              and WhatsApp touch customer data.
            </p>
          </div>
          <ol className="cotech-svc-included-list">
            {PRACTICES.map((item) => (
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

      <section className="cotech-scoping-prep" aria-label="What you can expect">
        <div className="main-container">
          <div className="cotech-scoping-prep-inner">
            <div className="cotech-scoping-prep-copy">
              <div data-ns-animate data-delay="0.1" className="flex items-center justify-start">
                <StarEyebrow label="Expectations" />
              </div>
              <h2 data-text-reveal data-delay="0.2">What you can expect</h2>
              <p data-ns-animate data-delay="0.3">
                Transparent handling from first share to go-live — so trust is operational, not a
                slogan.
              </p>
            </div>
            <ul className="cotech-scoping-prep-list">
              {EXPECTATIONS.map((text) => (
                <li key={text} data-scroll-in>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cotech-projects-cta" aria-label="Talk about security">
        <div className="main-container">
          <div className="cotech-projects-cta-inner">
            <h2 data-text-reveal data-delay="0.2">Questions about how we handle your data?</h2>
            <p data-text-reveal data-delay="0.3">
              Ask on the scoping call. We will walk through access, hosting, and who owns what after
              go-live.
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
