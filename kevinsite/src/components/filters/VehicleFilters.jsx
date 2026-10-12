import { Select, Input } from "../ui/index.js";
import { BRANDS } from "../../data/brands.js";
import { VEHICLE_TYPES, FUEL_TYPES, TRANSMISSIONS } from "../../data/categories.js";

export default function VehicleFilters({ values, setFilter }) {
  return (
    <>
      <Input
        label="Recherche"
        placeholder="Modèle, marque..."
        value={values.q}
        onChange={(e) => setFilter("q", e.target.value)}
      />

      <Select
        label="Marque"
        value={values.brand}
        onChange={(e) => setFilter("brand", e.target.value)}
      >
        <option value="">Toutes les marques</option>
        {BRANDS.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </Select>

      <Select
        label="Type"
        value={values.vehicleType}
        onChange={(e) => setFilter("vehicleType", e.target.value)}
      >
        <option value="">Tous les types</option>
        {VEHICLE_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>

      <Select
        label="Énergie"
        value={values.fuel}
        onChange={(e) => setFilter("fuel", e.target.value)}
      >
        <option value="">Toutes</option>
        {FUEL_TYPES.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </Select>

      <Select
        label="Transmission"
        value={values.transmission}
        onChange={(e) => setFilter("transmission", e.target.value)}
      >
        <option value="">Toutes</option>
        {TRANSMISSIONS.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Prix min"
          type="number"
          placeholder="0"
          value={values.minPrice}
          onChange={(e) => setFilter("minPrice", e.target.value)}
        />
        <Input
          label="Prix max"
          type="number"
          placeholder="Max"
          value={values.maxPrice}
          onChange={(e) => setFilter("maxPrice", e.target.value)}
        />
      </div>
    </>
  );
}