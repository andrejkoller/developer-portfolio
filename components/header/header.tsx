import { headerConfig } from "@/configs/header.config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Tooltip } from "@/components/tooltip";

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-70 w-full bg-(--background)"
      aria-label="Header"
    >
      <div className="layout-container flex items-center justify-between py-4">
        {/* Links */}
        <div className="flex gap-6">
          {headerConfig.map((link) => (
            <Link
              key={link.key}
              href={link.url}
              target={link.hasTargetBlank ? "_blank" : undefined}
              rel={link.hasRelNoopener ? "noopener" : undefined}
              aria-label={link.title}
              className="text-xs uppercase font-(family-name:--font-geist-mono) font-medium underline decoration-dotted"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Theme Switcher */}
        <Tooltip content="Toggle theme (Shift + D)" side="bottom">
          <ThemeSwitcher />
        </Tooltip>
      </div>
    </header>
  );
};
