export function HomeDiscoverSection() {
  return (
    <>
      <section data-ns-animate data-delay="0.1" className="pb-14">
       <div className="flex items-center justify-center">
       <div
       data-circular-text
       data-magnetic-area
       data-duration="20"
       data-radius="64"
       className="relative inline-flex size-40 items-center justify-center rounded-full bg-white"
       aria-label="Discover other project on COTech"
       >
       
       <span
       data-circular-text-ring
       className="pointer-events-none absolute inset-0 p-6"
       aria-hidden="true"
       >
       <span
       data-circular-text-content
       className="font-inter-tight text-tagline-3 text-secondary absolute inset-0 uppercase"
       >
       DISCOVER COTECH BUSINESS SYSTEMS -
       </span>
       </span>
      
       
       <span
       data-circular-text-icon
       className="pointer-events-none absolute top-1/2 left-1/2 z-10 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
       >
       <figure
       data-magnetic
       data-magnetic-strength="0.4"
       className="size-14 overflow-hidden rounded-full will-change-transform"
       >
       <img
       src="./favicon.svg"
       alt="logo-icons"
       className="size-full object-cover"
       />
       </figure>
       </span>
       </div>
       </div>
      </section>
    </>
  );
}
