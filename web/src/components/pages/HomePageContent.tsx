import { HomeBentoSection } from "@/components/pages/home/HomeBentoSection";
import { HomeCtaSection } from "@/components/pages/home/HomeCtaSection";
import { HomeDiscoverSection } from "@/components/pages/home/HomeDiscoverSection";
import { HomeFaqSection } from "@/components/pages/home/HomeFaqSection";
import { HomeHeroSection } from "@/components/pages/home/HomeHeroSection";
import { HomeHiddenSection8 } from "@/components/pages/home/HomeHiddenSection8";
import { HomeHiddenSection9 } from "@/components/pages/home/HomeHiddenSection9";
import { HomeHiddenSection10 } from "@/components/pages/home/HomeHiddenSection10";
import { HomeIntegrationsSection } from "@/components/pages/home/HomeIntegrationsSection";
import { HomeProcessSection } from "@/components/pages/home/HomeProcessSection";
import { HomeServicesGridSection } from "@/components/pages/home/HomeServicesGridSection";
import { HomeServicesIntroSection } from "@/components/pages/home/HomeServicesIntroSection";
import { HomeTestimonialsSection } from "@/components/pages/home/HomeTestimonialsSection";

/** Home page — all sections converted from legacy `index.html` main. */
export function HomePageContent() {
  return (
    <main className="bg-background-13">
      <HomeHeroSection />
      <HomeDiscoverSection />
      <HomeServicesIntroSection />
      <HomeBentoSection />
      <HomeServicesGridSection />
      <HomeProcessSection />
      <HomeIntegrationsSection />
      <HomeHiddenSection8 />
      <HomeHiddenSection9 />
      <HomeHiddenSection10 />
      <HomeTestimonialsSection />
      <HomeFaqSection />
      <HomeCtaSection />
    </main>
  );
}
