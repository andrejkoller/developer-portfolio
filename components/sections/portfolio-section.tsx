import { portfolioConfig } from "@/configs/portfolio-config";

// Continues the page's 0.1s-per-section fade-in stagger (delay-5 onward) without capping at the fixed .delay-9 CSS class
const BASE_DELAY_SECONDS = 0.5;
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
              className={
                project.images && project.images > 1
                  ? "flex flex-col gap-4"
                  : ""
              }
            >
              {Array.from({ length: project.images ?? 0 }).map((_, i) => (
                <div
                  key={i}
                  className="h-125 w-full rounded-xl bg-(--color-foreground)"
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
