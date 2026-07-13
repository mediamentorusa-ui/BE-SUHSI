import Image from "next/image"
import { Phone, MapPin, ChevronDown } from "lucide-react"
import { PHONE_LINK, MAPS_LINK, DELIVERY_NOTE } from "@/lib/menu-data"

const highlights = [
  { label: "À emporter" },
  { label: DELIVERY_NOTE },
  { label: "Fréjus, Var" },
]

const featuredCards = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-menus-plateaux-qhDFmgCth3qZ5aLOFpSYzdduXTZrUt.png",
    name: "Formule Midi 1",
    description: "6 california saumon avocat, 4 sushi saumon, salade de choux & boisson.",
    price: "14,90€",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-menus-plateaux-qhDFmgCth3qZ5aLOFpSYzdduXTZrUt.png",
    name: "Menu A",
    description: "18 pièces : california saumon avocat, thon cuit mayonnaise avocat, concombre cheese.",
    price: "19,90€",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-menus-plateaux-qhDFmgCth3qZ5aLOFpSYzdduXTZrUt.png",
    name: "Menu D",
    description: "18 pièces : 6 spring saumon avocat, 6 california saumon cheese, 6 maki saumon.",
    price: "19,90€",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-poke-bowl-xJJKSXFeXKBgsH5m9MAEBuDhzBWAhc.png",
    name: "Poké Bowl",
    description: "Composez votre bol selon vos envies. Protéines, veggies, toppings & sauce.",
    price: "dès 12,00€",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-menus-plateaux-qhDFmgCth3qZ5aLOFpSYzdduXTZrUt.png",
    name: "Plateau 60 pièces",
    description: "Crosti, california, spring roll, maki, sushi. Idéal pour partager.",
    price: "65,00€",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-special-be-sushi-2h29vKMssByRPZ5JbvMhkJQgIsksSq.png",
    name: "Spécial Be Sushi B1",
    description: "Crevette panée, avocat, cheese, saumon mi-cuit, sauce miso. 8 pièces.",
    price: "15,00€",
  },
]

export function Hero() {
  return (
    <section id="accueil" className="relative">
      {/* Hero banner with rice paper texture */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-rice-paper-NYeDEGt7KoxXGEXwi1iDKd9ySg0BZO.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" aria-hidden="true" />
              Fréjus · À emporter · Livraison
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance mb-4">
              Sushi, poké bowls<br />& plateaux à Fréjus
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Consultez la carte, choisissez vos envies, puis appelez pour commander à emporter ou en livraison.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                <Phone size={18} />
                Appeler pour commander
              </a>
              <a
                href="#carte"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                Voir la carte
                <ChevronDown size={16} />
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                <MapPin size={16} />
                Itinéraire
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="bg-white/15 border border-white/25 text-white/90 text-xs px-3 py-1 rounded-full"
                >
                  {h.label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-menus-plateaux-qhDFmgCth3qZ5aLOFpSYzdduXTZrUt.png"
              alt="Plateau de sushi Be Sushi"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured cards section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-foreground mb-6 text-center">À découvrir</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCards.map((card) => (
            <article
              key={card.name}
              className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 shrink-0 relative">
                  <Image
                    src={card.icon}
                    alt={card.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground leading-tight">{card.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{card.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-sm">{card.price}</span>
                <a
                  href={PHONE_LINK}
                  className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-lg transition-colors"
                >
                  Appeler
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
