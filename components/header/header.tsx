"use client";

import { Suspense } from "react";
import { HoverOutline } from "@/components/hover-outline";
import { headerConfig } from "@/configs/header.config";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Tooltip } from "@/components/tooltip";
import { cn } from "@/lib/merge-classes";

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
      className={cn(
        "fixed z-70 flex h-(--header-height) w-full items-center bg-(--background)",
        isProjectPage ? "bottom-0" : "top-0",
      )}
      aria-label="Header"
    >
      <nav className="layout-container flex h-full items-center justify-between">
        {/* Links */}
        <ul className="flex gap-6">
          {headerConfig.map((link) => (
            <li key={link.key}>
              <HoverOutline className="flex w-full items-center justify-center">
                <Link
                  href={link.url}
                  target={link.hasTargetBlank ? "_blank" : undefined}
                  rel={link.hasRelNoopener ? "noopener" : undefined}
                  aria-label={link.title}
                  className="text-sm font-bold font-(family-name:--font-geist-mono) underline decoration-dotted rounded-full"
                >
                  {link.title}
                </Link>
              </HoverOutline>
            </li>
          ))}
        </ul>

        {/* Theme switcher */}
        <Tooltip
          content="Toggle theme (Shift + D)"
          side={isProjectPage ? "top" : "bottom"}
        >
          <ThemeSwitcher />
        </Tooltip>
      </nav>
    </header>
  );
};
