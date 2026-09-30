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

export function HomeHiddenSection10() {
  return (
    <>
      <section className="hidden xl:py-20 md:py-16 py-12" aria-hidden="true" data-section="fun-facts">
       <div className="main-container">
       <div className="md:space-y-10 space-y-6">
       
       <div className="md:space-y-8 space-y-5">
       
       <div className="space-y-5 text-center">
       <div
       data-ns-animate
       data-delay="0.1"
       className="flex items-center justify-center"
       >
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
       FUN FACTS
       </span>
      </div>
      
       </div>
       <div className="space-y-3">
       <h2 data-text-reveal data-delay="0.2">
       Driven by results, backed by numbers
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[755px] mx-auto">
       Every number you see here represents more than just data—it
       reflects real work, real clients, and real results. From
       successful project deliveries to measurable growth and client
       satisfaction
       </p>
       </div>
       </div>
       
      
       <div
       data-ns-animate
       data-delay="0.3"
       className="hidden shrink-0 flex items-center justify-center"
       aria-hidden="true"
       >
       </div>
       </div>
      
       
       <div className="grid grid-cols-12 gap-4 xl:items-end">
       
       <div
       data-ns-animate
       data-delay="0.1"
       className="xl:col-span-3 col-span-12 md:col-span-6 h-[186px] p-8 rounded-xl bg-white border border-stroke-3 flex flex-col items-start justify-between overflow-hidden"
       >
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="120"
       >
       <number-flow data-counter-number />+
       </h3>
       <p className="w-full text-right text-tagline-1 text-background-14/60">
       Projects Successfully Delivered
       </p>
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.2"
       className="relative col-span-12 md:col-span-6 xl:col-span-3 h-[452px] p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden"
       >
       <figure
       className="absolute inset-0 pointer-events-none"
       aria-hidden="true"
       >
       <img
       src="/images/ns-img-900.jpg"
       alt=""
       className="size-full object-cover"
       />
       </figure>
       <h3
       className="relative z-1 text-heading-4 text-accent"
       data-counter-trigger
       data-counter-value="95"
       >
       <number-flow data-counter-number />%
       </h3>
       <p
       className="relative z-1 w-full text-right text-tagline-1 text-background-14/60"
       >
       Client Satisfaction Rate
       </p>
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.3"
       className="xl:col-span-3 col-span-12 md:col-span-6 h-[251px] p-8 rounded-xl bg-white border border-stroke-3 flex flex-col items-start justify-between overflow-hidden"
       >
       <h3
       className="text-heading-4 text-black"
       data-counter-trigger
       data-counter-value="50"
       >
       <number-flow data-counter-number />+
       </h3>
       <p className="w-full text-right text-tagline-1 text-background-14/60">
       Global Brands Served
       </p>
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.4"
       className="relative col-span-12 md:col-span-6 xl:col-span-3 h-[373px] p-8 rounded-xl flex flex-col items-start justify-between overflow-hidden"
       >
       <figure
       className="absolute inset-0 pointer-events-none"
       aria-hidden="true"
       >
       <img
       src="/images/ns-img-900.jpg"
       alt=""
       className="size-full object-cover"
       />
       </figure>
       <h3
       className="relative z-1 text-heading-4 text-accent"
       data-counter-trigger
       data-counter-value="3"
       >
       <number-flow data-counter-number />+ Years
       </h3>
       <p
       className="relative z-1 w-full text-right text-tagline-1 text-background-14/60"
       >
       Industry Experience
       </p>
       </div>
       </div>
       </div>
       </div>
      </section>
    </>
  );
}
