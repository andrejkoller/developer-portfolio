import { IntroductionSection } from "@/components/sections/introduction-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { BuildingSection } from "@/components/sections/building-section";
import { LogoSection } from "@/components/sections/logo-section";

export default function HomePage() {
  return (
    <div className="layout-container py-16 flex flex-col gap-16">
      <LogoSection />
      <IntroductionSection />
      <ExperienceSection />
      <PortfolioSection />
      <BuildingSection />
    </div>
  );
}
