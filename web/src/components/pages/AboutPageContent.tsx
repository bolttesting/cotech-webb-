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

export function AboutPageContent() {
  return (
    <>
      <main className="cotech-about">
       {/* 1. Hero */}
       <section className="cotech-about-hero" aria-label="About COTech">
       <div className="main-container">
       <div className="cotech-about-hero-inner">
       <div data-ns-animate data-delay="0.1" className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">About</span>
       </div>
       <h1 data-text-reveal data-delay="0.2">Business intelligence for operators, not for show</h1>
       <p data-text-reveal data-delay="0.3" className="cotech-about-hero-lead">COTech is the business intelligence solutions division of CO Consultants, UAE — built for founders and teams who need systems that run without re-typing.</p>
       <div data-ns-animate data-delay="0.4" className="cotech-about-hero-ctas">
       <a href="/contact" className="inline-flex w-[80%] sm:w-auto">
       <button data-button-wrapper className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full">
       <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap">Book a free call</span>
       <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">Book a free call</span>
       </span>
       <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
       <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       </span>
       </div>
       </button>
       </a>
       <a href="/services" className="inline-flex w-[80%] sm:w-auto">
       <button data-button-wrapper className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full bg-white">
       <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 h-full flex items-center justify-between">
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap">View services</span>
       <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">View services</span>
       </span>
       <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.08)] bg-linear-to-b from-white to-background-4">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
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
       </section>
      
       {/* 2. Who we are — homepage About Us pattern */}
       <section className="cotech-about-section cotech-about-who-section" aria-label="Who we are">
       <div className="main-container">
       <div className="xl:space-y-10 space-y-6">
       <div className="cotech-about-who-intro space-y-5">
       <div data-ns-animate data-delay="0.2">
       <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Who we are</span>
       </div>
       </div>
       <div className="space-y-3 text-center">
       <h2 className="cotech-about-who-title">
       <span className="cotech-about-who-line">From CO Consultants to connected systems</span>
       <span className="cotech-about-who-line">for UAE operators</span>
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">
       COTech is the business intelligence solutions division of CO Consultants, UAE. We design and deliver the systems that sit behind growth — fixed price, Blueprint-first, owned by your team after handover.
       </p>
       </div>
       <div data-ns-animate data-delay="0.4" className="flex justify-center">
       <a href="/contact" className="inline-flex w-[80%] sm:w-auto">
       <button data-button-wrapper className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full">
       <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-accent/60 h-full border border-stroke-1 flex items-center justify-between">
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap">Book a scoping call</span>
       <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">Book a scoping call</span>
       </span>
       <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
       <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       </span>
       </div>
       </button>
       </a>
       </div>
       </div>
      
       <div className="grid grid-cols-12 items-start gap-y-5 md:gap-4">
       <div data-ns-animate data-delay="0.2" className="col-span-12 md:col-span-4">
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex flex-col items-stretch justify-between">
       <div className="cotech-stat-card-top">
       <h3 className="font-medium" data-counter-trigger data-counter-value="65" suppressHydrationWarning>
       <number-flow data-counter-number suppressHydrationWarning></number-flow>+
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
       <h3 className="font-medium" data-counter-trigger data-counter-value="14" suppressHydrationWarning>
       <number-flow data-counter-number suppressHydrationWarning></number-flow>+
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
       <div data-ns-animate data-delay="0.4" className="col-span-12 md:col-span-4 h-full row-span-2">
       <figure className="overflow-hidden rounded-xl size-full cotech-stat-photo">
       <img src="/images/cotech-about-tall.jpg?v=1" alt="COTech team collaborating on connected systems" className="size-full object-cover" />
       </figure>
       </div>
       <div data-ns-animate data-delay="0.4" className="col-span-12 md:col-span-4">
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex flex-col items-stretch justify-between">
       <div className="cotech-stat-card-top">
       <h3 className="font-medium" data-counter-trigger data-counter-value="20" suppressHydrationWarning>
       <number-flow data-counter-number suppressHydrationWarning></number-flow>+
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
       <div className="cotech-stat-card h-57.5 bg-background-1 p-6 rounded-xl flex items-center flex-col justify-center gap-y-8">
       <figure className="w-39 h-18.5 overflow-hidden">
       <img src="/images/ns-img-10.svg" alt="trustpilot-logo" className="size-full object-cover" />
       </figure>
       <p className="text-heading-6">Rated 4.5/5.0</p>
       </div>
       </div>
       </div>
       </div>
       </div>
       </section>
      
       {/* 3. How we think */}
       <section className="cotech-about-section" aria-label="How we think">
       <div className="main-container">
       <div className="cotech-about-head space-y-3">
       <div data-ns-animate data-delay="0.1">
       <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">How we think</span>
       </div>
       </div>
       <h2 data-text-reveal data-delay="0.2">Beliefs that shape every scoped project</h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">Three rules we hold before a line of automation ships.</p>
       </div>
       <div className="cotech-about-beliefs">
       <article data-ns-animate data-delay="0.2" className="cotech-about-belief cotech-stat-card">
       <span className="cotech-about-belief-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/></svg>
       </span>
       <h3>Clarity before build</h3>
       <p>We map the bottleneck and the outcome first. No speculative features, no vague retainers dressed as discovery.</p>
       </article>
       <article data-ns-animate data-delay="0.25" className="cotech-about-belief cotech-stat-card">
       <span className="cotech-about-belief-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 0 0 7.07 7.07L13 19"/></svg>
       </span>
       <h3>Connect before customize</h3>
       <p>We join the tools you already pay for before inventing new ones — WhatsApp, CRM, forms, and ops in one flow.</p>
       </article>
       <article data-ns-animate data-delay="0.3" className="cotech-about-belief cotech-stat-card">
       <span className="cotech-about-belief-icon" aria-hidden="true">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
       </span>
       <h3>Ownership over lock-in</h3>
       <p>Accounts, access, and documentation stay with you. We build so your team can run the system without us.</p>
       </article>
       </div>
       </div>
       </section>
      
       {/* 4. How we work */}
       <section className="cotech-about-section cotech-about-work" aria-label="How we work">
       <div className="main-container">
       <div className="cotech-about-head space-y-3">
       <div data-ns-animate data-delay="0.1">
       <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">How we work</span>
       </div>
       </div>
       <h2 data-text-reveal data-delay="0.2">Blueprint-first delivery from discovery to handover</h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">A fixed path so scope stays clear and your team knows what ships.</p>
       </div>
       <div className="cotech-about-steps" data-zigzag-track>
       <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
       <div className="cotech-zigzag-copy">
       <span className="cotech-about-step-num" aria-hidden="true">01</span>
       <h3>Discover</h3>
       <p>We diagnose the bottleneck — leads, follow-up, ops — and what “done” looks like.</p>
       </div>
       <figure className="cotech-zigzag-media">
       <img src="/images/cotech-svc-lead.jpg" alt="" width="640" height="400" loading="lazy" />
       </figure>
       </article>
       <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
       <div className="cotech-zigzag-copy">
       <span className="cotech-about-step-num" aria-hidden="true">02</span>
       <h3>Blueprint</h3>
       <p>A fixed-price plan: flows, tools, owners, and the path from now to live.</p>
       </div>
       <figure className="cotech-zigzag-media">
       <img src="/images/cotech-svc-systems.jpg" alt="" width="640" height="400" loading="lazy" />
       </figure>
       </article>
       <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
       <div className="cotech-zigzag-copy">
       <span className="cotech-about-step-num" aria-hidden="true">03</span>
       <h3>Build</h3>
       <p>We implement the system with two review cycles and clear checkpoints.</p>
       </div>
       <figure className="cotech-zigzag-media">
       <img src="/images/cotech-svc-automation.jpg" alt="" width="640" height="400" loading="lazy" />
       </figure>
       </article>
       <article className="cotech-about-step cotech-zigzag-item" data-zigzag>
       <div className="cotech-zigzag-copy">
       <span className="cotech-about-step-num" aria-hidden="true">04</span>
       <h3>Handover</h3>
       <p>Access, docs, walkthrough, and a 30-day warranty on launch-related fixes.</p>
       </div>
       <figure className="cotech-zigzag-media">
       <img src="/images/cotech-svc-web.jpg" alt="" width="640" height="400" loading="lazy" />
       </figure>
       </article>
       </div>
       </div>
       </section>
      
       {/* 5. What we build — scroll stack zoom */}
       <section className="cotech-about-section cotech-about-build-section" aria-label="What we build">
       <div className="main-container">
       <div className="cotech-about-head space-y-3">
       <div data-ns-animate data-delay="0.1">
       <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">What we build</span>
       </div>
       </div>
       <h2 data-text-reveal data-delay="0.2">Six practical systems that move revenue and operations forward</h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[620px] mx-auto">Lead gen, CRM, AI agents, automation, reporting, and web platforms — scoped for UAE operators.</p>
       </div>
       </div>
      
       <div
       className="cotech-zoom-stack"
       data-zoom-stack
       data-zs-variant="zoom"
       data-zs-smooth="0.26"
       data-zs-perspective="1400"
       data-zs-card-width="880"
       data-zs-card-height="0.68"
       data-zs-radius="22"
       data-zs-peek="26"
       data-zs-scale-step="0.07"
       data-zs-blur="4"
       data-zs-dim="0.28"
       data-zs-depth="3"
       data-zs-progress="true"
       data-zs-counter="true"
       data-zs-hold="980"
       data-zs-wheel-threshold="42"
       >
       <div className="cotech-zoom-stack-pin">
       <div className="cotech-zoom-stack-chrome">
       <div className="cotech-zoom-stack-counter" data-zs-counter-el aria-live="polite">
       <span data-zs-current>01</span><span className="cotech-zoom-stack-counter-sep">/</span><span data-zs-total>06</span>
       </div>
       <div className="cotech-zoom-stack-progress" aria-hidden="true">
       <span data-zs-progress></span>
       </div>
       </div>
       <div className="cotech-zoom-stack-stage" data-zs-stage>
       <a href="/service-lead-generation" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-lead.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">01</span>
       <h3>Lead generation systems</h3>
       <p>Landing pages, forms, routing, and tracking that make demand visible and manageable.</p>
       </div>
       </a>
       <a href="/service-crm-automation" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-crm.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">02</span>
       <h3>CRM pipelines</h3>
       <p>Stages, automations, reminders, and dashboards that keep follow-up from slipping.</p>
       </div>
       </a>
       <a href="/service-ai-agents" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-ai.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">03</span>
       <h3>AI agents</h3>
       <p>Task-focused agents that support qualification, routing, research, and internal workflows.</p>
       </div>
       </a>
       <a href="/service-business-automation" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-automation.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">04</span>
       <h3>Business automation</h3>
       <p>Integrations and automations that remove repetitive admin work across your stack.</p>
       </div>
       </a>
       <a href="/services" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-systems.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">05</span>
       <h3>Reporting layers</h3>
       <p>Operational dashboards that show pipeline health, campaign response, and delivery status.</p>
       </div>
       </a>
       <a href="/service-web-platforms" className="cotech-zoom-stack-card" data-zs-card>
       <figure className="cotech-zoom-stack-media">
       <img src="/images/cotech-svc-web.jpg" alt="" width="880" height="600" loading="lazy" />
       </figure>
       <div className="cotech-zoom-stack-body">
       <span className="cotech-zoom-stack-index">06</span>
       <h3>Web platforms</h3>
       <p>Conversion-focused sites and internal tools that connect to the systems behind them.</p>
       </div>
       </a>
       </div>
       </div>
       </div>
       </section>
      
       {/* 6. Promises */}
       <section className="cotech-about-section cotech-about-promises-section" aria-label="Engagement promises">
       <div className="main-container">
       <div className="cotech-about-head space-y-3">
       <div data-ns-animate data-delay="0.1">
       <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
       <span className="shrink-0">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
       <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
       </svg>
       </span>
       <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">Engagement promises</span>
       </div>
       </div>
       <h2 data-text-reveal data-delay="0.2">What clients can expect from every scoped project</h2>
       </div>
       <div className="cotech-about-promises">
       <article data-ns-animate data-delay="0.2" className="cotech-about-promise cotech-stat-card">
       <h3>Fixed price</h3>
       <p>We scope the work clearly and price the agreed deliverable up front.</p>
       </article>
       <article data-ns-animate data-delay="0.25" className="cotech-about-promise cotech-stat-card">
       <h3>Two review cycles</h3>
       <p>Structured feedback rounds keep momentum while giving room for refinement.</p>
       </article>
       <article data-ns-animate data-delay="0.3" className="cotech-about-promise cotech-stat-card">
       <h3>30-day warranty</h3>
       <p>We fix launch-related bugs discovered within 30 days of handover.</p>
       </article>
       <article data-ns-animate data-delay="0.35" className="cotech-about-promise cotech-stat-card">
       <h3>Client-owned accounts</h3>
       <p>Where possible, tools and accounts are set up in the client&apos;s own name.</p>
       </article>
       <article data-ns-animate data-delay="0.4" className="cotech-about-promise cotech-stat-card">
       <h3>Clean handover</h3>
       <p>You receive access, documentation, and a walkthrough of what was built.</p>
       </article>
       </div>
       </div>
       </section>
      
       {/* 7. Closing CTA */}
       <section className="cotech-about-section cotech-about-cta" aria-label="Book a scoping call">
       <div className="main-container">
       <div className="cotech-about-cta-panel">
       <h2 data-text-reveal data-delay="0.2">Ready to turn a process bottleneck into a system your team can run?</h2>
       <p data-text-reveal data-delay="0.3">Book a free 30-minute scoping call and we&apos;ll help you decide whether a Blueprint, a build, or a support retainer is the right next step.</p>
       <div data-ns-animate data-delay="0.4" className="flex items-center justify-center">
       <a href="/contact" className="w-[80%] md:w-auto">
       <button data-button-wrapper className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full">
       <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap">Book a free call</span>
       <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">Book a free call</span>
       </span>
       <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
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
       </section>
       </main>
    </>
  );
}
