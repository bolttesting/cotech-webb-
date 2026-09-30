import Link from "next/link";

export function ServiceDetailsPageContent() {
  return (
    <main className="bg-background-13">
     <section className="cotech-page-hero pt-32 pb-18 md:pt-42 md:pb-24 xl:pt-[180px] xl:pb-[120px]">
     <div className="main-container">
     <div className="max-w-[760px] mx-auto space-y-8">
     <div className="space-y-4 text-center">
     <h1 data-text-reveal data-delay="0.2">This page has moved</h1>
     <p data-text-reveal data-delay="0.3" className="text-secondary/60">
     COTech service details now live on dedicated pages. Visit the
     <Link href="/services" className="font-medium text-secondary underline underline-offset-4 hover:text-primary-500">services overview</Link>
     or open a specific service below.
     </p>
     </div>
     <div data-ns-animate data-delay="0.4" className="rounded-xl border border-stroke-11/25 bg-white p-6 md:p-8">
     <ul className="space-y-4">
     <li><Link href="/service-lead-generation" className="footer-link-v2">Lead Generation â€” ./service-lead-generation.html</Link></li>
     <li><Link href="/service-crm-automation" className="footer-link-v2">CRM Automation â€” ./service-crm-automation.html</Link></li>
     <li><Link href="/service-ai-agents" className="footer-link-v2">AI Agents â€” ./service-ai-agents.html</Link></li>
     <li><Link href="/service-business-automation" className="footer-link-v2">Business Automation â€” ./service-business-automation.html</Link></li>
     <li><Link href="/service-web-platforms" className="footer-link-v2">Web Platforms â€” ./service-web-platforms.html</Link></li>
     <li><Link href="/service-digital-business-systems" className="footer-link-v2">Digital Business Systems â€” ./service-digital-business-systems.html</Link></li>
     </ul>
     </div>
     </div>
     </div>
     </section>
     </main>
  );
}
