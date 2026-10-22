"use client";

import {
  useMemo,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { projectsConfig } from "@/configs/projects.config";
import { cn } from "@/lib/merge-classes";

export default function ProjectsView() {
  const searchParams = useSearchParams();
  const activeKey = searchParams.get("project");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const projects = useMemo(() => {
    if (!activeKey) return projectsConfig;
    const active = projectsConfig.find((p) => p.key === activeKey);
    const rest = projectsConfig.filter((p) => p.key !== activeKey);
    return active ? [active, ...rest] : projectsConfig;
  }, [activeKey]);

  const loopProjects = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects],
  );

  const getPeriod = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[projects.length] as HTMLElement | undefined;
    if (!first || !second) return 0;
    return second.offsetLeft - first.offsetLeft;
  }, [projects.length]);

  const wrap = useCallback(() => {
    const el = scrollRef.current;
    const period = getPeriod();
    if (!el || !period) return;

    if (el.scrollLeft >= period * 2) {
      el.scrollLeft -= period;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += period;
    }
  }, [getPeriod]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const period = getPeriod();
    if (period) {
      el.scrollTo({ left: period, behavior: "instant" });
    }
    setReady(true);
  }, [loopProjects, getPeriod]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY * 2.5;
      wrap();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", wrap, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", wrap);
    };
  }, [wrap]);

  return (
    <div className="flex h-dvh flex-col">
      {/* Back */}
      <div className="flex h-(--header-height) shrink-0 items-center px-6">
        <Link
          href="/"
          className="text-xs uppercase font-(family-name:--font-geist-mono) font-medium underline decoration-dotted"
        >
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 items-start pb-(--header-height)">
        <div
          ref={scrollRef}
          className={cn(
            "hidden h-full w-full items-center gap-10 overflow-x-auto overflow-y-hidden px-6 md:flex",
            "scrollbar-none [&::-webkit-scrollbar]:hidden",
            "scroll-auto",
            !ready && "invisible",
          )}
        >
          {loopProjects.map((project, index) => (
            <ProjectGroup key={`${project.key}-${index}`} project={project} />
          ))}
        </div>

        <div className="flex w-full flex-col overflow-y-auto px-6 md:hidden">
          {projects.map((project) => (
            <ProjectGroup key={project.key} project={project} mobile />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectGroup({
  project,
  mobile = false,
}: {
  project: (typeof projectsConfig)[number];
  mobile?: boolean;
}) {
  return (
    <section
      className={cn(
        "flex",
        mobile
          ? "flex-col gap-4 not-first:mb-[calc(4rem+var(--header-height))] mb-16"
          : "w-max shrink-0 items-start gap-4",
      )}
    >
      {/* Text */}
      <div className={cn("flex flex-col", !mobile && "w-100 shrink-0 pr-8")}>
        <h2 className="mb-4 font-medium">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted"
          >
            {project.title}
          </Link>
        </h2>
        <p className="leading-relaxed text-(--muted)">{project.description}</p>
      </div>

      {/* Images */}
      <div className={cn("flex gap-4", mobile && "flex-col")}>
        {project.images.map((image, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-3xl bg-(--accent)"
            style={{
              height: mobile ? undefined : 600,
              width: mobile ? "100%" : image.width,
              aspectRatio: mobile ? "4 / 3" : undefined,
            }}
          />
        ))}
      </div>
    </section>
  );
}
