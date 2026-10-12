import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * @param {Array} products
 * @param {Object} options
 * @param {string[]} options.searchableFields  champs sur lesquels porte la recherche texte
 * @returns {{ list, values, setFilter, reset, activeCount }}
 */
export function useProductFilters(products, { searchableFields = ["name", "brand"] } = {}) {
  const [params, setParams] = useSearchParams();

  const values = {
    q: params.get("q") ?? "",
    brand: params.get("brand") ?? "",
    category: params.get("category") ?? "",
    vehicleType: params.get("vehicleType") ?? "",
    fuel: params.get("fuel") ?? "",
    transmission: params.get("transmission") ?? "",
    minPrice: params.get("minPrice") ?? "",
    maxPrice: params.get("maxPrice") ?? "",
    sort: params.get("sort") ?? "recent",
  };

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === "" || value == null) next.delete(key);
    else next.set(key, String(value));
    setParams(next, { replace: true });
  };

  const reset = () => setParams(new URLSearchParams(), { replace: true });

  const list = useMemo(() => {
    let result = [...products];

    if (values.q) {
      const needle = values.q.toLowerCase().trim();
      result = result.filter((p) =>
        searchableFields.some((f) =>
          String(p[f] ?? "").toLowerCase().includes(needle)
        )
      );
    }

    if (values.brand) result = result.filter((p) => p.brand === values.brand);
    if (values.category) result = result.filter((p) => p.category === values.category);
    if (values.vehicleType)
      result = result.filter((p) => p.vehicleType === values.vehicleType);
    if (values.fuel) result = result.filter((p) => p.fuel === values.fuel);
    if (values.transmission)
      result = result.filter((p) => p.transmission === values.transmission);

    if (values.minPrice)
      result = result.filter((p) => p.price >= Number(values.minPrice));
    if (values.maxPrice)
      result = result.filter((p) => p.price <= Number(values.maxPrice));

    switch (values.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "recent":
      default:
        if (result[0]?.year !== undefined) {
          result.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
        }
        break;
    }

    return result;
  }, [products, values, searchableFields]);

  const activeCount = [
    values.q,
    values.brand,
    values.category,
    values.vehicleType,
    values.fuel,
    values.transmission,
    values.minPrice,
    values.maxPrice,
  ].filter(Boolean).length;

  return { list, values, setFilter, reset, activeCount };
}