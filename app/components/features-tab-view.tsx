"use client"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

const FeaturesTabView = () => {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("realisticGraphics")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const tabData = [
    {
      id: "realisticGraphics",
      title: language === "de" ? "Realistische Grafik" : "Realistic Graphics",
      video: "/videos/realistic-graphics.mp4",
      description:
        language === "de"
          ? "Unsere VR-Lösungen bieten fotorealistische Grafiken, die kaum von der Realität zu unterscheiden sind. Durch modernste Rendering-Technologien schaffen wir immersive Umgebungen mit beeindruckenden visuellen Details."
          : "Our VR solutions offer photorealistic graphics that are barely distinguishable from reality. Through state-of-the-art rendering technologies, we create immersive environments with impressive visual details.",
      features: [
        language === "de" ? "Fotorealistische Texturen" : "Photorealistic textures",
        language === "de" ? "Dynamische Beleuchtung" : "Dynamic lighting",
        language === "de" ? "Hochdetaillierte 3D-Modelle" : "Highly detailed 3D models",
      ],
    },
    {
      id: "realisticInteraction",
      title: language === "de" ? "Realistische Interaktion" : "Realistic Interaction",
      video: "/videos/realistic-interaction.mp4",
      description:
        language === "de"
          ? "Unsere VR-Anwendungen ermöglichen natürliche und intuitive Interaktionen mit virtuellen Objekten. Durch präzises Handtracking und haptisches Feedback fühlt sich die virtuelle Welt real an."
          : "Our VR applications enable natural and intuitive interactions with virtual objects. Through precise hand tracking and haptic feedback, the virtual world feels real.",
      features: [
        language === "de" ? "Präzises Handtracking" : "Precise hand tracking",
        language === "de" ? "Physikbasierte Interaktionen" : "Physics-based interactions",
        language === "de" ? "Natürliche Bewegungssteuerung" : "Natural motion control",
      ],
    },
    {
      id: "digitalTwin",
      title: language === "de" ? "Digitaler Zwilling" : "Digital Twin",
      video: "/videos/digital-twin.mp4",
      description:
        language === "de"
          ? "Wir erstellen präzise digitale Zwillinge von realen Umgebungen und Maschinen. Diese virtuellen Replikate ermöglichen effizientes Training, Planung und Simulation ohne Risiken oder Produktionsunterbrechungen."
          : "We create precise digital twins of real environments and machines. These virtual replicas enable efficient training, planning, and simulation without risks or production interruptions.",
      features: [
        language === "de" ? "Exakte Nachbildungen" : "Exact replications",
        language === "de" ? "Realistische Simulationen" : "Realistic simulations",
        language === "de" ? "Datengesteuerte Modelle" : "Data-driven models",
      ],
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList
          className="grid w-full grid-cols-3 mb-8 bg-transparent p-0 gap-3"
          role="tablist"
          aria-label={language === "de" ? "VR-Technologie Features" : "VR Technology Features"}
        >
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative text-sm md:text-base font-medium transition-all duration-300 px-6 py-4 rounded-xl border-2 border-gray-700/50 bg-gray-900/30 backdrop-blur-sm hover:border-gray-600 data-[state=active]:border-white data-[state=active]:bg-white/5 data-[state=active]:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              role="tab"
              aria-controls={`${tab.id}-panel`}
              aria-selected={activeTab === tab.id}
            >
              <span className="relative z-10 text-gray-300 data-[state=active]:text-white group-data-[state=active]:text-white">
                {tab.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabData.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="mt-0 focus:outline-none"
            role="tabpanel"
            id={`${tab.id}-panel`}
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    aria-label={`${language === "de" ? "Demonstration von" : "Demonstration of"} ${tab.title}`}
                  >
                    <source src={tab.video} type="video/mp4" />
                    {language === "de"
                      ? "Ihr Browser unterstützt das Video-Tag nicht."
                      : "Your browser does not support the video tag."}
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {tab.title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{tab.description}</p>
                <ul className="space-y-4" role="list">
                  {tab.features.map((feature, index) => (
                    <li key={index} className="flex items-center group" role="listitem">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default FeaturesTabView
