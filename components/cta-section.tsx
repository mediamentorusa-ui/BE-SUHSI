"use client"

import { Phone } from "lucide-react"
import { PHONE_LINK, PHONE } from "@/lib/menu-data"
import { useI18n } from "@/lib/i18n"

export function CtaSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-[#151815]" aria-labelledby="cta-heading">
      <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance"
        >
          {t.cta.title}
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8">
          {t.cta.description}
        </p>
        <a
          href={PHONE_LINK}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
          aria-label={`${t.cta.callAria} ${PHONE}`}
        >
          <Phone size={22} />
          {t.common.callBeSushi}
        </a>
        <p className="mt-4 text-white/50 text-sm">
          {t.cta.phoneOnly}
        </p>
      </div>
    </section>
  )
}
