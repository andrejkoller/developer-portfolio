"use client";

import { footerConfig } from "@/configs/footer.config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Tooltip } from "@/components/tooltip";
import { cn } from "@/lib/merge-classes";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "relative flex h-(--footer-height) w-full items-center bg-(--background) animate-fade-up delay-5",
        "before:absolute before:inset-x-0 before:top-0 before:h-px",
        "before:bg-(--border) before:content-['']",
      )}
      aria-label="Footer"
    >
      <nav className="layout-container flex h-full items-center justify-between">
        <ul className="flex gap-6">
          {footerConfig.map((link) => (
            <li key={link.key}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener"
                aria-label={link.title}
                className="text-sm font-bold font-(family-name:--font-geist-mono) underline decoration-dotted"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <Tooltip content="Toggle theme (Shift + D)" side="top">
          <ThemeSwitcher />
        </Tooltip>
      </nav>
    </footer>
  );
};
