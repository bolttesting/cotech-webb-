/** Static SEO metadata (formerly read from repo-root `.html` files). */
export type MarketingPageMeta = { title: string; description?: string };

export const MARKETING_PAGE_METADATA: Record<string, MarketingPageMeta> = {
  about: {
    title: "About COTech — Business Intelligence Solutions | UAE",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  "blog-details": {
    title: "Article || COTech",
    description: "COTech article on building connected business systems for UAE companies.",
  },
  blog: {
    title: "Blog || COTech",
    description:
      "Insights from COTech on lead systems, CRM automation, AI agents, and digital business platforms for UAE teams.",
  },
  contact: {
    title: "Contact || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  faq: {
    title: "COTech — Business Intelligence Solutions | UAE",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  features: {
    title: "Features || COTech",
    description:
      "Explore COTech capabilities across lead generation, CRM automation, AI agents, business systems, and web platforms for UAE teams.",
  },
  index: {
    title: "COTech — Business Intelligence Solutions | UAE",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  integration: {
    title: "Integrations || COTech",
    description:
      "Platforms COTech connects — CRM, WhatsApp, Meta, Google, Zapier, Make, and the tools your team already uses.",
  },
  login: {
    title: "Sign in — COTech",
  },
  pricing: {
    title: "Scoping || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  "privacy-policy": {
    title: "Privacy Policy || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  process: {
    title: "Process || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  "project-clinic-lead-engine": {
    title: "Private clinic lead engine || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  "project-details": {
    title: "Private clinic lead engine || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  projects: {
    title: "COTech — Business Intelligence Solutions | UAE",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
  security: {
    title: "Security || COTech",
    description:
      "How COTech protects client data, credentials, and delivery access across Blueprint, build, and support.",
  },
  "service-ai-agents": {
    title: "AI Agents || COTech",
    description:
      "AI Agents by COTech for UAE businesses. Trained assistant on website and WhatsApp to answer, qualify, and book.",
  },
  "service-business-automation": {
    title: "Business Automation || COTech",
    description:
      "Business Automation by COTech for UAE businesses. Connect systems already paid for and stop re-typing.",
  },
  "service-corporate-websites": {
    title: "Corporate Websites || COTech",
    description:
      "Corporate Websites by COTech for UAE businesses. Turn traffic into qualified enquiries in front of sales within seconds.",
  },
  "service-crm-automation": {
    title: "CRM Automation || COTech",
    description:
      "CRM Automation by COTech for UAE businesses. Pipeline configured around how the team sells.",
  },
  "service-details": {
    title: "Service Details || COTech",
    description:
      "COTech service details have moved to dedicated service pages. Browse our services overview or open a specific service page.",
  },
  "service-digital-business-systems": {
    title: "Digital Business Systems || COTech",
    description:
      "Digital Business Systems by COTech for UAE businesses. Acquisition, sales, and service as one connected system.",
  },
  "service-lead-generation": {
    title: "Lead Generation || COTech",
    description:
      "Lead Generation by COTech for UAE businesses. Turn traffic into qualified enquiries in front of sales within seconds.",
  },
  "service-sales-calling": {
    title: "Centralised Sales Calling || COTech",
    description:
      "Centralised Sales Calling by COTech for UAE businesses. Turn traffic into qualified enquiries in front of sales within seconds.",
  },
  "service-web-platforms": {
    title: "Web Platforms || COTech",
    description:
      "Web Platforms by COTech for UAE businesses. Websites and platforms that generate, sell, or replace spreadsheets.",
  },
  services: {
    title: "Services || COTech",
    description:
      "COTech services for UAE businesses: lead generation, CRM automation, AI agents, business automation, web platforms, and digital business systems.",
  },
  signup: {
    title: "Redirecting — COTech",
  },
  "team-details": {
    title: "Team Details || COTech",
    description: "COTech team member profile.",
  },
  team: {
    title: "Team || COTech",
    description: "Meet the COTech team. Business intelligence builders from CO Consultants, UAE.",
  },
  "terms-conditions": {
    title: "Terms & Conditions || COTech",
    description:
      "COTech builds lead generation, CRM automation, AI agents, business automation, and web platforms for UAE businesses. A division of CO Consultants.",
  },
};

export function getMarketingMetadata(pageKey: string): MarketingPageMeta {
  const key = pageKey.replace(/\.html$/i, "").toLowerCase();
  return (
    MARKETING_PAGE_METADATA[key] ?? {
      title: "COTech",
    }
  );
}
