import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { I18nProvider } from '@/lib/i18n'
import { dictionaries } from '@/lib/dictionaries'
import { getServerLanguage } from '@/lib/i18n-server'
import './globals.css'

const siteUrl = 'https://besushi.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const language = await getServerLanguage()
  const dictionary = dictionaries[language]

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical: siteUrl,
      languages: {
        fr: siteUrl,
        en: siteUrl,
      },
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: siteUrl,
      siteName: 'Be Sushi Fréjus',
      locale: language === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.seo.title,
      description: dictionary.seo.description,
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const language = await getServerLanguage()
  const dictionary = dictionaries[language]
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
    url: siteUrl,
    potentialAction: {
      '@type': 'OrderAction',
      target: 'tel:+33498132844',
      description: dictionary.seo.orderActionDescription,
    },
  }

  return (
    <html lang={language} className="bg-background">
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
        <I18nProvider initialLanguage={language}>{children}</I18nProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
