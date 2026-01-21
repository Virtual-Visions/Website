"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      aria-label={`Switch to ${language === "de" ? "English" : "German"}`}
    >
      <Globe className="h-4 w-4" />
      <span>{t("nav.language")}</span>
    </Button>
  )
}
