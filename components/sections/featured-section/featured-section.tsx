export const FeaturedSection = () => (
  <section className="fade-in delay-3">
    <h2 className="mb-4 text-sm font-bold">Featured</h2>
    <div className="mb-12">
      <p className="mb-4">
        <span className="text-(--color-primary)">Sanguinar</span>
        <span className="mx-1 text-(--color-muted)">—</span>
        <span className="text-(--color-muted)">
          A world of blood, beauty, and predatory grace.
        </span>
      </p>
      <div className="flex flex-col gap-4">
        <div
          className="h-130 w-full rounded-2xl bg-(--color-foreground)"
          role="img"
          aria-label="A world of blood, beauty, and predatory grace."
        />
      </div>
    </div>
  </section>
);
