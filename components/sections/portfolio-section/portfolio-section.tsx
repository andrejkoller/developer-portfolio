import { portfolioConfig } from "@/configs/portfolio.config";
import { cn } from "@/lib/merge-classes";
import Link from "next/link";

export const PortfolioSection = () => {
  const section = portfolioConfig;

  return (
    <section className="mb-16 animate-fade-up delay-3">
      <h2 className="mb-4 text-sm font-medium">{section.title}</h2>

      <ul className="grid grid-cols-2 gap-3">
        {section.projects.map((project) => (
          <li
            key={project.key}
            className={cn(
              "group aspect-square overflow-hidden rounded-2xl",
              "transition-transform duration-300 ease-out",
              "hover:scale-[1.02]",
            )}
            aria-label={project.alt ?? project.title}
          >
            <Link href={`/projects?project=${project.key}`}>
              <div
                className={cn(
                  "h-full w-full bg-(--accent) rounded-2xl",
                  "transition-opacity duration-300",
                  "group-hover:opacity-90",
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
