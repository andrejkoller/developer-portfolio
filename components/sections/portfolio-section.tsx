import { portfolioConfig } from "@/configs/portfolio.config";
import {
  portfolioImageHeights,
  portfolioImageRadius,
} from "@/constants/portfolio.constants";

// Continues the page's 0.1s-per-section fade-in stagger (delay-4 onward) without capping at the fixed .delay-7 CSS class
const BASE_DELAY_SECONDS = 0.4;
const DELAY_STEP_SECONDS = 0.1;

export const PortfolioSection = () => (
  <>
    {portfolioConfig.map((section, sectionIndex) => (
      <section
        key={section.key}
        className="fade-in"
        style={{
          animationDelay: `${BASE_DELAY_SECONDS + sectionIndex * DELAY_STEP_SECONDS}s`,
        }}
      >
        <h2 className="mb-8 text-sm font-bold">{section.label}</h2>
        {section.projects.map((project) => (
          <div key={project.key} className="mb-24">
            <p className="mb-4">
              <span className="text-(--color-primary)">{project.name}</span>
              <span className="mx-1 text-(--color-muted)">—</span>
              <span className="text-(--color-muted)">
                {project.description}
              </span>
            </p>
            <div
              className={project.images.length > 1 ? "flex flex-col gap-4" : ""}
            >
              {project.images.map((image, imageIndex) => (
                <div
                  key={`${project.key}-${imageIndex}`}
                  className="w-full bg-(--color-foreground)"
                  style={{
                    height: portfolioImageHeights[image.height ?? "regular"],
                    borderRadius: portfolioImageRadius[image.radius ?? "md"],
                  }}
                  data-position={image.position ?? "center"}
                  role="img"
                  aria-label={project.alt}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    ))}
  </>
);
