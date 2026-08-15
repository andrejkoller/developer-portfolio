import { experienceConfig } from "@/configs/experience-config";
import { portfolioConfig } from "@/configs/portfolio-config";
import { projectLinksConfig } from "@/configs/project-links-config";
import { workConfig } from "@/configs/work-config";
import Link from "next/link";

const InfinityIcon = () => (
  <svg
    width="17.5"
    height="7.7"
    viewBox="0 0 167 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Present"
  >
    <path
      d="M83.6096 27.5354C90.1929 21.2022 96.5262 15.8272 102.61 11.4104C108.693 6.91053 113.818 3.91053 117.985 2.41043C122.151 0.910535 126.693 0.160536 131.61 0.160425C141.943 0.160536 150.276 3.61887 156.61 10.5354C163.026 17.3689 166.234 25.6605 166.235 35.4104C166.234 42.0772 164.818 48.2438 161.985 53.9104C159.151 59.5771 155.109 63.8688 149.86 66.7854C144.693 69.7021 138.734 71.1605 131.985 71.1604C123.235 71.1605 115.568 69.2855 108.985 65.5354C102.485 61.7855 94.0262 54.7021 83.6096 44.2854C72.7762 55.0355 64.1512 62.2021 57.7346 65.7854C51.3179 69.3688 43.8596 71.1605 35.3596 71.1604C24.5263 71.1605 16.068 67.7855 9.98465 61.0354C3.98464 54.2855 0.984642 45.7438 0.98465 35.4104C0.984642 25.7438 4.1513 17.4522 10.4846 10.5354C16.9013 3.61887 25.2763 0.160536 35.6096 0.160425C40.6096 0.160536 45.1929 0.910535 49.3596 2.41043C53.5263 3.91053 58.6096 6.91053 64.6096 11.4104C70.6929 15.8272 77.0262 21.2022 83.6096 27.5354ZM91.7346 35.2854C100.568 44.0355 107.818 49.9938 113.485 53.1604C119.235 56.2438 124.943 57.7855 130.61 57.7854C137.693 57.7855 143.234 55.7021 147.235 51.5354C151.234 47.2855 153.234 42.1605 153.235 36.1604C153.234 29.5772 151.234 24.1605 147.235 19.9104C143.318 15.5772 138.109 13.4105 131.61 13.4104C127.943 13.4105 124.401 14.0772 120.985 15.4104C117.568 16.6605 113.485 18.9105 108.735 22.1604C103.985 25.3272 98.3179 29.7022 91.7346 35.2854ZM75.4846 35.2854C69.4846 30.2022 64.1096 26.0355 59.3596 22.7854C54.6096 19.4522 50.4429 17.0772 46.8596 15.6604C43.2763 14.2439 39.3596 13.5355 35.1096 13.5354C29.0263 13.5355 23.9846 15.6605 19.9846 19.9104C15.9846 24.1605 13.9846 29.5772 13.9846 36.1604C13.9846 40.7438 15.0263 44.6188 17.1096 47.7854C19.193 50.9522 21.7346 53.4105 24.7346 55.1604C27.8179 56.9105 31.6513 57.7855 36.2346 57.7854C42.2346 57.7855 48.0679 56.2021 53.7346 53.0354C59.4012 49.8688 66.6512 43.9522 75.4846 35.2854Z"
      fill="#666666"
    />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* Introduction */}
      <section className="mb-12 fade-in delay-1">
        <p className="mb-4 text-(--color-muted)">
          <span className="text-(--color-primary)">Andrej Koller</span> is a
          software developer from Ekibastuz, Kazakhstan.
        </p>
        <p className="mb-8 text-(--color-muted)">Based in Passau, Germany.</p>
      </section>

      {/* Experience */}
      <section className="mb-12 fade-in delay-2">
        {experienceConfig.map((experience) => (
          <div
            key={experience.key}
            className="flex items-baseline justify-between border-b border-(--color-border) expertise-item"
          >
            <div className="flex flex-col">
              <h3 className="font-normal">{experience.company}</h3>
              <p className="text-(--color-muted)">{experience.role}</p>
            </div>
            <p className="flex items-center whitespace-nowrap text-(--color-muted)">
              <span>{experience.from}</span>
              <span>-</span>
              {experience.to ? <span>{experience.to}</span> : <InfinityIcon />}
            </p>
          </div>
        ))}
      </section>

      {/* Works */}
      <section className="mb-12 fade-in delay-3">
        <h2 className="mb-4 text-sm font-bold">Works</h2>
        {workConfig.map((work) => (
          <div
            key={work.key}
            className="flex items-baseline justify-between border-b border-(--color-border) expertise-item"
          >
            <div className="flex flex-col">
              <h3 className="font-normal">{work.title}</h3>
              <p className="text-(--color-muted)">{work.summary}</p>
            </div>
            <p className="flex items-center whitespace-nowrap text-(--color-muted)">
              <span>{work.from}</span>
              <span>-</span>
              <InfinityIcon />
            </p>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section className="fade-in delay-3">
        <h2 className="mb-4 text-sm font-bold">Featured</h2>
        <div className="mb-12">
          <p className="mb-4">
            <span className="text-(--color-primary)">Releases</span>
            <span className="mx-1 text-(--color-muted)">—</span>
            <span className="text-(--color-muted)">
              Current and upcoming albums, EPs, and singles
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div
              className="h-125 w-full rounded-xl bg-(--color-foreground)"
              role="img"
              aria-label="Releases of current and upcoming albums, EPs, and singles"
            />
          </div>
        </div>
      </section>

      <hr className="mb-12 border-t border-(--color-border)" />

      {/* Products & Branding */}
      {portfolioConfig.map((section, sectionIndex) => (
        <section
          key={section.key}
          className={`fade-in delay-${4 + sectionIndex}`}
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

      {/* Skills & ongoing projects */}
      <section className="flex flex-col gap-4 mb-12 fade-in delay-6">
        <h2 className="text-sm font-bold">Skills & Technologies</h2>
        <p className="text-(--color-muted)">
          Designing and building modern web interfaces with an emphasis on clean
          architecture, scalable UI systems, and thoughtful user experiences.
          Primarily working with TypeScript, Angular, React, Next.js, Tailwind
          CSS, and Figma.
        </p>
      </section>
      <section className="flex flex-col gap-4 mb-12 fade-in delay-7">
        <h2 className="text-sm font-bold">Ongoing Projects</h2>
        <p className="text-(--color-muted)">
          Building long-term projects spanning theology, philosophy, design
          systems, and open source, with a focus on tools and platforms for
          designers and developers.
        </p>
        <ul className="space-y-2">
          {projectLinksConfig.map((project) => (
            <li key={project.key}>
              <Link
                href={project.url}
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : undefined}
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
