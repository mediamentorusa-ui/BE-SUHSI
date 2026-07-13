"use client"

import { Phone, MapPin, Truck } from "lucide-react"
import { PHONE, PHONE_LINK, ADDRESS, MAPS_LINK } from "@/lib/menu-data"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-12 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.contact.title}</h2>
          <p className="text-sm text-muted-foreground">{t.contact.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">{t.contact.phone}</p>
              <a
                href={PHONE_LINK}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                aria-label={`${t.contact.callAria} ${PHONE}`}
              >
                {PHONE}
              </a>
            </div>
            <a
              href={PHONE_LINK}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Phone size={14} />
              {t.common.callNow}
            </a>
          </div>

          {/* Address */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">{t.contact.address}</p>
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
              {t.common.viewOnMaps}
            </a>
          </div>

          {/* Service */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Truck size={20} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">{t.contact.service}</p>
              <p className="text-sm font-semibold text-foreground">{t.business.takeawayDelivery}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.business.deliveryNote}
              </p>
            </div>
            <a
              href={PHONE_LINK}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 border border-border text-foreground text-sm font-medium px-4 py-2.5 rounded-xl hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              {t.common.callToOrder}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
