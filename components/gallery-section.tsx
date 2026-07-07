import Image from "next/image"

const galleryImages = [
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
]

export function GallerySection() {
  return (
    <section id="galerie" className="py-12 bg-muted/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Nos plats</h2>
          <p className="text-sm text-muted-foreground">Quelques exemples de la carte Be Sushi.</p>
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
