"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  ArrowLeft,
  Check,
  Sparkles,
  Infinity,
  Brain,
  Zap,
  FileText,
  Users,
  MapPin,
  Code,
  Package,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ImmersiveInsightPage() {
  const { language } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)

  const translations = {
    de: {
      backToHome: "Zurück zur Startseite",
      beta: "BETA",
      title: "Immersive Insight",
      subtitle1: "KI + AR: Wandeln Sie reale Arbeitsprozesse in",
      subtitle2: "interaktive Schritt-für-Schritt AR-Trainings um",
      requestDemo: "Demo anfragen",
      learnMore: "Mehr erfahren",
      stat1: "Kürzere Trainingszeit",
      stat2: "Schnellere Aufgabendurchführung",
      stat3: "Einheitlicher Prozessablauf",
      revolutionizeTitle: "Revolutionieren Sie Ihre Mitarbeiterschulung",
      description1:
        "Immersive Insight kombiniert künstliche Intelligenz mit Augmented Reality, um Arbeitsprozesse automatisch in interaktive Schulungen zu verwandeln.",
      description2:
        "Unsere Plattform analysiert reale Arbeitsabläufe in Echtzeit und erstellt daraus strukturierte, schrittweise AR-Anleitungen. Mitarbeiter können diese Anleitungen direkt in ihrer Arbeitsumgebung abrufen und freihändig folgen.",
      description3:
        "Das Ergebnis: Schnellere Einarbeitung, konsistente Qualität und reduzierte Trainingskosten - ohne aufwendige manuelle Content-Erstellung.",
      coreFeaturesTitle: "Kernfunktionen",
      coreFeaturesSubtitle: "Modernste Technologie für effektives Training",
      feature1Title: "KI-gestützte Analyse",
      feature1Desc: "Unsere KI analysiert automatisch jeden Arbeitsschritt und erstellt strukturierte AR-Anleitungen",
      feature2Title: "Einfache Bedienung",
      feature2Desc: "Intuitive Benutzeroberfläche - keine Programmierkenntnisse erforderlich",
      feature3Title: "Skalierbare Schulungen",
      feature3Desc: "Erstellen Sie einmal und schulen Sie beliebig viele Mitarbeiter weltweit",
      feature4Title: "Individuelle Anpassungen",
      feature4Desc: "Nach der Aufnahme können Sie Hinweise, Notizen und wichtige Details hinzufügen",
      feature5Title: "Standortübergreifende Schulung",
      feature5Desc:
        "Nehmen Sie an einem Standort auf und schulen Sie Mitarbeiter an beliebigen anderen Standorten durch AR-Anleitungen",
      feature6Title: "Hands-Free Lernen",
      feature6Desc: "AR-Overlay ermöglicht freihändiges Lernen während der Ausführung",
      industriesTitle: "Zielbranchen",
      industriesSubtitle: "Perfekt geeignet für komplexe Arbeitsprozesse",
      industry1Title: "Softwareentwicklung & IT",
      industry1Desc:
        "Vereinfachen Sie das Onboarding neuer Entwickler mit AR-gestützten Code-Reviews und Systemarchitektur-Visualisierungen",
      industry2Title: "Produktion & Fertigung",
      industry2Desc:
        "Schulen Sie Mitarbeiter an komplexen Maschinen und Fertigungsprozessen mit präzisen AR-Anleitungen",
      industry3Title: "Medizin & Logistik",
      industry3Desc:
        "Meistern Sie komplexe Abläufe in Krankenhäusern, Lagern und Verteilzentren mit schrittweisen AR-Trainings",
      pricingTitle: "Kosten auf Anfrage",
      pricingSubtitle: "Kontaktieren Sie uns für ein individuelles Angebot, das perfekt zu Ihren Anforderungen passt",
      contactUs: "Kontaktieren Sie uns",
    },
    en: {
      backToHome: "Back to homepage",
      beta: "BETA",
      title: "Immersive Insight",
      subtitle1: "AI + AR: Transform real work processes into",
      subtitle2: "interactive step-by-step AR training",
      requestDemo: "Request Demo",
      learnMore: "Learn More",
      stat1: "Shorter Training Time",
      stat2: "Faster Task Completion",
      stat3: "Consistent Process Flow",
      revolutionizeTitle: "Revolutionize Your Employee Training",
      description1:
        "Immersive Insight combines artificial intelligence with augmented reality to automatically transform work processes into interactive training.",
      description2:
        "Our platform analyzes real workflows in real-time and creates structured, step-by-step AR instructions. Employees can access these instructions directly in their work environment and follow them hands-free.",
      description3:
        "The result: Faster onboarding, consistent quality, and reduced training costs - without extensive manual content creation.",
      coreFeaturesTitle: "Core Features",
      coreFeaturesSubtitle: "State-of-the-art technology for effective training",
      feature1Title: "AI-Powered Analysis",
      feature1Desc: "Our AI automatically analyzes every work step and creates structured AR instructions",
      feature2Title: "Easy to Use",
      feature2Desc: "Intuitive user interface - no programming skills required",
      feature3Title: "Scalable Training",
      feature3Desc: "Create once and train unlimited employees worldwide",
      feature4Title: "Custom Annotations",
      feature4Desc: "After recording, you can add notes, annotations, and important details",
      feature5Title: "Cross-Location Training",
      feature5Desc: "Record at one location and train employees at any other location through AR instructions",
      feature6Title: "Hands-Free Learning",
      feature6Desc: "AR overlay enables hands-free learning during execution",
      industriesTitle: "Target Industries",
      industriesSubtitle: "Perfectly suited for complex work processes",
      industry1Title: "Software Development & IT",
      industry1Desc:
        "Simplify onboarding of new developers with AR-supported code reviews and system architecture visualizations",
      industry2Title: "Production & Manufacturing",
      industry2Desc: "Train employees on complex machines and manufacturing processes with precise AR instructions",
      industry3Title: "Medicine & Logistics",
      industry3Desc:
        "Master complex processes in hospitals, warehouses, and distribution centers with step-by-step AR training",
      pricingTitle: "Pricing on Request",
      pricingSubtitle: "Contact us for a customized quote that perfectly fits your requirements",
      contactUs: "Contact Us",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        {language === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
      </a>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40" />

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backToHome}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm mb-8 hover:border-white/40 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-base font-semibold text-white tracking-wider">{t.beta}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-8">{t.title}</h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">{t.subtitle1}</p>
              <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light leading-relaxed">{t.subtitle2}</p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap gap-6 justify-center mb-20"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 hover:scale-105 text-base px-8 h-auto py-3 rounded transition-all duration-300"
                  asChild
                >
                  <a href="mailto:info@virtualvisions.at">{t.requestDemo}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 text-base px-8 h-auto py-3 rounded bg-transparent transition-all duration-300"
                  asChild
                >
                  <a href="#features">{t.learnMore}</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              >
                {[
                  { icon: Infinity, value: "25%", label: t.stat1, delay: 0 },
                  { icon: Zap, value: "44%", label: t.stat2, delay: 0.1 },
                  { icon: Check, value: "100%", label: t.stat3, delay: 0.2 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + stat.delay, ease: "easeOut" }}
                    className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-light mb-3 text-white">{stat.value}</div>
                    <div className="text-gray-400 text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trailer Video Section */}
        <section
          className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
          aria-labelledby="immersive-insight-trailer-heading"
        >
          <div className="container mx-auto px-4">
            <h2 id="immersive-insight-trailer-heading" className="text-3xl font-light tracking-wider mb-12 text-center">
              {language === "de" ? "Projekt Trailer" : "Project Trailer"}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video
                  controls
                  className="absolute inset-0 w-full h-full"
                  poster="/placeholder-video-poster.png"
                  aria-label={language === "de" ? "Immersive Insight Trailer Video" : "Immersive Insight Trailer Video"}
                >
                  <source src="/videos/immersive-insight-trailer.mp4" type="video/mp4" />
                  {language === "de"
                    ? "Ihr Browser unterstützt das Video-Tag nicht."
                    : "Your browser does not support the video tag."}
                </video>
              </div>
              <p className="text-center text-gray-400 mt-6 leading-relaxed">
                {language === "de"
                  ? "Entdecken Sie, wie Immersive Insight Ihre Trainings- und Dokumentationsprozesse transformiert."
                  : "Discover how Immersive Insight transforms your training and documentation processes."}
              </p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-gradient-to-b from-black to-zinc-950">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 leading-tight">
                    {t.revolutionizeTitle}
                  </h2>
                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {t.description1}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {t.description2}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {t.description3}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=AR+Training+Demo"
                      alt="Immersive Insight Demo"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Features Section */}
          <section id="features" className="py-20 md:py-32 bg-zinc-950">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-6">{t.coreFeaturesTitle}</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.coreFeaturesSubtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                  { icon: Brain, title: t.feature1Title, desc: t.feature1Desc, img: "AI+Analysis" },
                  { icon: Zap, title: t.feature2Title, desc: t.feature2Desc, img: "Easy+Interface" },
                  { icon: Users, title: t.feature3Title, desc: t.feature3Desc, img: "Scalable+Training" },
                  { icon: FileText, title: t.feature4Title, desc: t.feature4Desc, img: "Custom+Annotations" },
                  { icon: MapPin, title: t.feature5Title, desc: t.feature5Desc, img: "Remote+Training" },
                  { icon: Sparkles, title: t.feature6Title, desc: t.feature6Desc, img: "Hands+Free+Learning" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                      <div className="relative w-full h-32 mb-6 rounded overflow-hidden bg-zinc-800/50 group-hover:bg-zinc-800/70 transition-all duration-300">
                        <Image
                          src={`/ceholder-svg-key-ccao7-height-200-width-400-text-.jpg?key=ccao7&height=200&width=400&text=${feature.img}`}
                          alt={feature.title}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>

                      <div className="p-3 bg-white/5 rounded inline-block mb-6 group-hover:bg-white/10 transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Target Industries */}
          <section className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-6">{t.industriesTitle}</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.industriesSubtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                  { icon: Code, title: t.industry1Title, desc: t.industry1Desc, img: "Software+Development" },
                  { icon: Package, title: t.industry2Title, desc: t.industry2Desc, img: "Manufacturing" },
                  { icon: Stethoscope, title: t.industry3Title, desc: t.industry3Desc, img: "Medicine+Logistics" },
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                      <div className="relative w-full h-48 bg-zinc-800/50 overflow-hidden">
                        <Image
                          src={`/ceholder-svg-key-1qg38-height-300-width-600-text-.jpg?key=1qg38&height=300&width=600&text=${industry.img}`}
                          alt={industry.title}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <div className="p-3 bg-white/5 rounded inline-block mb-4 group-hover:bg-white/10 transition-all duration-300">
                          <industry.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-4">{industry.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{industry.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-black to-zinc-950">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-6">{t.pricingTitle}</h2>
                <p className="text-xl text-gray-400 mb-12">{t.pricingSubtitle}</p>

                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 hover:scale-105 text-base px-8 h-auto py-3 rounded transition-all duration-300"
                  asChild
                >
                  <a href="mailto:info@virtualvisions.at">{t.contactUs}</a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
      </div>

      {/* Video Dialog for Full-Screen Viewing */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl bg-black border-gray-800" aria-labelledby="video-dialog-title">
          <h3 id="video-dialog-title" className="sr-only">
            {language === "de" ? "Immersive Insight Trailer Video" : "Immersive Insight Trailer Video"}
          </h3>
          <div className="aspect-video w-full">
            <video
              controls
              autoPlay
              className="w-full h-full"
              aria-label={
                language === "de"
                  ? "Immersive Insight Trailer Video - Vollbild Ansicht"
                  : "Immersive Insight Trailer Video - Full screen view"
              }
            >
              <source src="/videos/immersive-insight-trailer.mp4" type="video/mp4" />
              {language === "de"
                ? "Ihr Browser unterstützt das Video-Tag nicht."
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
