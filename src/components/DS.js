import React, { useContext } from 'react';
import './DS.css'; // Importiere die CSS-Datei
import Footer from './Footer_2.js'; // Importiere die Fußzeilenkomponente
import MenuBar from "./Menu_2.js";
import { LanguageContext } from './LanguageProvider.js'; // Importiere den LanguageContext

function DS() {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext
  return (
    <div className="imprint-container">
      <div><MenuBar /></div>
      <div className="main-content">
        <h1>
          {language === 'de' ? 'Datenschutz der Virtual Visions GbR' : 'Data Privacy of Virtual Visions GbR'}
        </h1>
      </div>
      <div className='body-ds'>
        <h1 class="adsimple-112709565">Datenschutzerklärung</h1>
        <h2>Inhaltsverzeichnis</h2>
        <ul>
          <li>
            <a href="#einleitung-ueberblick">Einleitung und Überblick</a>
          </li>
          <li>
            <a href="#anwendungsbereich">Anwendungsbereich</a>
          </li>
          <li>
            <a href="#rechtsgrundlagen">Rechtsgrundlagen</a>
          </li>
          <li>
            <a href="#kontaktdaten-verantwortliche">Kontaktdaten des Verantwortlichen</a>
          </li>
          <li>
            <a href="#speicherdauer">Speicherdauer</a>
          </li>
          <li>
            <a href="#rechte-dsgvo">Rechte laut Datenschutz-Grundverordnung</a>
          </li>
          <li>
            <a href="#kommunikation">Kommunikation</a>
          </li>
          <li>
            <a href="#social-media-einleitung">Social Media Einleitung</a>
          </li>
          <li>
            <a href="#audio-video-einleitung">Audio &amp; Video Einleitung</a>
          </li>
          <li>
            <a href="#erklaerung-verwendeter-begriffe">Erklärung verwendeter Begriffe</a>
          </li>
          <li>
            <a href="#schlusswort">Schlusswort</a>
          </li>
        </ul>
        <h2 id="einleitung-ueberblick" class="adsimple-112709565">Einleitung und Überblick</h2>
        <p>Wir haben diese Datenschutzerklärung (Fassung 30.01.2024-112709565) verfasst, um Ihnen gemäß der Vorgaben der <a class="adsimple-112709565" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112709565#d1e2269-1-1"  rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
          <strong class="adsimple-112709565">Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.</p>
        <p>Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische <strong class="adsimple-112709565">Begriffe leserfreundlich erklärt</strong>, Links zu weiterführenden Informationen geboten und <strong class="adsimple-112709565">Grafiken</strong> zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.<br />
          Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.</p>
        <h2 id="anwendungsbereich" class="adsimple-112709565">Anwendungsbereich</h2>
        <p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
          <li class="adsimple-112709565">Social Media Auftritte und E-Mail-Kommunikation</li>
          <li class="adsimple-112709565">mobile Apps für Smartphones und andere Geräte</li>
        </ul>
        <p>
          <strong class="adsimple-112709565">Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.</p>
        <h2 id="rechtsgrundlagen" class="adsimple-112709565">Rechtsgrundlagen</h2>
        <p>In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.<br />
          Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter <a class="adsimple-112709565" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679</a> nachlesen.</p>
        <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
        <ol>
          <li class="adsimple-112709565">
            <strong class="adsimple-112709565">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.</li>
          <li class="adsimple-112709565">
            <strong class="adsimple-112709565">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen.</li>
          <li class="adsimple-112709565">
            <strong class="adsimple-112709565">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.</li>
          <li class="adsimple-112709565">
            <strong class="adsimple-112709565">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.</li>
        </ol>
        <p>Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.</p>
        <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">In <strong class="adsimple-112709565">Österreich</strong> ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (<strong class="adsimple-112709565">Datenschutzgesetz</strong>), kurz <strong class="adsimple-112709565">DSG</strong>.</li>
          <li class="adsimple-112709565">In <strong class="adsimple-112709565">Deutschland</strong> gilt das <strong class="adsimple-112709565">Bundesdatenschutzgesetz</strong>, kurz<strong class="adsimple-112709565"> BDSG</strong>.</li>
        </ul>
        <p>Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber.</p>
        <h2 id="kontaktdaten-verantwortliche" class="adsimple-112709565">Kontaktdaten des Verantwortlichen</h2>
        <p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
          <span class="adsimple-112709565" style={{ fontWeight: "700" }}>Virtual Visions OG<br />
            Daniel Zirngast<br />
            Steinfeldstraße 9, 8504 Preding, Österreich</span>
          <br />
          <span style={{ fontWeight: "700" }} >Vertretungsberechtigt: Daniel Zirngast</span>
          <br />
          E-Mail: <a href="mailto:business.virtualvisions@gmail.com">business.virtualvisions@gmail.com</a>
          <br />
          Telefon: <a href="tel:+43 650 260 14 93">+43 650 260 14 93</a>
          <br />
          Impressum: <a href="https://virtual-visions.net/Imprint">https://virtual-visions.net/Imprint</a>
        </p>
        <h2 id="speicherdauer" class="adsimple-112709565">Speicherdauer</h2>
        <p>Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.</p>
        <p>Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.</p>
        <p>Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.</p>
        <h2 id="rechte-dsgvo" class="adsimple-112709565">Rechte laut Datenschutz-Grundverordnung</h2>
        <p>Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
            <ul class="adsimple-112709565">
              <li class="adsimple-112709565">zu welchem Zweck wir die Verarbeitung durchführen;</li>
              <li class="adsimple-112709565">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
              <li class="adsimple-112709565">wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;</li>
              <li class="adsimple-112709565">wie lange die Daten gespeichert werden;</li>
              <li class="adsimple-112709565">das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
              <li class="adsimple-112709565">dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);</li>
              <li class="adsimple-112709565">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
              <li class="adsimple-112709565">ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen.</li>
            </ul>
          </li>
          <li class="adsimple-112709565">Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden.</li>
          <li class="adsimple-112709565">Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.</li>
          <li class="adsimple-112709565">Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.</li>
          <li class="adsimple-112709565">Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.</li>
          <li class="adsimple-112709565">Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
            <ul class="adsimple-112709565">
              <li class="adsimple-112709565">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.</li>
              <li class="adsimple-112709565">Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
              <li class="adsimple-112709565">Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
            </ul>
          </li>
          <li class="adsimple-112709565">Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
          <li class="adsimple-112709565">Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.</li>
        </ul>
        <p>
          <strong class="adsimple-112709565">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!</p>
        <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter <a class="adsimple-112709565" href="https://www.dsb.gv.at/?tid=112709565"  rel="noopener">https://www.dsb.gv.at/</a> finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die <a class="adsimple-112709565" href="https://www.bfdi.bund.de/DE/Home/home_node.html"  rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:</p>
        <h2 id="oesterreich-datenschutzbehoerde" class="adsimple-112709565">Österreich Datenschutzbehörde</h2>
        <p>
          <strong class="adsimple-112709565">Leiterin: </strong>Mag. Dr. Andrea Jelinek<strong class="adsimple-112709565">
            <br />
            Adresse: </strong>Barichgasse 40-42, 1030 Wien<strong class="adsimple-112709565">
            <br />
            Telefonnr.: </strong>+43 1 52 152-0<strong class="adsimple-112709565">
            <br />
            E-Mail-Adresse: </strong>
          <a class="adsimple-112709565" href="mailto:dsb@dsb.gv.at"  rel="noopener">dsb@dsb.gv.at</a>
          <strong class="adsimple-112709565">
            <br />
            Website: </strong>
          <a class="adsimple-112709565" href="https://www.dsb.gv.at/"  rel="noopener">https://www.dsb.gv.at/</a>
        </p>
        <h2 id="kommunikation" class="adsimple-112709565">Kommunikation</h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">Kommunikation Zusammenfassung</strong>
                <br />
                &#x1f465; Betroffene: Alle, die mit uns per Telefon, E-Mail oder Online-Formular kommunizieren<br />
                &#x1f4d3; Verarbeitete Daten: z. B. Telefonnummer, Name, E-Mail-Adresse, eingegebene Formulardaten. Mehr Details dazu finden Sie bei der jeweils eingesetzten Kontaktart<br />
                &#x1f91d; Zweck: Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.<br />
                &#x1f4c5; Speicherdauer: Dauer des Geschäftsfalls und der gesetzlichen Vorschriften<br />
                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
            </tr>
          </tbody>
        </table>
        <p>Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen.</p>
        <p>Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenhängenden Geschäftsvorgangs verarbeitet. Die Daten während eben solange gespeichert bzw. solange es das Gesetz vorschreibt.</p>
        <h3 class="adsimple-112709565">Betroffene Personen</h3>
        <p>Von den genannten Vorgängen sind alle betroffen, die über die von uns bereit gestellten Kommunikationswege den Kontakt zu uns suchen.</p>
        <h3 class="adsimple-112709565">Telefon</h3>
        <p>Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endgerät und beim eingesetzten Telekommunikationsanbieter pseudonymisiert gespeichert. Außerdem können Daten wie Name und Telefonnummer im Anschluss per E-Mail versendet und zur Anfragebeantwortung gespeichert werden. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
        <h3 class="adsimple-112709565">E-Mail</h3>
        <p>Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen Endgerät (Computer, Laptop, Smartphone,&#8230;) gespeichert und es kommt zur Speicherung von Daten auf dem E-Mail-Server. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
        <h3 class="adsimple-112709565">Online Formulare</h3>
        <p>Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver gespeichert und gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
        <h3 class="adsimple-112709565">Rechtsgrundlagen</h3>
        <p>Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung Ihre Daten zu speichern und weiter für den Geschäftsfall betreffende Zwecke zu verwenden;</li>
          <li class="adsimple-112709565">Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit für die Erfüllung eines Vertrags mit Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir müssen die Daten für vorvertragliche Tätigkeiten, wie z. B. die Vorbereitung eines Angebots, verarbeiten;</li>
          <li class="adsimple-112709565">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und geschäftliche Kommunikation in einem professionellen Rahmen betreiben. Dazu sind gewisse technische Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben zu können.</li>
        </ul>
        <h2 id="social-media-einleitung" class="adsimple-112709565">Social Media Einleitung</h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">Social Media Datenschutzerklärung Zusammenfassung</strong>
                <br />
                &#x1f465; Betroffene: Besucher der Website<br />
                &#x1f91d; Zweck: Darstellung und Optimierung unserer Serviceleistung, Kontakt zu Besuchern, Interessenten u.a., Werbung<br />
                &#x1f4d3; Verarbeitete Daten: Daten wie etwa Telefonnummern, E-Mail-Adressen, Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse.<br />
                Mehr Details dazu finden Sie beim jeweils eingesetzten Social-Media-Tool.<br />
                &#x1f4c5; Speicherdauer: abhängig von den verwendeten Social-Media-Plattformen<br />
                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
            </tr>
          </tbody>
        </table>
        <h3 class="adsimple-112709565">Was ist Social Media?</h3>
        <p>Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv. Dabei können Daten von Usern verarbeitet werden, damit wir gezielt User, die sich für uns interessieren, über die sozialen Netzwerke ansprechen können. Darüber hinaus können auch Elemente einer Social-Media-Plattform direkt in unsere Website eingebettet sein. Das ist etwa der Fall, wenn Sie einen sogenannten Social-Button auf unserer Website anklicken und direkt zu unserem Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen Medien oder Social Media werden Websites und Apps bezeichnet, über die angemeldete Mitglieder Inhalte produzieren, Inhalte offen oder in bestimmten Gruppen austauschen und sich mit anderen Mitgliedern vernetzen können.</p>
        <h3 class="adsimple-112709565">Warum nutzen wir Social Media?</h3>
        <p>Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen online kommunizieren und in Kontakt treten. Mit unseren Social-Media-Auftritten können wir unsere Produkte und Dienstleistungen Interessenten näherbringen. Die auf unserer Website eingebundenen Social-Media-Elemente helfen Ihnen, schnell und ohne Komplikationen zu unseren Social-Media-Inhalten wechseln können.</p>
        <p>Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals gespeichert und verarbeitet werden, haben in erster Linie den Zweck, Webanalysen durchführen zu können. Ziel dieser Analysen ist es, genauere und personenbezogene Marketing- und Werbestrategien entwickeln zu können. Abhängig von Ihrem Verhalten auf einer Social-Media-Plattform, können mit Hilfe der ausgewerteten Daten, passende Rückschlüsse auf Ihre Interessen getroffen werden und sogenannte Userprofile erstellt werden. So ist es den Plattformen auch möglich, Ihnen maßgeschneiderte Werbeanzeigen zu präsentieren. Meistens werden für diesen Zweck Cookies in Ihrem Browser gesetzt, die Daten zu Ihrem Nutzungsverhalten speichern.</p>
        <p>Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich verantwortlich bleiben, auch wenn wir Dienste einer Social-Media-Plattform nutzen. Der Europäische Gerichtshof hat jedoch entschieden, dass in bestimmten Fällen der Betreiber der Social-Media-Plattform zusammen mit uns gemeinsam verantwortlich im Sinne des Art. 26 DSGVO sein kann. Soweit dies der Fall ist, weisen wir gesondert darauf hin und arbeiten auf Grundlage einer diesbezüglichen Vereinbarung. Das Wesentliche der Vereinbarung ist dann weiter unten bei der betroffenen Plattform wiedergegeben.</p>
        <p>Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen oder unserer eingebauten Elemente auch Daten von Ihnen außerhalb der Europäischen Union verarbeitet werden können, da viele Social-Media-Kanäle, beispielsweise Facebook oder Twitter, amerikanische Unternehmen sind. Dadurch können Sie möglicherweise Ihre Rechte in Bezug auf Ihre personenbezogenen Daten nicht mehr so leicht einfordern bzw. durchsetzen.</p>
        <h3 class="adsimple-112709565">Welche Daten werden verarbeitet?</h3>
        <p>Welche Daten genau gespeichert und verarbeitet werden, hängt vom jeweiligen Anbieter der Social-Media-Plattform ab. Aber für gewöhnlich handelt es sich um Daten wie etwa Telefonnummern, E-Mailadressen, Daten, die Sie in ein Kontaktformular eingeben, Nutzerdaten wie zum Beispiel welche Buttons Sie klicken, wen Sie liken oder wem folgen, wann Sie welche Seiten besucht haben, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Die meisten dieser Daten werden in Cookies gespeichert. Speziell wenn Sie selbst ein Profil bei dem besuchten Social-Media-Kanal haben und angemeldet sind, können Daten mit Ihrem Profil verknüpft werden.</p>
        <p>Alle Daten, die über eine Social-Media-Plattform erhoben werden, werden auch auf den Servern der Anbieter gespeichert. Somit haben auch nur die Anbieter Zugang zu den Daten und können Ihnen die passenden Auskünfte geben bzw. Änderungen vornehmen.</p>
        <p>Wenn Sie genau wissen wollen, welche Daten bei den Social-Media-Anbietern gespeichert und verarbeitet werden und wie sie der Datenverarbeitung widersprechen können, sollten Sie die jeweilige Datenschutzerklärung des Unternehmens sorgfältig durchlesen. Auch wenn Sie zur Datenspeicherung und Datenverarbeitung Fragen haben oder entsprechende Rechte geltend machen wollen, empfehlen wir Ihnen, sich direkt an den Anbieter wenden.</p>
        <h3 class="adsimple-112709565">
          <span class="adsimple-112709565" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
        </h3>
        <p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Beispielsweise speichert die Social-Media-Plattform Facebook Daten, bis sie für den eigenen Zweck nicht mehr benötigt werden. Kundendaten, die mit den eigenen Userdaten abgeglichen werden, werden aber schon innerhalb von zwei Tagen gelöscht. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.</p>
        <h3 class="adsimple-112709565">Widerspruchsrecht</h3>
        <p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern wie eingebettete Social-Media-Elemente zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
        <p>Da bei Social-Media-Tools Cookies zum Einsatz kommen können, empfehlen wir Ihnen auch unsere allgemeine Datenschutzerklärung über Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.</p>
        <h3 class="adsimple-112709565">Rechtsgrundlage</h3>
        <p>Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre Daten bei Vorliegen einer Einwilligung auch auf Grundlage unseres berechtigten Interesses <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.</p>
        <p>Informationen zu speziellen Social-Media-Plattformen erfahren Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
        <h2 id="audio-video-einleitung" class="adsimple-112709565">Audio &amp; Video Einleitung</h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">Audio &amp; Video Datenschutzerklärung Zusammenfassung</strong>
                <br />
                &#x1f465; Betroffene: Besucher der Website<br />
                &#x1f91d; Zweck: Optimierung unserer Serviceleistung<br />
                &#x1f4d3; Verarbeitete Daten: Daten wie etwa Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse können gespeichert werden.<br />
                Mehr Details dazu finden Sie weiter unten in den entsprechenden Datenschutztexten.<br />
                &#x1f4c5; Speicherdauer: Daten bleiben grundsätzlich gespeichert, solange sie für den Dienstzweck nötig sind<br />
                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
            </tr>
          </tbody>
        </table>
        <h3 class="adsimple-112709565">Was sind Audio- und Videoelemente?</h3>
        <p>Wir haben auf unsere Website Audio- bzw. Videoelemente eingebunden, damit Sie sich direkt über unsere Website etwa Videos ansehen oder Musik/Podcasts anhören können. Die Inhalte werden von Dienstanbietern zur Verfügung gestellt. Alle Inhalte werden also auch von den entsprechenden Servern der Anbieter bezogen.</p>
        <p>Es handelt sich dabei um eingebundene Funktionselemente von Plattformen wie etwa YouTube, Vimeo oder Spotify. Die Nutzung dieser Portale ist in der Regel kostenlos, es können aber auch kostenpflichtige Inhalte veröffentlicht werden. Mit Hilfe dieser eingebundenen Elemente könne Sie sich über unsere Website die jeweiligen Inhalte anhören oder ansehen.</p>
        <p>Wenn Sie Audio- oder Videoelemente auf unsere Website verwenden, können auch personenbezogene Daten von Ihnen an die Dienstanbieter übermittelt, verarbeitet und gespeichert werden.</p>
        <h3 class="adsimple-112709565">Warum verwenden wir Audio- &amp; Videoelemente auf unserer Website?</h3>
        <p>Natürlich wollen wir Ihnen auf unserer Website das beste Angebot liefern. Und uns ist bewusst, dass Inhalte nicht mehr bloß in Text und statischem Bild vermittelt werden. Statt Ihnen einfach nur einen Link zu einem Video zu geben, bieten wir Ihnen direkt auf unserer Website Audio- und Videoformate, die unterhaltend oder informativ und im Idealfall sogar beides sind. Das erweitert unser Service und erleichtert Ihnen den Zugang zu interessanten Inhalten. Somit bieten wir neben unseren Texten und Bildern auch Video und/oder Audio-Inhalte an.</p>
        <h3 class="adsimple-112709565">Welche Daten werden durch Audio- &amp; Videoelemente gespeichert?</h3>
        <p>Wenn Sie eine Seite auf unserer Website aufrufen, die beispielsweise ein eingebettetes Video hat, verbindet sich Ihr Server mit dem Server des Dienstanbieters. Dabei werden auch Daten von Ihnen an den Drittanbieter übertragen und dort gespeichert. Manche Daten werden ganz unabhängig davon, ob Sie bei dem Drittanbieter ein Konto haben oder nicht, gesammelt und gespeichert. Dazu zählen meist Ihre IP-Adresse, Browsertyp, Betriebssystem, und weitere allgemeine Informationen zu Ihrem Endgerät. Weiters werden von den meisten Anbietern auch Informationen über Ihre Webaktivität eingeholt. Dazu zählen etwa Sitzungsdauer, Absprungrate, auf welchen Button Sie geklickt haben oder über welche Website Sie den Dienst nutzen. All diese Informationen werden meist über Cookies oder Pixel-Tags (auch Web Beacon genannt) gespeichert. Pseudonymisierte Daten werden meist in Cookies in Ihrem Browser gespeichert. Welche Daten genau gespeichert und verarbeitet werden, erfahren Sie stets in der Datenschutzerklärung des jeweiligen Anbieters.</p>
        <h3 class="adsimple-112709565">Dauer der Datenverarbeitung</h3>
        <p>Wie lange die Daten auf den Servern der Drittanbieter genau gespeichert werden, erfahren Sie entweder weiter unten im Datenschutztext des jeweiligen Tools oder in der Datenschutzerklärung des Anbieters. Grundsätzlich werden personenbezogene Daten immer nur so lange verarbeitet, wie es für die Bereitstellung unserer Dienstleistungen oder Produkte unbedingt nötig wird. Dies gilt in der Regel auch für Drittanbieter. Meist können Sie davon ausgehen, dass gewisse Daten über mehrere Jahre auf den Servern der Drittanbieter gespeichert werden. Daten können speziell in Cookies unterschiedlich lange gespeichert werden. Manche Cookies werden bereits nach dem Verlassen der Website wieder gelöscht, anderen können über einige Jahre in Ihrem Browser gespeichert sein.</p>
        <h3 class="adsimple-112709565">Widerspruchsrecht</h3>
        <p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</p>
        <p>Da durch die eingebundenen Audio- und Video-Funktionen auf unserer Seite meist auch Cookies verwendet werden, sollte Sie sich auch unsere allgemeine Datenschutzerklärung über Cookies durchlesen. In den Datenschutzerklärungen der jeweiligen Drittanbieter erfahren Sie genaueres über den Umgang und die Speicherung Ihrer Daten.</p>
        <h3 class="adsimple-112709565">Rechtsgrundlage</h3>
        <p>Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Audio- und Video-Elemente verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre Daten auch auf Grundlage unseres berechtigten Interesses <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die eingebundenen Audio- und Video-Elemente gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
        <h2 id="erklaerung-verwendeter-begriffe" class="adsimple-112709565">Erklärung verwendeter Begriffe</h2>
        <p>Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt, werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.</p>
        <h2 id="auftragsverarbeiter" class="adsimple-112709565">Auftragsverarbeiter</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">„Auftragsverarbeiter“</strong> eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Erläuterung:</strong> Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.</p>
        <h2 id="einwilligung" class="adsimple-112709565">Einwilligung</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">„Einwilligung“</strong> der betroffenen Person jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Erläuterung: </strong>In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen, dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.</p>
        <h2 id="personenbezogene-daten" class="adsimple-112709565">Personenbezogene Daten</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <strong class="adsimple-112709565">
              <em>„personenbezogene Daten“</em>
            </strong>
            <em> alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Erläuterung:</strong> Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten wie etwa:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">Name</li>
          <li class="adsimple-112709565">Adresse</li>
          <li class="adsimple-112709565">E-Mail-Adresse</li>
          <li class="adsimple-112709565">Post-Anschrift</li>
          <li class="adsimple-112709565">Telefonnummer</li>
          <li class="adsimple-112709565">Geburtsdatum</li>
          <li class="adsimple-112709565">Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder Matrikelnummer</li>
          <li class="adsimple-112709565">Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
        </ul>
        <p>Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre <strong class="adsimple-112709565">IP-Adresse zu den personenbezogenen Daten</strong>. IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte <strong class="adsimple-112709565">„besondere Kategorien“</strong> der personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:</p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">rassische und ethnische Herkunft</li>
          <li class="adsimple-112709565">politische Meinungen</li>
          <li class="adsimple-112709565">religiöse bzw. weltanschauliche Überzeugungen</li>
          <li class="adsimple-112709565">die Gewerkschaftszugehörigkeit</li>
          <li class="adsimple-112709565">genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden</li>
          <li class="adsimple-112709565">biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen Merkmalen, die eine Person identifizieren können).<br />
            Gesundheitsdaten</li>
          <li class="adsimple-112709565">Daten zur sexuellen Orientierung oder zum Sexualleben</li>
        </ul>
        <h2 id="profiling" class="adsimple-112709565">Profiling</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">„Profiling“</strong> jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Erläuterung:</strong> Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe ausgespielt werden kann.</p>
        <p>&nbsp;</p>
        <h2 id="verantwortlicher" class="adsimple-112709565">Verantwortlicher</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">„Verantwortlicher“</strong> die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Erläuterung:</strong> In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.</p>
        <p>&nbsp;</p>
        <h2 id="verarbeitung" class="adsimple-112709565">Verarbeitung</h2>
        <p>
          <strong class="adsimple-112709565">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
        </p>
        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
        <blockquote>
          <p>
            <strong class="adsimple-112709565">
              <em>„Verarbeitung“</em>
            </strong>
            <em> jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;</em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">Anmerkung: </strong>Wenn wir in unserer Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur das Erheben sondern auch das Speichern und Verarbeiten von Daten.</p>
        <h2 id="schlusswort" class="adsimple-112709565">Schlusswort</h2>
        <p>Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte Datenschutzerklärung „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer Datenschutzerklärung sehen, nehmen wir den Schutz Ihrer persönlichen Daten, alles andere als auf die leichte Schulter.<br />
          Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu informieren. Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die Beweggründe für die Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung sehr technisch und juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir auch sprachlich einen anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist dies natürlich aufgrund der Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der Datenschutzerklärung näher erläutert.<br />
          Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche Stelle zu kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald wieder begrüßen zu dürfen.</p>
        <p>Alle Texte sind urheberrechtlich geschützt.</p>
        <p style={{ marginTop: "15px" }}>Quelle: Erstellt mit dem <a href="https://www.adsimple.at/datenschutz-generator/" title="Datenschutz Generator Österreich von AdSimple">Datenschutz Generator</a> von AdSimple</p>

      </div>
      <Footer />
      {/*
        <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Virtual Visions</p>
          <Link to="/" className="imprint-link">
            Home
          </Link>
        </div>
      </footer>
      */}

    </div>
  );

}

export default DS;
