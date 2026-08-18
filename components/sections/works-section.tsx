import { workConfig } from "@/configs/work-config";
import { InfinityIcon } from "@/components/icons/infinity-icon";

export const WorksSection = () => (
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
);
