export function HomeServicesGridSection() {
  return (
    <>
      <section className="xl:py-20 md:py-16 py-12 bg-white md:space-y-10 space-y-8">
       <div className="main-container">
       
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
       SERVICES
       </span>
      </div>
      
       </div>
       <div className="space-y-8">
       <div className="space-y-3 text-center">
       <h2 data-text-reveal data-delay="0.2">
       Six systems that connect marketing, sales, and operations
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-175 mx-auto">
       Lead generation, CRM, AI agents, automation, web platforms, and
       full digital business systems — scoped for UAE businesses.
       </p>
       </div>
       <div
       data-ns-animate
       data-delay="0.3"
       className="shrink-0 flex items-center justify-center"
       >
       <a href="/services" className="w-[80%] md:w-auto">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >View services</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >View services</span
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
      
       
       <div data-ns-animate data-delay="0.4" className="grid grid-cols-12 gap-6 mx-5">
       
       <div
       data-ns-animate
       data-delay="0.1"
       className="col-span-12 sm:col-span-6 xl:col-span-3"
       >
       <div
       data-card-flip
       data-ns-animate
       data-delay="0.2"
       tabIndex={0}
       className="relative xl:h-155 h-130 w-full outline-none perspective-1000 cursor-pointer"
      >
       <div data-card-flip-inner className="relative h-full w-full transform-3d">
       <div
       data-card-flip-front
       className="absolute inset-0 flex flex-col backface-hidden"
       >
       <div
       className="space-y-6 rounded-xl rounded-b-none border border-b-0 border-stroke-11/25 bg-white p-6"
       >
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (01)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">Lead Generation</h3>
       <p>Turn traffic into qualified enquiries in front of sales within seconds.</p>
       </div>
       </div>
       <figure className="min-h-0 flex-1 overflow-hidden rounded-b-xl">
       <img
       src="/images/cotech-svc-lead.jpg"
       alt="Lead Generation"
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       <div
       data-card-flip-back
       className="absolute inset-0 flex flex-col rounded-xl border border-stroke-11/25 bg-white p-6 backface-hidden"
       >
       <div className="flex-1 space-y-6">
       <div className="space-y-2">
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (01)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">
       Lead Generation
       </h3>
       <p>Landing pages, WhatsApp capture, qualification flows, and CRM handoff with source tracking.</p>
       </div>
       </div>
       <ul className="space-y-2.5">
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Landing pages & lead forms</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>WhatsApp click-to-chat</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Lead qualification flows</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Source & conversion tracking</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Booking / quote flows</span>
       </li>
       </ul>
       </div>
       <div className="mt-6 border-t border-stroke-11/25 pt-6">
       <a
       href="/service-lead-generation"
       className="group/link flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-primary-50"
       >
       <span
       className="font-inter-tight text-tagline-1 font-medium text-black transition-colors group-hover/link:text-primary-600"
       >
       Explore service
       </span>
       <span className="relative size-4 overflow-hidden">
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-full"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 -translate-x-full stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-0"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       </span>
       </a>
       </div>
       </div>
       </div>
      </div>
      
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.2"
       className="col-span-12 sm:col-span-6 xl:col-span-3"
       >
       <div
       data-card-flip
       data-ns-animate
       data-delay="0.3"
       tabIndex={0}
       className="relative xl:h-155 h-130 w-full outline-none perspective-1000 cursor-pointer"
      >
       <div data-card-flip-inner className="relative h-full w-full transform-3d">
       <div
       data-card-flip-front
       className="absolute inset-0 flex flex-col backface-hidden"
       >
       <div
       className="space-y-6 rounded-xl rounded-b-none border border-b-0 border-stroke-11/25 bg-white p-6"
       >
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (02)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">CRM Automation</h3>
       <p>A pipeline configured around how your team actually sells.</p>
       </div>
       </div>
       <figure className="min-h-0 flex-1 overflow-hidden rounded-b-xl">
       <img
       src="/images/cotech-svc-crm.jpg"
       alt="CRM Automation"
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       <div
       data-card-flip-back
       className="absolute inset-0 flex flex-col rounded-xl border border-stroke-11/25 bg-white p-6 backface-hidden"
       >
       <div className="flex-1 space-y-6">
       <div className="space-y-2">
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (02)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">
       CRM Automation
       </h3>
       <p>Routing, scoring, follow-ups, quote workflows, and live dashboards in one system.</p>
       </div>
       </div>
       <ul className="space-y-2.5">
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>CRM setup & pipelines</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Lead routing & scoring</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Automated follow-ups</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Quote automation</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Sales dashboards</span>
       </li>
       </ul>
       </div>
       <div className="mt-6 border-t border-stroke-11/25 pt-6">
       <a
       href="/service-crm-automation"
       className="group/link flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-primary-50"
       >
       <span
       className="font-inter-tight text-tagline-1 font-medium text-black transition-colors group-hover/link:text-primary-600"
       >
       Explore service
       </span>
       <span className="relative size-4 overflow-hidden">
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-full"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 -translate-x-full stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-0"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       </span>
       </a>
       </div>
       </div>
       </div>
      </div>
      
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.3"
       className="col-span-12 sm:col-span-6 xl:col-span-3"
       >
       <div
       data-card-flip
       data-ns-animate
       data-delay="0.4"
       tabIndex={0}
       className="relative xl:h-155 h-130 w-full outline-none perspective-1000 cursor-pointer"
      >
       <div data-card-flip-inner className="relative h-full w-full transform-3d">
       <div
       data-card-flip-front
       className="absolute inset-0 flex flex-col backface-hidden"
       >
       <div
       className="space-y-6 rounded-xl rounded-b-none border border-b-0 border-stroke-11/25 bg-white p-6"
       >
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (03)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">AI Agents</h3>
       <p>A trained assistant on website and WhatsApp — answer, qualify, book.</p>
       </div>
       </div>
       <figure className="min-h-0 flex-1 overflow-hidden rounded-b-xl">
       <img
       src="/images/cotech-svc-ai.jpg"
       alt="AI Agents"
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       <div
       data-card-flip-back
       className="absolute inset-0 flex flex-col rounded-xl border border-stroke-11/25 bg-white p-6 backface-hidden"
       >
       <div className="flex-1 space-y-6">
       <div className="space-y-2">
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (03)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">
       AI Agents
       </h3>
       <p>24/7 agents with knowledge base, qualification, booking, and CRM logging.</p>
       </div>
       </div>
       <ul className="space-y-2.5">
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Website AI agent</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>WhatsApp AI agent</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Lead qualification</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Appointment booking</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>CRM handoff</span>
       </li>
       </ul>
       </div>
       <div className="mt-6 border-t border-stroke-11/25 pt-6">
       <a
       href="/service-ai-agents"
       className="group/link flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-primary-50"
       >
       <span
       className="font-inter-tight text-tagline-1 font-medium text-black transition-colors group-hover/link:text-primary-600"
       >
       Explore service
       </span>
       <span className="relative size-4 overflow-hidden">
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-full"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 -translate-x-full stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-0"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       </span>
       </a>
       </div>
       </div>
       </div>
      </div>
      
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.4"
       className="col-span-12 sm:col-span-6 xl:col-span-3"
       >
       <div
       data-card-flip
       data-ns-animate
       data-delay="0.5"
       tabIndex={0}
       className="relative xl:h-155 h-130 w-full outline-none perspective-1000 cursor-pointer"
      >
       <div data-card-flip-inner className="relative h-full w-full transform-3d">
       <div
       data-card-flip-front
       className="absolute inset-0 flex flex-col backface-hidden"
       >
       <div
       className="space-y-6 rounded-xl rounded-b-none border border-b-0 border-stroke-11/25 bg-white p-6"
       >
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (04)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">Business Automation</h3>
       <p>Connect the systems you already pay for. Stop re-typing.</p>
       </div>
       </div>
       <figure className="min-h-0 flex-1 overflow-hidden rounded-b-xl">
       <img
       src="/images/cotech-svc-automation.jpg"
       alt="Business Automation"
       className="size-full object-cover"
       />
       </figure>
       </div>
      
       <div
       data-card-flip-back
       className="absolute inset-0 flex flex-col rounded-xl border border-stroke-11/25 bg-white p-6 backface-hidden"
       >
       <div className="flex-1 space-y-6">
       <div className="space-y-2">
       <span
       className="font-inter-tight text-tagline-1 font-normal text-background-14/60"
       >
       (04)
       </span>
       <div className="space-y-1">
       <h3 className="font-inter-tight text-heading-5 text-black">
       Business Automation
       </h3>
       <p>Integrations, webhooks, document automation, and reporting that runs without watching.</p>
       </div>
       </div>
       <ul className="space-y-2.5">
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>API integrations</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>CRM & WhatsApp sync</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Payment webhooks</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Document automation</span>
       </li>
       <li
       data-card-flip-feature
       className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-3.5 shrink-0 stroke-primary-500"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <span>Reporting automation</span>
       </li>
       </ul>
       </div>
       <div className="mt-6 border-t border-stroke-11/25 pt-6">
       <a
       href="/service-business-automation"
       className="group/link flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-primary-50"
       >
       <span
       className="font-inter-tight text-tagline-1 font-medium text-black transition-colors group-hover/link:text-primary-600"
       >
       Explore service
       </span>
       <span className="relative size-4 overflow-hidden">
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-full"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="absolute inset-0 size-4 -translate-x-full stroke-primary-500 transition-transform duration-400 ease-bouncy group-hover/link:translate-x-0"
      >
       <path d="M3.33301 8H12.6663" strokeLinecap="round" strokeLinejoin="round" />
       <path
       d="M8 3.33325L12.6667 7.99992L8 12.6666"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
      </svg>
      
       </span>
       </a>
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
