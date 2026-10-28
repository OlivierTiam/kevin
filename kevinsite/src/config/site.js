export const SITE = {
  name: "Fusion Auto",
  namePart1: "FUSION",
  namePart2: "AUTO",
  tagline: "Votre prochaine voiture commence ici.",
  whatsapp: "16728962863", // format international sans + ni espaces
  phone: "+1 (672) 896-2863",
  email: "contact@fusionauto.com",
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