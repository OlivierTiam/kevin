// Catalogue pièces détachées automobiles
// Chaque pièce possède : id, type, name, brand, reference, category,
// compatibleModels, price, stock, featured, images, description

export const parts = [
  // =====================================================
  // FREINAGE
  // =====================================================
  {
    id: "p-plaquettes-rav4",
    type: "piece",
    name: "Plaquettes de frein avant",
    brand: "Toyota",
    reference: "BRK-4521",
    category: "freinage",
    compatibleModels: ["Corolla", "RAV4", "Yaris"],
    price: 35000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-plaquettes-rav4.jpg"],
    description:
      "Plaquettes de frein avant de qualité d'origine. Freinage progressif et silencieux, usure maîtrisée. Conformes aux spécifications constructeur.",
  },
  {
    id: "p-disques-frein-avant",
    type: "piece",
    name: "Paire de disques de frein avant",
    brand: "Bosch",
    reference: "BRK-7712",
    category: "freinage",
    compatibleModels: ["Toyota RAV4", "Toyota Corolla"],
    price: 95000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-disques-frein-avant.jpg"],
    description:
      "Paire de disques de frein avant ventilés. Excellente dissipation thermique et endurance au freinage. Compatible avec plaquettes d'origine.",
  },
  {
    id: "p-liquide-frein",
    type: "piece",
    name: "Liquide de frein DOT 4",
    brand: "Castrol",
    reference: "BRK-0011",
    category: "freinage",
    compatibleModels: ["Universel"],
    price: 8500,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-liquide-frein.jpg"],
    description:
      "Liquide de frein DOT 4 haute performance. Point d'ébullition élevé, protection contre la corrosion. Flacon 1L.",
  },

  // =====================================================
  // MOTEUR
  // =====================================================
  {
    id: "p-courroie-distribution",
    type: "piece",
    name: "Kit courroie de distribution",
    brand: "Gates",
    reference: "MOT-4412",
    category: "moteur",
    compatibleModels: ["Peugeot 3008", "Citroën C4"],
    price: 95000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-courroie-distribution.jpg"],
    description:
      "Kit complet de distribution : courroie, galets tendeurs et galet enrouleur. Remplacement recommandé tous les 100 000 km selon constructeur.",
  },
  {
    id: "p-bougies-allumage",
    type: "piece",
    name: "Jeu de 4 bougies d'allumage",
    brand: "NGK",
    reference: "MOT-2233",
    category: "moteur",
    compatibleModels: ["Toyota Corolla", "Toyota Yaris", "Hyundai Tucson"],
    price: 24000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-bougies-allumage.jpg"],
    description:
      "Jeu de 4 bougies d'allumage iridium. Démarrage facilité, consommation optimisée et durée de vie prolongée.",
  },
  {
    id: "p-pompe-eau",
    type: "piece",
    name: "Pompe à eau moteur",
    brand: "SKF",
    reference: "MOT-5544",
    category: "moteur",
    compatibleModels: ["Peugeot 3008", "Peugeot 308"],
    price: 68000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-pompe-eau.jpg"],
    description:
      "Pompe à eau de refroidissement moteur. Roulement renforcé, joint d'étanchéité haute qualité. Remplacement conseillé avec la distribution.",
  },
  {
    id: "p-courroie-accessoire",
    type: "piece",
    name: "Courroie d'accessoires",
    brand: "Continental",
    reference: "MOT-6688",
    category: "moteur",
    compatibleModels: ["Toyota RAV4", "Mercedes Classe C"],
    price: 32000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-courroie-accessoire.jpg"],
    description:
      "Courroie trapézoïdale d'accessoires (alternateur, climatisation). Matériaux résistants à la chaleur et à l'usure.",
  },

  // =====================================================
  // FILTRATION
  // =====================================================
  {
    id: "p-filtre-huile-corolla",
    type: "piece",
    name: "Filtre à huile",
    brand: "Toyota",
    reference: "FLT-1188",
    category: "filtration",
    compatibleModels: ["Corolla", "Yaris", "RAV4"],
    price: 8500,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-filtre-huile-corolla.jpg"],
    description:
      "Filtre à huile haute performance. Protection moteur optimale, filtration fine des impuretés. À remplacer à chaque vidange.",
  },
  {
    id: "p-filtre-air",
    type: "piece",
    name: "Filtre à air moteur",
    brand: "Mann-Filter",
    reference: "FLT-2201",
    category: "filtration",
    compatibleModels: ["Toyota RAV4", "Hyundai Tucson", "Peugeot 3008"],
    price: 15000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-filtre-air.jpg"],
    description:
      "Filtre à air moteur haute efficacité. Protège le moteur des poussières et optimise la consommation de carburant.",
  },
  {
    id: "p-filtre-habitacle",
    type: "piece",
    name: "Filtre d'habitacle anti-pollens",
    brand: "Bosch",
    reference: "FLT-3344",
    category: "filtration",
    compatibleModels: ["Toyota Corolla", "Peugeot 3008", "Mercedes Classe C"],
    price: 12500,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-filtre-habitacle.jpg"],
    description:
      "Filtre d'habitacle à charbon actif. Retient pollens, poussières et mauvaises odeurs. Air intérieur plus sain.",
  },
  {
    id: "p-filtre-carburant",
    type: "piece",
    name: "Filtre à carburant diesel",
    brand: "Bosch",
    reference: "FLT-4455",
    category: "filtration",
    compatibleModels: ["Toyota Hilux", "Peugeot 3008 Diesel"],
    price: 18500,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-filtre-carburant.jpg"],
    description:
      "Filtre à carburant diesel. Protège le système d'injection, retient l'eau et les impuretés. Essentiel pour la longévité du moteur.",
  },

  // =====================================================
  // ÉLECTRICITÉ
  // =====================================================
  {
    id: "p-batterie-12v",
    type: "piece",
    name: "Batterie 12V 70Ah",
    brand: "Bosch",
    reference: "BAT-70AH",
    category: "electricite",
    compatibleModels: ["Universel"],
    price: 65000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-batterie-12v.jpg"],
    description:
      "Batterie 12V 70Ah, démarrage puissant et fiable. Sans entretien, durée de vie prolongée. Adaptée à de nombreux véhicules essence et diesel.",
  },
  {
    id: "p-alternateur",
    type: "piece",
    name: "Alternateur 120A",
    brand: "Valeo",
    reference: "ELC-8899",
    category: "electricite",
    compatibleModels: ["Peugeot 3008", "Peugeot 308"],
    price: 185000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-alternateur.jpg"],
    description:
      "Alternateur 120A reconditionné. Recharge batterie efficace et alimentation stable de tous les équipements électriques.",
  },
  {
    id: "p-demarreur",
    type: "piece",
    name: "Démarreur",
    brand: "Valeo",
    reference: "ELC-9901",
    category: "electricite",
    compatibleModels: ["Toyota Corolla", "Toyota RAV4"],
    price: 145000,
    stock: false,
    featured: false,
    images: ["/images/pieces/p-demarreur.jpg"],
    description:
      "Démarreur haute performance. Démarrage à froid fiable et silencieux. Compatible avec de nombreux modèles Toyota.",
  },
  {
    id: "p-ampoule-h7",
    type: "piece",
    name: "Ampoule phare H7 LED",
    brand: "Philips",
    reference: "ELC-1122",
    category: "electricite",
    compatibleModels: ["Universel"],
    price: 22000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-ampoule-h7.jpg"],
    description:
      "Paire d'ampoules H7 LED. Éclairage blanc puissant, faible consommation, durée de vie 5x supérieure aux halogènes.",
  },

  // =====================================================
  // SUSPENSION
  // =====================================================
  {
    id: "p-amortisseurs-rav4",
    type: "piece",
    name: "Paire d'amortisseurs avant",
    brand: "KYB",
    reference: "SUS-3320",
    category: "suspension",
    compatibleModels: ["Toyota RAV4"],
    price: 120000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-amortisseurs-rav4.jpg"],
    description:
      "Paire d'amortisseurs avant pour RAV4. Confort de conduite restauré, tenue de route améliorée, usure des pneus régulière.",
  },
  {
    id: "p-ressorts-avant",
    type: "piece",
    name: "Paire de ressorts de suspension avant",
    brand: "Lesjöfors",
    reference: "SUS-4411",
    category: "suspension",
    compatibleModels: ["Toyota Corolla", "Toyota Yaris"],
    price: 85000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-ressorts-avant.jpg"],
    description:
      "Paire de ressorts hélicoïdaux avant. Acier haute résistance, traitement anticorrosion. Hauteur d'origine respectée.",
  },
  {
    id: "p-rotules-direction",
    type: "piece",
    name: "Rotules de direction (paire)",
    brand: "SKF",
    reference: "SUS-5566",
    category: "suspension",
    compatibleModels: ["Peugeot 3008", "Hyundai Tucson"],
    price: 42000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-rotules-direction.jpg"],
    description:
      "Paire de rotules de direction. Précision de conduite restaurée, usure régulière des pneus. Essentielles pour la sécurité.",
  },

  // =====================================================
  // CARROSSERIE
  // =====================================================
  {
    id: "p-retroviseur",
    type: "piece",
    name: "Rétroviseur extérieur gauche",
    brand: "Hyundai",
    reference: "CAR-7702",
    category: "carrosserie",
    compatibleModels: ["Tucson"],
    price: 85000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-retroviseur.jpg"],
    description:
      "Rétroviseur extérieur gauche compatible Hyundai Tucson. Électrique, dégivrant, avec clignotant intégré.",
  },
  {
    id: "p-pare-chocs-avant",
    type: "piece",
    name: "Pare-chocs avant",
    brand: "Toyota",
    reference: "CAR-8801",
    category: "carrosserie",
    compatibleModels: ["Toyota Corolla 2019-2022"],
    price: 210000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-pare-chocs-avant.jpg"],
    description:
      "Pare-chocs avant neuf, non peint. Prêt à peindre selon la teinte d'origine. Fixations conformes au modèle.",
  },
  {
    id: "p-capot-moteur",
    type: "piece",
    name: "Capot moteur",
    brand: "Peugeot",
    reference: "CAR-9922",
    category: "carrosserie",
    compatibleModels: ["Peugeot 3008"],
    price: 175000,
    stock: false,
    featured: false,
    images: ["/images/pieces/p-capot-moteur.jpg"],
    description:
      "Capot moteur neuf en acier. Apprêt anticorrosion appliqué. Compatible Peugeot 3008 toutes finitions.",
  },

  // =====================================================
  // PNEUMATIQUES
  // =====================================================
  {
    id: "p-pneu-225-65",
    type: "piece",
    name: "Pneu 225/65 R17",
    brand: "Michelin",
    reference: "PNU-22565",
    category: "pneumatiques",
    compatibleModels: ["SUV", "4x4"],
    price: 78000,
    stock: true,
    featured: true,
    images: ["/images/pieces/p-pneu-225-65.jpg"],
    description:
      "Pneu toutes saisons 225/65 R17. Excellent compromis adhérence, confort et longévité. Idéal pour SUV et 4x4.",
  },
  {
    id: "p-pneu-205-55",
    type: "piece",
    name: "Pneu 205/55 R16",
    brand: "Continental",
    reference: "PNU-20555",
    category: "pneumatiques",
    compatibleModels: ["Berline", "Citadine"],
    price: 62000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-pneu-205-55.jpg"],
    description:
      "Pneu été 205/55 R16. Freinage court sur sol sec et mouillé, faible résistance au roulement.",
  },
  {
    id: "p-pneu-265-65",
    type: "piece",
    name: "Pneu 265/65 R17 tout-terrain",
    brand: "BFGoodrich",
    reference: "PNU-26565",
    category: "pneumatiques",
    compatibleModels: ["Pickup", "4x4"],
    price: 125000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-pneu-265-65.jpg"],
    description:
      "Pneu tout-terrain 265/65 R17. Sculpture agressive, résistance aux crevaisons. Parfait pour Hilux et pickups.",
  },

  // =====================================================
  // ÉCLAIRAGE
  // =====================================================
  {
    id: "p-phare-avant",
    type: "piece",
    name: "Phare avant droit",
    brand: "Peugeot",
    reference: "LGT-2201",
    category: "eclairage",
    compatibleModels: ["3008"],
    price: 145000,
    stock: false,
    featured: false,
    images: ["/images/pieces/p-phare-avant.jpg"],
    description:
      "Phare avant droit compatible Peugeot 3008. Éclairage net et conforme aux normes. Fixations d'origine.",
  },
  {
    id: "p-feu-arriere",
    type: "piece",
    name: "Feu arrière gauche",
    brand: "Toyota",
    reference: "LGT-3302",
    category: "eclairage",
    compatibleModels: ["Corolla 2019-2022"],
    price: 95000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-feu-arriere.jpg"],
    description:
      "Feu arrière gauche avec feux stop et clignotant intégrés. Étanchéité garantie, installation plug-and-play.",
  },
  {
    id: "p-antibrouillard",
    type: "piece",
    name: "Paire de feux antibrouillard",
    brand: "Hella",
    reference: "LGT-4403",
    category: "eclairage",
    compatibleModels: ["Universel"],
    price: 38000,
    stock: true,
    featured: false,
    images: ["/images/pieces/p-antibrouillard.jpg"],
    description:
      "Paire de feux antibrouillard universels. Améliore la visibilité par temps de brouillard, pluie ou neige.",
  },
];