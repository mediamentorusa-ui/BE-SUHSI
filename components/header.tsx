"use client"

import { useState } from "react"
import Image from "next/image"
import { LanguageSelector, useI18n } from "@/lib/i18n"
import { PHONE_LINK } from "@/lib/menu-data"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const navLinks = [
    { href: "#accueil", label: t.navigation.home },
    { href: "#carte", label: t.navigation.menu },
    { href: "#poke-bowl", label: t.navigation.pokeBowl },
    { href: "#galerie", label: t.navigation.gallery },
    { href: "#contact", label: t.navigation.contact },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="relative max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-foreground flex items-center justify-center">
            <Image
              src="/logo/be-sushi-logo.png"
              alt={t.header.logoAlt}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="hidden sm:block text-foreground leading-tight">
            <span className="text-base md:text-lg font-extrabold tracking-[0.14em] uppercase">BE SUSHI</span>
            <br />
            <span className="font-normal text-muted-foreground text-xs">Fréjus</span>
          </span>
        </a>

        <a
          href="#accueil"
          className="sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.05rem] font-extrabold tracking-[0.18em] text-foreground"
          aria-label={t.header.homeAria}
        >
          BE SUSHI
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label={t.navigation.primary}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <LanguageSelector className="hidden sm:inline-flex" />
          <a
            href={PHONE_LINK}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
            aria-label={t.header.callAria}
          >
            <Phone size={15} />
            {t.common.call}
          </a>
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.navigation.closeMenu : t.navigation.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 flex flex-col gap-1"
          aria-label={t.navigation.mobile}
        >
          <LanguageSelector className="mb-2 self-start" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_LINK}
            className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-3 rounded-xl"
          >
            <Phone size={15} />
            {t.common.callToOrder}
          </a>
        </nav>
      )}
    </header>
  )
}
