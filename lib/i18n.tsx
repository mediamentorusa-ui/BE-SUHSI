"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { dictionaries, type Dictionary } from "@/lib/dictionaries"
import { LANG_COOKIE, LANG_STORAGE_KEY, type Language } from "@/lib/i18n-config"

type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

function isLanguage(value: string | null | undefined): value is Language {
  return value === "fr" || value === "en"
}

function persistLanguage(language: Language) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, language)
  } catch {
    // localStorage may be unavailable in strict browser modes.
  }

  document.cookie = `${LANG_COOKIE}=${language}; path=/; max-age=31536000; samesite=lax`
}

function updateDocumentLanguage(language: Language, dictionary: Dictionary) {
  document.documentElement.lang = language
  document.title = dictionary.seo.title

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) description.content = dictionary.seo.description

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  if (ogTitle) ogTitle.content = dictionary.seo.title

  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
  if (ogDescription) ogDescription.content = dictionary.seo.description

  const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
  if (twitterTitle) twitterTitle.content = dictionary.seo.title

  const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
  if (twitterDescription) twitterDescription.content = dictionary.seo.description
}

export function I18nProvider({
  children,
  initialLanguage = "fr",
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY)
      if (isLanguage(storedLanguage) && storedLanguage !== language) {
        setLanguageState(storedLanguage)
      }
    } catch {
      // Keep the server-selected language when localStorage cannot be read.
    }
    // Run once after hydration; server cookie remains the source of truth on refresh.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    persistLanguage(nextLanguage)
  }

  const dictionary = dictionaries[language]

  useEffect(() => {
    persistLanguage(language)
    updateDocumentLanguage(language, dictionary)
  }, [language, dictionary])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: dictionary,
    }),
    [language, dictionary]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) {
    throw new Error("useI18n must be used inside I18nProvider")
  }
  return value
}

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useI18n()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-card/80 p-0.5 text-[0.68rem] font-bold tracking-[0.14em] ${className}`}
      role="group"
      aria-label={t.language.selectorLabel}
    >
      {(["fr", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`rounded-full px-2.5 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            language === option
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={language === option}
        >
          {option === "fr" ? t.language.french : t.language.english}
        </button>
      ))}
    </div>
  )
}
