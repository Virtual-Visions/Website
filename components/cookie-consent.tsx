"use client"

import { useState, useEffect } from "react"
import { X, Shield, AlertTriangle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const { language, t } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent")
    if (!savedConsent) {
      // Show banner immediately
      setShowBanner(true)
    } else {
      try {
        setConsent(JSON.parse(savedConsent))
      } catch (e) {
        // If parsing fails, show banner again
        setShowBanner(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setConsent(newConsent)
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent))
    setShowBanner(false)
    // Here you would initialize your analytics and marketing cookies
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
    // Here you would initialize cookies based on user selection
  }

  const rejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setConsent(newConsent)
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent))
    setShowBanner(false)
    // Here you would ensure analytics and marketing cookies are not set
  }

  const handleChange = (type: keyof CookieConsent) => {
    if (type === "necessary") return // Cannot change necessary cookies
    setConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative w-full max-w-3xl bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700"></div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-gray-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    {language === "de" ? "Cookie-Einstellungen" : "Cookie Settings"}
                  </h3>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  {language === "de"
                    ? "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
                    : "We use cookies to provide you with the best possible experience on our website. For more information, please see our Privacy Policy."}
                </p>
                <div className="flex items-center text-amber-400 bg-amber-900/20 p-3 rounded-lg">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-sm">
                    {language === "de"
                      ? "Einige Funktionen der Website sind ohne Cookies möglicherweise eingeschränkt."
                      : "Some features of the website may be limited without cookies."}
                  </p>
                </div>
              </div>

              {showSettings ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 space-y-4 bg-gray-800/50 p-5 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white flex items-center">
                        <Check className="h-4 w-4 text-green-400 mr-2" />
                        {language === "de" ? "Notwendige Cookies" : "Necessary Cookies"}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {language === "de"
                          ? "Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden."
                          : "These cookies are required for the website to function and cannot be disabled."}
                      </p>
                    </div>
                    <div className="relative">
                      <input type="checkbox" checked={consent.necessary} disabled className="sr-only" id="necessary" />
                      <label
                        htmlFor="necessary"
                        className="block w-12 h-6 bg-green-900/30 rounded-full cursor-not-allowed relative"
                      >
                        <span
                          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform bg-green-400 transform translate-x-6`}
                        ></span>
                      </label>
                    </div>
                  </div>

                  <div className="h-px bg-gray-700/50 my-4"></div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">
                        {language === "de" ? "Analyse-Cookies" : "Analytics Cookies"}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {language === "de"
                          ? "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren."
                          : "These cookies help us understand how visitors interact with our website."}
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={() => handleChange("analytics")}
                        className="sr-only"
                        id="analytics"
                      />
                      <label
                        htmlFor="analytics"
                        className="block w-12 h-6 bg-gray-700 rounded-full cursor-pointer relative"
                      >
                        <span
                          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform bg-white ${
                            consent.analytics ? "transform translate-x-6 bg-gray-300" : ""
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>

                  <div className="h-px bg-gray-700/50 my-4"></div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">
                        {language === "de" ? "Marketing-Cookies" : "Marketing Cookies"}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {language === "de"
                          ? "Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten."
                          : "These cookies are used to make advertising more relevant to you."}
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={() => handleChange("marketing")}
                        className="sr-only"
                        id="marketing"
                      />
                      <label
                        htmlFor="marketing"
                        className="block w-12 h-6 bg-gray-700 rounded-full cursor-pointer relative"
                      >
                        <span
                          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform bg-white ${
                            consent.marketing ? "transform translate-x-6 bg-gray-300" : ""
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              ) : null}

              <div className="flex flex-wrap gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
                >
                  {language === "de" ? "Alle ablehnen" : "Reject All"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(!showSettings)}
                  className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
                >
                  {showSettings
                    ? language === "de"
                      ? "Einstellungen ausblenden"
                      : "Hide Settings"
                    : language === "de"
                      ? "Einstellungen anzeigen"
                      : "Show Settings"}
                </Button>
                {showSettings && (
                  <Button
                    variant="outline"
                    onClick={acceptSelected}
                    className="bg-gray-700 border-gray-700 text-white hover:bg-gray-600 hover:border-gray-600 transition-all"
                  >
                    {language === "de" ? "Auswahl speichern" : "Save Selection"}
                  </Button>
                )}
                <Button
                  onClick={acceptAll}
                  className="bg-gray-200 text-gray-900 border-0 hover:bg-white transition-all"
                >
                  {language === "de" ? "Alle akzeptieren" : "Accept All"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
