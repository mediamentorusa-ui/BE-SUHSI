"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, Phone } from "lucide-react"
import { PHONE_LINK, type MenuItem, type MenuSection as MenuSectionType } from "@/lib/menu-data"
import { useI18n } from "@/lib/i18n"

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground leading-tight">{item.name}</p>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
        )}
      </div>
      <span className="shrink-0 text-sm font-semibold text-primary">{item.price}</span>
    </div>
  )
}

function SectionBlock({ section }: { section: MenuSectionType }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {section.title}
        </h4>
        {section.note && (
          <span className="text-xs text-muted-foreground/70">— {section.note}</span>
        )}
      </div>
      <div>
        {section.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export function MenuSection() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { t } = useI18n()
  const menuCategories = t.menu.categories

  // Filter categories based on search
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return menuCategories

    return menuCategories
      .map((cat) => {
        // Filter items
        const filteredItems = (cat.items ?? []).filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            (item.description ?? "").toLowerCase().includes(q)
        )

        // Filter sections
        const filteredSections = (cat.sections ?? [])
          .map((section) => ({
            ...section,
            items: section.items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) ||
                (item.description ?? "").toLowerCase().includes(q)
            ),
          }))
          .filter((s) => s.items.length > 0)

        // Include category if name matches or has matching items
        const catMatches = cat.label.toLowerCase().includes(q)

        if (catMatches) return cat
        if (filteredItems.length > 0 || filteredSections.length > 0) {
          return { ...cat, items: filteredItems, sections: filteredSections }
        }
        return null
      })
      .filter(Boolean) as typeof menuCategories
  }, [search, menuCategories])

  // Non-poke categories for the main menu
  const menuCats = filtered.filter((c) => c.id !== "poke-bowl")

  return (
    <section id="carte" className="py-12 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.menu.title}</h2>
          <p className="text-muted-foreground text-sm">
            {t.menu.description}
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.menu.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground placeholder:text-muted-foreground"
            aria-label={t.menu.searchAria}
          />
        </div>

        {/* Category tabs */}
        {!search && (
          <div
            className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide"
            role="tablist"
            aria-label={t.menu.categoriesAria}
          >
            <button
              role="tab"
              aria-selected={activeCategory === null}
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t.menu.all}
            </button>
            {menuCategories.filter((c) => c.id !== "poke-bowl").map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span className="w-5 h-5 relative shrink-0">
                  <Image
                    src={cat.icon}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Category cards */}
        <div className="space-y-4">
          {(search ? menuCats : activeCategory ? menuCats.filter((c) => c.id === activeCategory) : menuCats).map(
            (cat) => (
              <article
                key={cat.id}
                id={cat.id}
                className="bg-card border border-border rounded-2xl overflow-hidden scroll-mt-24"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 p-4 border-b border-border bg-muted/30">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image
                      src={cat.icon}
                      alt={cat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cat.label}</h3>
                    {cat.note && (
                      <p className="text-xs text-muted-foreground mt-0.5">{cat.note}</p>
                    )}
                  </div>
                  <a
                    href={PHONE_LINK}
                    className="ml-auto shrink-0 inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    aria-label={`${t.menu.callCategory} ${cat.label}`}
                  >
                    <Phone size={12} />
                    {t.common.call}
                  </a>
                </div>

                {/* Items */}
                <div className="p-4">
                  {cat.items && cat.items.length > 0 && (
                    <div>
                      {cat.items.map((item) => (
                        <MenuItemRow key={item.name} item={item} />
                      ))}
                    </div>
                  )}
                  {cat.sections && cat.sections.length > 0 && (
                    <div>
                      {cat.sections.map((section) => (
                        <SectionBlock key={section.title} section={section} />
                      ))}
                    </div>
                  )}
                </div>
              </article>
            )
          )}

          {search && menuCats.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              {t.menu.noResults} &ldquo;{search}&rdquo;
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
