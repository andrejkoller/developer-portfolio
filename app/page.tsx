import { IntroductionSection } from "@/components/sections/introduction-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { BuildingSection } from "@/components/sections/building-section";

export default function HomePage() {
  return (
    <>
      <IntroductionSection />
      <ExperienceSection />
      <PortfolioSection />
      <BuildingSection />
    </>
  );
}
