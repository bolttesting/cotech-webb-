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

export function HomeServicesIntroSection() {
  return (
    <>
      <section className="xl:pb-20 md:pb-16 pb-12">
       <div className="main-container">
       <div className="xl:space-y-10 space-y-6">
       <div className="xl:space-y-12 lg:space-y-10 space-y-6">
       
       <div data-ns-animate data-delay="0.2">
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
       ABOUT US
       </span>
      </div>
      
       </div>
      
       
      
       <div
       className="flex items-center lg:items-start flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-center gap-x-18"
       >
       <h2
       data-text-reveal
       data-delay="0.2"
       className="lg:w-1/2 text-center lg:text-left"
       >
       COTech builds connected systems for UAE businesses that need growth without chaos
       </h2>
      
       <div
       className="lg:w-1/2 flex flex-col xl:gap-y-14 gap-y-4 items-center lg:items-end"
       >
       <p
       data-text-reveal
       data-delay="0.3"
       className="max-w-123.5 text-center lg:text-right w-full"
       >
       We design and deliver lead engines, CRM automation, AI agents, and
       web platforms — fixed price, Blueprint-first, handed over to your team.
       </p>
       <div
       data-ns-animate
       data-delay="0.4"
       className="inline-block w-[80%] shrink-0 text-center lg:w-auto lg:text-left"
       >
       <a href="/about">
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
       </div>
       </div>
      
       
       <div className="grid grid-cols-12 items-start gap-y-5 md:gap-4">
       
       <div data-ns-animate data-delay="0.2" className="col-span-12 md:col-span-4">
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex flex-col items-stretch justify-between">
       <div className="cotech-stat-card-top">
       <h3 className="font-medium" data-counter-trigger data-counter-value="65">
       <number-flow data-counter-number />+
       </h3>
       <span className="cotech-stat-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
       <circle cx="9" cy="7" r="4" />
       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
       </svg>
       </span>
       </div>
       <p>Trusted partners</p>
       <div className="cotech-stat-faces" aria-hidden="true">
       <img src="/images/ns-avatar-1.jpg?v=2" alt="" />
       <img src="/images/ns-avatar-2.jpg?v=2" alt="" />
       <img src="/images/ns-avatar-3.jpg?v=2" alt="" />
       </div>
       </div>
       </div>
       
       <div data-ns-animate data-delay="0.3" className="col-span-12 md:col-span-4">
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex flex-col items-stretch justify-between">
       <div className="cotech-stat-card-top">
       <h3 className="font-medium" data-counter-trigger data-counter-value="14">
       <number-flow data-counter-number />+
       </h3>
       <span className="cotech-stat-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       <circle cx="12" cy="12" r="9" />
       <path d="M12 7v5l3 2" />
       </svg>
       </span>
       </div>
       <p>Years of experience</p>
       </div>
       </div>
       
       <div
       data-ns-animate
       data-delay="0.4"
       className="col-span-12 md:col-span-4 h-full row-span-2"
       >
       <figure className="overflow-hidden rounded-xl size-full cotech-stat-photo">
       <img
       src="/images/cotech-about-tall.jpg?v=1"
       alt="COTech team collaborating on connected systems"
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       
       <div data-ns-animate data-delay="0.4" className="col-span-12 md:col-span-4">
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex flex-col items-stretch justify-between">
       <div className="cotech-stat-card-top">
       <h3 className="font-medium" data-counter-trigger data-counter-value="20">
       <number-flow data-counter-number />+
       </h3>
       <span className="cotech-stat-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       <path d="M8 21h8" />
       <path d="M12 17v4" />
       <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
       <path d="M17 4h2a2 2 0 0 1 0 4h-2" />
       <path d="M7 4H5a2 2 0 0 0 0 4h2" />
       </svg>
       </span>
       </div>
       <p>Awards won</p>
       </div>
       </div>
      
       
       <div data-ns-animate data-delay="0.5" className="col-span-12 md:col-span-4">
       <div
       className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex items-center flex-col justify-center gap-y-8"
       >
       <figure className="w-39 h-18.5 overflow-hidden">
       <img
       src="/images/ns-img-10.svg"
       alt="trustpilot-logo"
       className="size-full object-cover"
       />
       </figure>
       <p className="text-heading-6">Rated 4.5/5.0</p>
       </div>
       </div>
       </div>
       </div>
       </div>
      </section>
    </>
  );
}
