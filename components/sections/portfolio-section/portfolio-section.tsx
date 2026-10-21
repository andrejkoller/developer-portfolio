import { portfolioConfig } from "@/configs/portfolio.config";
import Link from "next/link";

export const PortfolioSection = () => {
  const section = portfolioConfig;

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-sm font-medium">{section.title}</h2>

      <div className="grid grid-cols-2 gap-3">
        {section.projects.map((project) => (
          <Link
            key={project.key}
            href={`/projects?project=${project.key}`}
            className="aspect-square overflow-hidden"
            aria-label={project.alt ?? project.title}
          >
            <div className="h-full w-full object-cover bg-(--accent) rounded-2xl"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};
