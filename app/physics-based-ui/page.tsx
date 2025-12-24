"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function PhysicsBasedUI() {
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
        <section className="py-20 md:py-32 bg-black relative" aria-labelledby="physics-ui-hero-heading">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/projects/physics-ui/physics-ui-hero.png"
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
              <h1 id="physics-ui-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                PHYSICS BASED UI TOOLKIT
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {language === "de"
                  ? "Eine nützliche Erweiterung für die Unity Engine zur Erstellung physikbasierter UI-Elemente mit realistischen Eigenschaften."
                  : "A useful extension for the Unity Engine to create physics-based UI elements with realistic properties."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="physics-ui-description-heading">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="physics-ui-description-heading" className="text-3xl font-light tracking-wider mb-8">
                    {language === "de" ? "Projektbeschreibung" : "Project Description"}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Das Physics Based UI Toolkit ist eine äußerst nützliche Erweiterung für die Unity Engine, die es Entwicklern ermöglicht, benutzerdefinierte UI-Elemente zu erstellen, die vollständig auf die Physik-Engine von Unity zugeschnitten sind."
                      : "The Physics Based UI Toolkit is an extremely useful extension for the Unity Engine that allows developers to create custom UI elements that are fully tailored to Unity's physics engine."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Stell es dir wie einen vielseitigen Baukasten vor, der es dir ermöglicht, interaktive Benutzeroberflächen mit realistischen physikalischen Eigenschaften zu gestalten."
                      : "Think of it as a versatile toolkit that allows you to design interactive user interfaces with realistic physical properties."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Mit diesem Toolkit kannst du eine Vielzahl von UI-Elementen erstellen, die sich aufgrund der Physik-Engine von Unity realistisch verhalten. Einige der verfügbaren Beispiele umfassen einen Timer, eine Stoppuhr und Dropdown-Menüs."
                      : "With this toolkit, you can create a variety of UI elements that behave realistically due to Unity's physics engine. Some of the available examples include a timer, stopwatch, and dropdown menus."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Diese Beispiele dienen als Ausgangspunkt für deine eigenen Projekte und zeigen, wie vielseitig das Toolkit ist."
                      : "These examples serve as a starting point for your own projects and show how versatile the toolkit is."}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Das Physics Based UI Toolkit nutzt die Unity-Physik-Engine, um realistische UI-Elemente zu erstellen, die das Spielerlebnis oder die Anwendungen verbessern können. Es eröffnet Entwicklern eine Fülle kreativer Möglichkeiten, um interaktive Benutzeroberflächen zu gestalten."
                      : "The Physics Based UI Toolkit uses Unity's physics engine to create realistic UI elements that can enhance the gaming experience or applications. It opens up a wealth of creative possibilities for developers to design interactive user interfaces."}
                  </p>
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
                      src="/images/projects/physics-ui/physics-ui-01.png"
                      alt={
                        language === "de"
                          ? "Physics Based UI Toolkit Screenshot - Physikbasierte UI-Elemente"
                          : "Physics Based UI Toolkit Screenshot - Physics-based UI elements"
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
                          language === "de" ? "Physics UI Trailer Video abspielen" : "Play Physics UI trailer video"
                        }
                      >
                        <Play className="h-6 w-6 text-white fill-white ml-1" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/physics-ui/physics-ui-02.png"
                        alt={
                          language === "de"
                            ? "Physics UI Detail - Timer und Stoppuhr Beispiele"
                            : "Physics UI Detail - Timer and stopwatch examples"
                        }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/physics-ui/physics-ui-03.png"
                        alt={
                          language === "de"
                            ? "Physics UI Detail - Dropdown-Menüs mit Physik"
                            : "Physics UI Detail - Dropdown menus with physics"
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
            aria-labelledby="physics-ui-trailer-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="physics-ui-trailer-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Trailer" : "Project Trailer"}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full"
                    poster="/images/projects/physics-ui/physics-ui-poster.png"
                    aria-label={
                      language === "de"
                        ? "Physics UI Trailer Video - Zeigt die wichtigsten Features des Toolkits"
                        : "Physics UI Trailer Video - Shows the main features of the toolkit"
                    }
                  >
                    <source src="/videos/physics-ui-trailer.mp4" type="video/mp4" />
                    {language === "de"
                      ? "Ihr Browser unterstützt das Video-Tag nicht."
                      : "Your browser does not support the video tag."}
                  </video>
                </div>
                <p className="text-center text-gray-400 mt-6 leading-relaxed">
                  {language === "de"
                    ? "Erleben Sie einen Einblick in das Physics Based UI Toolkit für Unity."
                    : "Experience a glimpse into the Physics Based UI Toolkit for Unity."}
                </p>
              </div>
            </div>
          </section>

          {/* Toolkit Features */}
          <section className="py-20 md:py-32 bg-black" aria-labelledby="physics-ui-features-heading">
            <div className="container mx-auto px-4">
              <h2 id="physics-ui-features-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "TOOLKIT FEATURES" : "TOOLKIT FEATURES"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/physics-ui/physics-ui-features-01.png"
                      alt={
                        language === "de"
                          ? "Physics UI Features - Vielseitiger Baukasten für UI-Elemente"
                          : "Physics UI Features - Versatile toolkit for UI elements"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Vielseitiger Baukasten" : "Versatile Toolkit"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Ein umfassender Baukasten für die Erstellung benutzerdefinierter UI-Elemente mit realistischen physikalischen Eigenschaften. Vollständig auf die Unity Physik-Engine zugeschnitten."
                      : "A comprehensive toolkit for creating custom UI elements with realistic physical properties. Fully tailored to Unity's physics engine."}
                  </p>
                </article>
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/physics-ui/physics-ui-features-02.png"
                      alt={
                        language === "de"
                          ? "Physics UI Features - Beispiele und kreative Möglichkeiten"
                          : "Physics UI Features - Examples and creative possibilities"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Kreative Möglichkeiten" : "Creative Possibilities"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Beispiele wie Timer, Stoppuhr und Dropdown-Menüs dienen als Ausgangspunkt. Das Toolkit eröffnet Entwicklern eine Fülle kreativer Möglichkeiten für interaktive Benutzeroberflächen."
                      : "Examples like timers, stopwatches, and dropdown menus serve as starting points. The toolkit opens up a wealth of creative possibilities for developers for interactive user interfaces."}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
            aria-labelledby="physics-ui-gallery-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="physics-ui-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Galerie" : "Project Gallery"}
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label={
                  language === "de" ? "Physics UI Toolkit Projekt Bilder" : "Physics UI Toolkit project images"
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    onClick={() => openGalleryImage(`/images/projects/physics-ui/physics-ui-gallery-${num}.png`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openGalleryImage(`/images/projects/physics-ui/physics-ui-gallery-${num}.png`)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                  >
                    <Image
                      src={`/images/projects/physics-ui/physics-ui-gallery-${num}.png`}
                      alt={`${language === "de" ? "Physics UI Toolkit Galerie Bild" : "Physics UI Toolkit Gallery Image"} ${num} - ${language === "de" ? "Zeigt verschiedene Aspekte des Toolkits" : "Shows various aspects of the toolkit"}`}
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
            {language === "de" ? "Physics UI Trailer Video" : "Physics UI Trailer Video"}
          </h3>
          <div className="aspect-video w-full">
            <video
              controls
              autoPlay
              className="w-full h-full"
              aria-label={
                language === "de"
                  ? "Physics UI Trailer Video - Vollbild Ansicht"
                  : "Physics UI Trailer Video - Full screen view"
              }
            >
              <source src="/videos/physics-ui-trailer.mp4" type="video/mp4" />
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
              ? "Physics UI Toolkit Galerie Bild - Vergrößerte Ansicht"
              : "Physics UI Toolkit Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "Physics UI Toolkit Galerie Bild in vergrößerter Ansicht"
                    : "Physics UI Toolkit Gallery Image in enlarged view"
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
