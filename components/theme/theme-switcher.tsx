"use client";

import { useEffect } from "react";
import { useTheme } from "./use-theme";

export const ThemeSwitcher = () => {
  const { theme, switchTheme, mounted } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "D") {
        switchTheme();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [switchTheme]);

  if (!mounted) return null;

  return (
    <button
      onClick={switchTheme}
      className="cursor-pointer size-8 flex items-center justify-center rounded-lg hover:bg-(--accent)"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode (Shift + D)`}
    >
      <DarkSideIcon className="size-4" />
    </button>
  );
};

function DarkSideIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={`size-4 origin-center transition-transform duration-500 ease-[ease] dark:rotate-180 ${className}`}
    >
      <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
    </svg>
  );
}
