import { Input, Select } from "../ui/index.js";
import { BRANDS } from "../../data/brands.js";
import { PART_CATEGORIES } from "../../data/categories.js";

export default function PartFilters({ values, setFilter }) {
  return (
    <>
      <Input
        label="Recherche"
        placeholder="Nom, référence..."
        value={values.q}
        onChange={(e) => setFilter("q", e.target.value)}
      />

      <Select
        label="Catégorie"
        value={values.category}
        onChange={(e) => setFilter("category", e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        {PART_CATEGORIES.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.label}
          </option>
        ))}
      </Select>

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