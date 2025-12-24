"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Kontakt() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {language === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
      </a>

      <div className="pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-20 bg-black relative" aria-labelledby="contact-hero-heading">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/contact-background.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <nav aria-label={language === "de" ? "Breadcrumb Navigation" : "Breadcrumb navigation"}>
              <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4 md:mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label={language === "de" ? "Zurück zur Startseite" : "Back to homepage"}
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                {language === "de" ? "Zurück zur Startseite" : "Back to homepage"}
              </Link>
            </nav>
            <div className="max-w-4xl">
              <h1
                id="contact-hero-heading"
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wider mb-3 md:mb-4 text-white"
              >
                {language === "de" ? "Kontakt" : "Contact"}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl leading-relaxed">
                {language === "de"
                  ? "Haben Sie Fragen zu unseren VR-Lösungen? Wir sind hier, um Ihnen zu helfen."
                  : "Have questions about our VR solutions? We're here to help you."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <main id="main-content" tabIndex={-1}>
          <section
            className="py-8 md:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900"
            aria-labelledby="contact-main-heading"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {/* Email CTA */}
                <div className="text-center mb-12 md:mb-16">
                  <h2
                    id="contact-main-heading"
                    className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider mb-4 md:mb-6 text-white"
                  >
                    {language === "de" ? "Schreiben Sie uns" : "Write to us"}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                    {language === "de"
                      ? "Haben Sie Fragen zu unseren VR-Lösungen oder möchten Sie ein Projekt besprechen? Schreiben Sie uns eine E-Mail und wir melden uns schnellstmöglich bei Ihnen zurück."
                      : "Have questions about our VR solutions or want to discuss a project? Send us an email and we'll get back to you as soon as possible."}
                  </p>
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <a
                      href="mailto:business.virtualvisions@virtual-visions.net?subject=Anfrage%20über%20Website&body=Hallo%20Virtual%20Visions%20Team,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20VR-Lösungen%20und%20hätte%20gerne%20weitere%20Informationen.%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                      aria-label={
                        language === "de" ? "E-Mail an Virtual Visions senden" : "Send email to Virtual Visions"
                      }
                    >
                      <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                      {language === "de" ? "E-Mail senden" : "Send Email"}
                    </a>
                  </Button>
                </div>

                {/* Contact Cards */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                  role="list"
                  aria-label={language === "de" ? "Kontaktinformationen" : "Contact information"}
                >
                  {/* Address Card */}
                  <article
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    role="listitem"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-white/10 p-3 rounded-lg mr-4" aria-hidden="true">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{language === "de" ? "Adresse" : "Address"}</h3>
                    </div>
                    <address className="text-gray-300 text-sm leading-relaxed not-italic">
                      <p>Virtual Visions GmbH</p>
                      <p>Steinfeldstraße 9</p>
                      <p>8504 Preding, Österreich</p>
                    </address>
                  </article>

                  {/* Phone Card */}
                  <article
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    role="listitem"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-white/10 p-3 rounded-lg mr-4" aria-hidden="true">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{language === "de" ? "Telefon" : "Phone"}</h3>
                    </div>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>
                        <a
                          href="tel:+436502601493"
                          className="hover:text-white transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                          aria-label={language === "de" ? "Anrufen: +43 650 2601493" : "Call: +43 650 2601493"}
                        >
                          +43 650 2601493
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:+4915142851038"
                          className="hover:text-white transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                          aria-label={language === "de" ? "Anrufen: +49 151 42851038" : "Call: +49 151 42851038"}
                        >
                          +49 151 42851038
                        </a>
                      </p>
                    </div>
                  </article>

                  {/* Email Card */}
                  <article
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 md:col-span-2 lg:col-span-1"
                    role="listitem"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-white/10 p-3 rounded-lg mr-4" aria-hidden="true">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{language === "de" ? "E-Mail" : "Email"}</h3>
                    </div>
                    <div className="text-gray-300 text-sm">
                      <a
                        href="mailto:business.virtualvisions@virtual-visions.net"
                        className="hover:text-white transition-colors hover:underline break-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                        aria-label={
                          language === "de"
                            ? "E-Mail senden an business.virtualvisions@virtual-visions.net"
                            : "Send email to business.virtualvisions@virtual-visions.net"
                        }
                      >
                        business.virtualvisions@virtual-visions.net
                      </a>
                    </div>
                  </article>
                </div>

                {/* Location Link */}
                <div className="text-center">
                  <Link
                    href="https://maps.google.com/?q=Steinfeldstraße+9,+8504+Preding,+Austria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label={
                      language === "de"
                        ? "Standort in Google Maps öffnen (öffnet in neuem Tab)"
                        : "Open location in Google Maps (opens in new tab)"
                    }
                  >
                    <MapPin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    {language === "de" ? "In Google Maps öffnen" : "Open in Google Maps"}
                    <span className="sr-only">
                      {language === "de" ? " (öffnet in neuem Tab)" : " (opens in new tab)"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
