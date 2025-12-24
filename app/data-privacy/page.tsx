"use client"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const DataPrivacyPage = () => {
  const { language } = useLanguage()

  const germanContent = (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Datenschutzerklärung</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Virtual Visions GbR</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Fassung 30.01.2024-112709565</p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inhaltsverzeichnis</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Einleitung und Überblick</li>
          <li>• Anwendungsbereich</li>
          <li>• Rechtsgrundlagen</li>
          <li>• Kontaktdaten des Verantwortlichen</li>
          <li>• Speicherdauer</li>
          <li>• Rechte laut Datenschutz-Grundverordnung</li>
          <li>• Kommunikation</li>
          <li>• Social Media Einleitung</li>
          <li>• Audio & Video Einleitung</li>
          <li>• Erklärung verwendeter Begriffe</li>
          <li>• Schlusswort</li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Einleitung und Überblick */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Einleitung und Überblick</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Wir haben diese Datenschutzerklärung (Fassung 30.01.2024-112709565) verfasst, um Ihnen gemäß der Vorgaben
              der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche
              personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten
              Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen
              Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-6">
              <p className="font-medium text-blue-800 dark:text-blue-200">
                Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
              </p>
            </div>
            <p className="mb-4">
              Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese
              Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich
              beschreiben. Soweit es der Transparenz förderlich ist, werden technische Begriffe leserfreundlich erklärt,
              Links zu weiterführenden Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in
              klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene
              Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist.
            </p>
            <p className="mb-4">
              Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte
              verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf
              Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.
            </p>
          </div>
        </section>

        {/* Anwendungsbereich */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Anwendungsbereich</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und
              für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit
              personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name,
              E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt
              dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder
              offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
              <li>Social Media Auftritte und E-Mail-Kommunikation</li>
              <li>mobile Apps für Smartphones und andere Geräte</li>
            </ul>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 my-6">
              <p className="font-medium text-green-800 dark:text-green-200">
                Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im
                Unternehmen über die genannten Kanäle strukturiert verarbeitet werden.
              </p>
            </div>
          </div>
        </section>

        {/* Rechtsgrundlagen */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Rechtsgrundlagen</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen
              Grundsätzen und Vorschriften, die uns ermöglichen, personenbezogene Daten zu verarbeiten. Was das EU-Recht
              betrifft, beziehen wir uns auf die Datenschutz-Grundverordnung (DSGVO). Diese Verordnung ist ein
              Rahmenrecht, das innerhalb der Europäischen Union einheitliche Regeln zum Datenschutz schafft.
            </p>
            <p className="mb-4">
              Die Verarbeitung personenbezogener Daten ist nur erlaubt, wenn mindestens eine der folgenden Bedingungen
              zutrifft:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen
                  Daten für einen bestimmten Zweck gegeben.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Vertrag (Art. 6 Abs. 1 lit. b DSGVO)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen ist die Verarbeitung der
                  Daten erforderlich.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Die Verarbeitung der Daten ist erforderlich, um einer rechtlichen Verpflichtung nachzukommen.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten
                  erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person
                  überwiegen.
                </p>
              </div>
            </div>
            <p className="mb-4">
              In Österreich ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung
              personenbezogener Daten (Datenschutzgesetz), kurz DSG. In Deutschland gilt das Bundesdatenschutzgesetz,
              kurz BDSG.
            </p>
          </div>
        </section>

        {/* Kontaktdaten des Verantwortlichen */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Kontaktdaten des Verantwortlichen
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie
              nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:
            </p>
            <div className="space-y-2 text-gray-900 dark:text-white">
              <p className="font-semibold">Virtual Visions GbR</p>
              <p>Daniel Zirngast</p>
              <p>Steinfeldstraße 9, 8504 Preding, Österreich</p>
              <p>Vertretungsberechtigt: Daniel Zirngast</p>
              <p>E-Mail: business.virtualvisions@gmail.com</p>
              <p>Telefon: +43 650 260 14 93</p>
              <p>
                Impressum:{" "}
                <Link href="/imprint" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://virtual-visions.net/imprint
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Speicherdauer */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Speicherdauer</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer
              Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das
              bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr
              vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall
              des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.
            </p>
            <p className="mb-4">
              Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen,
              werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.
            </p>
          </div>
        </section>

        {/* Rechte laut DSGVO */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Rechte laut Datenschutz-Grundverordnung
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6">
              Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu
              einer fairen und transparenten Verarbeitung von Daten kommt:
            </p>
            <div className="grid gap-4 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Sie haben das Recht darüber Auskunft zu erhalten, ob wir Daten von Ihnen verarbeiten und eine Kopie
                  der Daten zu erhalten.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Recht auf Berichtigung (Art. 16 DSGVO)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Sie haben das Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen,
                  falls Sie Fehler finden.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recht auf Löschung (Art. 17 DSGVO)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Sie haben das Recht auf Löschung („Recht auf Vergessenwerden"), was konkret bedeutet, dass Sie die
                  Löschung Ihrer Daten verlangen dürfen.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Sie haben ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich
                  bringt.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-medium text-yellow-800 dark:text-yellow-200">
                Kurz gesagt: Sie haben Rechte – zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu
                kontaktieren!
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Österreich Datenschutzbehörde</h4>
              <div className="space-y-1 text-gray-700 dark:text-gray-300">
                <p>Leiterin: Mag. Dr. Andrea Jelinek</p>
                <p>Adresse: Barichgasse 40-42, 1030 Wien</p>
                <p>Telefonnr.: +43 1 52 152-0</p>
                <p>E-Mail-Adresse: dsb@dsb.gv.at</p>
                <p>
                  Website:{" "}
                  <a href="https://www.dsb.gv.at/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    https://www.dsb.gv.at/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kommunikation */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Kommunikation</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Kommunikation Zusammenfassung</h3>
            <div className="space-y-2 text-blue-800 dark:text-blue-200">
              <p>
                👥 <strong>Betroffene:</strong> Alle, die mit uns per Telefon, E-Mail oder Online-Formular kommunizieren
              </p>
              <p>
                📓 <strong>Verarbeitete Daten:</strong> z. B. Telefonnummer, Name, E-Mail-Adresse, eingegebene
                Formulardaten
              </p>
              <p>
                🤝 <strong>Zweck:</strong> Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.
              </p>
              <p>
                📅 <strong>Speicherdauer:</strong> Dauer des Geschäftsfalls und der gesetzlichen Vorschriften
              </p>
              <p>
                ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b
                DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
              </p>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur
              Verarbeitung personenbezogener Daten kommen. Die Daten werden für die Abwicklung und Bearbeitung Ihrer
              Frage und des damit zusammenhängenden Geschäftsvorgangs verarbeitet.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Telefon</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Anrufdaten werden pseudonymisiert gespeichert. Daten werden gelöscht, sobald der Geschäftsfall beendet
                  wurde.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">E-Mail</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Daten werden auf Endgeräten und E-Mail-Servern gespeichert. Löschung erfolgt nach Geschäftsfall-Ende.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Online Formulare</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Daten werden auf unserem Webserver gespeichert und gegebenenfalls weitergeleitet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Social Media Einleitung</h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">
              Social Media Datenschutzerklärung Zusammenfassung
            </h3>
            <div className="space-y-2 text-purple-800 dark:text-purple-200">
              <p>
                👥 <strong>Betroffene:</strong> Besucher der Website
              </p>
              <p>
                🤝 <strong>Zweck:</strong> Darstellung und Optimierung unserer Serviceleistung, Kontakt zu Besuchern,
                Werbung
              </p>
              <p>
                📓 <strong>Verarbeitete Daten:</strong> Kontaktdaten, Nutzerverhalten, Geräteinformationen, IP-Adresse
              </p>
              <p>
                📅 <strong>Speicherdauer:</strong> abhängig von den verwendeten Social-Media-Plattformen
              </p>
              <p>
                ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                DSGVO (Berechtigte Interessen)
              </p>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv. Dabei können Daten
              von Usern verarbeitet werden, damit wir gezielt User, die sich für uns interessieren, über die sozialen
              Netzwerke ansprechen können.
            </p>
            <p className="mb-4">
              Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen auch Daten von Ihnen außerhalb der
              Europäischen Union verarbeitet werden können, da viele Social-Media-Kanäle amerikanische Unternehmen sind.
            </p>
          </div>
        </section>

        {/* Audio & Video */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Audio & Video Einleitung</h2>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-4">
              Audio & Video Datenschutzerklärung Zusammenfassung
            </h3>
            <div className="space-y-2 text-green-800 dark:text-green-200">
              <p>
                👥 <strong>Betroffene:</strong> Besucher der Website
              </p>
              <p>
                🤝 <strong>Zweck:</strong> Optimierung unserer Serviceleistung
              </p>
              <p>
                📓 <strong>Verarbeitete Daten:</strong> Kontaktdaten, Nutzerverhalten, Geräteinformationen, IP-Adresse
              </p>
              <p>
                📅 <strong>Speicherdauer:</strong> Daten bleiben grundsätzlich gespeichert, solange sie für den
                Dienstzweck nötig sind
              </p>
              <p>
                ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                DSGVO (Berechtigte Interessen)
              </p>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Wir haben auf unsere Website Audio- bzw. Videoelemente eingebunden, damit Sie sich direkt über unsere
              Website etwa Videos ansehen oder Musik/Podcasts anhören können. Die Inhalte werden von Dienstanbietern zur
              Verfügung gestellt.
            </p>
            <p className="mb-4">
              Wenn Sie Audio- oder Videoelemente auf unsere Website verwenden, können auch personenbezogene Daten von
              Ihnen an die Dienstanbieter übermittelt, verarbeitet und gespeichert werden.
            </p>
          </div>
        </section>

        {/* Begriffserklärungen */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Erklärung verwendeter Begriffe</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6">
              Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen.
              Nachfolgend finden Sie eine alphabetische Liste von wichtigen verwendeten Begriffen:
            </p>
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Personenbezogene Daten</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Das sind in der Regel Daten wie etwa: Name, Adresse, E-Mail-Adresse, Telefonnummer, Geburtsdatum,
                  Kennnummern, Bankdaten uvm.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Einwilligung</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene
                  Willensbekundung.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Verarbeitung</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang im Zusammenhang mit
                  personenbezogenen Daten wie das Erheben, Erfassen, die Organisation, das Ordnen, die Speicherung, die
                  Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
                  Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung,
                  die Einschränkung, das Löschen oder die Vernichtung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schlusswort */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Schlusswort</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte
              Datenschutzerklärung „gekämpft" oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer
              Datenschutzerklärung sehen, nehmen wir den Schutz Ihrer persönlichen Daten alles andere als auf die
              leichte Schulter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu
              informieren. Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern
              auch die Beweggründe für die Verwendung diverser Softwareprogramme näherbringen.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche
              Stelle zu kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald
              wieder begrüßen zu dürfen.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Alle Texte sind urheberrechtlich geschützt.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Quelle: Erstellt mit dem Datenschutz Generator von AdSimple
            </p>
          </div>
        </section>
      </div>
    </div>
  )

  const englishContent = (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Virtual Visions GbR</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Version 30.01.2024-112709565</p>
      </div>

      {/* Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Language Notice</h2>
        <p className="text-blue-800 dark:text-blue-200">
          This is a simplified English version of our privacy policy. The German version is legally binding and contains
          the complete information about our data processing practices. For the full legal text, please switch to German
          using the language toggle above.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Introduction and Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              We have created this privacy policy to explain to you, in accordance with the requirements of the General
              Data Protection Regulation (EU) 2016/679 and applicable national laws, what personal data we process as
              controllers and what lawful possibilities you have.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-6">
              <p className="font-medium text-blue-800 dark:text-blue-200">
                In short: We provide you with comprehensive information about the data we process about you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Details of the Controller
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              If you have questions about data protection or the processing of personal data, you can find the contact
              details of the responsible person or entity below:
            </p>
            <div className="space-y-2 text-gray-900 dark:text-white">
              <p className="font-semibold">Virtual Visions GbR</p>
              <p>Daniel Zirngast</p>
              <p>Steinfeldstraße 9, 8504 Preding, Austria</p>
              <p>Authorized representative: Daniel Zirngast</p>
              <p>Email: business.virtualvisions@gmail.com</p>
              <p>Phone: +43 650 260 14 93</p>
              <p>
                Imprint:{" "}
                <Link href="/imprint" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://virtual-visions.net/imprint
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Your Rights under GDPR</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6">
              According to Articles 13, 14 GDPR, we inform you about the following rights that you have to ensure fair
              and transparent processing of data:
            </p>
            <div className="grid gap-4 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Right to Information (Art. 15 GDPR)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the right to receive information about whether we process data about you and to receive a
                  copy of the data.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Right to Rectification (Art. 16 GDPR)
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the right to rectification of data, which means we must correct data if you find errors.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Right to Erasure (Art. 17 GDPR)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the right to erasure ("right to be forgotten"), which means you may request the deletion of
                  your data.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Right to Object (Art. 21 GDPR)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You have a right to object, which after enforcement brings about a change in processing.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-medium text-yellow-800 dark:text-yellow-200">
                In short: You have rights – do not hesitate to contact the responsible entity listed above!
              </p>
            </div>
          </div>
        </section>

        {/* Data Processing */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Data Processing</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              We process personal data only as long as it is absolutely necessary for the provision of our services and
              products. This means that we delete personal data as soon as the reason for data processing no longer
              exists.
            </p>
            <p className="mb-4">
              We process your personal data in accordance with applicable data protection regulations, in particular the
              General Data Protection Regulation (GDPR) and the Federal Data Protection Act.
            </p>
          </div>
        </section>

        {/* Communication */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Communication</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              When you contact us by phone, email, or online form, personal data may be processed. The data is processed
              for handling and processing your inquiry and the related business transaction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Call data is stored pseudonymously. Data is deleted once the business case is completed.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Data is stored on devices and email servers. Deletion occurs after the business case ends.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Online Forms</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Data is stored on our web server and may be forwarded if necessary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Conclusion</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We take the protection of your personal data very seriously. It is important to us to inform you to the
              best of our knowledge and belief about the processing of personal data.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              If you have questions about data protection on our website, please do not hesitate to contact us or the
              responsible entity. We wish you a pleasant time and hope to welcome you back to our website soon.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">All texts are protected by copyright.</p>
          </div>
        </section>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">{language === "de" ? germanContent : englishContent}</div>
    </div>
  )
}

export default DataPrivacyPage
