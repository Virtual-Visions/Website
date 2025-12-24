"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

type CookieContextType = {
  consent: CookieConsent
  setConsent: (consent: CookieConsent) => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
  acceptAll: () => void
  acceptSelected: () => void
  rejectAll: () => void
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent")
    if (!savedConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
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

  return (
    <CookieContext.Provider
      value={{
        consent,
        setConsent,
        showBanner,
        setShowBanner,
        acceptAll,
        acceptSelected,
        rejectAll,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieProvider")
  }
  return context
}
