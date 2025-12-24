"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function Memoria() {
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
        <section className="py-20 md:py-32 bg-black relative" aria-labelledby="memoria-hero-heading">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/projects/memoria/memoria-hero.png"
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
              <h1 id="memoria-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                MEMORIA
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {language === "de"
                  ? "Ein immersives VR-Erlebnis, das den fortschreitenden Gedächtnisverlust bei Demenz durch eine interaktive Umgebung erfahrbar macht."
                  : "An immersive VR experience that makes the progressive memory loss of dementia tangible through an interactive environment."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="memoria-description-heading">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="memoria-description-heading" className="text-3xl font-light tracking-wider mb-8">
                    {language === "de" ? "Projektbeschreibung" : "Project Description"}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Memoria ist ein innovatives VR-Projekt, das die Kraft der virtuellen Realität nutzt, um die Erfahrung von Demenz und Gedächtnisverlust zu vermitteln. Die Anwendung schafft eine immersive Umgebung in einem detailliert gestalteten Raum, der mit der Unreal Engine entwickelt wurde."
                      : "Memoria is an innovative VR project that harnesses the power of virtual reality to convey the experience of dementia and memory loss. The application creates an immersive environment in a detailed room developed with Unreal Engine."}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Durch natürliche Handtracking-Interaktionen können Benutzer mit verschiedenen Objekten im Raum interagieren und alltägliche Aktivitäten wie Tee kochen ausführen. Mit fortschreitendem Erlebnis verblassen die Bilder und Erinnerungen, während die Umgebung zunehmend dunkler wird, um den Verlauf der Demenz zu symbolisieren."
                      : "Through natural hand tracking interactions, users can interact with various objects in the room and perform everyday activities like making tea. As the experience progresses, the images and memories fade while the environment becomes increasingly darker, symbolizing the progression of dementia."}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Memoria wurde entwickelt, um Empathie für Menschen mit Demenz zu fördern und zu demonstrieren, wie immersive Technologien genutzt werden können, um komplexe emotionale Erfahrungen zu vermitteln."
                      : "Memoria was developed to foster empathy for people with dementia and to demonstrate how immersive technologies can be used to convey complex emotional experiences."}
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
                      src="/images/projects/memoria/memoria-01.png"
                      alt={
                        language === "de"
                          ? "Memoria Projekt Screenshot - Fotoalbum in virtueller Umgebung"
                          : "Memoria Project Screenshot - Photo Album in virtual environment"
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
                          language === "de" ? "Memoria Trailer Video abspielen" : "Play Memoria trailer video"
                        }
                      >
                        <Play className="h-6 w-6 text-white fill-white ml-1" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/memoria/memoria-02.png"
                        alt={
                          language === "de"
                            ? "Memoria Detail - Küche mit interaktiven Elementen"
                            : "Memoria Detail - Kitchen with interactive elements"
                        }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/projects/memoria/memoria-03.jpg"
                        alt={
                          language === "de"
                            ? "Memoria Detail - VR Benutzer beim Testen der Anwendung"
                            : "Memoria Detail - VR User testing the application"
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
            aria-labelledby="memoria-trailer-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="memoria-trailer-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Trailer" : "Project Trailer"}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full"
                    poster="/images/projects/memoria/memoria-poster.png"
                    aria-label={
                      language === "de"
                        ? "Memoria Trailer Video - Zeigt die wichtigsten Features des VR-Erlebnisses"
                        : "Memoria Trailer Video - Shows the main features of the VR experience"
                    }
                  >
                    <source src="/videos/memoria-trailer.mp4" type="video/mp4" />
                    {language === "de"
                      ? "Ihr Browser unterstützt das Video-Tag nicht."
                      : "Your browser does not support the video tag."}
                  </video>
                </div>
                <p className="text-center text-gray-400 mt-6 leading-relaxed">
                  {language === "de"
                    ? "Erleben Sie einen Einblick in die emotionale Reise durch Erinnerungen und Gefühle in Memoria."
                    : "Experience a glimpse into the emotional journey through memories and feelings in Memoria."}
                </p>
              </div>
            </div>
          </section>

          {/* Immersive Environment */}
          <section className="py-20 md:py-32 bg-black" aria-labelledby="memoria-environment-heading">
            <div className="container mx-auto px-4">
              <h2 id="memoria-environment-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "IMMERSIVE UMGEBUNG" : "IMMERSIVE ENVIRONMENT"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/memoria/memoria-kitchen.png"
                      alt={
                        language === "de"
                          ? "Memoria Küchen-Umgebung mit detaillierten 3D-Modellen"
                          : "Memoria Kitchen Environment with detailed 3D models"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Detaillierter Raum" : "Detailed Room"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Memoria präsentiert einen sorgfältig gestalteten, hochauflösenden Raum, der mit Unreal Engine bis ins kleinste Detail ausgearbeitet ist. Der Raum erzählt eine Geschichte und enthält interaktive Elemente, die Erinnerungen auslösen können. Jedes Detail ist mit Bedeutung und emotionaler Tiefe gefüllt."
                      : "Memoria presents a carefully designed, high-resolution room created with Unreal Engine and elaborated down to the smallest detail. The room tells a story and contains interactive elements that can trigger memories. Every detail is filled with meaning and emotional depth."}
                  </p>
                </article>
                <article>
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                    <Image
                      src="/images/projects/memoria/memoria-detail.png"
                      alt={
                        language === "de"
                          ? "Memoria Küchen-Detail mit interaktiven Objekten"
                          : "Memoria Kitchen Detail with interactive objects"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    {language === "de" ? "Interaktive Elemente" : "Interactive Elements"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Verschiedene Objekte in Memoria können eine Geschichte erzählen. Notizen an der Wand, Fotos in Alben, persönliche Gegenstände - viele dieser Elemente können interaktiv erkundet werden. Benutzer werden ermutigt, mit den Objekten in der Umgebung zu experimentieren, um herauszufinden, welche interaktiv sind und welche Erinnerungen sie enthüllen können."
                      : "Various objects in Memoria can tell a story. Notes on the wall, photos in albums, personal items - many of these elements can be explored interactively. Users are encouraged to experiment with objects in the environment to discover which ones are interactive and what memories they might reveal."}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
            aria-labelledby="memoria-gallery-heading"
          >
            <div className="container mx-auto px-4">
              <h2 id="memoria-gallery-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
                {language === "de" ? "Projekt Galerie" : "Project Gallery"}
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label={language === "de" ? "Memoria Projekt Bilder" : "Memoria project images"}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div
                    key={num}
                    className="relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    onClick={() => openGalleryImage(`/images/projects/memoria/memoria-gallery-${num}.png`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openGalleryImage(`/images/projects/memoria/memoria-gallery-${num}.png`)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${language === "de" ? "Galerie Bild" : "Gallery image"} ${num} ${language === "de" ? "vergrößern" : "enlarge"}`}
                  >
                    <Image
                      src={`/images/projects/memoria/memoria-gallery-${num}.png`}
                      alt={`${language === "de" ? "Memoria Galerie Bild" : "Memoria Gallery Image"} ${num} - ${language === "de" ? "Zeigt verschiedene Aspekte der VR-Erfahrung" : "Shows various aspects of the VR experience"}`}
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
            {language === "de" ? "Memoria Trailer Video" : "Memoria Trailer Video"}
          </h3>
          <div className="aspect-video w-full">
            <video
              controls
              autoPlay
              className="w-full h-full"
              aria-label={
                language === "de"
                  ? "Memoria Trailer Video - Vollbild Ansicht"
                  : "Memoria Trailer Video - Full screen view"
              }
            >
              <source src="/videos/memoria-trailer.mp4" type="video/mp4" />
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
            {language === "de" ? "Memoria Galerie Bild - Vergrößerte Ansicht" : "Memoria Gallery Image - Enlarged View"}
          </h3>
          {selectedImage && (
            <div className="relative w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={
                  language === "de"
                    ? "Memoria Galerie Bild in vergrößerter Ansicht"
                    : "Memoria Gallery Image in enlarged view"
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
