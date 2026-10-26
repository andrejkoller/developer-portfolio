"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { projectsConfig } from "@/configs/projects.config";
import { cn } from "@/lib/merge-classes";

export default function ProjectsView() {
  const searchParams = useSearchParams();
  const activeKey = searchParams.get("project");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const mobileRef = React.useRef<HTMLDivElement>(null);
  const [ready, setReady] = React.useState(false);

  const projects = React.useMemo(() => {
    if (!activeKey) return projectsConfig;
    const active = projectsConfig.find((p) => p.key === activeKey);
    const rest = projectsConfig.filter((p) => p.key !== activeKey);
    return active ? [active, ...rest] : projectsConfig;
  }, [activeKey]);

  const loopProjects = React.useMemo(
    () => [...projects, ...projects, ...projects],
    [projects],
  );

  const getPeriod = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[projects.length] as HTMLElement | undefined;
    if (!first || !second) return 0;
    return second.offsetLeft - first.offsetLeft;
  }, [projects.length]);

  const wrap = React.useCallback(() => {
    const el = scrollRef.current;
    const period = getPeriod();
    if (!el || !period) return;

    if (el.scrollLeft >= period * 2) {
      el.scrollLeft -= period;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += period;
    }
  }, [getPeriod]);

  React.useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const period = getPeriod();
    if (period) {
      el.scrollTo({ left: period, behavior: "instant" });
    }
    setReady(true);
  }, [loopProjects, getPeriod]);

  React.useEffect(() => {
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

  React.useEffect(() => {
    const root = mobileRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-project-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex h-(--header-height) shrink-0 items-center px-6 animate-fade-in">
        <Link
          href="/"
          className="text-xs uppercase font-(family-name:--font-geist-mono) font-bold underline decoration-dotted"
        >
          Back
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 items-start pb-(--header-height)">
        {/* Desktop */}
        <div
          ref={scrollRef}
          className={cn(
            "hidden h-full w-full items-center gap-10 overflow-x-auto overflow-y-hidden px-6 md:flex",
            "scrollbar-none [&::-webkit-scrollbar]:hidden",
            "scroll-auto",
            ready ? "animate-fade-in delay-1" : "invisible",
          )}
        >
          {loopProjects.map((project, index) => (
            <ProjectGroup key={`${project.key}-${index}`} project={project} />
          ))}
        </div>

        {/* Mobile */}
        <div
          ref={mobileRef}
          className="flex w-full flex-col overflow-y-auto px-6 md:hidden"
        >
          {projects.map((project, index) => (
            <ProjectGroup
              key={project.key}
              project={project}
              mobile
              reveal
              revealDelay={index === 0 ? 0 : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectGroup({
  project,
  mobile = false,
  reveal = false,
  revealDelay,
}: {
  project: (typeof projectsConfig)[number];
  mobile?: boolean;
  reveal?: boolean;
  revealDelay?: number;
}) {
  return (
    <section
      data-project-reveal={reveal ? "" : undefined}
      className={cn(
        "flex",
        mobile
          ? "mb-16 flex-col gap-4 not-first:mb-[calc(4rem+var(--header-height))]"
          : "w-max shrink-0 items-start gap-4",
        reveal && "project-reveal",
        reveal && revealDelay === 0 && "is-visible",
      )}
      style={
        reveal && revealDelay
          ? { transitionDelay: `${revealDelay}ms` }
          : undefined
      }
    >
      <div className={cn("flex flex-col", !mobile && "w-100 shrink-0 pr-8")}>
        <h2 className="mb-4">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-(family-name:--font-geist-mono) underline decoration-dotted"
          >
            {project.title}
          </Link>
        </h2>
        <p className="leading-relaxed text-(--muted)">{project.description}</p>
      </div>

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
