import { ThemeSwitcher } from "@/components/theme";
import { footerConfig } from "@/configs/footer.config";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import Link from "next/link";

const icons = {
  twitter: <TwitterIcon />,
} as const;

export const Footer = () => {
  return (
    <footer
      className="mt-8 h-(--footer-height) w-full border-t border-(--color-border) fade-in delay-7"
      aria-label="Site footer"
    >
      <div className="layout-container flex flex-row items-center justify-between gap-0 h-full">
        <div className="flex items-center space-x-8">
          <ThemeSwitcher />
          {footerConfig.map((link) => (
            <Link
              key={link.key}
              href={link.url}
              target={link.hasTargetBlank ? "_blank" : undefined}
              rel={link.hasRelNoopener ? "noopener" : undefined}
              className="text-(--color-muted) hover:text-(--color-text) inline-flex items-center"
              aria-label={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <p className="text-(--color-muted)">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
