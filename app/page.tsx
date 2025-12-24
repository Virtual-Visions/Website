"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { DollarSign, Settings, Clock, Cpu, ArrowRight, ChevronDown } from "lucide-react"
import FeaturesTabView from "@/components/features-tab-view"
import { useLanguage } from "@/contexts/language-context"
import { useLocalizedUrl } from "@/utils/language-utils"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { t, language } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9])
  const [isMounted, setIsMounted] = useState(false)
  const [announcements, setAnnouncements] = useState("")
  const localizedUrl = useLocalizedUrl()

  // Handle component mounting state
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Skip to main content function
  const skipToMain = () => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: "smooth" })
      setAnnouncements(language === "de" ? "Zum Hauptinhalt gesprungen" : "Jumped to main content")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setAnnouncements(language === "de" ? `Navigiert zu ${sectionId}` : `Navigated to ${sectionId}`)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Announcements for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
        {announcements}
      </div>

      {/* Enhanced Skip to main content link */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault()
          skipToMain()
        }}
        className="fixed top-4 left-4 z-[60] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transform -translate-y-20 focus:translate-y-0 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
      >
        <span className="flex items-center gap-2">
          <ChevronDown className="w-4 h-4" />
          {language === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
        </span>
      </a>

      <main id="main-content" tabIndex={-1} className="flex flex-col focus:outline-none">
        {/* Hero Section - Enhanced with better accessibility */}
        <motion.section
          id="welcome"
          className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16"
          style={{ opacity: heroOpacity, scale: heroScale }}
          role="banner"
          aria-labelledby="hero-heading"
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
            aria-hidden="true"
          ></div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            aria-label={language === "de" ? "Virtual Visions Präsentationsvideo" : "Virtual Visions presentation video"}
          >
            <source src="/videos/header-video.mp4" type="video/mp4" />
            {language === "de"
              ? "Ihr Browser unterstützt das Video-Tag nicht."
              : "Your browser does not support the video tag."}
          </video>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"
            aria-hidden="true"
          ></div>

          {/* Enhanced hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="Virtual Visions Logo"
                width={300}
                height={120}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 id="hero-heading" className="sr-only">
                {language === "de"
                  ? "Virtual Visions - Innovative VR/AR-Lösungen"
                  : "Virtual Visions - Innovative VR/AR Solutions"}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200 drop-shadow-lg">
                {language === "de"
                  ? "Innovative VR/AR-Lösungen für Ihr Unternehmen. Wir entwickeln maßgeschneiderte immersive Erlebnisse."
                  : "Innovative VR/AR solutions for your business. We develop customized immersive experiences."}
              </p>
            </motion.div>
          </div>

          {/* Enhanced scroll indicator */}
          <motion.button
            onClick={() => scrollToSection("intro")}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 group"
            aria-label={language === "de" ? "Nach unten scrollen" : "Scroll down"}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.section>

        {/* Enhanced Intro Section */}
        <section id="intro" className="py-20 md:py-32 bg-black" aria-labelledby="intro-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  id="intro-heading"
                  className="text-3xl md:text-4xl font-light tracking-wider mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {language === "de" ? "WILLKOMMEN BEI VIRTUAL VISIONS" : "WELCOME TO VIRTUAL VISIONS"}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Wir sind Ihr Partner für innovative VR- und AR-Lösungen. Mit modernster Technologie und kreativen Ansätzen entwickeln wir immersive Erlebnisse, die Ihre Geschäftsprozesse revolutionieren."
                      : "We are your partner for innovative VR and AR solutions. With cutting-edge technology and creative approaches, we develop immersive experiences that revolutionize your business processes."}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {language === "de"
                      ? "Von Trainingssimulatoren bis hin zu interaktiven Präsentationen – wir bringen Ihre Visionen in die virtuelle Realität und schaffen einzigartige Erlebnisse für Ihre Kunden und Mitarbeiter."
                      : "From training simulators to interactive presentations – we bring your visions to virtual reality and create unique experiences for your customers and employees."}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button
                      onClick={() => scrollToSection("services")}
                      className="group px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-medium rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                      aria-label={language === "de" ? "Zu unseren Leistungen springen" : "Jump to our services"}
                    >
                      <span className="flex items-center gap-2">
                        {language === "de" ? "Unsere Leistungen" : "Our Services"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="group px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
                      aria-label={language === "de" ? "Zu unseren Projekten springen" : "Jump to our projects"}
                    >
                      <span className="flex items-center gap-2">
                        {language === "de" ? "Projekte entdecken" : "Discover Projects"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden hidden lg:block group"
              >
                <Image
                  src="/images/intro-vr-experience.jpg"
                  alt={
                    language === "de"
                      ? "Person mit VR-Brille in immersiver Umgebung"
                      : "Person with VR headset in immersive environment"
                  }
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"
                  aria-hidden="true"
                ></div>
                <div className="absolute bottom-8 left-8 max-w-xs">
                  <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-medium mb-2 text-white">
                      {language === "de" ? "Immersive Erlebnisse" : "Immersive Experiences"}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {language === "de"
                        ? "Wir schaffen VR-Welten, die Lernen und Training revolutionieren."
                        : "We create VR worlds that revolutionize learning and training."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Mission Section */}
        <section
          id="vision"
          className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white"
          aria-labelledby="mission-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="mission-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "UNSERE MISSION" : "OUR MISSION"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Wir verwandeln komplexe Herausforderungen in intuitive VR-Erlebnisse"
                  : "We transform complex challenges into intuitive VR experiences"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-light mb-6 text-white">
                  {language === "de" ? "Unsere Vision" : "Our Vision"}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {language === "de"
                    ? "Virtual Reality ist mehr als nur Technologie – es ist ein Werkzeug zur Transformation. Wir glauben daran, dass immersive Erlebnisse die Art und Weise, wie wir lernen, arbeiten und interagieren, grundlegend verändern können."
                    : "Virtual Reality is more than just technology – it's a tool for transformation. We believe that immersive experiences can fundamentally change the way we learn, work, and interact."}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {language === "de"
                    ? "Unser Ziel ist es, die Grenzen zwischen der physischen und digitalen Welt zu verwischen und dabei Lösungen zu schaffen, die nicht nur beeindrucken, sondern echten Mehrwert bieten."
                    : "Our goal is to blur the boundaries between the physical and digital world while creating solutions that not only impress but provide real value."}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/vision-background.jpg"
                  alt={
                    language === "de"
                      ? "Futuristische VR-Technologie Visualisierung"
                      : "Futuristic VR technology visualization"
                  }
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
                  aria-hidden="true"
                ></div>
              </motion.div>
            </div>

            {/* Enhanced Benefits Grid - REMOVED COLORS */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              role="list"
              aria-label={language === "de" ? "Unsere Vorteile" : "Our benefits"}
            >
              {/* Benefit 1 - Removed colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 hover:scale-105"
                role="listitem"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-6 text-white transition-colors">
                  {language === "de" ? "Kostenreduzierung" : "Cost Reduction"}
                </h3>
                <ul className="space-y-3 text-gray-300" role="list">
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Weniger physische Prototypen" : "Fewer physical prototypes"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Reduzierte Reisekosten" : "Reduced travel costs"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Effizientere Schulungen" : "More efficient training"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Geringere Materialkosten" : "Lower material costs"}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Benefit 2 - Removed colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 hover:scale-105"
                role="listitem"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-6 text-white transition-colors">
                  {language === "de" ? "Vereinfachung" : "Simplification"}
                </h3>
                <ul className="space-y-3 text-gray-300" role="list">
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Intuitive Bedienung" : "Intuitive operation"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Komplexe Prozesse visualisiert" : "Complex processes visualized"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Schnellere Einarbeitung" : "Faster onboarding"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Reduzierte Fehlerquote" : "Reduced error rate"}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Benefit 3 - Removed colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 hover:scale-105"
                role="listitem"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-6 text-white transition-colors">
                  {language === "de" ? "Modernisierung" : "Modernization"}
                </h3>
                <ul className="space-y-3 text-gray-300" role="list">
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Zukunftssichere Technologie" : "Future-proof technology"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Digitale Transformation" : "Digital transformation"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Innovative Lösungsansätze" : "Innovative solution approaches"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Wettbewerbsvorteile" : "Competitive advantages"}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Benefit 4 - Removed colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 hover:scale-105"
                role="listitem"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-6 text-white transition-colors">
                  {language === "de" ? "Wiederholbarkeit" : "Repeatability"}
                </h3>
                <ul className="space-y-3 text-gray-300" role="list">
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Konsistente Ergebnisse" : "Consistent results"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Standardisierte Prozesse" : "Standardized processes"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Skalierbare Lösungen" : "Scalable solutions"}</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-200 transition-colors" role="listitem">
                    <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{language === "de" ? "Messbare Qualität" : "Measurable quality"}</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <Link
                href="/kontakt"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-white via-gray-100 to-white text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-4 focus:ring-offset-gray-900"
                aria-label={language === "de" ? "Kontaktformular öffnen" : "Open contact form"}
              >
                <span className="flex items-center gap-3">
                  {language === "de" ? "Kontaktieren Sie uns" : "Contact us"}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section id="vr-technology" className="py-20 md:py-32 bg-black" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2
                id="features-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "VR-TECHNOLOGIE" : "VR TECHNOLOGY"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Modernste VR-Technologien für immersive Erlebnisse"
                  : "State-of-the-art VR technologies for immersive experiences"}
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/30">
              <div className="p-2">
                <FeaturesTabView />
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
          aria-labelledby="products-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="products-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "UNSERE PRODUKTE" : "OUR PRODUCTS"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Innovative Plattformen für die Zukunft des digitalen Lernens"
                  : "Innovative platforms for the future of digital learning"}
              </p>
            </motion.div>

            {/* Featured Product - Immersive Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-8 md:p-12 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <Image
                    src="/images/products/immersive-insight/immersive-insight-cover.jpg"
                    alt={
                      language === "de"
                        ? "Immersive Insight - AI-powered AR Training Platform"
                        : "Immersive Insight - AI-powered AR Training Platform"
                    }
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    priority={false}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full">AI + AR</span>
                    <span className="bg-blue-500 text-white text-xs font-medium px-4 py-2 rounded-full">BETA</span>
                  </div>
                </div>
                <div className="lg:pl-4">
                  <div className="mb-4">
                    <span className="text-sm uppercase tracking-widest text-gray-400">
                      {language === "de" ? "Flagship Produkt" : "Flagship Product"}
                    </span>
                  </div>
                  <h3 className="text-4xl font-light mb-6 text-white">Immersive Insight</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Eine KI-gestützte Augmented Reality Trainingsplattform, die komplexe Arbeitsprozesse automatisch in interaktive AR-Schulungen transformiert. Einfach aufnehmen, automatisch analysieren, sofort trainieren."
                      : "An AI-powered Augmented Reality training platform that automatically transforms complex work processes into interactive AR training. Simply record, automatically analyze, train immediately."}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {language === "de"
                        ? "KI-gestützte automatische Inhaltsanalyse"
                        : "AI-powered automatic content analysis"}
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {language === "de" ? "Schritt-für-Schritt AR-Anleitungen" : "Step-by-step AR instructions"}
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {language === "de"
                        ? "Keine technischen Vorkenntnisse erforderlich"
                        : "No technical expertise required"}
                    </li>
                  </ul>
                  <Link
                    href="/immersive-insight"
                    className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-4 focus:ring-offset-black"
                    aria-label={
                      language === "de"
                        ? "Immersive Insight Produktdetails ansehen"
                        : "View Immersive Insight product details"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {language === "de" ? "Produkt entdecken" : "Discover product"}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Future Products Teaser */}
          </div>
        </section>

        {/* Projects Section - moved after products */}
        <section id="projects" className="py-20 md:py-32 bg-black" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="projects-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "UNSERE PROJEKTE" : "OUR PROJECTS"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Entdecken Sie unsere innovativen VR/AR-Lösungen und immersiven Erlebnisse"
                  : "Discover our innovative VR/AR solutions and immersive experiences"}
              </p>
            </motion.div>

            {/* Featured Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-white/10 transition-shadow duration-500">
                  <Image
                    src="/images/projects/memoria/memoria-cover.png"
                    alt={
                      language === "de"
                        ? "Memoria VR-Projekt - Demenz-Simulation"
                        : "Memoria VR project - Dementia simulation"
                    }
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    priority={false}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {language === "de" ? "Hauptprojekt" : "Featured Project"}
                    </span>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <h3 className="text-3xl font-light mb-4 text-white">Memoria</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Ein immersives VR-Erlebnis, das den fortschreitenden Gedächtnisverlust bei Demenz durch eine interaktive Umgebung erfahrbar macht."
                      : "An immersive VR experience that makes the progressive memory loss of dementia tangible through an interactive environment."}
                  </p>
                  <Link
                    href="/memoria"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-white via-gray-100 to-white text-black font-medium rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-4 focus:ring-offset-gray-900"
                    aria-label={
                      language === "de" ? "Memoria Projekt im Detail ansehen" : "View Memoria project in detail"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {language === "de" ? "Projekt entdecken" : "Discover project"}
                      <ArrowRight
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </ArrowRight>
                    </span>
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Project Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              role="list"
              aria-label={language === "de" ? "Weitere Projekte" : "Additional projects"}
            >
              {/* Project 1 - CNC Machine */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="group"
                role="listitem"
              >
                <Link
                  href="/cnc-machine"
                  className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-2xl hover:shadow-2xl hover:shadow-white/10 transition-shadow duration-500"
                  aria-label={
                    language === "de"
                      ? "CNC Machine VR-Training Projekt ansehen"
                      : "View CNC Machine VR training project"
                  }
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    {/* Static image that shows by default */}
                    <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                      <Image
                        src="/images/projects/cnc-machine/cnc-cover.jpg"
                        alt={language === "de" ? "CNC-Maschine VR-Simulation" : "CNC machine VR simulation"}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        aria-hidden="true"
                      ></div>
                    </div>

                    {/* Video that shows on hover */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <video
                        src="/videos/cnc-machine-hover.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-label={
                          language === "de" ? "CNC Machine Projekt Vorschau-Video" : "CNC Machine project preview video"
                        }
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">CNC Machine</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {language === "de"
                      ? "Eine VR-Simulation für das Training an CNC-Maschinen, die realistische Bedienung und Sicherheitsaspekte vermittelt."
                      : "A VR simulation for training on CNC machines that conveys realistic operation and safety aspects."}
                  </p>
                </Link>
              </motion.article>

              {/* Project 2 - MixMasterVR */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="group"
                role="listitem"
              >
                <Link
                  href="/mix-master-vr"
                  className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-2xl hover:shadow-2xl hover:shadow-white/10 transition-shadow duration-500"
                  aria-label={
                    language === "de"
                      ? "MixMasterVR Cocktail-Mixing Projekt ansehen"
                      : "View MixMasterVR cocktail mixing project"
                  }
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    {/* Static image that shows by default */}
                    <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                      <Image
                        src="/images/projects/mixmaster/mixmaster-cover.png"
                        alt={
                          language === "de" ? "MixMasterVR virtuelle Cocktail-Bar" : "MixMasterVR virtual cocktail bar"
                        }
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        aria-hidden="true"
                      ></div>
                    </div>

                    {/* Video that shows on hover */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <video
                        src="/videos/mixmaster-hover.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-label={
                          language === "de" ? "MixMasterVR Projekt Vorschau-Video" : "MixMasterVR project preview video"
                        }
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">MixMasterVR</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {language === "de"
                      ? "Eine virtuelle Cocktail-Mixing-Umgebung, die es Benutzern ermöglicht, Getränke in einer immersiven 3D-Bar zu mischen."
                      : "A virtual cocktail mixing environment that allows users to mix drinks in an immersive 3D bar."}
                  </p>
                </Link>
              </motion.article>

              {/* View All Projects Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="group"
                role="listitem"
              >
                <Link
                  href="/projects"
                  className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-2xl hover:shadow-2xl hover:shadow-white/10 transition-shadow duration-500"
                  aria-label={language === "de" ? "Alle Projekte ansehen" : "View all projects"}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div
                        className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-white">
                        {language === "de" ? "Weitere Projekte" : "More Projects"}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {language === "de" ? "Alle Projekte entdecken" : "Discover all projects"}
                      </p>
                    </div>
                  </div>
                  <div className="h-[52px]" aria-hidden="true"></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
          aria-labelledby="services-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "UNSERE LEISTUNGEN" : "OUR SERVICES"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Von der Konzeption bis zur Umsetzung – wir bieten umfassende VR/AR-Lösungen"
                  : "From conception to implementation – we offer comprehensive VR/AR solutions"}
              </p>
            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              role="list"
              aria-label={language === "de" ? "Unsere Dienstleistungen" : "Our services"}
            >
              {/* Service 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                role="listitem"
              >
                <div className="p-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/services/software-development.jpg"
                      alt={
                        language === "de"
                          ? "Software-Entwicklung Team bei der Arbeit"
                          : "Software development team at work"
                      }
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-white">
                      {language === "de" ? "Software-Entwicklung" : "Software Development"}
                    </h3>
                    <p className="text-gray-400 mb-4 min-h-[100px] leading-relaxed">
                      {language === "de"
                        ? "Maßgeschneiderte VR/AR-Anwendungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind. Von der ersten Idee bis zur finalen Implementierung."
                        : "Customized VR/AR applications perfectly tailored to your needs. From the initial idea to final implementation."}
                    </p>
                    <ul className="space-y-2 text-gray-400 mb-6" role="list">
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Unity & Unreal Engine" : "Unity & Unreal Engine"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Cross-Platform Entwicklung" : "Cross-Platform Development"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Performance-Optimierung" : "Performance Optimization"}
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.article>

              {/* Service 2 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                role="listitem"
              >
                <div className="p-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/services/consulting.jpg"
                      alt={
                        language === "de"
                          ? "Beratungsgespräch und Ideenentwicklung"
                          : "Consulting meeting and concept development"
                      }
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-white">
                      {language === "de" ? "Beratung & Ideenentwicklung" : "Consulting & Concept Development"}
                    </h3>
                    <p className="text-gray-400 mb-4 min-h-[100px] leading-relaxed">
                      {language === "de"
                        ? "Strategische Beratung und kreative Konzeptentwicklung für Ihre VR/AR-Projekte. Wir helfen Ihnen dabei, das Potenzial immersiver Technologien zu entdecken."
                        : "Strategic consulting and creative concept development for your VR/AR projects. We help you discover the potential of immersive technologies."}
                    </p>
                    <ul className="space-y-2 text-gray-400 mb-6" role="list">
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Machbarkeitsstudien" : "Feasibility Studies"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Technologie-Beratung" : "Technology Consulting"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Prototyping" : "Prototyping"}
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.article>

              {/* Service 3 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                role="listitem"
              >
                <div className="p-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/services/exhibitions.jpg"
                      alt={language === "de" ? "Messestand mit VR-Technologie" : "Exhibition booth with VR technology"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-white">
                      {language === "de" ? "Mithilfe bei Ausstellungen" : "Exhibition Support"}
                    </h3>
                    <p className="text-gray-400 mb-4 min-h-[100px] leading-relaxed">
                      {language === "de"
                        ? "Professionelle Unterstützung bei Messen und Ausstellungen. Wir sorgen dafür, dass Ihre VR/AR-Präsentation ein voller Erfolg wird."
                        : "Professional support for trade shows and exhibitions. We ensure that your VR/AR presentation is a complete success."}
                    </p>
                    <ul className="space-y-2 text-gray-400 mb-6" role="list">
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Technischer Support" : "Technical Support"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Equipment-Bereitstellung" : "Equipment Provision"}
                      </li>
                      <li className="flex items-center" role="listitem">
                        <svg
                          className="h-4 w-4 mr-2 text-white flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === "de" ? "Vor-Ort-Betreuung" : "On-site Support"}
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700/50 hover:border-gray-600/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-white">
                    {language === "de" ? "Bereit für Ihr VR-Projekt?" : "Ready for your VR project?"}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === "de"
                      ? "Lassen Sie uns gemeinsam Ihre Vision in eine immersive Realität verwandeln. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch."
                      : "Let's work together to turn your vision into an immersive reality. Contact us for a non-binding consultation."}
                  </p>
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-white via-gray-100 to-white text-black font-medium rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-4 focus:ring-offset-gray-900"
                    aria-label={
                      language === "de"
                        ? "Kontaktformular für Projektbesprechung öffnen"
                        : "Open contact form for project discussion"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {language === "de" ? "Projekt besprechen" : "Discuss project"}
                      <ArrowRight
                        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden hidden md:block">
                  <Image
                    src="/images/services/cta-background.png"
                    alt={language === "de" ? "VR-Erlebnis Visualisierung" : "VR experience visualization"}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="about" className="py-20 md:py-32 bg-black" aria-labelledby="team-heading">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="team-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "UNSER TEAM" : "OUR TEAM"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Leidenschaft für Innovation trifft auf technische Expertise"
                  : "Passion for innovation meets technical expertise"}
              </p>
            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
              role="list"
              aria-label={language === "de" ? "Teammitglieder" : "Team members"}
            >
              {/* Team Member 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center"
                role="listitem"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/team/daniel.jpg"
                    alt={
                      language === "de"
                        ? "Daniel Zirngast, Mitgründer von Virtual Visions"
                        : "Daniel Zirngast, co-founder of Virtual Visions"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-white">Daniel Zirngast</h3>
                <p className="text-gray-400 text-center max-w-md leading-relaxed">
                  {language === "de"
                    ? "Mit seiner Expertise in VR-Entwicklung und seinem Auge für Details verwandelt Daniel komplexe Ideen in beeindruckende virtuelle Welten."
                    : "With his expertise in VR development and his eye for detail, Daniel transforms complex ideas into impressive virtual worlds."}
                </p>
              </motion.article>

              {/* Team Member 2 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
                role="listitem"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/team/bjarne.jpg"
                    alt={
                      language === "de"
                        ? "Bjarne Zimmer, Mitgründer von Virtual Visions"
                        : "Bjarne Zimmer, co-founder of Virtual Visions"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-white">Bjarne Zimmer</h3>
                <p className="text-gray-400 text-center max-w-md leading-relaxed">
                  {language === "de"
                    ? "Bjarne bringt innovative Konzepte und technische Lösungen zusammen, um VR-Erlebnisse zu schaffen, die nachhaltig beeindrucken."
                    : "Bjarne brings together innovative concepts and technical solutions to create VR experiences that leave a lasting impression."}
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 md:py-32 bg-white text-black" aria-labelledby="partners-heading">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 id="partners-heading" className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4">
                {language === "de" ? "UNSERE PARTNER" : "OUR PARTNERS"}
              </h2>
            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              role="list"
              aria-label={language === "de" ? "Partnerunternehmen" : "Partner companies"}
            >
              {/* Partner 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center"
                role="listitem"
              >
                <Image
                  src="/images/partners/startup-salzburg.png"
                  alt={language === "de" ? "Startup Salzburg Logo" : "Startup Salzburg Logo"}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Partner 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
                role="listitem"
              >
                <Image
                  src="/images/partners/pioniergarage.png"
                  alt={language === "de" ? "Pionier Garage Logo" : "Pionier Garage Logo"}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Partner 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center"
                role="listitem"
              >
                <Image
                  src="/images/partners/med-uni-graz.png"
                  alt={language === "de" ? "Medizinische Universität Graz Logo" : "Medical University of Graz Logo"}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </motion.div>
            </div>

            <div className="mt-16 border-t border-gray-200 pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <Image
                  src="/images/partners/pack-mas-digital.png"
                  alt={language === "de" ? "Pack ma's digital Initiative Logo" : "Pack ma's digital Initiative Logo"}
                  width={300}
                  height={150}
                  className="object-contain mb-6"
                />
                <p className="text-gray-700 text-center max-w-2xl leading-relaxed">
                  {language === "de"
                    ? "Als Teil der 'Pack ma's digital' Initiative fördern wir die Digitalisierung in Österreich und unterstützen Unternehmen bei der digitalen Transformation."
                    : "As part of the 'Pack ma's digital' initiative, we promote digitalization in Austria and support companies in their digital transformation."}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {language === "de" ? "KONTAKT" : "CONTACT"}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === "de"
                  ? "Bereit für Ihr nächstes VR-Projekt? Lassen Sie uns sprechen!"
                  : "Ready for your next VR project? Let's talk!"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-medium mb-6 text-white">
                  {language === "de" ? "Schreiben Sie uns" : "Write to us"}
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {language === "de"
                    ? "Haben Sie Fragen zu unseren VR-Lösungen oder möchten Sie ein Projekt besprechen? Schreiben Sie uns eine E-Mail und wir melden uns schnellstmöglich bei Ihnen zurück."
                    : "Have questions about our VR solutions or want to discuss a project? Send us an email and we'll get back to you as soon as possible."}
                </p>
                <Button
                  asChild
                  className="group bg-gradient-to-r from-white via-gray-100 to-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-4 focus:ring-offset-gray-900"
                >
                  <Link
                    href="mailto:business.virtualvisions@gmail.com?subject=Anfrage%20über%20Website&body=Hallo%20Virtual%20Visions%20Team,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20VR-Lösungen%20und%20hätte%20gerne%20weitere%20Informationen.%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                    aria-label={
                      language === "de" ? "E-Mail an Virtual Visions senden" : "Send email to Virtual Visions"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {language === "de" ? "E-Mail senden" : "Send Email"}{" "}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-medium mb-6 text-white">
                  {language === "de" ? "Kontaktinformationen" : "Contact Information"}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-2">{language === "de" ? "E-Mail" : "Email"}</h4>
                    <p className="text-gray-400">
                      <a
                        href="mailto:business.virtualvisions@gmail.com"
                        className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={
                          language === "de"
                            ? "E-Mail an business.virtualvisions@gmail.com senden"
                            : "Send email to business.virtualvisions@gmail.com"
                        }
                      >
                        business.virtualvisions@gmail.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-2">
                      {language === "de" ? "Telefon" : "Phone"}
                    </h4>
                    <p className="text-gray-400">
                      <a
                        href="tel:+4365026011493"
                        className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={language === "de" ? "Anrufen: +43 650 2601493" : "Call: +43 650 2601493"}
                      >
                        +43 650 2601493
                      </a>
                    </p>
                    <p className="text-gray-400">
                      <a
                        href="tel:+4915142851038"
                        className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={language === "de" ? "Anrufen: +49 151 42851038" : "Call: +49 151 42851038"}
                      >
                        +49 151 42851038
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-2">
                      {language === "de" ? "Soziale Medien" : "Social Media"}
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/virtual___visions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={
                          language === "de"
                            ? "Virtual Visions auf Instagram besuchen"
                            : "Visit Virtual Visions on Instagram"
                        }
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.youtube.com/@VirtualVisionsVR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={
                          language === "de"
                            ? "Virtual Visions auf YouTube besuchen"
                            : "Visit Virtual Visions on YouTube"
                        }
                      >
                        YouTube
                      </a>
                      <a
                        href="https://www.linkedin.com/company/99531770"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                        aria-label={
                          language === "de"
                            ? "Virtual Visions auf LinkedIn besuchen"
                            : "Visit Virtual Visions on LinkedIn"
                        }
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
