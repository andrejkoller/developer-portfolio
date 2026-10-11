import { experienceConfig } from "@/configs/experience.config";
import { Infinity } from "lucide-react";

export const ExperienceSection = () => (
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
          {experience.to ? (
            <span>{experience.to}</span>
          ) : (
            <Infinity size={16} className="text-(--color-muted)" />
          )}
        </p>
      </div>
    ))}
  </section>
);
