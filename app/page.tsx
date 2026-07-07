import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { PokeBowlSection } from "@/components/poke-bowl-section"
import { CtaSection } from "@/components/cta-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <PokeBowlSection />
        <CtaSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      {/* Extra bottom padding so content isn't hidden behind the mobile sticky bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <MobileBottomBar />
    </>
  )
}
