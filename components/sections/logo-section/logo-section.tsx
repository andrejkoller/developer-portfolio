import Link from "next/link";

export const LogoSection = () => {
  return (
    <section className="h-16 flex flex-col w-full animate-fade-up">
      <h1 className="flex flex-col items-start justify-center flex-1">
        <Link href="/">
          {/* SVG Logo coming soon */}
          <span className="sr-only">
            Andrej Koller - Designer and Frontend Engineer
          </span>
        </Link>
      </h1>
    </section>
  );
};
