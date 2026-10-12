import { SITE } from "../config/site.js";

/**
 * Formate un prix en FCFA.
 * 18500000 -> "18 500 000 FCFA"
 */
export function formatPrice(value) {
  if (value == null) return "";
  return `${value.toLocaleString("fr-FR").replace(/\u202f/g, " ")} ${SITE.currency}`;
}

/**
 * Formate un kilométrage.
 * 45000 -> "45 000 km"
 */
export function formatMileage(value) {
  if (value == null) return "";
  return `${value.toLocaleString("fr-FR").replace(/\u202f/g, " ")} km`;
}

/**
 * Slug simple pour les URLs.
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}