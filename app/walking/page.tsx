"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Maximize2, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function WalkingPage() {
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
          <section className="py-20 md:py-32 bg-black relative" aria-labelledby="walking-hero-heading">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Walking+VR+Hero"
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
                <h1 id="walking-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                  REDIRECTED WALKING
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  {language === "de"
                    ? "Eine innovative VR-Fortbewegungstechnologie, die den verfügbaren physischen Raum optimal ausnutzt."
                    : "An innovative VR locomotion technology that optimally utilizes the available physical space."}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Project Details */}
          <main id="main-content" tabIndex={-1}>
            <section className="py-20 md:py-32 bg-black" aria-labelledby="walking-description-heading">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 id="walking-description-heading" className="text-3xl font-light tracking-wider mb-8">
                      {language === "de" ? "Projektbeschreibung" : "Project Description"}
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {language === "de"
                        ? "Dieses Projekt wurde im Rahmen einer Bachelor-Abschlussarbeit entwickelt und erforscht eine potenzielle alternative Möglichkeit zur Fortbewegung in der virtuellen Realität (VR). Redirected Walking ist ein Ansatz, bei dem der Nutzer nicht auf gängige Methoden wie Teleportation oder Joystick-Bewegungen angewiesen ist."
                        : "This project was developed as part of a bachelor's thesis and explores a potential alternative method for locomotion in virtual reality (VR). Redirected Walking is an approach where users are not dependent on common methods like teleportation or joystick movements."}
                    </p>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {language === "de"
                        ? "Stattdessen wird der gesamte physisch verfügbare Raum effektiv genutzt. Bei dieser Methode wird der Nutzer durch das System auf verschiedene Weisen gelenkt. Entweder wird er ständig in die Mitte des virtuellen Raums geführt oder er bewegt sich auf einer Umlaufbahn um das Zentrum herum."
                        : "Instead, the entire physically available space is effectively utilized. With this method, the user is guided by the system in various ways. Either they are constantly led to the center of the virtual space or they move in an orbit around the center."}
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Diese Umleitung erfolgt, indem die Kamera in der virtuellen Umgebung kontinuierlich um einen geringen Winkel angepasst und gedreht wird. Da diese Anpassung minimal ist, nimmt der Spieler sie nicht bewusst wahr. Für ihn sieht es so aus, als ob er sich geradlinig bewegt, obwohl er in Wirklichkeit Kurven läuft."
                        : "This redirection is achieved by continuously adjusting and rotating the camera in the virtual environment by a small angle. Since this adjustment is minimal, the player does not consciously perceive it. To them, it appears as if they are moving straight, although in reality they are walking in curves."}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="relative rounded-lg overflow-hidden aspect-video group">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/walking-poster.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        aria-label={
                          language === "de"
                            ? "Demonstration des Redirected Walking Systems"
                            : "Demonstration of Redirected Walking System"
                        }
                      >
                        <source src="/videos/redirected-walking-trailer.mp4" type="video/mp4" />
                        {language === "de"
                          ? "Ihr Browser unterstützt das Video-Tag nicht."
                          : "Your browser does not support the video tag."}
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section
              className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
              aria-labelledby="walking-features-heading"
            >
              <div className="container mx-auto px-4">
                <h2 id="walking-features-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
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
                      <Maximize2 className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-white">
                      {language === "de" ? "Effiziente Raumnutzung" : "Efficient Space Utilization"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Der gesamte physisch verfügbare Raum wird effektiv genutzt, um maximale virtuelle Bewegungsfreiheit zu ermöglichen."
                        : "The entire physically available space is effectively utilized to enable maximum virtual freedom of movement."}
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
                      <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-white">
                      {language === "de" ? "Unmerkliche Umleitung" : "Imperceptible Redirection"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Kontinuierliche Kameraanpassung um geringe Winkel, die vom Nutzer nicht bewusst wahrgenommen wird."
                        : "Continuous camera adjustment by small angles that is not consciously perceived by the user."}
                    </p>
                  </motion.article>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 md:py-32 bg-black" aria-labelledby="walking-gallery-heading">
              <div className="container mx-auto px-4">
                <h2 id="walking-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
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
                      onClick={() => setSelectedImage(`/placeholder.svg?height=600&width=800&text=Walking+${num}`)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setSelectedImage(`/placeholder.svg?height=600&width=800&text=Walking+${num}`)
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                    >
                      <Image
                        src={`/ceholder-svg-height-400-width-600-text-walking-.jpg?height=400&width=600&text=Walking+${num}`}
                        alt={`${language === "de" ? "Walking VR Demonstration" : "Walking VR Demonstration"} ${num}`}
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
              aria-labelledby="walking-cta-heading"
            >
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 id="walking-cta-heading" className="text-3xl md:text-4xl font-light mb-6">
                    {language === "de" ? "Erleben Sie Redirected Walking" : "Experience Redirected Walking"}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {language === "de"
                      ? "Testen Sie die innovative Fortbewegungstechnologie oder lassen Sie sich eine maßgeschneiderte VR-Lösung entwickeln."
                      : "Test the innovative locomotion technology or have a custom VR solution developed for you."}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {language === "de" ? "Demo buchen" : "Book Demo"}
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
              ? "Walking VR Galerie Bild - Vergrößerte Ansicht"
              : "Walking VR Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "Walking VR Galerie Bild in vergrößerter Ansicht"
                    : "Walking VR Gallery Image in enlarged view"
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
