export type MenuItem = {
  name: string
  description?: string
  price: string
}

export type MenuSection = {
  title: string
  note?: string
  items: MenuItem[]
}

export type MenuCategory = {
  id: string
  label: string
  icon: string
  note?: string
  items?: MenuItem[]
  sections?: MenuSection[]
  // Poké bowl specific
  sizes?: MenuItem[]
  proteins?: string[]
  veggies?: string[]
  toppings?: string[]
  sauces?: string[]
  supplements?: MenuItem[]
  extras?: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    icon: "/icons/01-entrees.png",
    note: "",
    items: [
      { name: "Salade de choux crevette avocat", price: "6,90€" },
      { name: "Salade édamamé", price: "5,90€" },
      { name: "Salade de choux", price: "3,80€" },
      { name: "Salade Wakamé", description: "70 g", price: "6,00€" },
      { name: "Salade de choux thon avocat", price: "6,90€" },
      { name: "Salade de choux saumon avocat", price: "6,80€" },
      { name: "Salade de choux surimi avocat", price: "6,50€" },
      { name: "Riz nature", price: "3,80€" },
      { name: "Soupe miso", price: "5,00€" },
      { name: "Tartare de saumon avocat", description: "Sauce thaï, 100 g", price: "10,50€" },
      { name: "Tartare de thon avocat", description: "Sauce thaï, 100 g", price: "12,00€" },
      { name: "Riz vinaigré", price: "4,50€" },
      { name: "Gyoza légumes vapeur", price: "7,90€" },
      { name: "Formule Midi 1", description: "6 california saumon avocat, 4 sushi saumon. Servi avec salade de choux et boisson sans alcool.", price: "14,90€" },
      { name: "Formule Midi 2", description: "3 california thon cuit mayonnaise avocat, 3 california surimi avocat concombre, 6 maki saumon. Servi avec salade de choux et boisson sans alcool.", price: "14,90€" },
    ],
  },
  {
    id: "maki",
    label: "Maki",
    icon: "/icons/02-maki.png",
    note: "6 pièces",
    items: [
      { name: "Thon", price: "6,80€" },
      { name: "Saumon", price: "6,50€" },
      { name: "Saumon avocat", price: "6,80€" },
      { name: "Saumon cheese", price: "6,80€" },
      { name: "Cheese", price: "6,20€" },
      { name: "Cheese concombre", price: "6,30€" },
      { name: "Cheese avocat", price: "6,40€" },
      { name: "Cheese crevette", price: "6,80€" },
      { name: "Avocat", price: "6,20€" },
      { name: "Concombre", price: "5,60€" },
      { name: "Thon cuit mayonnaise", price: "6,50€" },
      { name: "Surimi", price: "6,40€" },
      { name: "Futo Maki", description: "Thon, saumon, surimi, avocat, concombre. 4 pièces.", price: "11,00€" },
      { name: "Sumo Maki", description: "Thon, saumon, cheese, surimi, avocat, crevette, concombre. 4 pièces.", price: "13,00€" },
    ],
  },
  {
    id: "california",
    label: "California",
    icon: "/icons/03-california.png",
    note: "6 pièces",
    items: [
      { name: "Thon avocat", price: "8,30€" },
      { name: "Thon cuit mayonnaise avocat", price: "8,10€" },
      { name: "Saumon avocat", price: "7,80€" },
      { name: "Saumon cheese", price: "8,00€" },
      { name: "Saumon cheese avocat", price: "8,40€" },
      { name: "Crevette cheese", price: "8,30€" },
      { name: "Crevette cheese avocat", price: "8,50€" },
      { name: "Crevette avocat concombre", price: "8,30€" },
      { name: "Cheese avocat", price: "7,80€" },
      { name: "Avocat concombre", price: "7,50€" },
      { name: "Cheese concombre", price: "7,70€" },
      { name: "Surimi avocat concombre", price: "8,10€" },
      { name: "Thon mayonnaise cheese avocat", price: "8,50€" },
      { name: "Thon épicé avocat", price: "8,50€" },
      { name: "Saumon épicé avocat", price: "8,20€" },
      { name: "Saumon fumé cheese avocat", price: "8,50€" },
    ],
  },
  {
    id: "spring-temaki",
    label: "Spring / Temaki",
    icon: "/icons/04-spring-temaki.png",
    note: "",
    sections: [
      {
        title: "Spring",
        note: "6 pièces",
        items: [
          { name: "Saumon avocat", price: "8,50€" },
          { name: "Saumon cheese", price: "8,80€" },
          { name: "Thon cuit mayonnaise avocat", price: "8,90€" },
          { name: "Crevette cheese concombre", price: "9,00€" },
          { name: "Thon avocat", price: "9,00€" },
          { name: "Avocat cheese concombre", price: "8,80€" },
        ],
      },
      {
        title: "Temaki",
        note: "1 pièce",
        items: [
          { name: "Thon avocat", price: "6,50€" },
          { name: "Saumon avocat", price: "6,00€" },
          { name: "Thon cuit mayonnaise avocat", price: "6,00€" },
          { name: "Thon ciboulette avocat", price: "7,00€" },
          { name: "Crevette panée avocat", price: "7,00€" },
          { name: "Saumon ciboulette avocat", price: "6,80€" },
        ],
      },
    ],
  },
  {
    id: "crosti-saumon-roll",
    label: "Crosti / Saumon Roll",
    icon: "/icons/05-crosti-saumon-roll.png",
    note: "",
    sections: [
      {
        title: "Crosti",
        note: "8 pièces",
        items: [
          { name: "Saumon avocat", price: "9,20€" },
          { name: "Saumon pané avocat", price: "9,90€" },
          { name: "Saumon pané cheese avocat", price: "10,50€" },
          { name: "Crevette panée avocat", price: "10,90€" },
          { name: "Saumon cheese concombre", price: "9,40€" },
          { name: "Saumon cheese avocat", price: "9,50€" },
          { name: "Crevette cheese avocat", price: "9,80€" },
          { name: "Crevette cheese concombre", price: "9,70€" },
          { name: "Thon avocat", price: "9,40€" },
          { name: "Thon cuit mayonnaise avocat", price: "9,50€" },
          { name: "Thon cuit mayonnaise cheese avocat", price: "9,80€" },
          { name: "Thon cuit mayonnaise avocat épicé", price: "9,80€" },
        ],
      },
      {
        title: "Saumon Roll",
        note: "6 pièces",
        items: [
          { name: "Cheese avocat", price: "9,50€" },
          { name: "Cheese", price: "9,00€" },
          { name: "Cheese concombre", price: "9,30€" },
        ],
      },
    ],
  },
  {
    id: "sushi-gunkan",
    label: "Sushi / Gunkan",
    icon: "/icons/06-sushi-gunkan.png",
    note: "",
    sections: [
      {
        title: "Sushi",
        note: "2 pièces",
        items: [
          { name: "Thon", price: "6,50€" },
          { name: "Saumon", price: "5,50€" },
          { name: "Daurade", price: "6,50€" },
          { name: "Anguille", price: "6,90€" },
          { name: "Crevette", price: "5,70€" },
          { name: "Avocat", price: "4,80€" },
          { name: "Saumon avocat", price: "6,50€" },
          { name: "Saumon mi-cuit cheese", description: "Sauce miso", price: "6,50€" },
        ],
      },
      {
        title: "Gunkan",
        note: "2 pièces",
        items: [
          { name: "Œuf de saumon", price: "7,50€" },
          { name: "Crevette ciboulette avocat", description: "Sauce thaï", price: "7,00€" },
          { name: "Saumon ciboulette avocat", description: "Sauce thaï", price: "6,50€" },
          { name: "Daurade ciboulette avocat", description: "Sauce thaï", price: "7,00€" },
          { name: "Thon cuit mayonnaise avocat", price: "6,00€" },
          { name: "Thon ciboulette avocat", description: "Sauce thaï", price: "7,00€" },
        ],
      },
    ],
  },
  {
    id: "sashimi-tataki",
    label: "Sashimi / Tataki",
    icon: "/icons/07-sashimi-tataki.png",
    note: "",
    sections: [
      {
        title: "Sashimi",
        note: "10 pièces",
        items: [
          { name: "Saumon thon", price: "17,00€" },
          { name: "Thon saumon daurade", price: "18,00€" },
          { name: "Thon", price: "18,00€" },
          { name: "Saumon", price: "16,00€" },
          { name: "Daurade", price: "18,00€" },
        ],
      },
      {
        title: "Tataki",
        note: "10 pièces, sashimi mi-cuit",
        items: [
          { name: "Thon", price: "19,90€" },
          { name: "Saumon", price: "17,90€" },
          { name: "Thon et saumon", price: "18,90€" },
        ],
      },
    ],
  },
  {
    id: "special-be-sushi",
    label: "Spécial Be Sushi",
    icon: "/icons/08-special-be-sushi.png",
    note: "",
    items: [
      { name: "B1", description: "Crevette panée, avocat, cheese, saumon mi-cuit, sauce miso. 8 pièces.", price: "15,00€" },
      { name: "B2", description: "Crevette panée, avocat. 8 pièces.", price: "14,50€" },
      { name: "B3", description: "Saumon, thon, avocat. 8 pièces.", price: "14,00€" },
      { name: "B4", description: "Saumon, avocat, concombre, saumon mi-cuit, sauce miso. 8 pièces.", price: "14,50€" },
      { name: "B5", description: "Crevette panée, avocat, concombre, cheddar, mayonnaise, sauce teriyaki. 8 pièces.", price: "14,50€" },
      { name: "B6", description: "Foie gras, figue, amandes. 6 pièces.", price: "14,50€" },
      { name: "B7", description: "Crevette cuite, avocat, thon. 8 pièces.", price: "16,00€" },
      { name: "B8", description: "Crevette cuite, avocat, saumon. 8 pièces.", price: "15,00€" },
    ],
  },
  {
    id: "menus-plateaux",
    label: "Menus / Plateaux",
    icon: "/icons/09-menus-plateaux.png",
    note: "Menus servis avec salade de choux",
    items: [
      { name: "Menu A", description: "18 pièces : 6 california saumon avocat, 6 thon cuit mayonnaise avocat, 6 concombre cheese.", price: "19,90€" },
      { name: "Menu B", description: "18 pièces : 6 california saumon cheese avocat, 6 california saumon avocat, 6 maki saumon.", price: "19,90€" },
      { name: "Menu C", description: "18 pièces : 6 california saumon avocat, 6 maki saumon, 6 spring rolls saumon avocat.", price: "19,90€" },
      { name: "Menu D", description: "18 pièces : 6 spring saumon avocat, 6 california saumon cheese, 6 maki saumon.", price: "19,90€" },
      { name: "Menu F", description: "14 pièces : 6 california saumon avocat, 5 sashimi saumon, 3 sushi saumon.", price: "19,90€" },
      { name: "Menu G", description: "12 pièces : 6 california saumon avocat, 6 sushis saumon.", price: "19,90€" },
      { name: "Menu H", description: "12 pièces : 2 sushi saumon, 2 thon, 1 daurade, 1 crevette, 6 california saumon avocat.", price: "20,50€" },
      { name: "Menu I", description: "10 pièces : 10 sushi saumon.", price: "19,90€" },
      { name: "Menu J", description: "10 pièces : 2 sushi saumon, 2 thon, 1 daurade, 1 crevette, 1 anguille, 1 œuf de saumon, 1 tartare saumon, 1 saumon mi-cuit cheese.", price: "22,90€" },
      { name: "Menu L", description: "16 pièces : 10 sashimi assortiment, 2 sushi saumon, 2 thon, 1 daurade, 1 crevette.", price: "23,40€" },
      { name: "Menu M", description: "26 pièces : 10 sashimi assortiment, 6 california saumon avocat, 3 maki saumon, 3 maki thon, 2 sushi saumon, 1 sushi thon, 1 sushi daurade.", price: "29,90€" },
      { name: "Plateau 60 pièces", description: "Crosti, california, spring roll, maki, sushi.", price: "65,00€" },
      { name: "Chirashi saumon avocat", price: "20,90€" },
      { name: "Chirashi assortiment", description: "12 pièces.", price: "23,00€" },
      { name: "Poké bowl", description: "Saumon, avocat, mangue, choux, edamame, wakamé, oignons frits.", price: "14,90€" },
    ],
  },
  {
    id: "poke-bowl",
    label: "Poké Bowl",
    icon: "/icons/10-poke-bowl.png",
    note: "Poké bowl composé",
    sizes: [
      { name: "Poké moyen", description: "2 protéines, 3 veggies, 2 toppings et la sauce.", price: "12,00€" },
      { name: "Grand", description: "3 protéines, 4 veggies, 2 toppings et la sauce.", price: "14,00€" },
    ],
    proteins: [
      "Saumon nature", "Saumon mariné", "Thon nature", "Thon mariné",
      "Thon mayonnaise", "Crevette", "Surimi", "Poulet pané", "Poulet rôti",
    ],
    veggies: [
      "Choux rouge", "Choux blanc", "Concombre", "Betterave", "Poivrons",
      "Maïs", "Tomate", "Oignons", "Cheese", "Radis", "Radis mariné",
      "Gingembre mariné", "Carotte marinée",
    ],
    toppings: [
      "Graines de sésame", "Oignons frits", "Cébette", "Coriandre", "Ciboulette", "Menthe",
    ],
    sauces: [
      "Soja salée", "Soja sucrée", "Sucrée citronnée", "Sucrée épaisse",
      "Teriyaki", "Mayonnaise épicée", "Sriracha",
    ],
    supplements: [
      { name: "Saumon fumé", price: "+1,00€" },
      { name: "Crevette tempura", price: "+0,50€" },
      { name: "Avocat", price: "+0,50€" },
      { name: "Mangue", price: "+0,50€" },
      { name: "Edamame", price: "+0,50€" },
      { name: "Algue wakamé", price: "+0,50€" },
      { name: "Œuf dur", price: "+0,50€" },
      { name: "Sauce en plus", price: "+1,00€" },
    ],
    extras: [
      { name: "Brochette yakitori bœuf fromage", description: "2 pièces", price: "5,50€" },
      { name: "Brochette yakitori poulet", description: "2 pièces", price: "5,50€" },
      { name: "Poulet pané sauce teriyaki", description: "Riz blanc, oignons frits, avocat.", price: "11,00€" },
    ],
  },
]

export const PHONE = "+33 4 98 13 28 44"
export const PHONE_LINK = "tel:+33498132844"
export const ADDRESS = "169 Rue Aviateurs Priol et Laporte, 83600 Fréjus"
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Be%20Sushi%20Fr%C3%A9jus%20169%20Rue%20Aviateurs%20Priol%20et%20Laporte%2083600%20Fr%C3%A9jus"
export const DELIVERY_NOTE = "Livraison à partir de 30€"
