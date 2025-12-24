"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Hand, Zap, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function GrabbingPage() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="min-h-screen">
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {language === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
        </a>

        <div className="pt-24">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-black relative" aria-labelledby="grabbing-hero-heading">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/projects/grabbing/grabbing-hero.png"
                alt=""
                fill
                className="object-cover"
                priority
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"
              aria-hidden="true"
            ></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <nav aria-label={language === "de" ? "Breadcrumb Navigation" : "Breadcrumb navigation"}>
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={language === "de" ? "Zurück zur Startseite" : "Back to homepage"}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    {language === "de" ? "Zurück zur Startseite" : "Back to homepage"}
                  </Link>
                </nav>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 id="grabbing-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                  GRABBING VR
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  {language === "de"
                    ? "Ein innovatives freies Greif-System in VR, das natürliche Handbewegungen ohne Controller ermöglicht."
                    : "An innovative free-hand grabbing system in VR that enables natural hand movements without controllers."}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Project Details */}
          <main id="main-content" tabIndex={-1}>
            <section className="py-20 md:py-32 bg-black" aria-labelledby="grabbing-description-heading">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 id="grabbing-description-heading" className="text-3xl font-light tracking-wider mb-8">
                      {language === "de" ? "Projektbeschreibung" : "Project Description"}
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {language === "de"
                        ? "Dieses Projekt entstand im Rahmen einer Abschlussbachelorarbeit und konzentriert sich auf die Implementierung eines innovativen freien Greif-Systems in VR. Dies bedeutet, dass Benutzer in der VR-Umgebung ihre Hände frei bewegen können, ohne auf Controller oder andere Eingabegeräte angewiesen zu sein."
                        : "This project was developed as part of a bachelor's thesis and focuses on implementing an innovative free-hand grabbing system in VR. This means users can move their hands freely in the VR environment without relying on controllers or other input devices."}
                    </p>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {language === "de"
                        ? "Diese fortschrittliche Technologie eröffnet aufregende Möglichkeiten für eine noch immersivere VR-Erfahrung und erlaubt natürliche Gesten und Interaktionen in virtuellen Welten. Das System erkennt präzise Handbewegungen und ermöglicht es Nutzern, Objekte so zu greifen und zu manipulieren, wie sie es aus der realen Welt gewohnt sind."
                        : "This advanced technology opens up exciting possibilities for an even more immersive VR experience and allows natural gestures and interactions in virtual worlds. The system recognizes precise hand movements and enables users to grab and manipulate objects as they are accustomed to in the real world."}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="relative rounded-lg overflow-hidden aspect-video">
                      <Image
                        src="/grabbing-hand-text.png"
                        alt={
                          language === "de"
                            ? "Grabbing VR - Hand greift nach virtuellem Objekt"
                            : "Grabbing VR - Hand reaching for virtual object"
                        }
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section
              className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
              aria-labelledby="grabbing-features-heading"
            >
              <div className="container mx-auto px-4">
                <h2 id="grabbing-features-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                  {language === "de" ? "Innovative Technologie" : "Innovative Technology"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Hand className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-white">
                      {language === "de" ? "Natürliche Handbewegungen" : "Natural Hand Movements"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Vollständig freie Handbewegungen ohne Controller oder andere Eingabegeräte für authentische VR-Interaktionen."
                        : "Completely free hand movements without controllers or other input devices for authentic VR interactions."}
                    </p>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-white">
                      {language === "de" ? "Immersive VR-Erfahrung" : "Immersive VR Experience"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Aufregende Möglichkeiten für noch immersivere VR-Erfahrungen durch natürliche Gesten und Interaktionen."
                        : "Exciting possibilities for even more immersive VR experiences through natural gestures and interactions."}
                    </p>
                  </motion.article>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 md:py-32 bg-black" aria-labelledby="grabbing-gallery-heading">
              <div className="container mx-auto px-4">
                <h2 id="grabbing-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                  {language === "de" ? "Projekt Galerie" : "Project Gallery"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((num) => (
                    <motion.div
                      key={num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: num * 0.1 }}
                      className="relative rounded-lg overflow-hidden aspect-video group cursor-pointer"
                      onClick={() => setSelectedImage(`/images/projects/grabbing/grabbing${num}.png`)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setSelectedImage(`/images/projects/grabbing/grabbing${num}.png`)
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                    >
                      <Image
                        src={`/images/projects/grabbing/grabbing${num}.png`}
                        alt={`${language === "de" ? "Grabbing VR Demonstration" : "Grabbing VR Demonstration"} ${num}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          {language === "de" ? "Vergrößern" : "Enlarge"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section
              className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
              aria-labelledby="grabbing-cta-heading"
            >
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 id="grabbing-cta-heading" className="text-3xl md:text-4xl font-light mb-6">
                    {language === "de" ? "Interessiert an Grabbing VR?" : "Interested in Grabbing VR?"}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {language === "de"
                      ? "Erleben Sie die Zukunft der VR-Interaktion oder lassen Sie sich eine maßgeschneiderte Lösung entwickeln."
                      : "Experience the future of VR interaction or have a custom solution developed for you."}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {language === "de" ? "Demo vereinbaren" : "Schedule Demo"}
                    <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Gallery Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black border-gray-800 p-2" aria-labelledby="gallery-dialog-title">
          <h3 id="gallery-dialog-title" className="sr-only">
            {language === "de"
              ? "Grabbing VR Galerie Bild - Vergrößerte Ansicht"
              : "Grabbing VR Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "Grabbing VR Galerie Bild in vergrößerter Ansicht"
                    : "Grabbing VR Gallery Image in enlarged view"
                }
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
