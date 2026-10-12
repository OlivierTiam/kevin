export const SITE = {
  name: "Auto Motors",
  namePart1: "AUTO",
  namePart2: "MOTORS",
  tagline: "Votre prochaine voiture commence ici.",
  whatsapp: "237600000000", // format international sans + ni espaces
  phone: "+237 6 00 00 00 00",
  email: "contact@automotors.com",
  address: "Douala, Cameroun",
  currency: "FCFA",
};

/**
 * Construit un lien WhatsApp avec message pré-rempli.
 * @param {string} message
 * @returns {string}
 */
export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Formate un prix : 18500000 -> "18 500 000 FCFA"
 */
export function formatPrice(value) {
  return `${value.toLocaleString("fr-FR").replace(/\u202f/g, " ")} ${SITE.currency}`;
}