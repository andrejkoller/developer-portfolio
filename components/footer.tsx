import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer-links-config";

export const Footer = () => {
  return (
    <footer
      className="mt-8 h-(--footer-height) w-full border-t border-(--color-border) fade-in delay-9"
      aria-label="Site footer"
    >
      <div className="flex flex-row items-center justify-between gap-0 h-full w-full max-w-175 mx-auto px-4">
        {/* Left side: Links */}
        <div className="flex space-x-8">
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
