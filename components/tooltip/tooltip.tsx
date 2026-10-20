"use client";

import * as React from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom";
  delay?: number;
}

export const Tooltip = ({
  content,
  children,
  side = "top",
  delay = 200,
}: TooltipProps) => {
  const [open, setOpen] = React.useState(false);
  const [canHover, setCanHover] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const id = React.useId();

  React.useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);

    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const show = () => {
    if (!canHover) return;
    timeoutRef.current = setTimeout(() => setOpen(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span aria-describedby={open ? id : undefined} className="inline-flex">
        {children}
      </span>

      {open && (
        <span
          id={id}
          role="tooltip"
          className={`
      absolute left-1/2 z-50 -translate-x-1/2
      whitespace-nowrap rounded-md px-2 py-1 text-xs
      font-(--font-geist-mono)
      bg-(--foreground) text-(--background)
      ${side === "top" ? "bottom-full mb-2" : "top-full mt-2"}
    `}
        >
          {content}
          <span
            className={`
        absolute left-1/2 -translate-x-1/2
        border-4 border-transparent
        ${
          side === "top"
            ? "top-full border-t-(--foreground)"
            : "bottom-full border-b-(--foreground)"
        }
      `}
          />
        </span>
      )}
    </span>
  );
};
