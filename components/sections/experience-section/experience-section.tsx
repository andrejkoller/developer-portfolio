import { experienceConfig } from "@/configs/experience.config";

export const ExperienceSection = () => (
  <section className="animate-fade-up delay-2">
    <h2 className="mb-4 text-sm font-medium">Past Experience</h2>

    <div className="flex flex-col gap-1">
      {experienceConfig.map((experience) => (
        <div
          key={experience.key}
          className="flex items-center justify-between h-6"
        >
          <span className="text-(--foreground)">{experience.company}</span>

          <span className="text-(--muted) tabular-nums">{experience.year}</span>
        </div>
      ))}
    </div>
  </section>
);
