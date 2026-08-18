export const FeaturedSection = () => (
  <section className="fade-in delay-4">
    <h2 className="mb-4 text-sm font-bold">Featured</h2>
    <div className="mb-12">
      <p className="mb-4">
        <span className="text-(--color-primary)">Releases</span>
        <span className="mx-1 text-(--color-muted)">—</span>
        <span className="text-(--color-muted)">
          Current and upcoming albums, EPs, and singles
        </span>
      </p>
      <div className="flex flex-col gap-4">
        <div
          className="h-125 w-full rounded-xl bg-(--color-foreground)"
          role="img"
          aria-label="Releases of current and upcoming albums, EPs, and singles"
        />
      </div>
    </div>
  </section>
);
