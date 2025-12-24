"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Imprint() {
  const { language } = useLanguage()

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
        <section className="py-20 md:py-32 bg-black" aria-labelledby="imprint-hero-heading">
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
              <h1 id="imprint-hero-heading" className="text-4xl md:text-5xl font-light tracking-wider mb-6">
                {language === "de" ? "Impressum" : "Imprint"}
              </h1>
            </div>
          </div>
        </section>

        {/* Imprint Content */}
        <main id="main-content" tabIndex={-1}>
          <section className="py-20 md:py-32 bg-black" aria-labelledby="imprint-content-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 id="imprint-content-heading" className="sr-only">
                  {language === "de" ? "Impressum Inhalte" : "Imprint Contents"}
                </h2>

                <div className="space-y-12">
                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Firmeninformationen" : "Company Information"}
                    </h3>
                    <address className="text-gray-300 not-italic leading-relaxed">
                      <strong>Virtual Visions</strong>
                      <br />
                      Steinfeldstraße 9<br />
                      8504 Preding
                      <br />
                      Österreich
                    </address>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">{language === "de" ? "Kontakt" : "Contact"}</h3>
                    <div className="text-gray-300 space-y-2">
                      <p>
                        <strong>{language === "de" ? "Telefon" : "Phone"}:</strong>{" "}
                        <a
                          href="tel:+43650260149"
                          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                          aria-label={language === "de" ? "Anrufen: +43 650 2601493" : "Call: +43 650 2601493"}
                        >
                          +43 650 2601493
                        </a>{" "}
                        /{" "}
                        <a
                          href="tel:+4915142851038"
                          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                          aria-label={language === "de" ? "Anrufen: +49 151 42851038" : "Call: +49 151 42851038"}
                        >
                          +49 151 42851038
                        </a>
                      </p>
                      <p>
                        <strong>{language === "de" ? "E-Mail" : "Email"}:</strong>{" "}
                        <a
                          href="mailto:business.virtualvisions@gmail.com"
                          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                          aria-label={
                            language === "de"
                              ? "E-Mail senden an business.virtualvisions@gmail.com"
                              : "Send email to business.virtualvisions@gmail.com"
                          }
                        >
                          business.virtualvisions@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong>Internet:</strong> virtual-visions.net
                      </p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Handelsregister" : "Commercial Register"}
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <p>
                        <strong>{language === "de" ? "Registereintrag" : "Register Entry"}</strong>
                      </p>
                      <p>Firmenbuchnummer: 616191p</p>
                      <p>UID: ATU80353804</p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">{language === "de" ? "Umsatzsteuer-ID" : "VAT ID"}</h3>
                    <p className="text-gray-300">
                      <strong>
                        {language === "de" ? "Umsatzsteuer-Identifikationsnummer" : "VAT Identification Number"}:
                      </strong>
                      <br />
                      ATU80353804
                    </p>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Verantwortlich für den Inhalt" : "Responsible for Content"}
                    </h3>
                    <p className="text-gray-300">
                      {language === "de"
                        ? "vertreten durch die Gesellschafter Bjarne Zimmer und Daniel Zirngast"
                        : "represented by partners Bjarne Zimmer and Daniel Zirngast"}
                    </p>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Streitschlichtung" : "Dispute Resolution"}
                    </h3>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        <strong>
                          {language === "de"
                            ? "Plattform zur Online-Streitbeilegung (OS) für Verbraucher"
                            : "Online dispute resolution platform (ODR) for consumers"}
                          :
                        </strong>
                      </p>
                      <p>
                        <a
                          href="https://ec.europa.eu/consumers/odr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                          aria-label={
                            language === "de"
                              ? "EU Online-Streitbeilegungsplattform öffnen (öffnet in neuem Tab)"
                              : "Open EU Online Dispute Resolution Platform (opens in new tab)"
                          }
                        >
                          https://ec.europa.eu/consumers/odr/
                          <span className="sr-only">
                            {language === "de" ? " (öffnet in neuem Tab)" : " (opens in new tab)"}
                          </span>
                        </a>
                      </p>
                      <p>
                        {language === "de"
                          ? "Unsere E-Mail-Adresse finden Sie oben im Impressum."
                          : "You can find our email address above in the imprint."}
                      </p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Haftung für Inhalte" : "Liability for Content"}
                    </h3>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        {language === "de"
                          ? "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
                          : "As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under general laws. According to §§ 8 to 10 TMG, however, we as service providers are not under the obligation to monitor transmitted or stored third-party information or to research circumstances that indicate illegal activity."}
                      </p>
                      <p>
                        {language === "de"
                          ? "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
                          : "Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding legal violations, we will remove this content immediately."}
                      </p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">
                      {language === "de" ? "Haftung für Links" : "Liability for Links"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."
                        : "Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any guarantee for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking."}
                    </p>
                  </article>

                  <article>
                    <h3 className="text-2xl font-medium mb-4">{language === "de" ? "Urheberrecht" : "Copyright"}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {language === "de"
                        ? "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."
                        : "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use."}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
