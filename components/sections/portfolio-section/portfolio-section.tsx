import { portfolioConfig } from "@/configs/portfolio.config";
import Link from "next/link";
import { cn } from "@/lib/merge-classes";

export const PortfolioSection = () => {
  const section = portfolioConfig;

  return (
    <section className="animate-fade-up delay-3">
      <h2 className="mb-4 text-sm font-medium">{section.title}</h2>

      <ul className="grid grid-cols-2 gap-4">
        {section.projects.map((project) => (
          <li key={project.key} className="min-w-0">
            <Link
              href={`/projects?project=${project.key}`}
              aria-label={project.alt ?? project.title}
              className={cn(
                "group block aspect-square overflow-hidden rounded-2xl",
                "transition-transform duration-300 ease-out",
                "hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "h-full w-full rounded-2xl bg-(--accent)",
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
