import { cookies } from "next/headers"
import { LANG_COOKIE, type Language } from "@/lib/i18n-config"

export async function getServerLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  const cookieLanguage = cookieStore.get(LANG_COOKIE)?.value
  return cookieLanguage === "en" ? "en" : "fr"
}
