export default function EmptyState({ title, description, action }) {
  return (
    <div className="text-center py-16 px-6 bg-white rounded-[var(--radius-card)] border border-[var(--color-border)]">
      <h3 className="font-display font-semibold text-lg text-[var(--color-navy)]">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}