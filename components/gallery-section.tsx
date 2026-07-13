"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function GallerySection() {
  const { t } = useI18n()
  const galleryImages = t.gallery.images

  return (
    <section id="galerie" className="py-12 bg-muted/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.gallery.title}</h2>
          <p className="text-sm text-muted-foreground">{t.gallery.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card border border-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
