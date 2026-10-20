import { footerConfig } from "@/configs/footer.config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 z-70 w-full bg-(--background)"
      aria-label="Footer"
    >
      <div className="layout-container flex items-center justify-between py-4">
        {/* Links */}
        <div className="flex gap-6">
          {footerConfig.map((link) => (
            <Link
              key={link.key}
              href={link.url}
              target={link.hasTargetBlank ? "_blank" : undefined}
              rel={link.hasRelNoopener ? "noopener" : undefined}
              aria-label={link.title}
              title={link.title}
              className="text-xs uppercase font-(--font-geist-mono) underline decoration-dotted"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </footer>
  );
};
