import Link from "next/link";
import { projectLinksConfig } from "@/configs/project-links-config";

export const OngoingProjectsSection = () => (
  <section className="flex flex-col gap-4 mb-12 fade-in delay-8">
    <h2 className="text-sm font-bold">Ongoing Projects</h2>
    <p className="text-(--color-muted)">
      Building long-term projects spanning theology, philosophy, design systems,
      and open source, with a focus on tools and platforms for designers and
      developers.
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
);
