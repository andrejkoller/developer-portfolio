import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer.config";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export const Footer = () => {
  return (
    <footer
      className="mt-8 h-(--footer-height) w-full border-t border-(--color-border) fade-in delay-7"
      aria-label="Site footer"
    >
      <div className="layout-container flex flex-row items-center justify-between gap-0 h-full">
        {/* Left side: Theme switcher + links */}
        <div className="flex items-center space-x-8">
          <ThemeSwitcher />
          {footerLinksConfig.map((link) => (
            <Link
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: Copyright */}
        <p className="text-(--color-muted)">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
