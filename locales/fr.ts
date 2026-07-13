import { menuCategories } from "@/lib/menu-data"

export const fr = {
  localeName: "Français",
  seo: {
    title: "Be Sushi Fréjus — Sushi, Poké Bowl & Plateaux à emporter",
    description:
      "Be Sushi Fréjus propose sushi, maki, california rolls, poké bowls, menus et plateaux à emporter ou en livraison. Consultez la carte et appelez pour commander.",
    orderActionDescription: "Commande par téléphone uniquement",
  },
  navigation: {
    home: "Accueil",
    menu: "Carte",
    pokeBowl: "Poké Bowl",
    gallery: "Galerie",
    contact: "Contact",
    primary: "Navigation principale",
    mobile: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    quickActions: "Actions rapides",
  },
  language: {
    selectorLabel: "Choisir la langue",
    french: "FR",
    english: "EN",
  },
  business: {
    city: "Fréjus",
    deliveryNote: "Livraison à partir de 30€",
    takeawayDelivery: "À emporter / livraison",
  },
  common: {
    call: "Appeler",
    callNow: "Appeler maintenant",
    callBeSushi: "Appeler Be Sushi",
    callToOrder: "Appeler pour commander",
    directions: "Itinéraire",
    viewOnMaps: "Voir sur Maps",
    seeMenu: "Voir la carte",
  },
  header: {
    homeAria: "Retour à l'accueil Be Sushi",
    callAria: "Appeler Be Sushi",
    logoAlt: "Logo Be Sushi Fréjus",
  },
  hero: {
    imageAlt: "Sushi et rolls Be Sushi",
    eyebrow: "Fréjus · À emporter · Livraison",
    title: "Sushi, poké bowls & plateaux à Fréjus",
    description:
      "Consultez la carte, choisissez vos envies, puis appelez pour commander à emporter ou en livraison.",
    serviceLine: "À emporter / livraison",
    categoriesTitle: "Explorez la carte",
    categoriesDescription:
      "Choisissez une catégorie, consultez les plats, puis appelez pour commander.",
    allMenu: "Toute la carte",
    categoryAria: "Voir la catégorie",
  },
  menu: {
    title: "La Carte",
    description: "Consultez nos préparations, puis appelez pour commander.",
    searchPlaceholder: "Rechercher saumon, avocat, crevette…",
    searchAria: "Rechercher dans la carte",
    categoriesAria: "Catégories du menu",
    all: "Tout",
    callCategory: "Appeler pour commander",
    noResults: "Aucun résultat pour",
    categories: menuCategories,
  },
  poke: {
    imageAlt: "Poké bowl saumon avocat",
    title: "Compose ton Poké",
    description:
      "Choisissez vos ingrédients, notez votre composition, puis appelez-nous pour commander.",
    proteins: "Protéines",
    veggies: "Veggies",
    toppings: "Toppings",
    sauces: "Sauces",
    supplements: "Suppléments",
    extras: "Extras & Yakitori",
  },
  cta: {
    title: "Prêt à commander ?",
    description:
      "Consultez la carte, notez vos envies, puis appelez le restaurant pour confirmer votre commande.",
    phoneOnly: "Commande confirmée uniquement par téléphone.",
    callAria: "Appeler Be Sushi au",
  },
  gallery: {
    title: "Nos plats",
    description: "Quelques exemples de la carte Be Sushi.",
    images: [
      { src: "/gallery/01-hero-platters-main.jpg", alt: "Assortiment de plats Be Sushi" },
      { src: "/gallery/02-special-b6.jpg", alt: "Spécial Be Sushi B6" },
      { src: "/gallery/03-special-b2.jpg", alt: "Spécial Be Sushi B2" },
      { src: "/gallery/04-special-b1.jpg", alt: "Spécial Be Sushi B1" },
      { src: "/gallery/05-sashimi-saumon.jpg", alt: "Sashimi saumon" },
      { src: "/gallery/06-menu-m.jpg", alt: "Menu M" },
      { src: "/gallery/07-menu-j.jpg", alt: "Menu J" },
      { src: "/gallery/08-menu-i-sushi-saumon.jpg", alt: "Sushi saumon" },
      { src: "/gallery/09-crosti-saumon-pane-cheese-avocat.jpg", alt: "Crosti saumon pané cheese avocat" },
      { src: "/gallery/10-chirashi-assortiment.jpg", alt: "Chirashi assortiment" },
      { src: "/gallery/11-california-thon-epice-avocat.jpg", alt: "California thon épicé avocat" },
      { src: "/gallery/12-hero-sushi-closeup.jpg", alt: "Sushi et rolls Be Sushi" },
    ],
  },
  contact: {
    title: "Contact & Accès",
    description: "Retrouvez-nous à Fréjus.",
    phone: "Téléphone",
    address: "Adresse",
    service: "Service",
    callAria: "Appeler Be Sushi au",
  },
  footer: {
    seoText:
      "Be Sushi Fréjus propose sushi, maki, california rolls, poké bowls, menus et plateaux à emporter ou en livraison à Fréjus.",
  },
  mobileBar: {
    callRestaurant: "Appeler le restaurant",
    menuAria: "Voir la carte",
    mapsAria: "Voir l'itinéraire sur Maps",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page demandée n'existe pas.",
    home: "Retour à l'accueil",
  },
} as const
