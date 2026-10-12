export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <div className="container-x py-12 md:py-16">
        <span className="line-orange" />
        {eyebrow && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-orange)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white/70 max-w-2xl text-sm md:text-base">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}