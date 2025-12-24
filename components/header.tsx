"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/" || pathname === "/en"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "de" ? "en" : "de"
    setLanguage(newLanguage)

    if (newLanguage === "en") {
      // If switching to English, stay on same page but update language context
    } else {
      if (pathname.startsWith("/en")) {
        const newPath = pathname.replace("/en", "") || "/"
        router.push(newPath)
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/90 backdrop-blur-xl py-3 shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent py-5",
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Enhanced Desktop Navigation */}
          {isHomePage ? (
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label={language === "de" ? "Hauptnavigation" : "Main navigation"}
            >
              {[
                { id: "welcome", label: language === "de" ? "Übersicht" : "Overview" },
                { id: "services", label: language === "de" ? "Leistungen" : "Services" },
                { id: "products", label: language === "de" ? "Produkte" : "Products" },
                { id: "vision", label: language === "de" ? "Vision" : "Vision" },
                { id: "about", label: language === "de" ? "Über uns" : "About" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.id))}
                  className="group relative text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg px-3 py-2"
                  aria-label={`${language === "de" ? "Zu" : "Jump to"} ${item.label} ${language === "de" ? "springen" : ""}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}

              <div
                className="h-5 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"
                aria-hidden="true"
              ></div>

              <button
                onClick={toggleLanguage}
                onKeyDown={(e) => handleKeyDown(e, toggleLanguage)}
                className="group flex items-center text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg px-3 py-2"
                aria-label={`${language === "de" ? "Sprache wechseln zu Englisch" : "Switch language to German"}`}
              >
                <Globe
                  className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span className="relative">
                  {language === "de" ? "EN" : "DE"}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            </nav>
          ) : (
            <nav
              className="hidden md:flex items-center"
              role="navigation"
              aria-label={language === "de" ? "Sprachnavigation" : "Language navigation"}
            >
              <button
                onClick={toggleLanguage}
                onKeyDown={(e) => handleKeyDown(e, toggleLanguage)}
                className="group flex items-center text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg px-3 py-2"
                aria-label={`${language === "de" ? "Sprache wechseln zu Englisch" : "Switch language to German"}`}
              >
                <Globe
                  className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span className="relative">
                  {language === "de" ? "EN" : "DE"}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            </nav>
          )}

          {/* Enhanced Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              onKeyDown={(e) => handleKeyDown(e, toggleLanguage)}
              className="group flex items-center text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg px-2 py-1"
              aria-label={`${language === "de" ? "Sprache wechseln zu Englisch" : "Switch language to German"}`}
            >
              <Globe
                className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-300"
                aria-hidden="true"
              />
              {language === "de" ? "EN" : "DE"}
            </button>

            {isHomePage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onKeyDown={(e) => handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))}
                className="group p-2 text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg"
                aria-label={
                  isMobileMenuOpen
                    ? language === "de"
                      ? "Menü schließen"
                      : "Close menu"
                    : language === "de"
                      ? "Menü öffnen"
                      : "Open menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                      isMobileMenuOpen ? "rotate-45 top-3" : "top-1",
                    )}
                  ></span>
                  <span
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3",
                      isMobileMenuOpen ? "opacity-0" : "opacity-100",
                    )}
                  ></span>
                  <span
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                      isMobileMenuOpen ? "-rotate-45 top-3" : "top-5",
                    )}
                  ></span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isHomePage && (
          <nav
            id="mobile-menu"
            className={cn(
              "md:hidden transition-all duration-500 overflow-hidden",
              isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0",
            )}
            role="navigation"
            aria-label={language === "de" ? "Mobile Navigation" : "Mobile navigation"}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="bg-black/95 backdrop-blur-xl rounded-2xl p-6 space-y-4 border border-white/10 shadow-2xl">
              {[
                { id: "welcome", label: language === "de" ? "Übersicht" : "Overview" },
                { id: "services", label: language === "de" ? "Leistungen" : "Services" },
                { id: "products", label: language === "de" ? "Produkte" : "Products" },
                { id: "vision", label: language === "de" ? "Vision" : "Vision" },
                { id: "about", label: language === "de" ? "Über uns" : "About" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.id))}
                  className="group block w-full text-left text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 focus:outline-none rounded-lg p-3 hover:bg-white/5"
                  aria-label={`${language === "de" ? "Zu" : "Jump to"} ${item.label} ${language === "de" ? "springen" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
