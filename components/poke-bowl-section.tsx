import Image from "next/image"
import { Phone } from "lucide-react"
import { menuCategories, PHONE_LINK } from "@/lib/menu-data"

const pokeCat = menuCategories.find((c) => c.id === "poke-bowl")!

type TagListProps = {
  title: string
  items: string[]
  variant?: "default" | "accent"
}

function TagList({ title, items, variant = "default" }: TagListProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className={`text-xs px-2.5 py-1 rounded-lg border ${
              variant === "accent"
                ? "bg-primary/10 border-primary/20 text-primary"
                : "bg-muted border-border text-foreground"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function PokeBowlSection() {
  if (!pokeCat) return null

  return (
    <section id="poke-bowl" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: image + heading */}
          <div className="lg:w-64 shrink-0 text-center lg:text-left">
            <div className="w-48 h-48 relative mx-auto lg:mx-0 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-poke-bowl-xJJKSXFeXKBgsH5m9MAEBuDhzBWAhc.png"
                alt="Poké bowl saumon avocat"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Compose ton Poké</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Choisissez vos ingrédients, notez votre composition, puis appelez-nous pour commander.
            </p>

            {/* Sizes */}
            <div className="flex flex-col gap-2 mb-4">
              {pokeCat.sizes?.map((size) => (
                <div
                  key={size.name}
                  className="bg-card border border-border rounded-xl p-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{size.name}</p>
                    <span className="text-sm font-bold text-primary">{size.price}</span>
                  </div>
                  {size.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">{size.description}</p>
                  )}
                </div>
              ))}
            </div>

            <a
              href={PHONE_LINK}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              <Phone size={15} />
              Appeler pour commander
            </a>
          </div>

          {/* Right: composition grid */}
          <div className="flex-1 bg-card border border-border rounded-2xl p-5 space-y-5">
            <TagList title="Protéines" items={pokeCat.proteins ?? []} variant="accent" />
            <TagList title="Veggies" items={pokeCat.veggies ?? []} />
            <TagList title="Toppings" items={pokeCat.toppings ?? []} />
            <TagList title="Sauces" items={pokeCat.sauces ?? []} />

            {/* Supplements */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Suppléments
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {pokeCat.supplements?.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between bg-muted border border-border rounded-lg px-3 py-1.5"
                  >
                    <span className="text-xs text-foreground">{s.name}</span>
                    <span className="text-xs font-medium text-muted-foreground">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Extras & Yakitori
              </p>
              <div className="space-y-2">
                {pokeCat.extras?.map((e) => (
                  <div
                    key={e.name}
                    className="flex items-start justify-between gap-4 bg-muted border border-border rounded-xl px-3 py-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{e.name}</p>
                      {e.description && (
                        <p className="text-xs text-muted-foreground">{e.description}</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-primary shrink-0">{e.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
