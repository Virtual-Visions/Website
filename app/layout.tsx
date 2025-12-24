import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { Analytics } from "@/components/analytics"
import { CookieConsent } from "@/components/cookie-consent"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Virtual Visions - Innovative VR/AR Solutions",
    template: "%s | Virtual Visions",
  },
  description:
    "Innovative VR/AR-Lösungen für Ihr Unternehmen. Wir entwickeln maßgeschneiderte immersive Erlebnisse für Training, Simulation und Präsentation.",
  keywords: "VR, AR, Virtual Reality, Augmented Reality, Training, Simulation, Unreal Engine, Unity, Österreich",
  authors: [{ name: "Virtual Visions" }],
  creator: "Virtual Visions",
  publisher: "Virtual Visions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    alternateLocale: ["en_US"],
    url: "https://virtual-visions.net",
    siteName: "Virtual Visions",
    title: "Virtual Visions - Innovative VR/AR Solutions",
    description: "Innovative VR/AR-Lösungen für Ihr Unternehmen. Wir entwickeln maßgeschneiderte immersive Erlebnisse.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virtual Visions - VR/AR Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Visions - Innovative VR/AR Solutions",
    description: "Innovative VR/AR-Lösungen für Ihr Unternehmen.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://virtual-visions.net" />
        <link rel="alternate" hrefLang="de" href="https://virtual-visions.net" />
        <link rel="alternate" hrefLang="en" href="https://virtual-visions.net/en" />
        <link rel="alternate" hrefLang="x-default" href="https://virtual-visions.net" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Suspense fallback={null}>
              {/* Skip to main content - Global */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Zum Hauptinhalt springen
              </a>

              <Header />
              <main id="main-content" tabIndex={-1} className="focus:outline-none">
                {children}
              </main>
              <Footer />
              <CookieConsent />
              <Analytics />

              {/* Live region for announcements */}
              <div aria-live="polite" aria-atomic="true" className="sr-only" id="announcements"></div>
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
