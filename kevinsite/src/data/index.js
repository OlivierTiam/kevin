import { vehicles } from "./vehicles.js";
import { parts } from "./parts.js";
import { accessories } from "./accessories.js";

export { vehicles, parts, accessories };

export const allProducts = [...vehicles, ...parts, ...accessories];

export function getVehicleById(id) {
  return vehicles.find((v) => v.id === id);
}

export function getPartById(id) {
  return parts.find((p) => p.id === id);
}

export function getAccessoryById(id) {
  return accessories.find((a) => a.id === id);
}

export function getProductById(id) {
  return allProducts.find((p) => p.id === id);
}

export const featuredVehicles = vehicles.filter((v) => v.featured);
export const featuredParts = parts.filter((p) => p.featured);
export const featuredAccessories = accessories.filter((a) => a.featured);