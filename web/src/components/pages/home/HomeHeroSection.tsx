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

export function HomeHeroSection() {
  return (
    <>
      <section className="pt-30 md:pt-35 lg:pt-48">
       <div className="main-container">
       <div
       className="flex w-full flex-col lg:flex-row gap-y-10 lg:gap-y-0 items-start lg:h-96 xl:h-102.25 overflow-hidden justify-center gap-x-16 xl:gap-x-28"
       >
       <div
       className="w-full lg:w-[70%] gap-y-10 lg:gap-y-0 flex items-center lg:items-start justify-between flex-col h-full"
       >
       <div className="space-y-4 text-center md:text-left">
       <h1 data-text-reveal data-delay="0.1">
       Turn traffic, sales, and operations into one connected system
       </h1>
       <p data-text-reveal data-delay="0.2">
       Built for UAE businesses that need enquiries, follow-up, and delivery
       to run without re-typing. <br className="hidden md:block" />
       Fixed-price systems for lead gen, CRM, AI agents, and automation.
       </p>
       </div>
      
       
      
       <div
       data-ns-animate
       data-delay="0.3"
       data-direction="left"
       className="flex w-full flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-start items-center gap-x-8 lg:justify-start justify-center"
       >
       <a href="/contact" className="inline-flex w-full max-w-[20rem] lg:w-auto lg:max-w-none">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >Book a free call</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >Book a free call</span
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
       <a href="/services" className="inline-flex w-full max-w-[20rem] lg:w-auto lg:max-w-none">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-accent/60 h-full border border-stroke-1 flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >Explore services</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >Explore services</span
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
      
       <div className="lg:w-[30%] h-full w-full">
       <div
       className="flex h-full w-full flex-col gap-y-15 md:gap-y-10 lg:gap-y-0 items-center lg:items-start justify-between"
       >
       
       <div
       data-ns-animate
       data-delay="0.4"
       data-direction="right"
       className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row items-center max-md:justify-between lg:flex-col gap-x-20 lg:gap-y-4 w-full"
       >
       
       <div
       className="relative shrink-0 md:pb-0 pb-8 lg:pb-8 flex items-center gap-x-3 w-full"
       >
       <div className="flex -space-x-6">
       <figure
       data-ns-avatar
       data-avatar-delay="0"
       data-avatar-direction="left"
       data-avatar-scale="0.5"
       data-avatar-offset="30"
       className="size-14 rounded-full ring-2 ring-white overflow-hidden"
       >
       <img
       src="/images/ns-avatar-1.jpg?v=2"
       alt=""
       className="size-full object-cover"
       />
       </figure>
       <figure
       data-ns-avatar
       data-avatar-delay="0.15"
       data-avatar-direction="left"
       data-avatar-scale="0.5"
       data-avatar-offset="30"
       className="size-14 rounded-full ring-2 ring-white overflow-hidden"
       >
       <img
       src="/images/ns-avatar-2.jpg?v=2"
       alt=""
       className="size-full object-cover"
       />
       </figure>
       <figure
       data-ns-avatar
       data-avatar-delay="0.3"
       data-avatar-direction="left"
       data-avatar-scale="0.5"
       data-avatar-offset="30"
       className="size-14 rounded-full ring-2 ring-white overflow-hidden"
       >
       <img
       src="/images/ns-avatar-3.jpg?v=2"
       alt=""
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       <p
       className="max-w-41.75 text-black font-medium"
       data-counter-trigger
       data-counter-value="2000"
       >
       <number-flow data-counter-number />+ UAE businesses
       ready for connected systems.
       </p>
      
       <span
       data-border-expand
       data-delay="0.3"
       className="absolute md:hidden lg:block bottom-0 left-0 h-px w-full bg-stroke-3"
       ></span>
       </div>
      
       
       <div
       className="flex w-full max-md:gap-x-5 lg:w-full justify-center items-center lg:justify-between"
       >
       <div
       className="space-y-1 lg:max-w-39"
       data-counter-trigger
       data-counter-value="95"
       >
       <h3 className="text-heading-4 text-black">
       <number-flow data-counter-number />%
       </h3>
       <p>Client Satisfaction Rate</p>
       </div>
       <div
       className="space-y-1 lg:max-w-39"
       data-counter-trigger
       data-counter-value="130"
       >
       <h3 className="text-heading-4 text-black">
       <number-flow data-counter-number />+
       </h3>
       <p>Client Satisfaction Rate</p>
       </div>
       </div>
       </div>
      
       
       
      <div
       data-ns-animate
       data-delay="0.5"
       data-direction="right"
       className="relative w-full overflow-hidden"
      >
       <div
       className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-linear-to-r from-background-13 to-transparent"
       ></div>
       <div
       className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-linear-to-l from-background-13 to-transparent"
       ></div>
      
       <div className="logos-marquee-container" role="marquee">
       <div className="flex w-max items-center gap-x-8">
       <figure className="h-8 w-25 shrink-0 ml-10">
       <img
       src="/images/icons/scapic-metal.svg"
       alt="Scapic"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/lattice-metal.svg"
       alt="Lattice"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/notion-metal.svg"
       alt="Notion"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/asana-metal.svg"
       alt="Asana"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/outreach-metal.svg"
       alt="Outreach"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/dropbox-metal.svg"
       alt="Dropbox"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/client-logo-1.svg"
       alt="Mantio"
       className="size-full object-contain"
       />
       </figure>
       <figure className="h-8 w-25 shrink-0">
       <img
       src="/images/icons/hotjar-metal.svg"
       alt="Hotjar"
       className="size-full object-contain"
       />
       </figure>
       </div>
       </div>
      </div>
      
       </div>
       </div>
       </div>
       </div>
      
       <div data-ns-animate data-delay="0.5" className="relative overflow-hidden max-w-full">
       
       <div
       className="cotech-rotating-fade pointer-events-none absolute left-0 top-0 z-10 h-full bg-linear-to-r from-background-13 to-transparent"
       ></div>
       
       <div
       className="cotech-rotating-fade pointer-events-none absolute right-0 top-0 z-10 h-full bg-linear-to-l from-background-13 to-transparent"
       ></div>
       
       <div
       className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-linear-to-t from-background-13 to-transparent"
       ></div>
      
       <div
       data-rotating-cards
       className="cotech-rotating-cards relative w-full overflow-hidden"
      >
       <div
       data-rotating-wheel
       className="absolute left-1/2 top-[145%] flex h-[300vw] w-[300vw] max-h-500 max-w-500 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
       >
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Lead Generation
       </h3>
       <span
       className="ns-shape-1 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-lead.jpg" alt="Lead Generation" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       CRM Automation
       </h3>
       <span
       className="ns-shape-12 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-crm.jpg" alt="CRM Automation" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       AI Agents
       </h3>
       <span
       className="ns-shape-24 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-ai.jpg" alt="AI Agents" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Business Automation
       </h3>
       <span
       className="ns-shape-36 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-automation.jpg" alt="Business Automation" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Web Platforms
       </h3>
       <span
       className="ns-shape-48 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-web.jpg" alt="Web Platforms" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Digital Business Systems
       </h3>
       <span
       className="ns-shape-60 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-systems.jpg" alt="Digital Business Systems" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       WhatsApp Lead Capture
       </h3>
       <span
       className="ns-shape-72 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-lead.jpg" alt="WhatsApp Lead Capture" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Sales Pipelines
       </h3>
       <span
       className="ns-shape-84 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-crm.jpg" alt="Sales Pipelines" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       AI WhatsApp Agent
       </h3>
       <span
       className="ns-shape-8 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-ai.jpg" alt="AI WhatsApp Agent" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       System Integrations
       </h3>
       <span
       className="ns-shape-18 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-automation.jpg" alt="System Integrations" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Lead-Gen Websites
       </h3>
       <span
       className="ns-shape-28 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-web.jpg" alt="Lead-Gen Websites" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Connected Operations
       </h3>
       <span
       className="ns-shape-42 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-systems.jpg" alt="Connected Operations" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Quote Automation
       </h3>
       <span
       className="ns-shape-56 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-crm.jpg" alt="Quote Automation" className="size-full object-cover" />
       </figure>
      </div>
      
      
       
       <div
       data-rotating-card
       className="absolute left-0 top-0 w-88.5 cursor-pointer space-y-8 bg-white p-4"
      >
       <div className="flex items-center justify-between">
       <h3 className="max-w-45 text-heading-5 font-medium text-secondary">
       Executive Dashboards
       </h3>
       <span
       className="ns-shape-70 size-11 shrink-0 text-[44px] leading-none text-secondary"
       ></span>
       </div>
       <figure className="h-81.25 w-full overflow-hidden rounded-md">
       <img src="/images/cotech-svc-systems.jpg" alt="Executive Dashboards" className="size-full object-cover" />
       </figure>
      </div>
      
       </div>
      </div>
      
       </div>
      </section>
    </>
  );
}
