import { experienceConfig } from "@/configs/experience-config";
import { portfolioConfig } from "@/configs/portfolio-config";
import { projectLinksConfig } from "@/configs/project-links-config";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Introduction */}
      <section className="flex flex-col gap-4 mb-16 fade-in delay-1">
        <p className="text-(--color-muted)">
          <span className="text-(--color-primary)">Andrej Koller</span> is a
          designer and frontend engineer from Ekibastuz, Kazakhstan.
        </p>
        <p className="text-(--color-muted)">Based in Passau, Germany.</p>
      </section>

      {/* Experience */}
      <section className="flex flex-col gap-4 mb-16 fade-in delay-2">
        {experienceConfig.map((experience) => (
          <div
            key={experience.key}
            className="flex justify-between items-baseline border-b border-(--color-border) expertise-item"
          >
            <div className="flex flex-col">
              <h2 className="font-normal">{experience.company}</h2>
              <p className="text-(--color-muted)">{experience.role}</p>
            </div>
            <p className="flex items-center whitespace-nowrap text-(--color-muted)">
              <span>{experience.from}</span>
              <span className="mx-1">—</span>
              <span>{experience.to}</span>
            </p>
          </div>
        ))}
      </section>

      {/* Products & Branding */}
      {portfolioConfig.map((section, sectionIndex) => (
        <section
          key={section.key}
          className={`fade-in delay-${3 + sectionIndex}`}
        >
          <h3 className="mb-8 text-sm font-bold">{section.label}</h3>
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
                    className="bg-(--color-foreground) h-112.5 w-full rounded-xl"
                    role="img"
                    aria-label={project.alt}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Skills & ongoing projects */}
      <section className="flex flex-col gap-4 mb-12 fade-in delay-5">
        <h2 className="text-sm font-bold">Skills & Technologies</h2>
        <p className="text-(--color-muted)">
          I design and build modern, performant web interfaces using HTML, SCSS,
          TypeScript, and frameworks like Angular, React, Next.js, and Vue.
          Focused on clean architecture, refined UI systems, and thoughtful
          digital experiences crafted with TailwindCSS and Figma.
        </p>
      </section>
      <section className="flex flex-col gap-4 mb-12 fade-in delay-6">
        <h2 className="text-sm font-bold">Ongoing Projects</h2>
        <p className="text-(--color-muted)">
          Builds ongoing projects spanning music, storytelling, and open source,
          with an emphasis on tools for designers and developers.
        </p>
        <ul className="space-y-2">
          {projectLinksConfig.map((project) => (
            <li key={project.key}>
              <Link
                href={project.url}
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : undefined}
                title={
                  project.isExternal
                    ? `${project.name} (opens in a new tab)`
                    : undefined
                }
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
