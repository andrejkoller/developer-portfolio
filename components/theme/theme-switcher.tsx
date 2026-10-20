"use client";

import { useEffect } from "react";
import { useTheme } from "./use-theme";
import { ThemeIcon } from "./theme-icon";

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
      <ThemeIcon />
    </button>
  );
};
