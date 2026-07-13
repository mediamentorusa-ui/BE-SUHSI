"use client"

import Image from "next/image"
import { Phone, MapPin, ChevronDown } from "lucide-react"
import { PHONE_LINK, MAPS_LINK } from "@/lib/menu-data"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()
  const menuCategories = t.menu.categories

  return (
    <>
      <section id="accueil" className="relative isolate overflow-hidden bg-[#151815] text-white">
        <Image
          src="/gallery/12-hero-sushi-closeup.jpg"
          alt={t.hero.imageAlt}
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[58%_center] md:object-center"
          priority
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/70 to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/75 md:to-black/35"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 min-h-[34rem] md:min-h-[35rem] flex items-center">
          <div className="w-full max-w-xl text-center md:text-left">
            <p className="text-[#f28a74] text-sm font-semibold mb-3">
              {t.hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance mb-4">
              {t.hero.title}
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition text-base"
              >
                <Phone size={18} />
                {t.common.callToOrder}
              </a>
              <a
                href="#carte"
                className="inline-flex items-center justify-center gap-2 bg-black/35 border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-black/50 active:scale-[0.98] transition text-base"
              >
                {t.common.seeMenu}
                <ChevronDown size={16} />
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black/35 border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-black/50 active:scale-[0.98] transition text-base"
              >
                <MapPin size={16} />
                {t.common.directions}
              </a>
            </div>

            <p className="text-white/75 text-sm mt-5">
              {t.hero.serviceLine} · {t.business.deliveryNote}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="category-heading" className="max-w-5xl mx-auto px-4 py-10 md:py-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 id="category-heading" className="text-2xl font-bold text-foreground">
              {t.hero.categoriesTitle}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {t.hero.categoriesDescription}
            </p>
          </div>
          <a href="#carte" className="hidden sm:inline-flex text-sm font-semibold text-primary hover:underline">
            {t.hero.allMenu}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              aria-label={`${t.hero.categoryAria} ${category.label}`}
              className="group bg-card border border-border rounded-2xl px-3 py-3 min-h-28 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:-translate-y-0.5 active:scale-[0.98] active:bg-muted transition-all"
            >
              <span className="w-14 h-14 relative mb-2">
                <Image
                  src={category.icon}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain group-hover:scale-105 transition-transform"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-semibold text-foreground leading-tight">{category.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
