export function HomeFaqSection() {
  return (
    <>
      <section className="xl:py-20 md:py-16 py-12">
       <div className="main-container">
       <div className="grid grid-cols-12 items-start gap-y-10 lg:gap-x-10 xl:gap-x-18">
       
       <div className="col-span-12 lg:col-span-6">
       <div className="space-y-8">
       
       <div className="space-y-5 text-left">
       <div
       data-ns-animate
       data-delay="0.1"
       className="flex items-center justify-center lg:items-start lg:justify-start"
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
       FAQ
       </span>
      </div>
      
       </div>
       <div className="space-y-3 text-center lg:text-left">
       <h2 data-text-reveal data-delay="0.2">
       Clarity before you start
       </h2>
       <p
       data-text-reveal
       data-delay="0.3"
       className="max-w-[600px] max-lg:mx-auto"
       >
       Explore key details about our services, process, and approach—
       so you know exactly what to expect.
       </p>
       </div>
       </div>
      
       
       <div
       data-ns-animate
       data-delay="0.3"
       className="shrink-0 flex items-center justify-center lg:items-start lg:justify-start"
       >
       <a href="/faq" className="w-[80%] md:w-auto">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-accent/60 h-full border border-stroke-1 flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >Explore FAQ</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >Explore FAQ</span
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
      
       
      
       <div data-ns-animate data-delay="0.3" className="col-span-12 lg:col-span-6">
       <div data-faq-accordion>
       
       <div
       data-faq-item
       data-default-open="true"
       className="group/faq border-b border-stroke-3"
       >
       <h3 className="w-full cursor-pointer">
       <button
       type="button"
       data-faq-action
       className="flex w-full items-start cursor-pointer justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3"
       >
       <span className="font-inter-tight text-tagline-new text-black"
       >Do I need any coding skills to get started?</span
       >
       <span
       data-faq-icon
       className="flex size-7 shrink-0 items-center justify-center rounded border border-stroke-3 transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
       >
       <path
       d="M13 6L8 11L3 6"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
       </svg>
       </span>
       </button>
       </h3>
       <div data-faq-content className="h-0 overflow-hidden">
       <div
       data-faq-text-reveal
       className="font-inter-tight text-tagline-2 pb-6 cursor-text w-[90%] text-black/60"
       >
       No, everything is designed to be user-friendly and visual. You
       can easily manage and customize your website without any
       technical knowledge.
       </div>
       </div>
       </div>
      
       
       <div data-faq-item className="group/faq border-b border-stroke-3">
       <h3 className="w-full cursor-pointer">
       <button
       type="button"
       data-faq-action
       className="flex w-full items-start cursor-pointer justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3"
       >
       <span className="font-inter-tight text-tagline-new text-black"
       >How long does it take to complete a project?</span
       >
       <span
       data-faq-icon
       className="flex size-7 shrink-0 items-center justify-center rounded border border-stroke-3 transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
       >
       <path
       d="M13 6L8 11L3 6"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
       </svg>
       </span>
       </button>
       </h3>
       <div data-faq-content className="h-0 overflow-hidden">
       <div
       data-faq-text-reveal
       className="font-inter-tight text-tagline-2 pb-6 w-[90%] cursor-text text-black/60"
       >
       Most projects take 4–8 weeks depending on scope, content
       readiness, and the number of revision rounds required.
       </div>
       </div>
       </div>
      
       
       <div data-faq-item className="group/faq border-b border-stroke-3">
       <h3 className="w-full cursor-pointer">
       <button
       type="button"
       data-faq-action
       className="flex w-full items-start cursor-pointer justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3"
       >
       <span className="font-inter-tight text-tagline-new text-black"
       >Can I fully customize the design to match my brand?</span
       >
       <span
       data-faq-icon
       className="flex size-7 shrink-0 items-center justify-center rounded border border-stroke-3 transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
       >
       <path
       d="M13 6L8 11L3 6"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
       </svg>
       </span>
       </button>
       </h3>
       <div data-faq-content className="h-0 overflow-hidden">
       <div
       data-faq-text-reveal
       className="font-inter-tight text-tagline-2 pb-6 w-[90%] cursor-text text-black/60"
       >
       Yes. Colors, typography, layouts, and components can be tailored
       so the final site feels fully on-brand.
       </div>
       </div>
       </div>
      
       
       <div data-faq-item className="group/faq border-b border-stroke-3">
       <h3 className="w-full cursor-pointer">
       <button
       type="button"
       data-faq-action
       className="flex w-full items-start cursor-pointer justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3"
       >
       <span className="font-inter-tight text-tagline-new text-black"
       >Will my website be optimized for SEO and performance?</span
       >
       <span
       data-faq-icon
       className="flex size-7 shrink-0 items-center justify-center rounded border border-stroke-3 transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
       >
       <path
       d="M13 6L8 11L3 6"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
       </svg>
       </span>
       </button>
       </h3>
       <div data-faq-content className="h-0 overflow-hidden">
       <div
       data-faq-text-reveal
       className="font-inter-tight text-tagline-2 pb-6 w-[90%] cursor-text text-black/60"
       >
       Absolutely. We build with clean structure, fast load times, and
       SEO-friendly markup from the start.
       </div>
       </div>
       </div>
      
       
       <div data-faq-item className="group/faq">
       <h3 className="w-full cursor-pointer">
       <button
       type="button"
       data-faq-action
       className="flex w-full items-start cursor-pointer justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3"
       >
       <span className="font-inter-tight text-tagline-new text-black"
       >What kind of support do you provide after launch?</span
       >
       <span
       data-faq-icon
       className="flex size-7 shrink-0 items-center justify-center rounded border border-stroke-3 transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       fill="none"
       className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
       >
       <path
       d="M13 6L8 11L3 6"
       strokeLinecap="round"
       strokeLinejoin="round"
       />
       </svg>
       </span>
       </button>
       </h3>
       <div data-faq-content className="h-0 overflow-hidden">
       <div
       data-faq-text-reveal
       className="font-inter-tight text-tagline-2 pb-6 w-[90%] cursor-text text-black/60"
       >
       Post-launch support covers updates, minor fixes, and guidance so
       your site stays smooth and secure.
       </div>
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
