"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function NotFound() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-primary mb-3">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">{t.notFound.title}</h1>
        <p className="text-muted-foreground mb-6">{t.notFound.description}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {t.notFound.home}
        </Link>
      </div>
    </main>
  )
}
