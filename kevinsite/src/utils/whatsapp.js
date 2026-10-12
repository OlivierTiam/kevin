import { SITE } from "../config/site.js";
import { formatPrice } from "./format.js";

export function waLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Message WhatsApp pour un véhicule.
 */
export function waVehicleMessage(v) {
  return `Bonjour, je suis intéressé par le ${v.name} ${v.year} affiché à ${formatPrice(v.price)}. Est-il toujours disponible ?`;
}

/**
 * Message WhatsApp pour une pièce ou un accessoire.
 */
export function waPartMessage(p) {
  return `Bonjour, je souhaite commander ${p.name}${p.reference ? ` (réf. ${p.reference})` : ""} au prix de ${formatPrice(p.price)}. Pouvez-vous confirmer la disponibilité ?`;
}

/**
 * Message WhatsApp pour un panier complet.
 */
export function waCartMessage(items, total) {
  const lines = items.map((i) => `- ${i.name} x${i.qty}`).join("\n");
  return `Bonjour, je souhaite commander :\n\n${lines}\n\nTotal estimatif : ${formatPrice(total)}.\n\nMerci de confirmer la disponibilité.`;
}