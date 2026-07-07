import { Phone } from "lucide-react"
import { PHONE_LINK, PHONE } from "@/lib/menu-data"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#151815]" aria-labelledby="cta-heading">
      <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance"
        >
          Prêt à commander ?
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8">
          Consultez la carte, notez vos envies, puis appelez le restaurant pour confirmer votre commande.
        </p>
        <a
          href={PHONE_LINK}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
          aria-label={`Appeler Be Sushi au ${PHONE}`}
        >
          <Phone size={22} />
          Appeler Be Sushi
        </a>
        <p className="mt-4 text-white/50 text-sm">
          Commande confirmée uniquement par téléphone.
        </p>
      </div>
    </section>
  )
}
