import PageHero from "../components/layout/PageHero.jsx";
import FilterLayout from "../components/filters/FilterLayout.jsx";
import PartFilters from "../components/filters/PartFilters.jsx";
import SortBar from "../components/filters/SortBar.jsx";
import PartGrid from "../components/pieces/PartGrid.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import { parts } from "../data/index.js";
import { useProductFilters } from "../hooks/useProductFilters.js";

export default function Parts() {
  const { list, values, setFilter, reset, activeCount } = useProductFilters(
    parts,
    { searchableFields: ["name", "brand", "reference"] }
  );

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="PIÈCES DÉTACHÉES"
        subtitle="Les bonnes pièces pour garder votre véhicule en parfait état."
      />

      <FilterLayout
        filters={<PartFilters values={values} setFilter={setFilter} />}
        onReset={reset}
        activeCount={activeCount}
        count={list.length}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-[var(--color-navy)]">
            Pièces disponibles
          </span>
          <SortBar value={values.sort} onChange={(v) => setFilter("sort", v)} />
        </div>

        {list.length === 0 ? (
          <EmptyState
            title="Aucune pièce trouvée"
            description="Aucune pièce ne correspond à vos filtres. Essayez de les ajuster."
            action={
              <Button variant="outline" onClick={reset}>
                Réinitialiser les filtres
              </Button>
            }
          />
        ) : (
          <PartGrid parts={list} />
        )}
      </FilterLayout>
    </>
  );
}