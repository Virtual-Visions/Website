"use client"

import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

/**
 * Generiert eine URL basierend auf der aktuellen Sprache
 * @param path Der Pfad, zu dem die URL generiert werden soll
 * @returns Die lokalisierte URL
 */
export function useLocalizedUrl() {
  const { language } = useLanguage()
  const pathname = usePathname()

  return (path: string) => {
    // Wenn es sich um einen Anker-Link handelt, geben wir ihn direkt zurück
    if (path.startsWith("#")) {
      return path
    }

    // Wenn es sich um einen externen Link handelt, geben wir ihn direkt zurück
    if (path.startsWith("http")) {
      return path
    }

    // Wenn wir auf Deutsch sind, geben wir den Pfad direkt zurück
    if (language === "de") {
      return path
    }

    // Wenn wir auf Englisch sind und der Pfad nicht mit /en beginnt, fügen wir es hinzu
    if (language === "en" && !path.startsWith("/en")) {
      // Wenn es sich um einen Root-Pfad handelt
      if (path === "/") {
        return "/en"
      }

      // Ansonsten fügen wir /en hinzu
      return `/en${path}`
    }

    // Fallback: Gib den Pfad unverändert zurück
    return path
  }
}

/**
 * Generiert eine URL für die angegebene Sprache
 * @param path Der aktuelle Pfad
 * @param targetLang Die Zielsprache
 * @returns Die URL für die angegebene Sprache
 */
export function getLanguageUrl(path: string, targetLang: string): string {
  // Entferne führende und nachfolgende Slashes
  const cleanPath = path.replace(/^\/|\/$/g, "")

  // Wenn der Pfad mit 'en/' beginnt, entferne es für die deutsche Version
  if (cleanPath.startsWith("en/") && targetLang === "de") {
    return `/${cleanPath.substring(3)}`
  }

  // Wenn der Pfad nicht mit 'en/' beginnt und die Zielsprache Englisch ist, füge 'en/' hinzu
  if (!cleanPath.startsWith("en/") && targetLang === "en") {
    return `/en/${cleanPath}`
  }

  // Wenn der Pfad leer ist (Startseite)
  if (cleanPath === "" || cleanPath === "en") {
    return targetLang === "de" ? "/" : "/en"
  }

  // Ansonsten gib den Pfad unverändert zurück
  return `/${cleanPath}`
}

/**
 * Prüft, ob eine Seite in der angegebenen Sprache verfügbar ist
 * @param path Der aktuelle Pfad
 * @param lang Die zu prüfende Sprache
 * @returns true, wenn die Seite in der angegebenen Sprache verfügbar ist
 */
export function isPageAvailableInLanguage(path: string, lang: string): boolean {
  // Hier könnte eine Logik implementiert werden, um zu prüfen, ob die Seite in der angegebenen Sprache verfügbar ist
  // Für dieses Beispiel nehmen wir an, dass alle Seiten in beiden Sprachen verfügbar sind
  return true
}
