"use client"

import type React from "react"

import Link from "next/link"
import Logo from "./logo"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { language } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <footer className="bg-black py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Skip to top link for accessibility */}
        <div className="sr-only">
          <a
            href="#main-content"
            className="focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {language === "de" ? "Zum Seitenanfang springen" : "Skip to top of page"}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {language === "de"
                ? "Innovative VR/AR-Lösungen für Ihr Unternehmen. Wir entwickeln maßgeschneiderte immersive Erlebnisse."
                : "Innovative VR/AR solutions for your business. We develop customized immersive experiences."}
            </p>
          </div>

          <nav aria-labelledby="footer-sections-heading">
            <h3 id="footer-sections-heading" className="text-sm uppercase tracking-wider text-gray-300 mb-4">
              {language === "de" ? "Bereiche" : "Sections"}
            </h3>
            <ul className="space-y-2" role="list">
              <li role="listitem">
                <button
                  onClick={() => scrollToSection("services")}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("services"))}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded text-left"
                  aria-label={language === "de" ? "Zu den Leistungen springen" : "Jump to services"}
                >
                  {language === "de" ? "Leistungen" : "Services"}
                </button>
              </li>
              <li role="listitem">
                <button
                  onClick={() => scrollToSection("vision")}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("vision"))}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded text-left"
                  aria-label={language === "de" ? "Zur Vision springen" : "Jump to vision"}
                >
                  {language === "de" ? "Vision" : "Vision"}
                </button>
              </li>
              <li role="listitem">
                <button
                  onClick={() => scrollToSection("about")}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("about"))}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded text-left"
                  aria-label={language === "de" ? "Über uns springen" : "Jump to about us"}
                >
                  {language === "de" ? "Über uns" : "About"}
                </button>
              </li>
              <li role="listitem">
                <button
                  onClick={() => scrollToSection("projects")}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection("projects"))}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded text-left"
                  aria-label={language === "de" ? "Zu den Projekten springen" : "Jump to projects"}
                >
                  {language === "de" ? "Projekte" : "Projects"}
                </button>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-social-heading">
            <h3 id="footer-social-heading" className="text-sm uppercase tracking-wider text-gray-300 mb-4">
              {language === "de" ? "Soziale Medien" : "Social Media"}
            </h3>
            <ul className="space-y-2" role="list">
              <li role="listitem">
                <a
                  href="https://www.instagram.com/virtual___visions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={
                    language === "de"
                      ? "Virtual Visions auf Instagram besuchen (öffnet in neuem Tab)"
                      : "Visit Virtual Visions on Instagram (opens in new tab)"
                  }
                >
                  Instagram
                  <span className="sr-only">
                    {language === "de" ? " (öffnet in neuem Tab)" : " (opens in new tab)"}
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.youtube.com/@VirtualVisionsVR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={
                    language === "de"
                      ? "Virtual Visions auf YouTube besuchen (öffnet in neuem Tab)"
                      : "Visit Virtual Visions on YouTube (opens in new tab)"
                  }
                >
                  YouTube
                  <span className="sr-only">
                    {language === "de" ? " (öffnet in neuem Tab)" : " (opens in new tab)"}
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.linkedin.com/company/99531770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={
                    language === "de"
                      ? "Virtual Visions auf LinkedIn besuchen (öffnet in neuem Tab)"
                      : "Visit Virtual Visions on LinkedIn (opens in new tab)"
                  }
                >
                  LinkedIn
                  <span className="sr-only">
                    {language === "de" ? " (öffnet in neuem Tab)" : " (opens in new tab)"}
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          <address>
            <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-4">
              {language === "de" ? "Kontakt" : "Contact"}
            </h3>
            <div className="space-y-4 not-italic">
              <div>
                <h4 className="text-gray-400 text-sm mb-1">{language === "de" ? "E-Mail" : "Email"}</h4>
                <a
                  href="mailto:business.virtualvisions@virtual-visions.net"
                  className="text-gray-400 hover:text-white transition-colors break-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={language === "de" ? "E-Mail an Virtual Visions senden" : "Send email to Virtual Visions"}
                >
                  business.virtualvisions@virtual-visions.net
                </a>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">{language === "de" ? "Telefon" : "Phone"}</h4>
                <div className="space-y-1">
                  <a
                    href="tel:+4365026011493"
                    className="block text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={language === "de" ? "Anrufen: +43 650 2601493" : "Call: +43 650 2601493"}
                  >
                    +43 650 2601493
                  </a>
                  <a
                    href="tel:+4915142851038"
                    className="block text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={language === "de" ? "Anrufen: +49 151 42851038" : "Call: +49 151 42851038"}
                  >
                    +49 151 42851038
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Virtual Visions OG,{" "}
              {language === "de" ? "Alle Rechte vorbehalten" : "All rights reserved"}
            </p>
          </div>
          <nav aria-label={language === "de" ? "Rechtliche Links" : "Legal links"}>
            <ul className="flex space-x-6" role="list">
              <li role="listitem">
                <Link
                  href="/imprint"
                  className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={language === "de" ? "Impressum ansehen" : "View imprint"}
                >
                  {language === "de" ? "Impressum" : "Imprint"}
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/data-privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={language === "de" ? "Datenschutzerklärung ansehen" : "View privacy policy"}
                >
                  {language === "de" ? "Datenschutz" : "Privacy"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
