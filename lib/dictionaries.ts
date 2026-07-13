import { en } from "@/locales/en"
import { fr } from "@/locales/fr"
import type { Language } from "@/lib/i18n-config"

export const dictionaries = {
  fr,
  en,
} as const

export type Dictionary = (typeof dictionaries)[Language]
