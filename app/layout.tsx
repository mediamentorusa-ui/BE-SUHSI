import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Be Sushi Fréjus — Sushi, Poké Bowl & Plateaux à emporter',
  description:
    'Be Sushi Fréjus propose sushi, maki, california rolls, poké bowls, menus et plateaux à emporter ou en livraison. Consultez la carte et appelez pour commander.',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Be Sushi Fréjus',
  telephone: '+33 4 98 13 28 44',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '169 Rue Aviateurs Priol et Laporte',
    postalCode: '83600',
    addressLocality: 'Fréjus',
    addressCountry: 'FR',
  },
  servesCuisine: ['Japanese', 'Sushi', 'Poké'],
  areaServed: 'Fréjus',
  url: 'https://besushi.vercel.app',
  potentialAction: {
    '@type': 'OrderAction',
    target: 'tel:+33498132844',
    description: 'Commande par téléphone uniquement',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
