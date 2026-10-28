// Catalogue accessoires automobiles
// Chaque accessoire possède : id, type, name, brand, reference,
// price, stock, featured, images, description

export const accessories = [
  // =====================================================
  // INTÉRIEUR
  // =====================================================
  {
    id: "a-tapis-universels",
    type: "accessoire",
    name: "Jeu de tapis universels",
    brand: "Fusion Auto",
    reference: "ACC-TAP01",
    price: 15000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-tapis-universels.jpg"],
    description:
      "Jeu de 4 tapis résistants et lavables. Protège l'habitacle de votre véhicule au quotidien. Taille ajustable.",
  },
  {
    id: "a-housse-siege",
    type: "accessoire",
    name: "Housse de siège cuir synthétique",
    brand: "Fusion Auto",
    reference: "ACC-HOU21",
    price: 45000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-housse-siege.jpg"],
    description:
      "Housse de siège au toucher cuir. Protège et revalorise l'intérieur. Installation simple, compatible avec la plupart des sièges.",
  },
  {
    id: "a-support-telephone",
    type: "accessoire",
    name: "Support téléphone magnétique",
    brand: "Fusion Auto",
    reference: "ACC-SUP07",
    price: 7500,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-support-telephone.jpg"],
    description:
      "Support magnétique pour smartphone. Fixation solide sur grille d'aération, orientation réglable à 360°.",
  },
  {
    id: "a-organiseur-coffre",
    type: "accessoire",
    name: "Organiseur de coffre pliable",
    brand: "Fusion Auto",
    reference: "ACC-ORG14",
    price: 18000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-organiseur-coffre.jpg"],
    description:
      "Organiseur de coffre pliable avec compartiments. Maintient vos affaires en place et optimise l'espace.",
  },
  {
    id: "a-parfum-voiture",
    type: "accessoire",
    name: "Parfum d'ambiance automobile",
    brand: "Fusion Auto",
    reference: "ACC-PAR02",
    price: 4500,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-parfum-voiture.jpg"],
    description:
      "Parfum d'ambiance longue durée pour habitacle. Diffuseur discret, plusieurs senteurs disponibles.",
  },

  // =====================================================
  // ÉLECTRONIQUE & MULTIMÉDIA
  // =====================================================
  {
    id: "a-camera-recul",
    type: "accessoire",
    name: "Caméra de recul universelle",
    brand: "Fusion Auto",
    reference: "ACC-CAM12",
    price: 35000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-camera-recul.jpg"],
    description:
      "Caméra de recul haute définition avec vision nocturne. Installation simple, compatible avec la plupart des écrans autoradio.",
  },
  {
    id: "a-chargeur-usb",
    type: "accessoire",
    name: "Chargeur USB double port",
    brand: "Fusion Auto",
    reference: "ACC-CHG03",
    price: 5500,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-chargeur-usb.jpg"],
    description:
      "Chargeur USB double port 12V/24V. Charge rapide pour deux appareils simultanément. Protection contre les surtensions.",
  },
  {
    id: "a-bluetooth-kit",
    type: "accessoire",
    name: "Kit Bluetooth mains libres",
    brand: "Fusion Auto",
    reference: "ACC-BLU08",
    price: 28000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-bluetooth-kit.jpg"],
    description:
      "Kit Bluetooth mains libres pour autoradio. Écoutez musique et appels en toute sécurité. Installation plug-and-play.",
  },
  {
    id: "a-dashcam",
    type: "accessoire",
    name: "Caméra embarquée (dashcam)",
    brand: "Fusion Auto",
    reference: "ACC-DSH19",
    price: 65000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-dashcam.jpg"],
    description:
      "Dashcam Full HD avec enregistrement en boucle. Preuve en cas d'accident, vision nocturne, écran LCD.",
  },

  // =====================================================
  // SÉCURITÉ & URGENCE
  // =====================================================
  {
    id: "a-kit-securite",
    type: "accessoire",
    name: "Kit de sécurité automobile",
    brand: "Fusion Auto",
    reference: "ACC-SEC09",
    price: 22000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-kit-securite.jpg"],
    description:
      "Kit complet : triangle de signalisation, gilet réfléchissant, extincteur 1kg, trousse de premiers secours.",
  },
  {
    id: "a-antivol-volant",
    type: "accessoire",
    name: "Antivol volant renforcé",
    brand: "Fusion Auto",
    reference: "ACC-ANT05",
    price: 25000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-antivol-volant.jpg"],
    description:
      "Antivol volant en acier trempé. Protection dissuasive efficace contre le vol. Clé de sécurité fournie.",
  },
  {
    id: "a-cable-demarrage",
    type: "accessoire",
    name: "Câbles de démarrage 400A",
    brand: "Fusion Auto",
    reference: "ACC-CAB11",
    price: 15000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-cable-demarrage.jpg"],
    description:
      "Paire de câbles de démarrage 400A, longueur 3m. Pinces isolées, gaine résistante au froid.",
  },
  {
    id: "a-compresseur-pneu",
    type: "accessoire",
    name: "Compresseur à pneu portable",
    brand: "Fusion Auto",
    reference: "ACC-COM23",
    price: 32000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-compresseur-pneu.jpg"],
    description:
      "Compresseur à pneu portable 12V. Gonflage rapide avec manomètre intégré. Se range dans le coffre.",
  },
  {
    id: "a-gants-mecanique",
    type: "accessoire",
    name: "Paire de gants mécanique",
    brand: "Fusion Auto",
    reference: "ACC-GAN04",
    price: 6000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-gants-mecanique.jpg"],
    description:
      "Gants de travail renforcés pour entretien et petites réparations. Excellente adhérence, taille ajustable.",
  },

  // =====================================================
  // EXTÉRIEUR & STYLE
  // =====================================================
  {
    id: "a-housse-voiture",
    type: "accessoire",
    name: "Housse de protection extérieure",
    brand: "Fusion Auto",
    reference: "ACC-HVO30",
    price: 55000,
    stock: true,
    featured: true,
    images: ["/images/accessoires/a-housse-voiture.jpg"],
    description:
      "Housse de protection imperméable et respirante. Protège de la pluie, du soleil et de la poussière. Tailles S à XL.",
  },
  {
    id: "a-barres-toit",
    type: "accessoire",
    name: "Barres de toit universelles",
    brand: "Fusion Auto",
    reference: "ACC-BAR27",
    price: 78000,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-barres-toit.jpg"],
    description:
      "Paire de barres de toit en aluminium. Support jusqu'à 75kg, compatible avec la plupart des galeries.",
  },
  {
    id: "a-cache-soleil",
    type: "accessoire",
    name: "Cache-soleil pare-brise",
    brand: "Fusion Auto",
    reference: "ACC-CAC06",
    price: 9500,
    stock: true,
    featured: false,
    images: ["/images/accessoires/a-cache-soleil.jpg"],
    description:
      "Cache-soleil réfléchissant pour pare-brise. Réduit la chaleur dans l'habitacle et protège le tableau de bord.",
  },
];