import Image from "next/image"
import { PHONE_LINK, PHONE, ADDRESS, MAPS_LINK } from "@/lib/menu-data"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-black/30">
              <Image
                src="/logo/be-sushi-logo.png"
                alt="Logo Be Sushi Fréjus"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-white font-semibold">Be Sushi</p>
              <p className="text-white/50 text-xs">Fréjus</p>
            </div>
          </div>

          {/* Info */}
          <div className="md:ml-auto text-center md:text-right space-y-1">
            <p className="text-white/60 text-sm">{ADDRESS}</p>
            <a href={PHONE_LINK} className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
              {PHONE}
            </a>
          </div>
        </div>

        {/* SEO text */}
        <p className="text-white/40 text-xs leading-relaxed text-center border-t border-white/10 pt-6">
          Be Sushi Fréjus propose sushi, maki, california rolls, poké bowls, menus et plateaux à emporter ou en
          livraison à Fréjus.{" "}
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60 transition-colors">
            169 Rue Aviateurs Priol et Laporte, 83600 Fréjus.
          </a>
        </p>
        <p className="text-white/25 text-xs text-center mt-3">
          © {new Date().getFullYear()} Be Sushi Fréjus
        </p>
      </div>
    </footer>
  )
}
