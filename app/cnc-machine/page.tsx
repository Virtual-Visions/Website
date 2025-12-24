"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function CNCMachine() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { language } = useLanguage()

  const openGalleryImage = (src: string) => {
    setSelectedImage(src)
  }

  return (
    <div className="min-h-screen">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {language === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
      </a>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-black relative" aria-labelledby="cnc-hero-heading">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/projects/cnc-machine/cnc-hero.png"
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
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
              <h1 id="cnc-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                CNC MACHINE VR TRAINING
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {language === "de"
                  ? "VR-Schulung für CNC-Fräsen als Pflichtmodul vor realen Maschinenkursen. Entwickelt für die Pioniergarage Salzburg zur sicheren und effizienten Vorqualifikation."
                  : "VR training for CNC milling as mandatory module before real machine courses. Developed for Pioniergarage Salzburg for safe and efficient pre-qualification."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="cnc-description-heading">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="cnc-description-heading" className="text-3xl font-light tracking-wider mb-8">
                    {language === "de"
                      ? "CASE STUDY – CNC-Fräsen-Schulung in VR"
                      : "CASE STUDY – CNC Milling Training in VR"}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-3 text-white">
                        {language === "de" ? "Kunde & Ausgangssituation" : "Client & Initial Situation"}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        {language === "de"
                          ? "Die Pioniergarage Salzburg bildet technisch interessierte Teilnehmer im Umgang mit CNC-Fräsen aus. Die traditionelle Einschulung an den Maschinen war zeitintensiv, ressourcenaufwendig und mit Risiken für Anfänger verbunden."
                          : "Pioniergarage Salzburg trains technically interested participants in the use of CNC milling machines. Traditional training on the machines was time-intensive, resource-intensive and risky for beginners."}
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {language === "de"
                          ? "Ziel war es, eine effektive Vorqualifikation zu schaffen, um den realen Intensivkurs sicherer und effizienter zu gestalten."
                          : "The goal was to create effective pre-qualification to make the real intensive course safer and more efficient."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-3 text-white">
                        {language === "de" ? "Lösung mit Virtual Visions" : "Solution with Virtual Visions"}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        {language === "de"
                          ? "Virtual Visions entwickelte eine immersive VR-Schulung, die den vollständigen CNC-Fräsprozess realitätsnah abbildet – von der Softwarebedienung bis zur Maschinenvorbereitung."
                          : "Virtual Visions developed an immersive VR training that realistically depicts the complete CNC milling process – from software operation to machine preparation."}
                      </p>

                      <h4 className="text-lg font-medium mb-3 text-white">
                        {language === "de" ? "Kerninhalte der Schulung:" : "Core Training Content:"}
                      </h4>
                      <ul className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Interaktive Tutorials zur Festlegung der Fräswege"
                            : "Interactive tutorials for defining milling paths"}
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Multiple-Choice-Tests zur Wissensüberprüfung"
                            : "Multiple-choice tests for knowledge verification"}
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Eigenständige Durchführung aller Vorbereitungen: Opferplatte einlegen, Nullpunktbestimmung, Objektfixierung"
                            : "Independent execution of all preparations: inserting sacrificial plate, zero point determination, object fixation"}
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Simulation sicherheitskritischer Arbeitsschritte vor dem realen Betrieb"
                            : "Simulation of safety-critical work steps before real operation"}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-3 text-white">
                        {language === "de" ? "Ergebnis & Erfolg" : "Results & Success"}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        {language === "de"
                          ? "Die virtuelle Schulung ist heute verpflichtender Bestandteil des Einschulungsprozesses. Konkret:"
                          : "The virtual training is now a mandatory part of the onboarding process. Specifically:"}
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Jeder Teilnehmer muss die VR-Schulung absolvieren, bevor er Zugang zum mehrtägigen Maschinenkurs erhält"
                            : "Every participant must complete VR training before gaining access to the multi-day machine course"}
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Die reale Einschulung läuft schneller, sicherer und strukturierter ab"
                            : "Real training runs faster, safer and more structured"}
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {language === "de"
                            ? "Das Personal wird entlastet – weniger Wiederholungsfragen, weniger Fehler"
                            : "Staff is relieved – fewer repetitive questions, fewer errors"}
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-white">
                      <h3 className="text-xl font-medium mb-3 text-white">
                        {language === "de" ? "Kundenstimme" : "Client Testimonial"}
                      </h3>
                      <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                        {language === "de"
                          ? "Dank der virtuellen Schulung kommen unsere Teilnehmer mit einem viel besseren Vorwissen in den Maschinenkurs. Das spart Zeit, reduziert Risiken – und macht richtig Spaß."
                          : "Thanks to the virtual training, our participants come to the machine course with much better prior knowledge. This saves time, reduces risks – and is really fun."}
                      </blockquote>
                      <cite className="block text-sm text-gray-400 mt-3">
                        {language === "de"
                          ? "Ausbildungsleitung, Pioniergarage Salzburg"
                          : "Training Management, Pioniergarage Salzburg"}
                      </cite>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="relative rounded-lg overflow-hidden aspect-video group">
                    <Image
                      src="/images/projects/cnc-machine/cnc-01.png"
                      alt={
                        language === "de"
                          ? "CNC Maschinen VR Training Screenshot - Virtuelle Maschinenbedienung"
                          : "CNC Machine VR Training Screenshot - Virtual machine operation"
                      }
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setVideoOpen(true)}
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        aria-label={
                          language === "de" ? "CNC Training Trailer Video abspielen" : "Play CNC Training trailer video"
                        }
                      >
                        <Play className="h-6 w-6 text-white fill-white ml-1" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/cnc-machine/cnc-02.png"
                        alt={
                          language === "de"
                            ? "CNC Detail - Bedienfeld mit virtuellen Kontrollen"
                            : "CNC Detail - Control panel with virtual controls"
                        }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/cnc-machine/cnc-03.png"
                        alt={
                          language === "de"
                            ? "CNC Detail - VR Benutzer beim Training"
                            : "CNC Detail - VR User during training"
                        }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trailer Video Section */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
            aria-labelledby="cnc-trailer-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="cnc-trailer-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Trailer" : "Project Trailer"}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full"
                    poster="/images/projects/cnc-machine/cnc-poster.png"
                    aria-label={
                      language === "de"
                        ? "CNC Training Trailer Video - Zeigt die wichtigsten Features des VR-Trainings"
                        : "CNC Training Trailer Video - Shows the main features of the VR training"
                    }
                  >
                    <source src="/videos/cnc-machine-trailer.mp4" type="video/mp4" />
                    {language === "de"
                      ? "Ihr Browser unterstützt das Video-Tag nicht."
                      : "Your browser does not support the video tag."}
                  </video>
                </div>
                <p className="text-center text-gray-400 mt-6 leading-relaxed">
                  {language === "de"
                    ? "Erleben Sie einen Einblick in das professionelle CNC-Maschinen VR Training."
                    : "Experience a glimpse into professional CNC machine VR training."}
                </p>
              </div>
            </div>
          </section>

          {/* Training Features */}
          <section className="py-20 md:py-32 bg-black" aria-labelledby="cnc-features-heading">
            <div className="container mx-auto px-4">
              <h2 id="cnc-features-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "TRAININGSFEATURES" : "TRAINING FEATURES"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/cnc-machine/cnc-features-01.png"
                      alt={
                        language === "de"
                          ? "CNC Training Features - Interaktive Tutorials und Fräswege"
                          : "CNC Training Features - Interactive tutorials and milling paths"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Interaktive Tutorials & Tests" : "Interactive Tutorials & Tests"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Schritt-für-Schritt Anleitungen zur Festlegung der Fräswege mit integrierten Multiple-Choice-Tests zur Wissensüberprüfung. Jeder Lernschritt wird interaktiv vermittelt und sofort überprüft."
                      : "Step-by-step instructions for defining milling paths with integrated multiple-choice tests for knowledge verification. Each learning step is taught interactively and immediately verified."}
                  </p>
                </article>
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/cnc-machine/cnc-features-02.png"
                      alt={
                        language === "de"
                          ? "CNC Training Features - Maschinenvorbereitung und Sicherheit"
                          : "CNC Training Features - Machine preparation and safety"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Vollständige Maschinenvorbereitung" : "Complete Machine Preparation"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Eigenständige Durchführung aller Vorbereitungsschritte: Opferplatte einlegen, Nullpunktbestimmung und Objektfixierung. Simulation sicherheitskritischer Arbeitsschritte vor dem realen Betrieb."
                      : "Independent execution of all preparation steps: inserting sacrificial plate, zero point determination and object fixation. Simulation of safety-critical work steps before real operation."}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
            aria-labelledby="cnc-gallery-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="cnc-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Galerie" : "Project Gallery"}
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label={language === "de" ? "CNC Training Projekt Bilder" : "CNC Training project images"}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    onClick={() => openGalleryImage(`/images/projects/cnc-machine/cnc-gallery-${num}.png`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openGalleryImage(`/images/projects/cnc-machine/cnc-gallery-${num}.png`)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                  >
                    <Image
                      src={`/images/projects/cnc-machine/cnc-gallery-${num}.png`}
                      alt={`${language === "de" ? "CNC Training Galerie Bild" : "CNC Training Gallery Image"} ${num} - ${language === "de" ? "Zeigt verschiedene Aspekte des VR-Trainings" : "Shows various aspects of the VR training"}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                        {language === "de" ? "Vergrößern" : "Enlarge"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-gray-800" aria-labelledby="video-dialog-title">
          <h3 id="video-dialog-title" className="sr-only">
            {language === "de" ? "CNC Training Trailer Video" : "CNC Training Trailer Video"}
          </h3>
          <div className="aspect-video w-full">
            <video
              controls
              autoPlay
              className="w-full h-full"
              aria-label={
                language === "de"
                  ? "CNC Training Trailer Video - Vollbild Ansicht"
                  : "CNC Training Trailer Video - Full screen view"
              }
            >
              <source src="/videos/cnc-machine-trailer.mp4" type="video/mp4" />
              {language === "de"
                ? "Ihr Browser unterstützt das Video-Tag nicht."
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gallery Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black border-gray-800 p-2" aria-labelledby="gallery-dialog-title">
          <h3 id="gallery-dialog-title" className="sr-only">
            {language === "de"
              ? "CNC Training Galerie Bild - Vergrößerte Ansicht"
              : "CNC Training Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "CNC Training Galerie Bild in vergrößerter Ansicht"
                    : "CNC Training Gallery Image in enlarged view"
                }
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
