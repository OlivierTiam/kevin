import PageHero from "../components/layout/PageHero.jsx";
import FilterLayout from "../components/filters/FilterLayout.jsx";
import VehicleFilters from "../components/filters/VehicleFilters.jsx";
import SortBar from "../components/filters/SortBar.jsx";
import VehicleGrid from "../components/vehicules/VehicleGrid.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import { vehicles } from "../data/index.js";
import { useProductFilters } from "../hooks/useProductFilters.js";

export default function Vehicles() {
  const { list, values, setFilter, reset, activeCount } = useProductFilters(
    vehicles,
    { searchableFields: ["name", "brand", "model"] }
  );

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="NOS VÉHICULES"
        subtitle="Trouvez votre prochain véhicule parmi notre sélection."
      />

      <FilterLayout
        filters={<VehicleFilters values={values} setFilter={setFilter} />}
        onReset={reset}
        activeCount={activeCount}
        count={list.length}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-[var(--color-navy)]">
            Véhicules disponibles
          </span>
          <SortBar value={values.sort} onChange={(v) => setFilter("sort", v)} />
        </div>

        {list.length === 0 ? (
          <EmptyState
            title="Aucun véhicule trouvé"
            description="Aucun véhicule ne correspond à vos filtres. Essayez de les ajuster."
            action={
              <Button variant="outline" onClick={reset}>
                Réinitialiser les filtres
              </Button>
            }
          />
        ) : (
          <VehicleGrid vehicles={list} />
        )}
      </FilterLayout>
    </>
  );
}