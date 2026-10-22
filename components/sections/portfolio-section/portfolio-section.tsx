import { portfolioConfig } from "@/configs/portfolio.config";
import { cn } from "@/lib/merge-classes";
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
            className={cn(
              "group aspect-square overflow-hidden rounded-2xl",
              "transition-transform duration-300 ease-out",
              "hover:scale-[1.02]",
            )}
            aria-label={project.alt ?? project.title}
            // optional: onMouseEnter={(e) => e.currentTarget.play()}
            // optional: onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
          >
            <div
              className={cn(
                "h-full w-full bg-(--accent) rounded-2xl",
                "transition-opacity duration-300",
                "group-hover:opacity-90",
              )}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
