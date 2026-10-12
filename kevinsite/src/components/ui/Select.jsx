export default function Select({ label, className = "", children, ...rest }) {
  return (
    <label className="block">
      {label && (
        <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
          {label}
        </span>
      )}
      <select
        className={`w-full h-11 px-3.5 rounded-[var(--radius-btn)] bg-white border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)] transition-colors ${className}`}
        {...rest}
      >
        {children}
      </select>
    </label>
  );
}