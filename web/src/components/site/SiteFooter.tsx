import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer cotech-footer bg-background-1 relative z-0 overflow-hidden">
      <div className="main-container px-5">
        <div className="cotech-footer-top grid grid-cols-12 justify-between gap-x-8 gap-y-10">
          <div data-ns-animate data-delay="0.1" className="col-span-12 xl:col-span-4">
            <div className="cotech-footer-brand">
              <figure className="cotech-footer-logo-wrap">
                <img src="/images/logo/COTech_Logo_Stacked.png" alt="COTech Business Intelligence Solutions" className="cotech-logo-footer" width="160" height="126" />
              </figure>
              <p className="text-background-14/60 text-tagline-1 font-normal">COTech delivers business intelligence, lead generation, CRM automation, AI agents, and web platforms for UAE businesses.</p>
              <div className="cotech-scope-cta">
                <p className="cotech-scope-cta-title">Book a free 30-minute scoping call</p>
                <p className="cotech-scope-cta-text">Tell us what you want to automate, improve, or launch next.</p>
                <Link href="/contact" className="inline-flex">
                  <button data-button-wrapper className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-14 transition-transform ease-bouncy duration-400 active:scale-[0.98]">
                    <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
                      <span className="relative inline-block overflow-hidden leading-none"><span data-button-upper-text className="block text-nowrap">Book a call</span><span data-button-lower-text className="absolute left-0 top-full block text-nowrap">Book a call</span></span>
                      <span className="w-10 h-7.5 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"><path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cotech-footer-menus col-span-12 xl:col-span-8">
            <div data-ns-animate data-delay="0.2" className="cotech-footer-col" data-footer-accordion>
              <button type="button" className="cotech-footer-col-title" data-footer-toggle aria-expanded="false">
                <span>Explore</span>
                <span className="cotech-footer-col-chevron" aria-hidden="true"></span>
              </button>
              <div className="cotech-footer-col-panel" data-footer-panel>
                <ul>
                <li><Link href="/" className="footer-link-v2">Home</Link></li>
                <li><Link href="/services" className="footer-link-v2">Services</Link></li>
                <li className="hidden" aria-hidden="true"><Link href="/projects" tabIndex={-1} className="footer-link-v2">Outcomes</Link></li>
                <li><Link href="/about" className="footer-link-v2">About</Link></li>
                <li><Link href="/contact" className="footer-link-v2">Contact</Link></li>
              </ul>
              <ul className="cotech-footer-contact">
                <li><a href="mailto:info@cotechme.com" className="footer-link-v2">info@cotechme.com</a></li>
                <li><a href="tel:+971586188058" className="footer-link-v2">+971 58 618 8058</a></li>
                <li><a href="https://wa.me/971586188058" className="footer-link-v2" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
              </div>
            </div>
            <div data-ns-animate data-delay="0.25" className="cotech-footer-col" data-footer-accordion>
              <button type="button" className="cotech-footer-col-title" data-footer-toggle aria-expanded="false">
                <span>Pages</span>
                <span className="cotech-footer-col-chevron" aria-hidden="true"></span>
              </button>
              <div className="cotech-footer-col-panel" data-footer-panel>
                <ul>
                <li><Link href="/process" className="footer-link-v2">Process</Link></li>
                <li><Link href="/features" className="footer-link-v2">Features</Link></li>
                <li><Link href="/integration" className="footer-link-v2">Integrations</Link></li>
                <li><Link href="/security" className="footer-link-v2">Security</Link></li>
                <li><Link href="/faq" className="footer-link-v2">FAQ</Link></li>
                <li><Link href="/pricing" className="footer-link-v2">Scoping</Link></li>
              </ul>
              </div>
            </div>
            <div data-ns-animate data-delay="0.3" className="cotech-footer-col" data-footer-accordion>
              <button type="button" className="cotech-footer-col-title" data-footer-toggle aria-expanded="false">
                <span>Solutions</span>
                <span className="cotech-footer-col-chevron" aria-hidden="true"></span>
              </button>
              <div className="cotech-footer-col-panel" data-footer-panel>
                <ul data-cotech-services-nav data-cotech-services-nav-limit="6"></ul>
              </div>
            </div>
          </div>
        </div>
        <div data-ns-animate data-delay="0.7" data-offset="10" data-start="top 105%" className="cotech-footer-bottom relative">
          <div className="bg-stroke-3 absolute top-0 right-0 left-0 mx-auto h-px origin-center"></div>
          <div className="cotech-footer-legal-bar flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-tagline-1 text-secondary font-medium text-center sm:text-left">&copy; 2026 COTech. A division of CO Consultants, UAE.</p>
            <nav className="cotech-footer-legal-links flex items-center justify-center gap-x-6 md:justify-end md:ml-auto" aria-label="Legal">
              <Link href="/privacy-policy" className="footer-link-v2 text-tagline-1">Privacy Policy</Link>
              <Link href="/terms-conditions" className="footer-link-v2 text-tagline-1">Terms & Conditions</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
