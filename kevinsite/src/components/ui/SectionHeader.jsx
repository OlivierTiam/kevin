export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleCls = light ? "text-white" : "text-[var(--color-navy)]";
  const subCls = light ? "text-white/70" : "text-[var(--color-text-muted)]";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="line-orange" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-orange)]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold ${titleCls}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base ${subCls}`}>{subtitle}</p>
      )}
    </div>
  );
}