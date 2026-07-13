"use client"

import { useState } from "react"
import Image from "next/image"
import { PHONE_LINK } from "@/lib/menu-data"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#carte", label: "Carte" },
  { href: "#poke-bowl", label: "Poké Bowl" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-foreground flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/be-sushi-logo.png-gllyJi7z5nI099ogEECqz2ZiCpSR3a.jpeg"
              alt="Be Sushi logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-semibold text-foreground text-sm leading-tight hidden sm:block">
            Be Sushi<br />
            <span className="font-normal text-muted-foreground text-xs">Fréjus</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
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
          <a
            href={PHONE_LINK}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
            aria-label="Appeler Be Sushi"
          >
            <Phone size={15} />
            Appeler
          </a>
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
          aria-label="Navigation mobile"
        >
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
            Appeler pour commander
          </a>
        </nav>
      )}
    </header>
  )
}
