import Link from "next/link";

export function BlogDetailsPageContent() {
  return (
    <main className="bg-background-13">
     {/*=========================
    Details Body
    =========================== */}
    <section
     className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]"
    >
     <div className="main-container">
     <div className="mx-auto max-w-[1209px] space-y-3">
     <h2 data-ns-animate data-delay="0.1" className="max-w-[884px]">
     How conversion-focused UX turns visitors into qualified leads
     </h2>
     <div className="flex items-center gap-3">
     <figure
     data-ns-animate
     data-delay="0.2"
     className="size-12 overflow-hidden rounded-full bg-[#ECEAED]"
     >
     <img
     src="/images/ns-avatar-6.png"
     className="object-cover object-center"
     alt="Sarah Chen's avatar"
     width="48"
     height="48"
     loading="lazy"
     />
     </figure>
     <div>
     <h3
     data-ns-animate
     data-delay="0.3"
     className="text-tagline-1 font-medium"
     >
     Sarah Chen
     </h3>
     <time
     dateTime="2025-04-15"
     data-ns-animate
     data-delay="0.4"
     className="text-tagline-2 text-secondary/60 flex items-center gap-2 font-normal"
     >
     April 15, 2025 <span>•</span> 6 min read
     </time>
     </div>
     </div>
     </div>
     <figure
     data-ns-animate
     data-delay="0.4"
     className="my-10 max-w-full overflow-hidden rounded-lg md:my-[70px] md:rounded-4xl"
     >
     <img
     src="/images/ns-img-492.png"
     className="h-full w-full object-cover object-center"
     alt="blog-details-cover"
     />
     </figure>
    
     {/*Blog details-body */}
     <article className="blog-details-markdown">
     <h3 data-ns-animate data-delay="0.1">Introduction</h3>
     <p data-ns-animate data-delay="0.2">
     Most websites attract traffic but fail to convert. The gap is rarely
     about aesthetics alone â€” it's about clarity, trust, and removing
     friction at the moments that matter. At COTech, we treat conversion UX
     as a discipline: mapping user intent, designing clear paths to action,
     and validating every decision with real behavior data.
     </p>
     <p data-ns-animate data-delay="0.2">
     Whether you're launching a new product site or rebuilding a legacy
     platform, a conversion-first approach helps you prioritize what drives
     sign-ups, demo requests, and purchases â€” not just what looks polished in
     a mockup.
     </p>
    
     <h3 data-ns-animate data-delay="0.2">Core principles of conversion UX</h3>
     <h4 data-ns-animate data-delay="0.2">Clarity over cleverness</h4>
     <p data-ns-animate data-delay="0.2">
     Users decide in seconds whether a page is relevant. Headlines should
     state the outcome, supporting copy should address objections, and CTAs
     should describe the next step â€” not generic labels like "Learn more." We
     audit every page for message hierarchy: one primary action, one
     supporting narrative, and zero competing distractions above the fold.
     </p>
     <p data-ns-animate data-delay="0.2">
     Microcopy matters too. Form labels, error states, and empty states are
     often overlooked, yet they directly affect completion rates. Small copy
     improvements frequently deliver outsized gains without a full redesign.
     </p>
    
     <h4 data-ns-animate data-delay="0.2">
     Trust signals that reduce hesitation
     </h4>
     <p data-ns-animate data-delay="0.2">
     Conversion drops when users aren't confident in what happens next.
     Social proof, client logos, case study snippets, security badges, and
     transparent pricing all help bridge the trust gap. We place these
     elements adjacent to decision points â€” not buried in footers where they
     never get seen.
     </p>
     <p data-ns-animate data-delay="0.2">
     For B2B brands, showing real outcomes beats abstract claims. A single
     metric from a relevant case study near a demo CTA often outperforms a
     carousel of generic testimonials.
     </p>
    
     <h3 data-ns-animate data-delay="0.2">Real-world applications</h3>
     <h4 data-ns-animate data-delay="0.2">Landing page optimization</h4>
     <p data-ns-animate data-delay="0.2">
     We start with a traffic source audit: what promise did the ad, email, or
     search result make? The landing page must echo that promise immediately.
     Mismatch between ad copy and page headline is one of the most common â€”
     and fixable â€” conversion killers.
     </p>
    
     <h4 data-ns-animate data-delay="0.2">Form and checkout flow design</h4>
     <p data-ns-animate data-delay="0.2">
     Every field you ask for costs you completions. We apply progressive
     disclosure, smart defaults, and inline validation to keep users moving.
     For longer flows, progress indicators and save-and-return options
     prevent abandonment.
     </p>
    
     <h4 data-ns-animate data-delay="0.2">Mobile-first conversion paths</h4>
     <p data-ns-animate data-delay="0.2">
     Over half of B2B research happens on mobile, yet many sites still treat
     mobile as an afterthought. Thumb-friendly CTAs, readable type scales,
     and sticky action bars ensure mobile visitors can convert without
     switching devices.
     </p>
    
     <figure data-ns-animate data-delay="0.2">
     <img src="/images/ns-img-464.png" alt="blog-details" />
     </figure>
    
     <h3 data-ns-animate data-delay="0.2">Our conversion UX playbook</h3>
     <p data-ns-animate data-delay="0.2">
     Every COTech engagement follows a repeatable process: discovery and
     analytics review, heuristic audit, wireframe prototypes, A/B test
     planning, and post-launch iteration. We don't guess â€” we measure
     baseline performance, define success metrics upfront, and ship
     improvements in focused sprints.
     </p>
     <p data-ns-animate data-delay="0.2">
     For brand-new sites, we wireframe key conversion pages before visual
     design begins. This keeps stakeholders aligned on structure and
     messaging, and prevents expensive rework when designs look great but
     don't perform.
     </p>
     <ul>
     <li data-ns-animate data-delay="0.1">
     Map the primary user journey from entry point to conversion goal
     </li>
     <li data-ns-animate data-delay="0.1">
     Audit copy, layout, and trust signals at each decision point
     </li>
     <li data-ns-animate data-delay="0.1">
     Prototype, test with real users, and iterate before full build
     </li>
     </ul>
    
     <h3 data-ns-animate data-delay="0.2">
     Getting started with conversion UX
     </h3>
     <p data-ns-animate data-delay="0.2">
     You don't need a full redesign to see results. Start with your
     highest-traffic landing page or checkout step, pull analytics on
     drop-off points, and run a quick heuristic audit against clarity, trust,
     and friction. Even one focused improvement â€” a clearer headline, a
     shorter form, a stronger CTA â€” can move the needle within weeks.
     </p>
     <p data-ns-animate data-delay="0.2">
     If you're planning a launch or rebuild, involve UX strategy early. The
     best conversion wins happen when design, development, and marketing
     share the same success metrics from day one. That's the approach we
     bring to every COTech project.
     </p>
     </article>
    
     {/*details-footer */}
    
     <div
     data-ns-animate
     data-delay="0.2"
     className="mx-auto mt-[70px] max-w-[950px] space-y-4"
     >
     <h5 className="text-heading-6">Share this post</h5>
     <ul className="flex items-center gap-2.5">
     <li
     className="group/social-link border-secondary/10 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
     >
     <a href="">
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     viewBox="0 0 20 20"
     fill="none"
     >
     <path
     d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
     className="fill-secondary group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
     />
     </svg>
     </a>
     </li>
     <li
     className="group/social-link border-secondary/10 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
     >
     <a href="">
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     viewBox="0 0 20 20"
     fill="none"
     >
     <path
     fillRule="evenodd"
     clipRule="evenodd"
     d="M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25ZM15.7795 5.28335C16.8235 6.55504 17.4499 8.17787 17.4688 9.93355C17.2221 9.88614 14.7546 9.38313 12.2682 9.69632C12.2112 9.57295 12.1638 9.44005 12.1068 9.30722C11.955 8.94661 11.7842 8.57648 11.6133 8.22534C14.3655 7.1055 15.6182 5.49214 15.7795 5.28335ZM10 2.54067C11.898 2.54067 13.6347 3.25244 14.9539 4.41974C14.821 4.60955 13.6917 6.11849 11.0344 7.11496C9.81018 4.86578 8.45311 3.02468 8.24431 2.73997C8.8042 2.6071 9.39264 2.54067 10 2.54067ZM6.8208 3.24295C7.02008 3.50868 8.34871 5.35927 9.59192 7.56099C6.09951 8.49106 3.01519 8.47209 2.68303 8.47209C3.16703 6.15645 4.73292 4.22993 6.8208 3.24295ZM2.52169 10.0095C2.52169 9.93355 2.52169 9.85765 2.52169 9.78174C2.84436 9.7912 6.46963 9.83867 10.1993 8.71884C10.4176 9.13637 10.6169 9.56343 10.8067 9.99048C10.7118 10.019 10.6074 10.0475 10.5125 10.0759C6.65944 11.3191 4.60955 14.7166 4.43872 15.0013C3.25244 13.6822 2.52169 11.9265 2.52169 10.0095ZM10 17.4783C8.27275 17.4783 6.67842 16.8899 5.41621 15.9029C5.54908 15.6277 7.06749 12.7047 11.2812 11.2338C11.3001 11.2242 11.3097 11.2242 11.3286 11.2148C12.382 13.9384 12.8091 16.2256 12.923 16.8804C12.0214 17.2695 11.0344 17.4783 10 17.4783ZM14.1662 16.1971C14.0903 15.7416 13.6917 13.5588 12.7142 10.8731C15.0583 10.503 17.1082 11.1104 17.3644 11.1958C17.0418 13.2741 15.846 15.0678 14.1662 16.1971Z"
     className="fill-secondary group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
     />
     </svg>
     </a>
     </li>
     <li
     className="group/social-link border-secondary/10 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
     >
     <a href="">
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     viewBox="0 0 20 20"
     fill="none"
     >
     <path
     d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"
     className="fill-secondary group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
     />
     </svg>
     </a>
     </li>
     <li
     className="group/social-link border-secondary/10 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
     >
     <a href="">
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     viewBox="0 0 20 20"
     fill="none"
     >
     <path
     d="M10.0007 1C6.35854 1 3.07729 3.19375 1.6851 6.55469C0.292911 9.91562 1.06166 13.7875 3.6351 16.3609C6.20854 18.9344 10.0804 19.7031 13.4413 18.3109C16.807 16.9234 19.0007 13.6422 19.0007 10C19.0007 5.03125 14.9695 1 10.0007 1ZM7.3851 14.7391H5.42104V8.41094H7.3851V14.7391ZM6.40072 7.54844C5.93666 7.54844 5.51947 7.27187 5.34135 6.84531C5.16322 6.41875 5.25697 5.92656 5.5851 5.59844C5.90854 5.27031 6.40072 5.17188 6.82729 5.34531C7.25385 5.51875 7.5351 5.93594 7.53979 6.39531C7.53979 7.03281 7.03354 7.54375 6.40072 7.54844ZM14.7398 14.7391H12.7757V11.6594C12.7757 10.9234 12.7617 9.98594 11.7538 9.98594C10.746 9.98594 10.5679 10.7828 10.5679 11.6078V14.7391H8.61322V8.41094H10.4976V9.27344H10.5257C10.7882 8.77656 11.4257 8.25156 12.382 8.25156C14.3695 8.25156 14.7351 9.55937 14.7351 11.2609V14.7391H14.7398Z"
     className="fill-secondary group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
     />
     </svg>
     </a>
     </li>
     </ul>
     </div>
    
     <article
     data-ns-animate
     data-delay="0.2"
     className="mx-auto mt-10 max-w-[850px] md:mt-[72px]"
     >
     <div className="mb-[70px] space-y-4">
     <h5 className="text-heading-4">Comments</h5>
     <div className="flex items-center gap-3">
     <figure
     className="size-14 overflow-hidden rounded-2xl bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]"
     >
     <img
     src="/images/ns-avatar-6.png"
     className="object-cover object-center"
     alt="Esther Howard's avatar"
     width="56"
     height="56"
     loading="lazy"
     />
     </figure>
     <div>
     <h3 className="text-tagline-1 font-medium">Sarah Chen</h3>
    
     <time
     dateTime="2025-04-17"
     className="text-tagline-2 text-secondary/60 flex items-center gap-2 font-normal"
     >
     Apr 17, 2025
     </time>
     </div>
     </div>
     <p>
     This breakdown of conversion UX principles is exactly what our team
     needed before our site rebuild. The trust-signal placement tips alone
     helped us rethink our landing pages.
     </p>
     <h6 className="text-tagline-1">Reply</h6>
     </div>
    
     <div
     className="max-w-[850px] rounded-[20px] bg-white px-4 py-6 md:w-full md:p-6 lg:p-[42px]"
     >
     <form action="/" method="post">
     {/*name field */}
     <fieldset
     className="mb-8 flex w-full flex-col items-start justify-start gap-2"
     >
     <label
     htmlFor="fullName"
     className="text-tagline-1 text-secondary font-medium"
     >Full Name</label>
     <input
     type="text"
     name="fullName"
     id="fullName"
     required
     placeholder="Enter your name"
     className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
     aria-required="true"
     />
     </fieldset>
    
     {/*email field */}
     <fieldset
     className="mb-8 flex w-full flex-col items-start justify-start gap-2"
     >
     <label
     htmlFor="emailAddress"
     className="text-tagline-1 text-secondary font-medium"
     >Email address</label>
     <input
     type="email"
     required
     name="emailAddress"
     id="emailAddress"
     placeholder="Enter your email"
     className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
     aria-required="true"
     />
     </fieldset>
    
     {/*message field */}
     <fieldset
     className="mb-4 flex w-full flex-col items-start justify-start gap-2"
     >
     <label
     htmlFor="messages"
     className="text-tagline-1 text-secondary font-medium"
     >Message</label>
     <textarea
     name="messages"
     id="messages"
     required
     placeholder="Enter your message"
     className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
     aria-required="true"
     ></textarea>
     </fieldset>
    
     {/*terms and conditions checkbox */}
     <fieldset className="mb-4 flex items-center gap-2">
     <label htmlFor="agree-terms" className="flex items-center gap-x-3">
     <input
     id="agree-terms"
     type="checkbox"
     className="peer sr-only"
     required
     />
     <span
     className="border-stroke-3 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100"
     ></span>
     </label>
     <label
     htmlFor="agree-terms"
     className="text-tagline-3 text-secondary/60 cursor-pointer"
     >
     I agree with the
     <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">terms and conditions</Link>
     </label>
     </fieldset>
    
     {/*submit button */}
     <button
     type="submit"
     data-button-wrapper
     className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
    >
     <div
     className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
     >
     <span className="relative inline-block overflow-hidden leading-none">
     <span data-button-upper-text className="block text-nowrap"
     >Submit</span>
     <span
     data-button-lower-text
     className="absolute left-0 top-full block text-nowrap"
     >Submit</span>
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
    
     </form>
     </div>
     </article>
     </div>
    </section>
    
     <section className="lg:py-28 py-18">
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
     {/*logo */}
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
    
     {/*text */}
     <span
     className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase"
     >
     CTA
     </span>
    </div>
    
     </div>
     <div className="space-y-3 text-center">
     <h2 data-text-reveal data-delay="0.2" className="max-w-[700px] mx-auto">
     Ready to build something that grows with your brand?
     </h2>
     <p data-text-reveal data-delay="0.3" className="max-w-[600px] mx-auto">
     Tell us about your goalsâ€”we'll map the design, development, and
     marketing path that gets you from vision to measurable results.
     </p>
     </div>
     </div>
    
     <div
     data-ns-animate
     data-delay="0.4"
     className="flex items-center justify-center"
     >
     <Link href="/contact" className="w-[80%] md:w-auto">
     <button
     data-button-wrapper
     className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
    >
     <div
     className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between"
     >
     <span className="relative inline-block overflow-hidden leading-none">
     <span data-button-upper-text className="block text-nowrap"
     >Contact Us</span>
     <span
     data-button-lower-text
     className="absolute left-0 top-full block text-nowrap"
     >Contact Us</span>
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
    
     </Link>
     </div>
     </div>
     </div>
    </section>
    
     </main>
  );
}
