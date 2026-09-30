export function HomeTestimonialsSection() {
  return (
    <>
      <section className="hidden xl:py-20 md:py-16 py-12" aria-hidden="true" data-section="trusted-client">
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
       TRUSTED CLIENT
       </span>
      </div>
      
       </div>
       <div className="space-y-3">
       <h2 data-text-reveal data-delay="0.2">
       Latest creations and projects
       </h2>
       <p data-text-reveal data-delay="0.3" className="max-w-[600px] mx-auto">
       Frequently asked questions ordered by popularity. Remember that if
       the visitor has not committed to the call to action
       </p>
       </div>
       </div>
       
      
       <div
       data-ns-animate
       data-delay="0.3"
       className="shrink-0 flex items-center justify-center"
       >
       <a href="/testimonials" className="w-[80%] md:w-auto">
       <button
       data-button-wrapper
       className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-secondary border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full"
      >
       <div
       className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-accent/60 h-full border border-stroke-1 flex items-center justify-between"
       >
       <span className="relative inline-block overflow-hidden leading-none">
       <span data-button-upper-text className="block text-nowrap"
       >View All Testimonials</span
       >
       <span
       data-button-lower-text
       className="absolute left-0 top-full block text-nowrap"
       >View All Testimonials</span
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
      
       
       <div data-testimonial-cards className="grid grid-cols-12 gap-6 items-center">
       
       <div
       data-testimonial-col
       className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-6"
       >
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-4.jpg"
       alt="Liam Harper"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Liam Harper</p>
       <p className="text-tagline-2 text-secondary/60">Dog Trainer</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
       </div>
      </div>
      
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-5.jpg"
       alt="Maya Collins"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Maya Collins</p>
       <p className="text-tagline-2 text-secondary/60">Nursing Assistant</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
       </div>
      </div>
      
       </div>
      
       
       <div
       data-testimonial-col
       className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-6"
       >
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-6.jpg"
       alt="Ethan Brooks"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Ethan Brooks</p>
       <p className="text-tagline-2 text-secondary/60">President of Sales</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
       </div>
      </div>
      
      
       
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[450px] items-start justify-between p-5 rounded-xl w-full will-change-transform"
       >
       <div
       className="bg-background-3 flex flex-col gap-2.5 items-start p-4 rounded-md w-full"
       >
       <div className="flex items-center justify-between w-full gap-3">
       <div className="flex items-center isolate min-w-0">
       <div
       className="bg-accent flex items-center justify-center -mr-5 p-1 rounded-lg size-14 shrink-0 z-[4]"
       >
       <p className="text-tagline-3 text-black">+243</p>
       </div>
       <div
       className="bg-background-4 flex h-[52px] items-center justify-center -mr-5 p-1 rounded-lg shrink-0 z-[3]"
       >
       <img
       src="/images/ns-avatar-7.jpg"
       alt="Client avatar"
       className="size-11 rounded object-cover"
       />
       </div>
       <div
       className="bg-background-4 flex items-center justify-center -mr-5 p-1 rounded-lg size-[46px] shrink-0 z-[2]"
       >
       <img
       src="/images/ns-avatar-8.jpg"
       alt="Client avatar"
       className="size-[38px] rounded object-cover"
       />
       </div>
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-10 shrink-0 z-[1]"
       >
       <img
       src="/images/ns-avatar-9.jpg"
       alt="Client avatar"
       className="size-8 rounded object-cover"
       />
       </div>
       </div>
       <div className="flex flex-col gap-1 items-start shrink-0">
       <div
       data-testimonial-stars
       className="flex items-center gap-0.5"
       aria-label="5 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-4 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-4 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-4 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-4 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-4 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-2 text-secondary/60">
       Happy by 20k+ clients
       </p>
       </div>
       </div>
       <div className="flex flex-col items-start">
       <p className="text-black">
       <span className="text-heading-4 font-normal">4.8</span
       ><span className="text-tagline-2 text-background-14/60">/5</span>
       </p>
       <p className="text-tagline-2 text-secondary/60">Real Rating</p>
       </div>
       </div>
       <div className="w-full space-y-4">
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean, and made our website look premium.
       They truly captured the essence of our brand.
       </p>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean, and made our website look premium.
       They truly captured the essence of our brand.
       </p>
       </div>
       </div>
      
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-10.jpg"
       alt="Zoe Mitchell"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Zoe Mitchell</p>
       <p className="text-tagline-2 text-secondary/60">Web Designer</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
       </div>
      </div>
      
       </div>
      
       
       <div
       data-testimonial-col
       className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-6"
       >
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-11.jpg"
       alt="Noah Bennett"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Noah Bennett</p>
       <p className="text-tagline-2 text-secondary/60">Marketing Coordinator</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
       </div>
      </div>
      
       <div
       data-testimonial-card
       className="bg-white flex flex-col h-[400px] items-start justify-between p-5 rounded-xl w-full will-change-transform "
      >
       <div className="flex gap-3 items-center w-full">
       <div
       className="bg-background-4 flex items-center justify-center p-1 rounded-lg size-14 shrink-0"
       >
       <img
       src="/images/ns-avatar-12.jpg"
       alt="Ava Morgan"
       className="size-12 rounded object-cover"
       />
       </div>
       <div className="flex flex-col items-start min-w-0">
       <p className="text-tagline-1 font-medium text-black">Ava Morgan</p>
       <p className="text-tagline-2 text-secondary/60">Medical Assistant</p>
       </div>
       </div>
       <div className="flex flex-col gap-6 items-start w-full">
       <div
       data-testimonial-stars
       className="flex items-center gap-1"
       aria-label="4 out of 5 stars"
       >
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-black"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 21 20"
       fill="none"
       className="size-3 fill-background-11"
      >
       <path
       d="M9.52444 0.648363C9.88538 -0.216122 11.1147 -0.216121 11.4756 0.648365L13.6058 5.75071C13.7581 6.11516 14.1021 6.36417 14.497 6.39571L20.0263 6.83732C20.9632 6.91215 21.3431 8.07684 20.6293 8.68594L16.4166 12.2809C16.1157 12.5378 15.9842 12.9407 16.0761 13.3246L17.3632 18.6999C17.5812 19.6106 16.5868 20.3304 15.7847 19.8424L11.0508 16.9619C10.7127 16.7561 10.2874 16.7561 9.94928 16.9619L5.21535 19.8424C4.41328 20.3304 3.41876 19.6106 3.63682 18.6999L4.92391 13.3246C5.01584 12.9407 4.88443 12.5378 4.58353 12.2809L0.370716 8.68594C-0.343055 8.07684 0.0368214 6.91215 0.973658 6.83732L6.50304 6.39571C6.89799 6.36417 7.24203 6.11516 7.39419 5.75071L9.52444 0.648363Z"
       />
      </svg>
      
       </div>
       <p className="text-tagline-1 text-background-14/60">
       The photos were sharp, clean,
       <span
       data-testimonial-quote
       className="text-secondary bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_2px] pb-0.5"
       >and made our website look premium.</span
       >
       They truly captured the essence of our brand.
       </p>
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
