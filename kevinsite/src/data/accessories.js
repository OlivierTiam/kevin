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
    brand: "Auto Motors",
    reference: "ACC-TAP01",
    price: 15000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    ],
    description:
      "Jeu de 4 tapis résistants et lavables. Protège l'habitacle de votre véhicule au quotidien. Taille ajustable.",
  },
  {
    id: "a-housse-siege",
    type: "accessoire",
    name: "Housse de siège cuir synthétique",
    brand: "Auto Motors",
    reference: "ACC-HOU21",
    price: 45000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&q=80",
    ],
    description:
      "Housse de siège au toucher cuir. Protège et revalorise l'intérieur. Installation simple, compatible avec la plupart des sièges.",
  },
  {
    id: "a-support-telephone",
    type: "accessoire",
    name: "Support téléphone magnétique",
    brand: "Auto Motors",
    reference: "ACC-SUP07",
    price: 7500,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1611226263212-3c1ea9b8b8b8?w=1200&q=80",
    ],
    description:
      "Support magnétique pour smartphone. Fixation solide sur grille d'aération, orientation réglable à 360°.",
  },
  {
    id: "a-organiseur-coffre",
    type: "accessoire",
    name: "Organiseur de coffre pliable",
    brand: "Auto Motors",
    reference: "ACC-ORG14",
    price: 18000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    ],
    description:
      "Organiseur de coffre pliable avec compartiments. Maintient vos affaires en place et optimise l'espace.",
  },
  {
    id: "a-parfum-voiture",
    type: "accessoire",
    name: "Parfum d'ambiance automobile",
    brand: "Auto Motors",
    reference: "ACC-PAR02",
    price: 4500,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    ],
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
    brand: "Auto Motors",
    reference: "ACC-CAM12",
    price: 35000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
    description:
      "Caméra de recul haute définition avec vision nocturne. Installation simple, compatible avec la plupart des écrans autoradio.",
  },
  {
    id: "a-chargeur-usb",
    type: "accessoire",
    name: "Chargeur USB double port",
    brand: "Auto Motors",
    reference: "ACC-CHG03",
    price: 5500,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
    ],
    description:
      "Chargeur USB double port 12V/24V. Charge rapide pour deux appareils simultanément. Protection contre les surtensions.",
  },
  {
    id: "a-bluetooth-kit",
    type: "accessoire",
    name: "Kit Bluetooth mains libres",
    brand: "Auto Motors",
    reference: "ACC-BLU08",
    price: 28000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
    ],
    description:
      "Kit Bluetooth mains libres pour autoradio. Écoutez musique et appels en toute sécurité. Installation plug-and-play.",
  },
  {
    id: "a-dashcam",
    type: "accessoire",
    name: "Caméra embarquée (dashcam)",
    brand: "Auto Motors",
    reference: "ACC-DSH19",
    price: 65000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
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
    brand: "Auto Motors",
    reference: "ACC-SEC09",
    price: 22000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    ],
    description:
      "Kit complet : triangle de signalisation, gilet réfléchissant, extincteur 1kg, trousse de premiers secours.",
  },
  {
    id: "a-antivol-volant",
    type: "accessoire",
    name: "Antivol volant renforcé",
    brand: "Auto Motors",
    reference: "ACC-ANT05",
    price: 25000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    ],
    description:
      "Antivol volant en acier trempé. Protection dissuasive efficace contre le vol. Clé de sécurité fournie.",
  },
  {
    id: "a-cable-demarrage",
    type: "accessoire",
    name: "Câbles de démarrage 400A",
    brand: "Auto Motors",
    reference: "ACC-CAB11",
    price: 15000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    ],
    description:
      "Paire de câbles de démarrage 400A, longueur 3m. Pinces isolées, gaine résistante au froid.",
  },
  {
    id: "a-compresseur-pneu",
    type: "accessoire",
    name: "Compresseur à pneu portable",
    brand: "Auto Motors",
    reference: "ACC-COM23",
    price: 32000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
    ],
    description:
      "Compresseur à pneu portable 12V. Gonflage rapide avec manomètre intégré. Se range dans le coffre.",
  },
  {
    id: "a-gants-mecanique",
    type: "accessoire",
    name: "Paire de gants mécanique",
    brand: "Auto Motors",
    reference: "ACC-GAN04",
    price: 6000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    ],
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
    brand: "Auto Motors",
    reference: "ACC-HVO30",
    price: 55000,
    stock: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    ],
    description:
      "Housse de protection imperméable et respirante. Protège de la pluie, du soleil et de la poussière. Tailles S à XL.",
  },
  {
    id: "a-barres-toit",
    type: "accessoire",
    name: "Barres de toit universelles",
    brand: "Auto Motors",
    reference: "ACC-BAR27",
    price: 78000,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    ],
    description:
      "Paire de barres de toit en aluminium. Support jusqu'à 75kg, compatible avec la plupart des galeries.",
  },
  {
    id: "a-cache-soleil",
    type: "accessoire",
    name: "Cache-soleil pare-brise",
    brand: "Auto Motors",
    reference: "ACC-CAC06",
    price: 9500,
    stock: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    ],
    description:
      "Cache-soleil réfléchissant pour pare-brise. Réduit la chaleur dans l'habitacle et protège le tableau de bord.",
  },
];