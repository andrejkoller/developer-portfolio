import { IntroductionSection } from "@/components/sections/introduction-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { OngoingProjectsSection } from "@/components/sections/ongoing-projects-section";

export default function HomePage() {
  return (
    <>
      <IntroductionSection />
      <ExperienceSection />
      <FeaturedSection />

      <hr className="mb-12 border-t border-(--color-border)" />

      <PortfolioSection />
      <OngoingProjectsSection />
    </>
  );
}
