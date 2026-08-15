import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer-links-config";

export const Footer = () => {
  return (
    <footer
      className="mt-8 h-(--footer-height) w-full border-t border-(--color-border) fade-in delay-8"
      aria-label="Site footer"
    >
      <div className="flex flex-col items-center justify-center gap-12 h-full w-full max-w-2xl mx-auto px-4 min-[425px]:flex-row min-[425px]:gap-0 min-[425px]:justify-between max-[425px]:items-start">
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
