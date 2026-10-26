"use client";

import * as React from "react";
import { cn } from "@/lib/merge-classes";

type HoverBorderProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  selector?: string;
};

type BorderRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: string;
};

const OUTSET = 4;

export function HoverOutline({
  children,
  className,
  selector = "a, button, [data-hover-border]",
  ...props
}: HoverBorderProps) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const activeRef = React.useRef<HTMLElement | null>(null);
  const [rect, setRect] = React.useState<BorderRect | null>(null);

  const updateRect = React.useCallback(() => {
    const container = containerRef.current;
    const active = activeRef.current;

    if (!container || !active || !container.contains(active)) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = active.getBoundingClientRect();
    const styles = window.getComputedStyle(active);

    setRect({
      x: elementRect.left - containerRect.left - OUTSET,
      y: elementRect.top - containerRect.top - OUTSET,
      width: elementRect.width + OUTSET * 2,
      height: elementRect.height + OUTSET * 2,
      radius: styles.borderRadius || "0px",
    });
  }, []);

  const handlePointerOver = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === "touch") return;

    const target = event.target;
    if (!(target instanceof Element)) return;

    const element = target.closest<HTMLElement>(selector);
    if (!element || !containerRef.current?.contains(element)) return;

    // New target: update the rect to match the hovered element
    activeRef.current = element;
    updateRect();
  };

  // Only hide the outline if the pointer truly leaves the container
  const handlePointerOut = (event: React.PointerEvent<HTMLSpanElement>) => {
    const next = event.relatedTarget;
    if (next instanceof Node && containerRef.current?.contains(next)) {
      return; // still inside the container (e.g., gap / another child)
    }

    activeRef.current = null;
    setRect(null);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [updateRect]);

  return (
    <span
      {...props}
      ref={containerRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      className={cn("relative", className)}
      style={
        {
          ["--hover-border" as string]: "var(--cursor)",
          ...props.style,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-10 border"
        style={{
          top: 0,
          left: 0,
          width: rect?.width ?? 0,
          height: rect?.height ?? 0,
          transform: `translate3d(${rect?.x ?? 0}px, ${rect?.y ?? 0}px, 0)`,
          opacity: rect ? 1 : 0,
          borderColor: "var(--hover-border, currentColor)",
          borderRadius: rect?.radius ?? "0px",
          backgroundColor: "var(--primary-accent, transparent)",
          transition: rect
            ? [
                "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)",
                "width 200ms cubic-bezier(0.22, 1, 0.36, 1)",
                "height 200ms cubic-bezier(0.22, 1, 0.36, 1)",
                "border-radius 200ms cubic-bezier(0.22, 1, 0.36, 1)",
              ].join(", ")
            : "opacity 150ms ease",
        }}
      />
      {children}
    </span>
  );
}
