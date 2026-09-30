export function HomeCtaSection() {
  return (
    <>
      <section className="lg:py-16 py-12">
       <div className="main-container">
       <div className="space-y-8">
       <div className="space-y-5">
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
       CTA
       </span>
      </div>
      
       </div>
       <div className="space-y-3 text-center">
       <h2 data-text-reveal data-delay="0.2" className="max-w-[700px] mx-auto">
       Ready to scope the right system for your business?
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[600px] mx-auto">
       Tell us about your goals—we’ll map the design, development, and
       marketing path that gets you from vision to measurable results.
       </p>
       </div>
       </div>
      
       <div
       data-ns-animate
       data-delay="0.4"
       className="flex items-center justify-center"
       >
       <a href="/contact" className="w-[80%] md:w-auto">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >Contact Us</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >Contact Us</span
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
      </section>
    </>
  );
}
