"use client";

import { Suspense } from "react";
import { headerConfig } from "@/configs/header.config";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Tooltip } from "@/components/tooltip";

export const Header = () => {
  return (
    <Suspense fallback={<HeaderContent isProjectPage={false} />}>
      <HeaderWithSearchParams />
    </Suspense>
  );
};

const HeaderWithSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isProjectPage =
    pathname.startsWith("/projects") && searchParams.has("project");

  return <HeaderContent isProjectPage={isProjectPage} />;
};

const HeaderContent = ({ isProjectPage }: { isProjectPage: boolean }) => {
  return (
    <header
      className={`
        fixed z-70 w-full bg-(--background)
        ${isProjectPage ? "bottom-0" : "top-0"}
      `}
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
        <Tooltip
          content="Toggle theme (Shift + D)"
          side={isProjectPage ? "top" : "bottom"}
        >
          <ThemeSwitcher />
        </Tooltip>
      </div>
    </header>
  );
};
