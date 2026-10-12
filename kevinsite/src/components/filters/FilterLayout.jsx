import { SlidersHorizontal, X } from "lucide-react";

export default function FilterLayout({
  children,
  onReset,
  activeCount,
  count,
  filters,
}) {
  return (
    <div className="container-x py-8 md:py-12 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
        {/* Sidebar filtres : devient un accordéon sur mobile */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <details className="lg:hidden bg-white rounded-[var(--radius-card)] border border-[var(--color-border)]">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              <span className="inline-flex items-center gap-2 font-display font-semibold text-[var(--color-navy)]">
                <SlidersHorizontal size={16} />
                Filtres
                {activeCount > 0 && (
                  <span
                    className="ml-1 text-[10px] font-bold text-white w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-orange)" }}
                  >
                    {activeCount}
                  </span>
                )}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">
                Ouvrir / Fermer
              </span>
            </summary>
            <div className="border-t border-[var(--color-border)] p-4 space-y-4">
              {filters}
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={onReset}
                  className="w-full h-10 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-navy)] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <X size={14} />
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </details>

          <div className="hidden lg:block bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[var(--color-navy)]">
                <SlidersHorizontal size={16} />
                Filtres
              </div>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={onReset}
                  className="text-xs font-semibold text-[var(--color-orange)] hover:underline inline-flex items-center gap-1"
                >
                  <X size={12} />
                  Réinitialiser
                </button>
              )}
            </div>
            <div className="mt-5 space-y-4">{filters}</div>
          </div>
        </aside>

        {/* Contenu */}
        <div>
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <p className="text-xs md:text-sm text-[var(--color-text-muted)]">
              {count} résultat{count > 1 ? "s" : ""}
              {activeCount > 0 &&
                ` · ${activeCount} filtre${activeCount > 1 ? "s" : ""}`}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}