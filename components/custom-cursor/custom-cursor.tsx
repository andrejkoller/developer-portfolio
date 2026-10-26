"use client";

import { cn } from "@/lib/merge-classes";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const onTouch = () => setEnabled(false);
    window.addEventListener("touchstart", onTouch, { passive: true });

    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled || !visible) return null;

  const circle = 16;
  const cross = 28;
  const halfCross = cross / 2;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Crosshair */}
      <div
        className="absolute"
        style={{
          width: cross,
          height: cross,
          transform: `translate(-${halfCross}px, -${halfCross}px)`,
        }}
      >
        {/* Circle 16×16, centered */}
        <div
          className="absolute rounded-full border border-(--cursor)"
          style={{
            width: circle,
            height: circle,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Horizontal */}
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-(--cursor)" />

        {/* Vertical */}
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-(--cursor)" />
      </div>

      {/* Coordinates */}
      <div
        className={cn(
          "absolute top-4 left-4",
          "font-(family-name:--font-geist-mono) font-bold",
          "text-[10px] leading-tight tracking-wide",
          "text-(--foreground)",
        )}
      >
        <div>X:{String(Math.round(pos.x)).padStart(4, "0")}</div>
        <div>Y:{String(Math.round(pos.y)).padStart(4, "0")}</div>
      </div>
    </div>
  );
};
