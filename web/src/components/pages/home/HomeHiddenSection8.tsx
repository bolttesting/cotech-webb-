import type React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "number-flow": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "data-counter-number"?: boolean },
        HTMLElement
      >;
    }
  }
}

export function HomeHiddenSection8() {
  return (
    <>
      <section className="xl:py-20 md:py-16 py-12 hidden" aria-hidden="true">
       <div className="main-container">
       <div className="md:space-y-10 space-y-6">
       
       <div className="space-y-8">
       
       <div className="space-y-5">
       <div data-ns-animate data-delay="0.1">
       <div
       className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']"
      >
       
       <span className="shrink-0">
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 17 16"
       fill="none"
       className="fill-primary-500 size-4.25"
       >
       <path
       d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z"
       />
       </svg>
       </span>
      
       
       <span
       className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase"
       >
       Trusted by Clients
       </span>
      </div>
      
       </div>
       <div className="space-y-3 text-center">
       <h2 data-text-reveal data-delay="0.2">
       Trusted by forward-thinking companies
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[600px] mx-auto">
       From startups to growing businesses, our clients trust us to
       deliver solutions that drive real impact, not just visuals.
       </p>
       </div>
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.4"
       className="shrink-0 flex items-center justify-center"
       >
       <a href="/testimonials" className="w-[80%] md:w-auto">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >View All Reviews</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >View All Reviews</span
       >
       </span>
      
       <span
       className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="none"
       className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
      >
       <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      
       </span>
       </div>
      </button>
      
       </a>
       </div>
       </div>
      
       
       <div
       data-stat-cards
       className="columns-1 sm:columns-2 xl:columns-4 gap-6 w-full -mb-6"
       >
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--metric mb-6 p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden w-full h-80 will-change-transform"
       >
       <div className="cotech-trust-card-head">
       <img src="/images/icons/notion-black.svg" alt="Notion" className="h-9" />
       <span className="cotech-trust-chip">Ops</span>
       </div>
       <div className="cotech-trust-card-foot">
       <div className="space-y-1">
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="2"
       >
       <number-flow data-counter-number />x
       </h3>
       <p className="text-tagline-1 text-background-14/60">ROI improvement</p>
       </div>
       <div className="cotech-trust-bar" aria-hidden="true">
       <span style={{ ["--fill" as string]: "86%" }}></span>
       </div>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--logo mb-6 p-8 rounded-xl flex items-center justify-center overflow-hidden w-full h-[166px] will-change-transform"
       >
       <div className="cotech-trust-logo-wrap">
       <img
       src="/images/icons/spotify-black.svg"
       alt="Spotify"
       className="h-9"
       />
       <span className="cotech-trust-caption">Growth</span>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--logo mb-6 p-8 rounded-xl flex items-center justify-center overflow-hidden w-full h-[166px] will-change-transform"
       >
       <div className="cotech-trust-logo-wrap">
       <img src="/images/icons/scapic-black.svg" alt="Scapic" className="h-9" />
       <span className="cotech-trust-caption">Content</span>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--metric mb-6 p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden w-full h-80 will-change-transform"
       >
       <div className="cotech-trust-card-head">
       <img
       src="/images/icons/cloud-watch-black.svg"
       alt="CloudWatch"
       className="h-9"
       />
       <span className="cotech-trust-chip">Analytics</span>
       </div>
       <div className="cotech-trust-card-foot">
       <div className="space-y-1">
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="40"
       >
       <number-flow data-counter-number />%
       </h3>
       <p className="text-tagline-1 text-background-14/60">cost reduction</p>
       </div>
       <div className="cotech-trust-bar" aria-hidden="true">
       <span style={{ ["--fill" as string]: "40%" }}></span>
       </div>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--metric mb-6 p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden w-full h-80 will-change-transform"
       >
       <div className="cotech-trust-card-head">
       <img src="/images/icons/hotjar-black.svg" alt="Hotjar" className="h-9" />
       <span className="cotech-trust-chip">Insights</span>
       </div>
       <div className="cotech-trust-card-foot">
       <div className="space-y-1">
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="1.5"
       data-counter-fraction-digits="1"
       >
       <number-flow data-counter-number />M
       </h3>
       <p className="text-tagline-1 text-background-14/60">annual savings</p>
       </div>
       <div className="cotech-trust-bar" aria-hidden="true">
       <span style={{ ["--fill" as string]: "78%" }}></span>
       </div>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--logo mb-6 p-8 rounded-xl flex items-center justify-center overflow-hidden w-full h-[166px] will-change-transform"
       >
       <div className="cotech-trust-logo-wrap">
       <img src="/images/icons/asana-black.svg" alt="Asana" className="h-9" />
       <span className="cotech-trust-caption">Workflow</span>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--logo mb-6 p-8 rounded-xl flex items-center justify-center overflow-hidden w-full h-[166px] will-change-transform"
       >
       <div className="cotech-trust-logo-wrap">
       <img
       src="/images/icons/dropbox-black.svg"
       alt="Dropbox"
       className="h-9"
       />
       <span className="cotech-trust-caption">Files</span>
       </div>
       </div>
      
       
       <div
       data-stat-card
       className="cotech-trust-card cotech-trust-card--metric mb-6 p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden w-full h-80 will-change-transform"
       >
       <div className="cotech-trust-card-head">
       <img
       src="/images/icons/lattice-black.svg"
       alt="Lattice"
       className="h-9"
       />
       <span className="cotech-trust-chip">People</span>
       </div>
       <div className="cotech-trust-card-foot">
       <div className="space-y-1">
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="20"
       >
       <number-flow data-counter-number />%
       </h3>
       <p className="text-tagline-1 text-background-14/60">
       improved scalability
       </p>
       </div>
       <div className="cotech-trust-bar" aria-hidden="true">
       <span style={{ ["--fill" as string]: "70%" }}></span>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
      </section>
    </>
  );
}
