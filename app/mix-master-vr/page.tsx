"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function MixMasterVR() {
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
        <section className="py-20 md:py-32 bg-black relative" aria-labelledby="mixmaster-hero-heading">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/projects/mixmaster/mixmaster-hero.png"
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
              <h1 id="mixmaster-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                MIXMASTER VR
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {language === "de"
                  ? "Interaktive Barkeeper-Demo in VR mit detaillierter Anleitung zur Cocktail-Zubereitung. Eine immersive Tech-Demo für Ausstellungen."
                  : "Interactive bartender demo in VR with detailed cocktail preparation instructions. An immersive tech demo for exhibitions."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="mixmaster-description-heading">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="mixmaster-description-heading" className="text-3xl font-light tracking-wider mb-8">
                    {language === "de" ? "Projektbeschreibung" : "Project Description"}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Die Barkeeper-Demo in VR bietet eine detaillierte Anleitung zur Zubereitung von Cocktails. Schritt für Schritt lernst du, wie du verschiedene Getränke mixt und dabei realistische Handbewegungen ausführst."
                      : "The bartender demo in VR offers detailed instructions for cocktail preparation. Step by step, you learn how to mix various drinks while performing realistic hand movements."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Ein interaktives Tutorial leitet dich durch die grundlegenden Techniken des Barkeepings – von Greifen und Schütten bis hin zu Schütteln und Servieren. Nach dem Tutorial kannst du im 'Free Play' Modus selbstständig verschiedene Cocktail-Rezepte ausprobieren."
                      : "An interactive tutorial guides you through the basic techniques of bartending – from gripping and pouring to shaking and serving. After the tutorial, you can independently try various cocktail recipes in 'Free Play' mode."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Diese Tech-Demo zeigt, was alles in der virtuellen Realität möglich ist und ist ideal für Ausstellungen konzipiert. Hier kannst du eine praxisnahe und immersive Schulung erleben, die dir konkrete Kenntnisse im Mixen von Cocktails vermittelt und dabei den Spaß eines Spiels bietet."
                      : "This tech demo shows what's possible in virtual reality and is ideally designed for exhibitions. Here you can experience practical and immersive training that provides concrete knowledge in cocktail mixing while offering the fun of a game."}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Mit zahlreichen Rezepten und kreativen Tipps wird jede Sitzung zu einem aufregenden Erlebnis."
                      : "With numerous recipes and creative tips, every session becomes an exciting experience."}
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
                      src="/images/projects/mixmaster/mixmaster-01.png"
                      alt={
                        language === "de"
                          ? "MixMaster VR Screenshot - Virtuelle Bar mit Cocktail-Zubereitung"
                          : "MixMaster VR Screenshot - Virtual bar with cocktail preparation"
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
                          language === "de" ? "MixMaster VR Trailer Video abspielen" : "Play MixMaster VR trailer video"
                        }
                      >
                        <Play className="h-6 w-6 text-white fill-white ml-1" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/mixmaster/mixmaster-02.png"
                        alt={
                          language === "de"
                            ? "MixMaster Detail - Cocktail-Zutaten und Werkzeuge"
                            : "MixMaster Detail - Cocktail ingredients and tools"
                        }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/mixmaster/mixmaster-03.png"
                        alt={
                          language === "de"
                            ? "MixMaster Detail - VR Benutzer beim Cocktail mixen"
                            : "MixMaster Detail - VR User mixing cocktails"
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
            aria-labelledby="mixmaster-trailer-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="mixmaster-trailer-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Trailer" : "Project Trailer"}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full"
                    poster="/images/projects/mixmaster/mixmaster-poster.png"
                    aria-label={
                      language === "de"
                        ? "MixMaster VR Trailer Video - Zeigt die wichtigsten Features der Barkeeper-Demo"
                        : "MixMaster VR Trailer Video - Shows the main features of the bartender demo"
                    }
                  >
                    <source src="/videos/mixmaster-header.mp4" type="video/mp4" />
                    {language === "de"
                      ? "Ihr Browser unterstützt das Video-Tag nicht."
                      : "Your browser does not support the video tag."}
                  </video>
                </div>
                <p className="text-center text-gray-400 mt-6 leading-relaxed">
                  {language === "de"
                    ? "Erleben Sie einen Einblick in die immersive Barkeeper-Demo in Virtual Reality."
                    : "Experience a glimpse into the immersive bartender demo in Virtual Reality."}
                </p>
              </div>
            </div>
          </section>

          {/* Demo Features */}
          <section className="py-20 md:py-32 bg-black" aria-labelledby="mixmaster-features-heading">
            <div className="container mx-auto px-4">
              <h2 id="mixmaster-features-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "DEMO FEATURES" : "DEMO FEATURES"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/mixmaster/mixmaster-features-01.png"
                      alt={
                        language === "de"
                          ? "MixMaster Features - Interaktive Tutorials und Handbewegungen"
                          : "MixMaster Features - Interactive tutorials and hand movements"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Realistische Handbewegungen" : "Realistic Hand Movements"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Lerne grundlegende Barkeeper-Techniken durch realistische Handbewegungen: Greifen, Schütten, Schütteln und Servieren. Jede Bewegung wird präzise erfasst und bewertet."
                      : "Learn basic bartending techniques through realistic hand movements: gripping, pouring, shaking and serving. Every movement is precisely captured and evaluated."}
                  </p>
                </article>
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/mixmaster/mixmaster-features-02.png"
                      alt={
                        language === "de"
                          ? "MixMaster Features - Tutorial und Free Play Modus"
                          : "MixMaster Features - Tutorial and Free Play mode"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Tutorial & Free Play" : "Tutorial & Free Play"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Interaktives Tutorial führt durch die Grundlagen, danach eigenständiges Experimentieren im Free Play Modus mit verschiedenen Cocktail-Rezepten und kreativen Tipps."
                      : "Interactive tutorial guides through the basics, then independent experimentation in Free Play mode with various cocktail recipes and creative tips."}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
            aria-labelledby="mixmaster-gallery-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="mixmaster-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Galerie" : "Project Gallery"}
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label={language === "de" ? "MixMaster VR Projekt Bilder" : "MixMaster VR project images"}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div
                    key={num}
                    className="relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    onClick={() => openGalleryImage(`/images/projects/mixmaster/mixmaster-gallery-${num}.png`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openGalleryImage(`/images/projects/mixmaster/mixmaster-gallery-${num}.png`)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                  >
                    <Image
                      src={`/images/projects/mixmaster/mixmaster-gallery-${num}.png`}
                      alt={`${language === "de" ? "MixMaster VR Galerie Bild" : "MixMaster VR Gallery Image"} ${num} - ${language === "de" ? "Zeigt verschiedene Aspekte der Barkeeper-Demo" : "Shows various aspects of the bartender demo"}`}
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
            {language === "de" ? "MixMaster VR Trailer Video" : "MixMaster VR Trailer Video"}
          </h3>
          <div className="aspect-video w-full">
            <video
              controls
              autoPlay
              className="w-full h-full"
              aria-label={
                language === "de"
                  ? "MixMaster VR Trailer Video - Vollbild Ansicht"
                  : "MixMaster VR Trailer Video - Full screen view"
              }
            >
              <source src="/videos/mixmaster-header.mp4" type="video/mp4" />
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
              ? "MixMaster VR Galerie Bild - Vergrößerte Ansicht"
              : "MixMaster VR Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "MixMaster VR Galerie Bild in vergrößerter Ansicht"
                    : "MixMaster VR Gallery Image in enlarged view"
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
