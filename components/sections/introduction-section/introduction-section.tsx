import Link from "next/link";

const START_YEAR = 2024;

const getExperienceYears = () => {
  const currentYear = new Date().getFullYear();
  return Math.max(currentYear - START_YEAR, 1);
};

export const IntroductionSection = () => {
  const years = getExperienceYears();

  return (
    <section className="mb-16 animate-fade-up delay-1">
      <p className="mb-4 leading-relaxed">
        I’m Andrej Koller - a Designer and Frontend Engineer with {years}+ years
        of experience, known for pixel-perfect execution and an obsessive
        attention to detail.
      </p>
      <p className="mb-4 leading-relaxed">
        Passionate about exploring new technologies and turning ideas into
        reality through polished, thoughtfully crafted projects.
      </p>
      <p className="mb-4 leading-relaxed">
        Get in touch:{" "}
        <Link
          href="mailto:contact@andrejkoller.com"
          className="font-bold font-(family-name:--font-geist-mono) underline decoration-dotted"
        >
          contact@andrejkoller.com
        </Link>
      </p>
    </section>
  );
};
