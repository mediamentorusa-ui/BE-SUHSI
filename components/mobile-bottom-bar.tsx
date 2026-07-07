import { Phone, BookOpen, MapPin } from "lucide-react"
import { PHONE_LINK, MAPS_LINK } from "@/lib/menu-data"

export function MobileBottomBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border"
      aria-label="Actions rapides"
    >
      <div className="flex items-stretch h-16">
        <a
          href={PHONE_LINK}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary text-primary-foreground font-semibold text-xs"
          aria-label="Appeler le restaurant"
        >
          <Phone size={20} />
          Appeler
        </a>
        <a
          href="#carte"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-foreground hover:text-primary transition-colors text-xs border-l border-border"
          aria-label="Voir la carte"
        >
          <BookOpen size={20} />
          Carte
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-foreground hover:text-primary transition-colors text-xs border-l border-border"
          aria-label="Voir l'itinéraire sur Maps"
        >
          <MapPin size={20} />
          Itinéraire
        </a>
      </div>
    </nav>
  )
}
