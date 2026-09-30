import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
     <div
     className="header-scroll lp:max-w-[1290px]! has-top-nav  fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-full bg-white px-2.5 py-2.5 opacity-0 backdrop-blur-[25px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0"
     data-ns-animate
     data-direction="up"
     data-offset="100"
     suppressHydrationWarning
     >
     <div>
     <Link href="/">
     <span className="sr-only">Home</span>
     <figure className="hidden lg:block">
     <img src="/images/logo/COTech_Logo_Primary.png" alt="COTech Business Intelligence Solutions" className="cotech-logo-header" width="180" height="48" />
     </figure>
     <figure className="block max-w-[44px] lg:hidden">
     <img src="/images/logo/logo.svg" alt="COTech" className="block w-full" />
     </figure>
     </Link>
     </div>
     <nav className="hidden items-center xl:flex">
     <ul className="flex items-center">
     <li className="nav-item relative cursor-pointer py-2.5">
     <Link href="/about" className="hover:border-stroke-2 text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
     <span>About us</span>
     </Link>
     </li>
     <li className="nav-item relative cursor-pointer py-2.5">
     <Link href="/services" className="hover:border-stroke-2 text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
     <span>Services</span>
     </Link>
     </li>
     <li className="nav-item relative cursor-pointer py-2.5 hidden" aria-hidden="true">
     <Link href="/projects" tabIndex={-1}
     className="hover:border-stroke-2 text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
     <span>Projects</span>
     </Link>
     </li>
     <li className="nav-item relative cursor-pointer py-2.5">
     <Link href="/blog" className="hover:border-stroke-2 text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
     <span>Blog</span>
     </Link>
     </li>
     <li
     className="nav-item relative cursor-pointer py-2.5"
     data-menu="all-pages-mega-menu"
     >
     <a href="#"
     className="hover:border-stroke-2 text-tagline-1 text-secondary/60 hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
     >
     <span>All pages</span>
     <span
     className="nav-arrow block origin-center translate-y-px transition-all duration-300"
     >
     <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     className="size-4 stroke-current stroke-[1.5]"
    >
     <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="m19.5 8.25-7.5 7.5-7.5-7.5"
     />
    </svg>
    
     </span>
     </a>
     <div
     className="mega-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-screen -translate-x-1/2 bg-transparent opacity-0"
     ></div>
     </li>
     </ul>
     </nav>
    
     <div className="hidden items-center justify-center xl:flex">
     <Link href="/contact">
     <button
     data-button-wrapper
     className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-14 transition-transform ease-bouncy duration-400 active:scale-[0.98] "
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
     className="w-10 h-7.5 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4"
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
     <div className="block xl:hidden">
     <button
     className="nav-hamburger bg-background-4 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full"
     >
     <span className="sr-only">Menu</span>
     <span className="bg-stroke-9 block h-0.5 w-6"></span>
     <span className="bg-stroke-9 block h-0.5 w-6"></span>
     <span className="bg-stroke-9 block h-0.5 w-6"></span>
     </button>
     </div>
    
     <div
     id="all-pages-mega-menu"
     className="mega-menu border-stroke-1 pointer-events-none absolute top-full z-50 mt-3 rounded-[20px] border bg-white p-5 opacity-0 shadow-lg transition-all duration-300 xl:p-5"
     suppressHydrationWarning
    >
     <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:gap-8">
     {/*Column 1: 6 items */}
     <ul className="w-full shrink-0 space-y-1 lg:w-60">
     <li>
     <Link href="/pricing" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     viewBox="0 0 20 20"
     fill="none"
    >
     <path
     d="M10 0.833496V19.1668"
     className="stroke-secondary"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
     <path
     d="M14.1667 4.1665H7.91667C7.14312 4.1665 6.40125 4.47379 5.85427 5.02078C5.30729 5.56776 5 6.30962 5 7.08317C5 7.85672 5.30729 8.59858 5.85427 9.14557C6.40125 9.69255 7.14312 9.99984 7.91667 9.99984H12.0833C12.8569 9.99984 13.5987 10.3071 14.1457 10.8541C14.6927 11.4011 15 12.143 15 12.9165C15 13.6901 14.6927 14.4319 14.1457 14.9789C13.5987 15.5259 12.8569 15.8332 12.0833 15.8332H5"
     className="stroke-secondary"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
    </svg>
    
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">Scoping</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
                How we scope engagements
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/faq" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
     <path
     d="M2.87976 14.3702C2.16069 13.6512 2.63762 12.1415 2.27162 11.257C1.89222 10.34 0.5 9.60195 0.5 8.62497C0.5 7.64801 1.89222 6.91 2.27163 5.99303C2.63763 5.10846 2.1607 3.59882 2.87976 2.87976C3.59882 2.16069 5.10846 2.63762 5.99304 2.27162C6.91002 1.89222 7.64805 0.5 8.62503 0.5C9.60199 0.5 10.34 1.89222 11.257 2.27163C12.1415 2.63763 13.6512 2.1607 14.3702 2.87976C15.0893 3.59882 14.6124 5.10846 14.9784 5.99304C15.3578 6.91002 16.75 7.64805 16.75 8.62503C16.75 9.60199 15.3578 10.34 14.9784 11.257C14.6124 12.1415 15.0893 13.6512 14.3702 14.3702C13.6512 15.0893 12.1415 14.6124 11.257 14.9784C10.34 15.3578 9.60195 16.75 8.62497 16.75C7.64801 16.75 6.91 15.3578 5.99303 14.9784C5.10846 14.6124 3.59882 15.0893 2.87976 14.3702Z"
     className="stroke-secondary "
     strokeLinecap="round"
     strokeLinejoin="round"
     />
     <path
     d="M8.625 13.625C9.14277 13.625 9.5625 13.2053 9.5625 12.6875C9.5625 12.1697 9.14277 11.75 8.625 11.75C8.10723 11.75 7.6875 12.1697 7.6875 12.6875C7.6875 13.2053 8.10723 13.625 8.625 13.625Z"
     className="fill-secondary "
     />
     <path
     d="M8.625 9.87537V9.25037C9.05765 9.25037 9.48058 9.12207 9.84031 8.88171C10.2 8.64134 10.4804 8.2997 10.646 7.89999C10.8116 7.50027 10.8549 7.06044 10.7705 6.63611C10.6861 6.21177 10.4777 5.822 10.1718 5.51607C9.86587 5.21014 9.47609 5.0018 9.05176 4.9174C8.62743 4.83299 8.18759 4.87631 7.78788 5.04188C7.38817 5.20745 7.04653 5.48782 6.80616 5.84756C6.5658 6.20729 6.4375 6.63022 6.4375 7.06287"
     className="stroke-secondary "
     strokeLinecap="round"
     strokeLinejoin="round"
     />
    </svg>
    
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">FAQ</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     Common questions
     </p>
     </div>
     </Link>
     </li>
     </ul>
    
     {/*Column 2: 6 items */}
     <ul className="w-full shrink-0 space-y-1 lg:w-60">
     <li>
     <Link href="/process" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M4.99978 16.875C4.9177 16.875 4.83643 16.8589 4.7606 16.8274C4.68477 16.796 4.61587 16.75 4.55784 16.692C4.4998 16.6339 4.45376 16.565 4.42235 16.4892C4.39095 16.4134 4.37478 16.3321 4.37478 16.25L4.37482 12.9145C4.0414 13.0724 3.67346 13.1434 3.30522 13.121C2.93698 13.0985 2.58041 12.9832 2.26867 12.786C1.95693 12.5887 1.70015 12.3157 1.52222 11.9926C1.34428 11.6694 1.25098 11.3064 1.25098 10.9375C1.25098 10.5686 1.34428 10.2057 1.52222 9.88248C1.70015 9.5593 1.95693 9.28637 2.26867 9.08908C2.58041 8.8918 2.93698 8.77656 3.30522 8.75408C3.67346 8.73161 4.0414 8.80263 4.37482 8.96055L4.37478 5.62503C4.37478 5.54295 4.39095 5.46167 4.42236 5.38584C4.45377 5.31001 4.4998 5.24111 4.55784 5.18308C4.61588 5.12504 4.68478 5.079 4.76061 5.04759C4.83644 5.01618 4.91771 5.00002 4.99979 5.00002L8.6478 5.00006C8.48989 4.66664 8.41886 4.2987 8.44134 3.93046C8.46381 3.56222 8.57905 3.20565 8.77634 2.89391C8.97363 2.58217 9.24656 2.32539 9.56974 2.14746C9.89292 1.96953 10.2558 1.87622 10.6248 1.87622C10.9937 1.87622 11.3566 1.96953 11.6798 2.14746C12.003 2.32539 12.2759 2.58217 12.4732 2.89391C12.6705 3.20565 12.7857 3.56222 12.8082 3.93046C12.8307 4.2987 12.7597 4.66664 12.6017 5.00006L16.2497 5.00002C16.4155 5.00002 16.5745 5.06586 16.6917 5.18307C16.8089 5.30028 16.8747 5.45925 16.8748 5.62501L16.8748 8.96055C16.5414 8.80263 16.1734 8.73161 15.8052 8.75408C15.437 8.77655 15.0804 8.8918 14.7686 9.08908C14.4569 9.28637 14.2001 9.5593 14.0222 9.88248C13.8443 10.2057 13.7509 10.5686 13.7509 10.9375C13.7509 11.3064 13.8443 11.6694 14.0222 11.9926C14.2001 12.3157 14.4569 12.5887 14.7686 12.786C15.0804 12.9832 15.437 13.0985 15.8052 13.121C16.1734 13.1434 16.5414 13.0724 16.8748 12.9145L16.8748 16.25C16.8747 16.4158 16.8089 16.5748 16.6917 16.692C16.5745 16.8092 16.4155 16.875 16.2498 16.875L4.99978 16.875Z" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> </svg> 
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">Process</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     Discovery to launch
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/features" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
     <path
     d="M10.0003 1.66669L12.5753 6.88335L18.3337 7.72502L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72502L7.42533 6.88335L10.0003 1.66669Z"
     className="stroke-secondary "
     strokeLinecap="round"
     strokeLinejoin="round"
     />
    </svg>
    
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">Features</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     What we deliver
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/integration" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M8.33301 10.8333C8.69088 11.3118 9.14747 11.7077 9.6718 11.9941C10.1961 12.2806 10.7759 12.4509 11.3719 12.4936C11.9678 12.5363 12.566 12.4503 13.1258 12.2415C13.6856 12.0327 14.1939 11.7059 14.6163 11.2833L17.1163 8.78335C17.8753 7.9975 18.2953 6.94499 18.2858 5.85251C18.2763 4.76002 17.8381 3.71497 17.0656 2.94243C16.2931 2.1699 15.248 1.7317 14.1555 1.7222C13.063 1.71271 12.0105 2.13269 11.2247 2.89168L9.79134 4.31668" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> <path d="M11.6668 9.16665C11.309 8.68821 10.8524 8.29233 10.328 8.00587C9.80371 7.7194 9.22391 7.54905 8.62796 7.50637C8.03201 7.46369 7.43384 7.54968 6.87405 7.7585C6.31425 7.96732 5.8059 8.29409 5.3835 8.71665L2.8835 11.2167C2.12451 12.0025 1.70453 13.055 1.71402 14.1475C1.72352 15.24 2.16172 16.285 2.93426 17.0576C3.70679 17.8301 4.75184 18.2683 5.84433 18.2778C6.93681 18.2873 7.98932 17.8673 8.77517 17.1083L10.2002 15.6833" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> </svg> 
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">Integration</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     Tools & tech partners
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/security" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none"> <path d="M0.5 5.70833V1.125C0.5 0.95924 0.565848 0.800269 0.683058 0.683058C0.800269 0.565848 0.95924 0.5 1.125 0.5H13.625C13.7908 0.5 13.9497 0.565848 14.0669 0.683058C14.1842 0.800269 14.25 0.95924 14.25 1.125V5.70833C14.25 12.272 8.67922 14.4466 7.56689 14.8154C7.44254 14.8582 7.30746 14.8582 7.18311 14.8154C6.07078 14.4466 0.5 12.272 0.5 5.70833Z" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> <path d="M10.8125 4.875L6.22914 9.25L3.9375 7.0625" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> </svg> 
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">Security</p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     Secure project delivery
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/privacy-policy" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M9.99967 18.3334C9.99967 18.3334 16.6663 15 16.6663 10V4.16669L9.99967 1.66669L3.33301 4.16669V10C3.33301 15 9.99967 18.3334 9.99967 18.3334Z" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> </svg> 
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">
     Privacy Policy
     </p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     How we handle data
     </p>
     </div>
     </Link>
     </li>
     <li>
     <Link href="/terms-conditions" className="group relative flex items-start gap-2.5 rounded-[10px] p-3 transition-all duration-300">
     <div
     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 "
    ></div>
    
     <div
     className="border-stroke-1 relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1"
     >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M10.833 1.66669H4.99967C4.55765 1.66669 4.13372 1.84228 3.82116 2.15484C3.5086 2.4674 3.33301 2.89133 3.33301 3.33335V16.6667C3.33301 17.1087 3.5086 17.5326 3.82116 17.8452C4.13372 18.1578 4.55765 18.3334 4.99967 18.3334H14.9997C15.4417 18.3334 15.8656 18.1578 16.1782 17.8452C16.4907 17.5326 16.6663 17.1087 16.6663 16.6667V7.50002L10.833 1.66669Z" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> <path d="M10.833 1.66669V7.50002H16.6663" className="stroke-secondary " strokeLinecap="round" strokeLinejoin="round" /> </svg> 
     </div>
     <div className="relative z-10 space-y-0.5">
     <p className="text-tagline-1 text-secondary font-normal">
     Terms & Conditions
     </p>
     <p className="text-tagline-3 text-secondary/60 font-normal">
     Service engagement terms
     </p>
     </div>
     </Link>
     </li>
     </ul>
    
     {/*Column 3: Featured project */}
     <Link href="/projects" className="hidden flex w-full min-w-0 flex-1 self-stretch" aria-hidden="true" tabIndex={-1}>
     <figure
     className="group relative min-h-[280px] w-full flex-1 overflow-hidden rounded-[14px] lg:min-h-0"
     >
     <img
     src="/images/cotech-svc-systems.jpg"
     alt="COTech digital business systems"
     className="h-full w-full rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
     />
     <div
     className="absolute inset-0 rounded-[14px] bg-linear-to-t from-black/70 via-black/20 to-transparent"
     ></div>
     <div
     className="absolute right-4 bottom-4 left-4 space-y-1 transition-all duration-500 ease-in-out group-hover:bottom-5"
     >
     <h3 className="text-heading-6 font-medium text-white">
     Digital Business Systems
     </h3>
     <p className="text-tagline-3 max-w-65 font-normal text-white/70">
     Fixed-price lead engines, CRM, AI agents, and automation for UAE
     businesses.
     </p>
     </div>
     </figure>
     </Link>
     </div>
    </div>
    
     </div>
     {/*=========================
    Mobile Menu
    =========================== */}
    
    <button
     type="button"
     className="mobile-nav-backdrop bg-secondary/40 pointer-events-none fixed inset-0 z-60 opacity-0 xl:hidden"
     aria-label="Close menu"
     tabIndex={-1}
    ></button>
    
    <aside
     id="mobile-nav-sidebar"
     className="sidebar pointer-events-none invisible fixed top-0 left-0 z-70 flex h-dvh w-full flex-col overflow-hidden bg-white shadow-xl md:w-[min(100vw,22rem)] xl:hidden"
     aria-hidden="true"
    >
     {/*Root navigation */}
     <div className="mobile-nav-root flex min-h-0 flex-1 flex-col" data-mobile-root>
     <div
     className="border-stroke-1 flex items-center justify-between border-b bg-white px-7 py-5"
     >
     <Link href="/" className="block w-full max-w-[44px]">
     <span className="sr-only">Home</span>
     <img
     src="/images/logo/logo.svg"
     alt="COTech"
     className="size-full object-cover"
     />
     </Link>
     <button
     type="button"
     className="nav-hamburger-close text-secondary hover:bg-background-4 flex size-9 cursor-pointer items-center justify-center rounded-md transition-all duration-300"
     aria-label="Close menu"
     >
     <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="none"
     className="size-5 stroke-current"
     strokeWidth="1.75"
     aria-hidden="true"
     >
     <path
     d="M18 6L6 18M6 6l12 12"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
     </svg>
     </button>
     </div>
    
     <nav
     className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain p-7"
     aria-label="Mobile"
     >
     <ul className="space-y-6">
     <li>
     <Link href="/about" className="mobile-nav-link text-heading-6 text-secondary block transition-colors">About us</Link>
     </li>
     <li>
     <Link href="/services" className="mobile-nav-link text-heading-6 text-secondary block transition-colors">Services</Link>
     </li>
     <li className="hidden" aria-hidden="true">
     <Link href="/projects" tabIndex={-1}
     className="mobile-nav-link text-heading-6 text-secondary block transition-colors">Projects</Link>
     </li>
     <li>
     <Link href="/blog" className="mobile-nav-link text-heading-6 text-secondary block transition-colors">Blog</Link>
     </li>
     <li>
     <button
     type="button"
     className="mobile-nav-mega text-heading-6 text-secondary flex w-full cursor-pointer items-center justify-between gap-2 text-left transition-colors"
     data-mega="all-pages"
     >
     All pages
     <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 20 20"
     fill="none"
     className="stroke-secondary size-4.5 shrink-0"
     aria-hidden="true"
     >
     <path
     d="M10 12L14 8L10 4"
     strokeWidth="1.5"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
     </svg>
     </button>
     </li>
     <li>
     <Link href="/contact" className="mobile-nav-link text-heading-6 text-secondary block transition-colors">Contact Us</Link>
     </li>
     </ul>
     </nav>
     </div>
    
     {/*All pages panel */}
     <div
     className="mobile-nav-panel pointer-events-none invisible absolute inset-0 z-10 flex flex-col bg-white"
     data-panel="all-pages"
     >
     <div
     className="border-stroke-1 flex items-center gap-2 border-b bg-white px-4 py-4"
     >
     <button
     type="button"
     className="mobile-nav-back text-secondary hover:bg-background-4 flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md transition-all duration-300"
     aria-label="Back to menu"
     >
     <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 20 20"
     fill="none"
     className="size-5 rotate-180 stroke-current"
     aria-hidden="true"
     >
     <path
     d="M10 12L14 8L10 4"
     strokeWidth="1.5"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
     </svg>
     </button>
     <h2
     className="text-secondary min-w-0 flex-1 truncate text-base font-semibold"
     >
     All pages
     </h2>
     </div>
     <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
     <ul className="space-y-1">
     <li>
     <Link href="/pricing" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Scoping</Link>
     </li>
     <li>
     <Link href="/faq" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">FAQ</Link>
     </li>
     <li>
     <Link href="/process" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Process</Link>
     </li>
     <li>
     <Link href="/features" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Features</Link>
     </li>
     <li>
     <Link href="/integration" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Integration</Link>
     </li>
     <li>
     <Link href="/security" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Security</Link>
     </li>
     <li>
     <Link href="/privacy-policy" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Privacy Policy</Link>
     </li>
     <li>
     <Link href="/terms-conditions" className="mobile-nav-link text-heading-6 text-secondary hover:bg-background-4 block rounded-lg px-4 py-3 transition-colors">Terms & Conditions</Link>
     </li>
     </ul>
     </div>
     </div>
    </aside>
    
    </header>
  );
}
