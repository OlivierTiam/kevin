const VARIANTS = {
  orange: "bg-[var(--color-orange)] text-white",
  navy: "bg-[var(--color-navy)] text-white",
  success: "bg-[var(--color-success)] text-white",
  danger: "bg-[var(--color-danger)] text-white",
  whatsapp: "bg-[var(--color-whatsapp)] text-white",
  neutral: "bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)]",
};

export default function Badge({ variant = "orange", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}