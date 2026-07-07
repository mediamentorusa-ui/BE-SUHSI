import { Phone, MapPin, Truck } from "lucide-react"
import { PHONE, PHONE_LINK, ADDRESS, MAPS_LINK, DELIVERY_NOTE } from "@/lib/menu-data"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Contact & Accès</h2>
          <p className="text-sm text-muted-foreground">Retrouvez-nous à Fréjus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">Téléphone</p>
              <a
                href={PHONE_LINK}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                aria-label={`Appeler Be Sushi au ${PHONE}`}
              >
                {PHONE}
              </a>
            </div>
            <a
              href={PHONE_LINK}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Phone size={14} />
              Appeler maintenant
            </a>
          </div>

          {/* Address */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">Adresse</p>
              <address className="not-italic text-sm font-medium text-foreground leading-relaxed">
                {ADDRESS}
              </address>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <MapPin size={14} />
              Voir sur Maps
            </a>
          </div>

          {/* Service */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Truck size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">Service</p>
              <p className="text-sm font-semibold text-foreground">À emporter / livraison</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {DELIVERY_NOTE}
              </p>
            </div>
            <a
              href={PHONE_LINK}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 border border-border text-foreground text-sm font-medium px-4 py-2.5 rounded-xl hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              Appeler pour commander
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
