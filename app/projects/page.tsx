"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const { language } = useLanguage()

  const projects = [
    {
      id: "memoria",
      title: "MEMORIA",
      category: "VR Experience",
      description:
        language === "de"
          ? "Ein immersives VR-Erlebnis, das den fortschreitenden Gedächtnisverlust bei Demenz durch eine interaktive Umgebung erfahrbar macht."
          : "An immersive VR experience that makes the progressive memory loss of dementia tangible through an interactive environment.",
      image: "/images/projects/memoria/memoria-cover.jpg",
      href: "/memoria",
    },
    {
      id: "cnc-machine",
      title: "CNC MACHINE",
      category: "VR Training",
      description:
        language === "de"
          ? "Eine VR-Simulation für das Training an CNC-Maschinen, die realistische Bedienung und Sicherheitsaspekte vermittelt."
          : "A VR simulation for training on CNC machines that conveys realistic operation and safety aspects.",
      image: "/images/projects/cnc-machine/cnc-cover.jpg",
      href: "/cnc-machine",
    },
    {
      id: "mixmaster",
      title: "MIXMASTER VR",
      category: "VR Application",
      description:
        language === "de"
          ? "Eine virtuelle Cocktail-Mixing-Umgebung, die es Benutzern ermöglicht, Getränke in einer immersiven 3D-Bar zu mischen."
          : "A virtual cocktail mixing environment that allows users to mix drinks in an immersive 3D bar.",
      image: "/images/projects/mixmaster/mixmaster-cover.jpg",
      href: "/mix-master-vr",
    },
    {
      id: "physics-ui",
      title: "PHYSICS BASED UI",
      category: "Unity Package",
      description:
        language === "de"
          ? "Ein Unity-Paket für physikbasierte Benutzeroberflächen in VR-Anwendungen mit natürlichen Interaktionen."
          : "A Unity package for physics-based user interfaces in VR applications with natural interactions.",
      image: "/images/projects/physics-ui/physics-ui-cover.png",
      href: "/physics-based-ui",
    },
    {
      id: "grabbing",
      title: "GRABBING",
      category: "VR Framework",
      description:
        language === "de"
          ? "Ein VR-Framework für natürliche Greif- und Manipulationsinteraktionen ohne Controller."
          : "A VR framework for natural grasping and manipulation interactions without controllers.",
      image: "/images/projects/grabbing/grabbing-cover.png",
      href: "/grabbing",
    },
    {
      id: "walking",
      title: "WALKING",
      category: "VR Locomotion",
      description:
        language === "de"
          ? "Ein VR-Fortbewegungssystem mit natürlichen Gehbewegungen und Anti-Motion-Sickness-Features."
          : "A VR locomotion system with natural walking movements and anti-motion sickness features.",
      image: "/images/projects/walking/walking-cover.png",
      href: "/walking",
    },
  ]

  const categories = [
    { id: "all", label: language === "de" ? "Alle Projekte" : "All Projects" },
    { id: "VR Experience", label: "VR Experience" },
    { id: "VR Training", label: "VR Training" },
    { id: "VR Application", label: "VR Application" },
    { id: "Unity Package", label: "Unity Package" },
    { id: "VR Framework", label: "VR Framework" },
    { id: "VR Locomotion", label: "VR Locomotion" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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
        <section className="py-20 md:py-32 bg-black" aria-labelledby="projects-hero-heading">
          <div className="container mx-auto px-4">
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
            <div className="max-w-3xl">
              <h1 id="projects-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                {language === "de" ? "Unsere Projekte" : "Our Projects"}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {language === "de"
                  ? "Entdecken Sie unsere innovativen VR/AR-Lösungen und immersiven Erlebnisse, die wir für verschiedene Branchen entwickelt haben."
                  : "Discover our innovative VR/AR solutions and immersive experiences that we have developed for various industries."}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-900" aria-labelledby="projects-filter-heading">
          <div className="container mx-auto px-4">
            <h2 id="projects-filter-heading" className="sr-only">
              {language === "de" ? "Projekte nach Kategorie filtern" : "Filter projects by category"}
            </h2>
            <div
              className="flex flex-wrap gap-4 justify-center"
              role="group"
              aria-label={language === "de" ? "Projekt Filter" : "Project filters"}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    filter === category.id ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  aria-pressed={filter === category.id}
                  aria-label={`${language === "de" ? "Filter nach" : "Filter by"} ${category.label}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="projects-grid-heading">
            <div className="container mx-auto px-4">
              <h2 id="projects-grid-heading" className="sr-only">
                {language === "de" ? "Projekt Übersicht" : "Project Overview"}
              </h2>

              {/* Results announcement for screen readers */}
              <div aria-live="polite" className="sr-only">
                {language === "de"
                  ? `${filteredProjects.length} Projekte gefunden`
                  : `${filteredProjects.length} projects found`}
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
                aria-label={language === "de" ? "Projekt Liste" : "Project list"}
              >
                {filteredProjects.map((project) => (
                  <article key={project.id} className="group" role="listitem">
                    <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-6">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link
                          href={project.href}
                          className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white hover:bg-white/30 transition-colors inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                          aria-label={`${language === "de" ? "Projekt" : "Project"} ${project.title} ${language === "de" ? "entdecken" : "discover"}`}
                        >
                          {language === "de" ? "Entdecken" : "Discover"}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-xl font-light tracking-wider">{project.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg">
                    {language === "de"
                      ? "Keine Projekte in dieser Kategorie gefunden."
                      : "No projects found in this category."}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
            aria-labelledby="projects-cta-heading"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 id="projects-cta-heading" className="text-3xl md:text-4xl font-light tracking-wider mb-6">
                {language === "de" ? "Haben Sie eine Projektidee?" : "Have a project idea?"}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {language === "de"
                  ? "Lassen Sie uns gemeinsam Ihre Vision in eine immersive Realität verwandeln. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch."
                  : "Let's work together to turn your vision into an immersive reality. Contact us for a non-binding consultation."}
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label={
                  language === "de" ? "Kontaktseite öffnen für Projektanfrage" : "Open contact page for project inquiry"
                }
              >
                {language === "de" ? "Projekt besprechen" : "Discuss Project"}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
