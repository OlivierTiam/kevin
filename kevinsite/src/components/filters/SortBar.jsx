export default function SortBar({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)]"
    >
      <option value="recent">Plus récents</option>
      <option value="price-asc">Prix croissant</option>
      <option value="price-desc">Prix décroissant</option>
    </select>
  );
}