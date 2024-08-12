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
        <h1 className="adsimple-112709565">
          {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>
        <h2>{language === 'de' ? 'Inhaltsverzeichnis' : 'Table of Contents'}</h2>
        <ul>
          <li>
            <a href="#einleitung-ueberblick">
              {language === 'de' ? 'Einleitung und Überblick' : 'Introduction and Overview'}
            </a>
          </li>
          <li>
            <a href="#anwendungsbereich">
              {language === 'de' ? 'Anwendungsbereich' : 'Scope of Application'}
            </a>
          </li>
          <li>
            <a href="#rechtsgrundlagen">
              {language === 'de' ? 'Rechtsgrundlagen' : 'Legal Basis'}
            </a>
          </li>
          <li>
            <a href="#kontaktdaten-verantwortliche">
              {language === 'de' ? 'Kontaktdaten des Verantwortlichen' : 'Contact Information of the Responsible Party'}
            </a>
          </li>
          <li>
            <a href="#speicherdauer">
              {language === 'de' ? 'Speicherdauer' : 'Storage Duration'}
            </a>
          </li>
          <li>
            <a href="#rechte-dsgvo">
              {language === 'de' ? 'Rechte laut Datenschutz-Grundverordnung' : 'Rights under the GDPR'}
            </a>
          </li>
          <li>
            <a href="#kommunikation">
              {language === 'de' ? 'Kommunikation' : 'Communication'}
            </a>
          </li>
          <li>
            <a href="#social-media-einleitung">
              {language === 'de' ? 'Social Media Einleitung' : 'Social Media Introduction'}
            </a>
          </li>
          <li>
            <a href="#audio-video-einleitung">
              {language === 'de' ? 'Audio & Video Einleitung' : 'Audio & Video Introduction'}
            </a>
          </li>
          <li>
            <a href="#erklaerung-verwendeter-begriffe">
              {language === 'de' ? 'Erklärung verwendeter Begriffe' : 'Explanation of Terms Used'}
            </a>
          </li>
          <li>
            <a href="#schlusswort">
              {language === 'de' ? 'Schlusswort' : 'Conclusion'}
            </a>
          </li>
        </ul>

        <h2 id="einleitung-ueberblick" className="adsimple-112709565">
          {language === 'de' ? 'Einleitung und Überblick' : 'Introduction and Overview'}
        </h2>
        <p>
          {language === 'de'
            ? 'Wir haben diese Datenschutzerklärung (Fassung 30.01.2024-112709565) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.'
            : 'We have drafted this privacy policy (version 30.01.2024-112709565) to explain to you, in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws, which personal data (referred to as data) we as the responsible party – and the processors we commission (e.g., providers) – process, will process in the future, and what lawful options you have. The terms used are intended to be gender-neutral.'}
          <br />
          <strong className="adsimple-112709565">
            {language === 'de' ? 'Kurz gesagt:' : 'In short:'}
          </strong>
          {language === 'de'
            ? 'Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.'
            : 'We provide comprehensive information about the data we process about you.'}
        </p>
        <p>
          {language === 'de'
            ? 'Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische Begriffe leserfreundlich erklärt, Links zu weiterführenden Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.'
            : 'Privacy policies usually sound very technical and use legal terminology. However, this privacy policy is intended to describe the most important things as simply and transparently as possible. To the extent that it promotes transparency, technical terms are explained in a reader-friendly manner, links to additional information are provided, and graphics are used. We inform you in clear and simple language that we only process personal data in the course of our business activities if there is a corresponding legal basis. This is certainly not possible if one provides brief, unclear, and legal-technical explanations, as is often the standard on the internet when it comes to data protection. I hope you find the following explanations interesting and informative, and perhaps there is some information that you were not yet aware of.'}
          <br />
          {language === 'de'
            ? 'Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.'
            : 'If you still have questions, we would like to ask you to contact the responsible party mentioned below or in the imprint, follow the available links, and view further information on third-party sites. You can also find our contact details in the imprint.'}
        </p>

        <h2 id="anwendungsbereich" className="adsimple-112709565">
          {language === 'de' ? 'Anwendungsbereich' : 'Scope of Application'}
        </h2>
        <p>
          {language === 'de'
            ? 'Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:'
            : 'This privacy policy applies to all personal data processed by us in the company and to all personal data processed by companies commissioned by us (processors). By personal data, we mean information within the meaning of Art. 4 No. 1 GDPR, such as a person’s name, email address, and postal address. The processing of personal data ensures that we can offer and bill for our services and products, whether online or offline. The scope of this privacy policy includes:'}
        </p>
        <ul className="adsimple-112709565">
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'alle Onlineauftritte (Websites, Onlineshops), die wir betreiben'
              : 'all online presences (websites, online shops) we operate'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Social Media Auftritte und E-Mail-Kommunikation'
              : 'social media presences and email communication'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'mobile Apps für Smartphones und andere Geräte'
              : 'mobile apps for smartphones and other devices'}
          </li>
        </ul>
        <p>
          <strong className="adsimple-112709565">
            {language === 'de' ? 'Kurz gesagt:' : 'In short:'}
          </strong>
          {language === 'de'
            ? 'Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.'
            : 'The privacy policy applies to all areas in which personal data is processed in the company through the mentioned channels. If we enter into legal relationships with you outside of these channels, we will inform you separately if necessary.'}
        </p>

        <h2 id="rechtsgrundlagen" className="adsimple-112709565">
          {language === 'de' ? 'Rechtsgrundlagen' : 'Legal Basis'}
        </h2>
        <p>
          {language === 'de'
            ? 'In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, die uns ermöglichen, personenbezogene Daten zu verarbeiten. Was das EU-Recht betrifft, beziehen wir uns auf die Datenschutz-Grundverordnung (DSGVO). Diese Verordnung ist ein Rahmenrecht, das innerhalb der Europäischen Union einheitliche Regeln zum Datenschutz schafft. Dadurch ist der Datenschutz in jedem Land der EU auf einem hohen und einheitlichen Niveau geregelt. Im Wesentlichen geht es um den Schutz der Daten von Personen. Bezüglich weiterer Begriffe wie „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf Art. 4 DSGVO- Begriffsbestimmungen.'
            : 'In the following privacy policy, we provide transparent information about the legal principles and regulations that allow us to process personal data. Regarding EU law, we refer to the General Data Protection Regulation (GDPR). This regulation is a framework law that establishes uniform rules for data protection within the European Union. This ensures that data protection is regulated at a high and uniform level in every EU country. Essentially, it is about protecting the data of individuals. Regarding other terms like “processing” or “responsible party,” we refer to Art. 4 GDPR - definitions.'}
        </p>
        <p>
          {language === 'de'
            ? 'Die Verarbeitung personenbezogener Daten ist nur erlaubt, wenn mindestens eine der folgenden Bedingungen zutrifft:'
            : 'The processing of personal data is only permitted if at least one of the following conditions is met:'}
        </p>
        <ul className="adsimple-112709565">
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO): Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen bestimmten Zweck gegeben.'
              : 'Consent (Art. 6 para. 1 lit. a GDPR): The data subject has given their consent to the processing of personal data concerning them for a specific purpose.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Vertrag (Art. 6 Abs. 1 lit. b DSGVO): Zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen ist die Verarbeitung der Daten erforderlich.'
              : 'Contract (Art. 6 para. 1 lit. b GDPR): The processing of data is necessary for the performance of a contract or for the implementation of pre-contractual measures.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO): Die Verarbeitung der Daten ist erforderlich, um einer rechtlichen Verpflichtung nachzukommen.'
              : 'Legal obligation (Art. 6 para. 1 lit. c GDPR): The processing of data is necessary to comply with a legal obligation.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Lebenswichtige Interessen (Art. 6 Abs. 1 lit. d DSGVO): Die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen.'
              : 'Vital interests (Art. 6 para. 1 lit. d GDPR): Processing is necessary to protect the vital interests of the data subject or another natural person.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO): Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.'
              : 'Legitimate interests (Art. 6 para. 1 lit. f GDPR): Processing is necessary to safeguard the legitimate interests of the controller or a third party, provided that the interests or fundamental rights and freedoms of the data subject, which require the protection of personal data, do not prevail.'}
          </li>
        </ul>
        <p>
          {language === 'de'
            ? 'Weitere Bedingungen wie die Wahrnehmung von Aufgaben im öffentlichen Interesse oder die Ausübung öffentlicher Gewalt sowie der Schutz lebenswichtiger Interessen können ebenfalls als Grundlage für die Verarbeitung dienen. Für die genaue Abwägung dieser und anderer Umstände bitten wir Sie, sich direkt bei uns zu informieren oder die weiteren Informationen in der vollständigen Datenschutzerklärung zu konsultieren.'
            : 'Other conditions such as the performance of tasks in the public interest or the exercise of official authority, as well as the protection of vital interests, may also serve as a basis for processing. For a detailed consideration of these and other circumstances, we ask you to contact us directly or consult the additional information in the full privacy policy.'}
        </p>
        <ul className="adsimple-112709565">
          <li className="adsimple-112709565">
            {language === 'de'
              ? <>In <strong className="adsimple-112709565">Österreich</strong> ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (<strong className="adsimple-112709565">Datenschutzgesetz</strong>), kurz <strong className="adsimple-112709565">DSG</strong>.</>
              : <>In <strong className="adsimple-112709565">Austria</strong>, this is the Federal Act on the Protection of Natural Persons with regard to the Processing of Personal Data (<strong className="adsimple-112709565">Data Protection Act</strong>), also known as <strong className="adsimple-112709565">DSG</strong>.</>
            }
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? <>In <strong className="adsimple-112709565">Deutschland</strong> gilt das <strong className="adsimple-112709565">Bundesdatenschutzgesetz</strong>, kurz<strong className="adsimple-112709565"> BDSG</strong>.</>
              : <>In <strong className="adsimple-112709565">Germany</strong>, the <strong className="adsimple-112709565">Federal Data Protection Act</strong>, also known as<strong className="adsimple-112709565"> BDSG</strong>, applies.</>
            }
          </li>
        </ul>
        <p>
          {language === 'de'
            ? 'Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber.'
            : 'If additional regional or national laws apply, we will inform you in the following sections.'}
        </p>

        <h2 id="kontaktdaten-verantwortliche" className="adsimple-112709565">
          {language === 'de' ? 'Kontaktdaten des Verantwortlichen' : 'Contact Details of the Responsible Person'}
        </h2>
        <p>
          {language === 'de'
            ? <>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
              <span className="adsimple-112709565" style={{ fontWeight: '700' }}>Virtual Visions OG<br />
                Daniel Zirngast<br />
                Steinfeldstraße 9, 8504 Preding, Österreich</span><br />
              <span style={{ fontWeight: '700' }}>Vertretungsberechtigt: Daniel Zirngast</span><br />
              E-Mail: <a href="mailto:business.virtualvisions@gmail.com">business.virtualvisions@gmail.com</a><br />
              Telefon: <a href="tel:+43 650 260 14 93">+43 650 260 14 93</a><br />
              Impressum: <a href="https://virtual-visions.net/Imprint">https://virtual-visions.net/Imprint</a>
            </>
            : <>If you have any questions about data protection or the processing of personal data, you can find the contact details of the responsible person or office below:<br />
              <span className="adsimple-112709565" style={{ fontWeight: '700' }}>Virtual Visions OG<br />
                Daniel Zirngast<br />
                Steinfeldstraße 9, 8504 Preding, Austria</span><br />
              <span style={{ fontWeight: '700' }}>Authorized representative: Daniel Zirngast</span><br />
              Email: <a href="mailto:business.virtualvisions@gmail.com">business.virtualvisions@gmail.com</a><br />
              Phone: <a href="tel:+43 650 260 14 93">+43 650 260 14 93</a><br />
              Imprint: <a href="https://virtual-visions.net/Imprint">https://virtual-visions.net/Imprint</a>
            </>
          }
        </p>

        <h2 id="speicherdauer" className="adsimple-112709565">
          {language === 'de' ? 'Speicherdauer' : 'Storage Duration'}
        </h2>
        <p>
          {language === 'de'
            ? 'Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.'
            : 'As a general principle, we store personal data only as long as it is absolutely necessary for providing our services and products. This means that we delete personal data as soon as the reason for processing is no longer present. In some cases, we are legally required to retain certain data even after the original purpose has been fulfilled, for example, for accounting purposes.'}
        </p>
        <p>
          {language === 'de'
            ? 'Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.'
            : 'If you wish to have your data deleted or withdraw your consent to data processing, the data will be deleted as quickly as possible, provided there is no obligation to retain it.'}
        </p>
        <p>
          {language === 'de'
            ? 'Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.'
            : 'We will inform you about the specific duration of the respective data processing below, if we have further information.'}
        </p>

        <h2 id="rechte-dsgvo" className="adsimple-112709565">
          {language === 'de' ? 'Rechte laut Datenschutz-Grundverordnung' : 'Rights according to the General Data Protection Regulation'}
        </h2>
        <p>
          {language === 'de'
            ? 'Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:'
            : 'According to Articles 13, 14 GDPR, we inform you about the following rights that you are entitled to so that data processing is fair and transparent:'}
        </p>
        <ul className="adsimple-112709565">
          <li className="adsimple-112709565">
            {language === 'de'
              ? <>Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
                <ul className="adsimple-112709565">
                  <li className="adsimple-112709565">zu welchem Zweck wir die Verarbeitung durchführen;</li>
                  <li className="adsimple-112709565">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
                  <li className="adsimple-112709565">wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;</li>
                  <li className="adsimple-112709565">wie lange die Daten gespeichert werden;</li>
                  <li className="adsimple-112709565">das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
                  <li className="adsimple-112709565">dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);</li>
                  <li className="adsimple-112709565">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
                  <li className="adsimple-112709565">ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen.</li>
                </ul>
              </>
              : <>Under Article 15 GDPR, you have the right to know whether we are processing data about you. If this is the case, you have the right to obtain a copy of the data and to be informed of the following:
                <ul className="adsimple-112709565">
                  <li className="adsimple-112709565">for what purpose we are processing it;</li>
                  <li className="adsimple-112709565">the categories, i.e., the types of data being processed;</li>
                  <li className="adsimple-112709565">who receives this data and, if the data is transferred to third countries, how security is guaranteed;</li>
                  <li className="adsimple-112709565">how long the data will be stored;</li>
                  <li className="adsimple-112709565">the existence of the right to rectification, deletion, or restriction of processing, and the right to object to processing;</li>
                  <li className="adsimple-112709565">that you can lodge a complaint with a supervisory authority (links to these authorities are provided below);</li>
                  <li className="adsimple-112709565">the origin of the data if we did not collect it from you;</li>
                  <li className="adsimple-112709565">whether profiling is carried out, i.e., whether data is automatically evaluated to create a personal profile about you.</li>
                </ul>
              </>
            }
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden.'
              : 'Under Article 16 GDPR, you have the right to rectification of data, meaning that we must correct any inaccuracies if you find errors.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.'
              : 'Under Article 17 GDPR, you have the right to deletion ("right to be forgotten"), which specifically means that you may request the deletion of your data.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.'
              : 'Under Article 18 GDPR, you have the right to restrict processing, meaning that we may only store the data but not use it further.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.'
              : 'Under Article 20 GDPR, you have the right to data portability, meaning that we will provide you with your data in a common format upon request.'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? <>Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
                <ul className="adsimple-112709565">
                  <li className="adsimple-112709565">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.</li>
                  <li className="adsimple-112709565">Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
                  <li className="adsimple-112709565">Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
                </ul>
              </>
              : <>Under Article 21 GDPR, you have the right to object, which, once enforced, will result in a change in processing.
                <ul className="adsimple-112709565">
                  <li className="adsimple-112709565">If the processing of your data is based on Article 6(1)(e) (public interest, exercise of official authority) or Article 6(1)(f) (legitimate interest), you can object to the processing. We will then check as soon as possible whether we can legally comply with this objection.</li>
                  <li className="adsimple-112709565">If data is used for direct advertising, you can object to this type of data processing at any time. We will no longer use your data for direct marketing afterward.</li>
                  <li className="adsimple-112709565">If data is used for profiling, you can object to this type of data processing at any time. We will no longer use your data for profiling afterward.</li>
                </ul>
              </>
            }
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.'
              : 'Under Article 22 GDPR, you may have the right not to be subject to a decision based solely on automated processing (e.g., profiling).'}
          </li>
          <li className="adsimple-112709565">
            {language === 'de'
              ? 'Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.'
              : 'Under Article 77 GDPR, you have the right to lodge a complaint. This means you can contact the data protection authority at any time if you believe that the processing of personal data violates the GDPR.'}
          </li>
        </ul>
        <p>
          <strong className="adsimple-112709565">{language === 'de' ? 'Kurz gesagt:' : 'In short:'}</strong> {language === 'de' ? 'Sie haben Rechte – zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!' : 'You have rights—don’t hesitate to contact the responsible office listed above!'}
        </p>
        <p>
          {language === 'de'
            ? 'Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter '
            : 'If you believe that the processing of your data violates data protection law or your data protection rights have been infringed in any other way, you can lodge a complaint with the supervisory authority. In Austria, this is the Data Protection Authority, whose website you can find at '}
          <a className="adsimple-112709565" href="https://www.dsb.gv.at/?tid=112709565" rel="noopener">https://www.dsb.gv.at/</a>.
          {language === 'de'
            ? ' In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die '
            : ' In Germany, there is a data protection officer for each federal state. For more information, you can contact the '}
          <a className="adsimple-112709565" href="https://www.bfdi.bund.de/DE/Home/home_node.html" rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a>.
          {language === 'de'
            ? ' wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:'
            : ' For our company, the following local data protection authority is responsible:'}
        </p>

        <h2 id="oesterreich-datenschutzbehoerde" className="adsimple-112709565">
          {language === 'de' ? 'Österreich Datenschutzbehörde' : 'Austria Data Protection Authority'}
        </h2>
        <p>
          <strong className="adsimple-112709565">{language === 'de' ? 'Leiterin: ' : 'Head: '}Mag. Dr. Andrea Jelinek</strong><br />
          <strong className="adsimple-112709565">{language === 'de' ? 'Adresse: ' : 'Address: '}Barichgasse 40-42, 1030 Wien</strong><br />
          <strong className="adsimple-112709565">{language === 'de' ? 'Telefonnr.: ' : 'Phone No.: '}+43 1 52 152-0</strong><br />
          <strong className="adsimple-112709565">{language === 'de' ? 'E-Mail-Adresse: ' : 'Email Address: '}<a className="adsimple-112709565" href="mailto:dsb@dsb.gv.at" rel="noopener">dsb@dsb.gv.at</a></strong><br />
          <strong className="adsimple-112709565">{language === 'de' ? 'Website: ' : 'Website: '}<a className="adsimple-112709565" href="https://www.dsb.gv.at/" rel="noopener">https://www.dsb.gv.at/</a></strong>
        </p>
        <h2 id="kommunikation" class="adsimple-112709565">
          {language === 'de' ? 'Kommunikation' : 'Communication'}
        </h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">
                  {language === 'de' ? 'Kommunikation Zusammenfassung' : 'Communication Summary'}
                </strong>
                <br />
                &#x1f465; {language === 'de' ? 'Betroffene: Alle, die mit uns per Telefon, E-Mail oder Online-Formular kommunizieren' : 'Affected: Anyone who communicates with us via phone, email, or online form'}<br />
                &#x1f4d3; {language === 'de' ? 'Verarbeitete Daten: z. B. Telefonnummer, Name, E-Mail-Adresse, eingegebene Formulardaten. Mehr Details dazu finden Sie bei der jeweils eingesetzten Kontaktart' : 'Processed Data: e.g., phone number, name, email address, form entries. More details are provided for each contact method used'}<br />
                &#x1f91d; {language === 'de' ? 'Zweck: Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.' : 'Purpose: Handling communication with customers, business partners, etc.'}<br />
                &#x1f4c5; {language === 'de' ? 'Speicherdauer: Dauer des Geschäftsfalls und der gesetzlichen Vorschriften' : 'Retention Period: Duration of the business case and legal requirements'}<br />
                &#x2696;&#xfe0f; {language === 'de' ? 'Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)' : 'Legal Basis: Art. 6 Abs. 1 lit. a GDPR (Consent), Art. 6 Abs. 1 lit. b GDPR (Contract), Art. 6 Abs. 1 lit. f GDPR (Legitimate Interests)'}
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          {language === 'de'
            ? 'Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen.'
            : 'If you contact us and communicate via phone, email, or online form, personal data may be processed.'}
        </p>
        <p>
          {language === 'de'
            ? 'Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenhängenden Geschäftsvorgangs verarbeitet. Die Daten werden solange gespeichert, wie es das Gesetz vorschreibt.'
            : 'The data will be processed to handle and manage your inquiry and related business transaction. The data will be retained for as long as required by law.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Betroffene Personen' : 'Affected Persons'}
        </h3>
        <p>
          {language === 'de'
            ? 'Von den genannten Vorgängen sind alle betroffen, die über die von uns bereitgestellten Kommunikationswege den Kontakt zu uns suchen.'
            : 'All those affected are those who contact us through the communication channels we provide.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Telefon' : 'Phone'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endgerät und beim eingesetzten Telekommunikationsanbieter pseudonymisiert gespeichert. Außerdem können Daten wie Name und Telefonnummer im Anschluss per E-Mail versendet und zur Anfragebeantwortung gespeichert werden. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.'
            : 'If you call us, call data is pseudonymized and stored on the respective device and with the telecommunications provider used. Additionally, data such as name and phone number may be sent via email and stored for responding to inquiries. The data will be deleted as soon as the business case is closed and legal requirements permit.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'E-Mail' : 'Email'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen Endgerät (Computer, Laptop, Smartphone,…) gespeichert und es kommt zur Speicherung von Daten auf dem E-Mail-Server. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.'
            : 'If you communicate with us via email, data may be stored on the respective device (computer, laptop, smartphone, etc.) and on the email server. The data will be deleted as soon as the business case is closed and legal requirements permit.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Online Formulare' : 'Online Forms'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver gespeichert und gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.'
            : 'If you communicate with us via online form, data is stored on our web server and may be forwarded to an email address of ours. The data will be deleted as soon as the business case is closed and legal requirements permit.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Rechtsgrundlagen' : 'Legal Bases'}
        </h3>
        <p>
          {language === 'de'
            ? 'Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:'
            : 'The processing of data is based on the following legal bases:'}
        </p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">
            {language === 'de'
              ? 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung, Ihre Daten zu speichern und weiter für den Geschäftsfall betreffende Zwecke zu verwenden;'
              : 'Art. 6 Abs. 1 lit. a GDPR (Consent): You give us consent to store your data and use it further for business-related purposes;'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de'
              ? 'Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit für die Erfüllung eines Vertrags mit Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir müssen die Daten für vorvertragliche Tätigkeiten, wie z. B. die Vorbereitung eines Angebots, verarbeiten;'
              : 'Art. 6 Abs. 1 lit. b GDPR (Contract): There is a necessity for the performance of a contract with you or a processor such as a phone provider, or we need to process the data for pre-contractual activities, such as preparing an offer;'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de'
              ? 'Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und geschäftliche Kommunikation in einem professionellen Rahmen betreiben. Dazu sind gewisse technische Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben zu können.'
              : 'Art. 6 Abs. 1 lit. f GDPR (Legitimate Interests): We want to handle customer inquiries and business communication in a professional manner. Certain technical facilities such as email programs, Exchange servers, and mobile network operators are necessary to manage communication efficiently.'}
          </li>
        </ul>

        <h2 id="social-media-einleitung" class="adsimple-112709565">
          {language === 'de' ? 'Social Media Einleitung' : 'Social Media Introduction'}
        </h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">
                  {language === 'de' ? 'Social Media Datenschutzerklärung Zusammenfassung' : 'Social Media Privacy Statement Summary'}
                </strong>
                <br />
                &#x1f465; {language === 'de' ? 'Betroffene: Besucher der Website' : 'Affected: Website Visitors'}<br />
                &#x1f91d; {language === 'de' ? 'Zweck: Darstellung und Optimierung unserer Serviceleistung, Kontakt zu Besuchern, Interessenten u.a., Werbung' : 'Purpose: Presentation and optimization of our service, contact with visitors, prospects, etc., advertising'}<br />
                &#x1f4d3; {language === 'de' ? 'Verarbeitete Daten: Daten wie etwa Telefonnummern, E-Mail-Adressen, Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Mehr Details dazu finden Sie beim jeweils eingesetzten Social-Media-Tool.' : 'Processed Data: Data such as phone numbers, email addresses, contact details, user behavior data, information about your device, and your IP address. More details are available for each social media tool used.'}<br />
                &#x1f4c5; {language === 'de' ? 'Speicherdauer: abhängig von den verwendeten Social-Media-Plattformen' : 'Retention Period: Dependent on the social media platforms used'}<br />
                &#x2696;&#xfe0f; {language === 'de' ? 'Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)' : 'Legal Basis: Art. 6 Abs. 1 lit. a GDPR (Consent), Art. 6 Abs. 1 lit. f GDPR (Legitimate Interests)'}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Was ist Social Media?' : 'What is Social Media?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv. Dabei können Daten von Usern verarbeitet werden, damit wir gezielt User, die sich für uns interessieren, über die sozialen Netzwerke ansprechen können. Darüber hinaus können auch Elemente einer Social-Media-Plattform direkt in unsere Website eingebettet sein. Das ist etwa der Fall, wenn Sie einen sogenannten Social-Button auf unserer Website anklicken und direkt zu unserem Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen Medien oder Social Media werden Websites und Apps bezeichnet, über die angemeldete Mitglieder Inhalte produzieren, Inhalte offen oder in bestimmten Gruppen austauschen und sich mit anderen Mitgliedern vernetzen können.'
            : 'In addition to our website, we are also active on various social media platforms. Data from users may be processed to target users who are interested in us through social networks. Furthermore, elements of a social media platform may be embedded directly into our website. This is the case, for example, when you click on a social button on our website and are redirected to our social media presence. Social media refers to websites and apps where registered members can produce content, exchange content openly or in specific groups, and connect with other members.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Warum nutzen wir Social Media?' : 'Why do we use Social Media?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen online kommunizieren und in Kontakt treten. Mit unseren Social-Media-Auftritten können wir unsere Produkte und Dienstleistungen Interessenten näherbringen. Die auf unserer Website eingebundenen Social-Media-Elemente helfen Ihnen, schnell und ohne Komplikationen zu unseren Social-Media-Inhalten wechseln zu können.'
            : 'For years, social media platforms have been the place where people communicate and connect online. With our social media presence, we can bring our products and services closer to interested parties. The social media elements embedded on our website help you to quickly and easily switch to our social media content.'}
        </p>
        <p>
          {language === 'de'
            ? 'Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals gespeichert und verarbeitet werden, haben in erster Linie den Zweck, Webanalysen durchführen zu können. Ziel dieser Analysen ist es, genauere und personenbezogene Marketing- und Werbestrategien entwickeln zu können. Abhängig von Ihrem Verhalten auf einer Social-Media-Plattform, können mit Hilfe der ausgewerteten Daten, passende Rückschlüsse auf Ihre Interessen getroffen werden und sogenannte Userprofile erstellt werden. So ist es den Plattformen auch möglich, Ihnen maßgeschneiderte Werbeanzeigen zu präsentieren. Meistens werden für diesen Zweck Cookies in Ihrem Browser gesetzt, die Daten zu Ihrem Nutzungsverhalten speichern.'
            : 'The data stored and processed through your use of a social media channel primarily serves the purpose of conducting web analyses. The aim of these analyses is to develop more accurate and personalized marketing and advertising strategies. Depending on your behavior on a social media platform, the analyzed data can help draw conclusions about your interests and create so-called user profiles. This allows platforms to present you with tailored advertisements. Typically, cookies are set in your browser for this purpose, which store data about your usage behavior.'}
        </p>
        <p>
          {language === 'de'
            ? 'Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich verantwortlich bleiben, auch wenn wir Dienste einer Social-Media-Plattform nutzen. Der Europäische Gerichtshof hat jedoch entschieden, dass in bestimmten Fällen der Betreiber der Social-Media-Plattform zusammen mit uns gemeinsam verantwortlich im Sinne des Art. 26 DSGVO sein kann. Soweit dies der Fall ist, weisen wir gesondert darauf hin und arbeiten auf Grundlage einer diesbezüglichen Vereinbarung. Das Wesentliche der Vereinbarung ist dann weiter unten bei der betroffenen Plattform wiedergegeben.'
            : 'We generally assume that we remain responsible for data protection even when using social media platform services. However, the European Court of Justice has ruled that, in certain cases, the operator of the social media platform can be jointly responsible with us according to Art. 26 GDPR. If this is the case, we will indicate this separately and work based on a corresponding agreement. The essentials of the agreement are then detailed below for the affected platform.'}
        </p>
        <p>
          {language === 'de'
            ? 'Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen oder unserer eingebauten Elemente auch Daten von Ihnen außerhalb der Europäischen Union verarbeitet werden können, da viele Social-Media-Kanäle, beispielsweise Facebook oder Twitter, amerikanische Unternehmen sind. Dadurch können Sie möglicherweise Ihre Rechte in Bezug auf Ihre personenbezogenen Daten nicht mehr so leicht einfordern bzw. durchsetzen.'
            : 'Please note that when using social media platforms or our embedded elements, data about you may also be processed outside the European Union, as many social media channels, such as Facebook or Twitter, are American companies. This may make it more difficult for you to assert or enforce your rights regarding your personal data.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Welche Daten werden verarbeitet?' : 'What Data is Processed?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Welche Daten genau gespeichert und verarbeitet werden, hängt vom jeweiligen Anbieter der Social-Media-Plattform ab. Aber für gewöhnlich handelt es sich um Daten wie etwa Telefonnummern, E-Mailadressen, Daten, die Sie in ein Kontaktformular eingeben, Nutzerdaten wie zum Beispiel welche Buttons Sie klicken, wen Sie liken oder wem folgen, wann Sie welche Seiten besucht haben, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Die meisten dieser Daten werden in Cookies gespeichert. Speziell wenn Sie selbst ein Profil bei dem besuchten Social-Media-Kanal haben und angemeldet sind, können Daten mit Ihrem Profil verknüpft werden.'
            : 'The specific data stored and processed depends on the respective social media platform provider. Typically, this includes data such as phone numbers, email addresses, data you enter into a contact form, user data like which buttons you click, whom you like or follow, when you visited which pages, information about your device, and your IP address. Most of this data is stored in cookies. Especially if you have a profile on the visited social media channel and are logged in, data may be linked to your profile.'}
        </p>
        <p>
          {language === 'de'
            ? 'Alle Daten, die über eine Social-Media-Plattform erhoben werden, werden auch auf den Servern der Anbieter gespeichert. Somit haben auch nur die Anbieter Zugang zu den Daten und können Ihnen die passenden Auskünfte geben bzw. Änderungen vornehmen.'
            : 'All data collected via a social media platform is also stored on the provider’s servers. Thus, only the providers have access to the data and can provide you with the relevant information or make changes.'}
        </p>
        <p>
          {language === 'de'
            ? 'Wenn Sie genau wissen wollen, welche Daten bei den Social-Media-Anbietern gespeichert und verarbeitet werden und wie sie der Datenverarbeitung widersprechen können, sollten Sie die jeweilige Datenschutzerklärung des Unternehmens sorgfältig durchlesen. Auch wenn Sie zur Datenspeicherung und Datenverarbeitung Fragen haben oder entsprechende Rechte geltend machen wollen, empfehlen wir Ihnen, sich direkt an den Anbieter wenden.'
            : 'If you want to know exactly what data is stored and processed by social media providers and how to object to data processing, you should carefully read the respective company’s privacy policy. If you have questions about data storage and processing or wish to assert your rights, we recommend contacting the provider directly.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Dauer der Datenverarbeitung' : 'Duration of Data Processing'}
        </h3>
        <p>
          {language === 'de'
            ? 'Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Beispielsweise speichert die Social-Media-Plattform Facebook Daten, bis sie für den eigenen Zweck nicht mehr benötigt werden. Kundendaten, die mit den eigenen Userdaten abgeglichen werden, werden aber schon innerhalb von zwei Tagen gelöscht. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.'
            : 'We will inform you about the duration of data processing further down, if we have additional information on this. For example, the social media platform Facebook stores data until it is no longer needed for its purpose. Customer data that is matched with its own user data is typically deleted within two days. In general, we only process personal data for as long as necessary to provide our services and products. If required by law, such as for accounting purposes, this retention period may also be exceeded.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Widerspruchsrecht' : 'Right to Object'}
        </h3>
        <p>
          {language === 'de'
            ? 'Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern wie eingebettete Social-Media-Elemente zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.'
            : 'You also have the right and option to withdraw your consent for the use of cookies or third-party services such as embedded social media elements at any time. This can be done either through our cookie management tool or other opt-out functions. For example, you can also prevent data collection by cookies by managing, disabling, or deleting cookies in your browser.'}
        </p>
        <p>
          {language === 'de'
            ? 'Da bei Social-Media-Tools Cookies zum Einsatz kommen können, empfehlen wir Ihnen auch unsere allgemeine Datenschutzerklärung über Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.'
            : 'Since social media tools may use cookies, we also recommend reviewing our general cookie privacy policy. To learn what data is specifically stored and processed about you, you should read the privacy policies of the respective tools.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Rechtsgrundlage' : 'Legal Basis'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung (Art. 6 Abs. 1 lit. a DSGVO). Grundsätzlich werden Ihre Daten bei Vorliegen einer Einwilligung auch auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.'
            : 'If you have consented to the processing and storage of your data through embedded social media elements, this consent serves as the legal basis for data processing (Art. 6 Abs. 1 lit. a GDPR). Generally, your data is also stored and processed based on our legitimate interest (Art. 6 Abs. 1 lit. f GDPR) in maintaining effective and timely communication with you or other customers and business partners. We only use these tools to the extent you have provided consent. Most social media platforms also use cookies in your browser to store data. Therefore, we recommend carefully reviewing our cookie privacy notice and the privacy policy or cookie guidelines of the respective service provider.'}
        </p>
        <p>
          {language === 'de'
            ? 'Informationen zu speziellen Social-Media-Plattformen erfahren Sie – sofern vorhanden – in den folgenden Abschnitten.'
            : 'Information about specific social media platforms can be found – if available – in the following sections.'}
        </p>

        <h2 id="audio-video-einleitung" class="adsimple-112709565">
          {language === 'de' ? 'Audio & Video Einleitung' : 'Audio & Video Introduction'}
        </h2>
        <table border="1" cellpadding="15">
          <tbody>
            <tr>
              <td>
                <strong class="adsimple-112709565">
                  {language === 'de' ? 'Audio & Video Datenschutzerklärung Zusammenfassung' : 'Audio & Video Privacy Policy Summary'}
                </strong>
                <br />
                &#x1f465; {language === 'de' ? 'Betroffene: Besucher der Website' : 'Affected: Visitors to the website'}<br />
                &#x1f91d; {language === 'de' ? 'Zweck: Optimierung unserer Serviceleistung' : 'Purpose: Optimization of our service'}<br />
                &#x1f4d3; {language === 'de' ? 'Verarbeitete Daten: Daten wie etwa Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse können gespeichert werden.' : 'Processed Data: Data such as contact details, user behavior data, information about your device, and your IP address may be stored.'}<br />
                {language === 'de' ? 'Mehr Details dazu finden Sie weiter unten in den entsprechenden Datenschutztexten.' : 'More details can be found further down in the respective privacy texts.'}<br />
                &#x1f4c5; {language === 'de' ? 'Speicherdauer: Daten bleiben grundsätzlich gespeichert, solange sie für den Dienstzweck nötig sind' : 'Storage Duration: Data is generally stored as long as necessary for the service purpose'}<br />
                &#x2696;&#xfe0f; {language === 'de' ? 'Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)' : 'Legal Basis: Art. 6 para. 1 lit. a GDPR (Consent), Art. 6 para. 1 lit. f GDPR (Legitimate Interests)'}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Was sind Audio- und Videoelemente?' : 'What are audio and video elements?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wir haben auf unsere Website Audio- bzw. Videoelemente eingebunden, damit Sie sich direkt über unsere Website etwa Videos ansehen oder Musik/Podcasts anhören können. Die Inhalte werden von Dienstanbietern zur Verfügung gestellt. Alle Inhalte werden also auch von den entsprechenden Servern der Anbieter bezogen.'
            : 'We have integrated audio and video elements on our website so you can view videos or listen to music/podcasts directly on our site. The content is provided by service providers, meaning that all content is also sourced from the respective providers\' servers.'}
        </p>
        <p>
          {language === 'de'
            ? 'Es handelt sich dabei um eingebundene Funktionselemente von Plattformen wie etwa YouTube, Vimeo oder Spotify. Die Nutzung dieser Portale ist in der Regel kostenlos, es können aber auch kostenpflichtige Inhalte veröffentlicht werden. Mit Hilfe dieser eingebundenen Elemente könne Sie sich über unsere Website die jeweiligen Inhalte anhören oder ansehen.'
            : 'These are embedded functional elements from platforms such as YouTube, Vimeo, or Spotify. The use of these platforms is usually free, but there may also be paid content available. With these embedded elements, you can listen to or view the respective content directly on our website.'}
        </p>
        <p>
          {language === 'de'
            ? 'Wenn Sie Audio- oder Videoelemente auf unsere Website verwenden, können auch personenbezogene Daten von Ihnen an die Dienstanbieter übermittelt, verarbeitet und gespeichert werden.'
            : 'When you use audio or video elements on our website, personal data may be transmitted, processed, and stored by the service providers.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Warum verwenden wir Audio- & Videoelemente auf unserer Website?' : 'Why do we use audio & video elements on our website?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Natürlich wollen wir Ihnen auf unserer Website das beste Angebot liefern. Und uns ist bewusst, dass Inhalte nicht mehr bloß in Text und statischem Bild vermittelt werden. Statt Ihnen einfach nur einen Link zu einem Video zu geben, bieten wir Ihnen direkt auf unserer Website Audio- und Videoformate, die unterhaltend oder informativ und im Idealfall sogar beides sind. Das erweitert unser Service und erleichtert Ihnen den Zugang zu interessanten Inhalten. Somit bieten wir neben unseren Texten und Bildern auch Video und/oder Audio-Inhalte an.'
            : 'We want to offer you the best experience on our website. We understand that content is no longer just conveyed through text and static images. Instead of simply providing a link to a video, we offer you audio and video formats directly on our website that are entertaining or informative, and ideally both. This expands our service and makes it easier for you to access interesting content. Thus, in addition to our texts and images, we also offer video and/or audio content.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Welche Daten werden durch Audio- & Videoelemente gespeichert?' : 'Which data are stored by audio & video elements?'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie eine Seite auf unserer Website aufrufen, die beispielsweise ein eingebettetes Video hat, verbindet sich Ihr Server mit dem Server des Dienstanbieters. Dabei werden auch Daten von Ihnen an den Drittanbieter übertragen und dort gespeichert. Manche Daten werden ganz unabhängig davon, ob Sie bei dem Drittanbieter ein Konto haben oder nicht, gesammelt und gespeichert. Dazu zählen meist Ihre IP-Adresse, Browsertyp, Betriebssystem, und weitere allgemeine Informationen zu Ihrem Endgerät. Weiters werden von den meisten Anbietern auch Informationen über Ihre Webaktivität eingeholt. Dazu zählen etwa Sitzungsdauer, Absprungrate, auf welchen Button Sie geklickt haben oder über welche Website Sie den Dienst nutzen. All diese Informationen werden meist über Cookies oder Pixel-Tags (auch Web Beacon genannt) gespeichert. Pseudonymisierte Daten werden meist in Cookies in Ihrem Browser gespeichert. Welche Daten genau gespeichert und verarbeitet werden, erfahren Sie stets in der Datenschutzerklärung des jeweiligen Anbieters.'
            : 'When you visit a page on our website that, for example, has an embedded video, your server connects to the service provider’s server. Data about you is also transmitted to and stored by the third party. Some data is collected and stored regardless of whether you have an account with the third party or not. This usually includes your IP address, browser type, operating system, and other general information about your device. Additionally, most providers also collect information about your web activity. This includes session duration, bounce rate, which buttons you clicked, or through which website you accessed the service. All this information is usually stored via cookies or pixel tags (also known as web beacons). Pseudonymized data is often stored in cookies in your browser. You can find out which data is exactly stored and processed in the privacy policy of the respective provider.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Dauer der Datenverarbeitung' : 'Duration of Data Processing'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wie lange die Daten auf den Servern der Drittanbieter genau gespeichert werden, erfahren Sie entweder weiter unten im Datenschutztext des jeweiligen Tools oder in der Datenschutzerklärung des Anbieters. Grundsätzlich werden personenbezogene Daten immer nur so lange verarbeitet, wie es für die Bereitstellung unserer Dienstleistungen oder Produkte unbedingt nötig wird. Dies gilt in der Regel auch für Drittanbieter. Meist können Sie davon ausgehen, dass gewisse Daten über mehrere Jahre auf den Servern der Drittanbieter gespeichert werden. Daten können speziell in Cookies unterschiedlich lange gespeichert werden. Manche Cookies werden bereits nach dem Verlassen der Website wieder gelöscht, anderen können über einige Jahre in Ihrem Browser gespeichert sein.'
            : 'The exact duration for which data is stored on third-party servers can be found either further down in the privacy text of the respective tool or in the privacy policy of the provider. In general, personal data is processed only as long as necessary for the provision of our services or products. This also generally applies to third-party providers. Typically, certain data may be stored on third-party servers for several years. Data can be stored in cookies for varying lengths of time. Some cookies are deleted after leaving the website, while others may remain in your browser for several years.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Widerspruchsrecht' : 'Right to Object'}
        </h3>
        <p>
          {language === 'de'
            ? 'Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.'
            : 'You also have the right and the option to withdraw your consent to the use of cookies or third-party providers at any time. This can be done either through our cookie management tool or other opt-out functions. For example, you can also prevent data collection by cookies by managing, disabling, or deleting cookies in your browser. The legality of processing until the withdrawal remains unaffected.'}
        </p><p>
          {language === 'de'
            ? 'Da durch die eingebundenen Audio- und Video-Funktionen auf unserer Seite meist auch Cookies verwendet werden, sollten Sie sich auch unsere allgemeine Datenschutzerklärung über Cookies durchlesen. In den Datenschutzerklärungen der jeweiligen Drittanbieter erfahren Sie Genaueres über den Umgang und die Speicherung Ihrer Daten.'
            : 'Since the integrated audio and video functions on our site usually also use cookies, you should also read our general privacy policy on cookies. In the privacy policies of the respective third-party providers, you will find more details about the handling and storage of your data.'}
        </p>

        <h3 class="adsimple-112709565">
          {language === 'de' ? 'Rechtsgrundlage' : 'Legal Basis'}
        </h3>
        <p>
          {language === 'de'
            ? 'Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Audio- und Video-Elemente verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre Daten auch auf Grundlage unseres berechtigten Interesses <strong class="adsimple-112709565">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die eingebundenen Audio- und Video-Elemente gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.'
            : 'If you have consented to the processing and storage of your data through integrated audio and video elements, this consent serves as the legal basis for the data processing <strong class="adsimple-112709565">(Art. 6 para. 1 lit. a GDPR)</strong>. In principle, your data is also stored and processed based on our legitimate interest <strong class="adsimple-112709565">(Art. 6 para. 1 lit. f GDPR)</strong> in maintaining effective communication with you or other customers and business partners. We use the integrated audio and video elements only to the extent that you have given your consent.'}
        </p>

        <h2 id="erklaerung-verwendeter-begriffe" class="adsimple-112709565">
          {language === 'de' ? 'Erklärung verwendeter Begriffe' : 'Explanation of Terms Used'}
        </h2>
        <p>
          {language === 'de'
            ? 'Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchten diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt, werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.'
            : 'We strive to make our privacy policy as clear and understandable as possible. However, this is not always easy with technical and legal topics. It often makes sense to use legal terms (e.g., personal data) or certain technical expressions (e.g., cookies, IP address). However, we do not want to use these terms without explanation. Below you will find an alphabetical list of important terms used that we may not have sufficiently addressed in the previous privacy policy. If these terms are derived from the GDPR and are definitions, we will also provide the GDPR texts here and, if necessary, add our own explanations.'}
        </p>

        <h2 id="auftragsverarbeiter" class="adsimple-112709565">
          {language === 'de' ? 'Auftragsverarbeiter' : 'Processor'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">
                {language === 'de' ? '„Auftragsverarbeiter“' : '“Processor”'}
              </strong>
              {language === 'de' ? 'eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;' : 'a natural or legal person, authority, agency, or other body that processes personal data on behalf of the controller;'}
            </em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Erläuterung:' : 'Explanation:'}
          </strong>
          {language === 'de'
            ? 'Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.'
            : 'As a company and website owner, we are responsible for all data we process from you. In addition to the controllers, there may also be so-called processors. This includes any company or person who processes personal data on our behalf. Processors can therefore include service providers such as tax advisors, hosting or cloud providers, payment or newsletter providers, or large companies such as Google or Microsoft.'}
        </p>

        <h2 id="einwilligung" class="adsimple-112709565">
          {language === 'de' ? 'Einwilligung' : 'Consent'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">
                {language === 'de' ? '„Einwilligung“' : '“Consent”'}
              </strong>
              {language === 'de' ? 'der betroffenen Person jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist;' : 'of the data subject any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;'}
            </em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Erläuterung:' : 'Explanation:'}
          </strong>
          {language === 'de'
            ? 'In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen, dürfen auch keine personenbezogenen Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.'
            : 'Typically, such consent on websites is obtained through a cookie consent tool. You are probably familiar with this. When you first visit a website, you are usually asked via a banner whether you agree to or consent to data processing. You can often make individual settings and decide which data processing you allow and which you do not. If you do not consent, no personal data about you may be processed. Consent can also, of course, be given in writing, not just through a tool.'}
        </p>

        <h2 id="personenbezogene-daten" class="adsimple-112709565">
          {language === 'de' ? 'Personenbezogene Daten' : 'Personal Data'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <strong class="adsimple-112709565">
              <em>{language === 'de' ? '„personenbezogene Daten“' : '“personal data”'}</em>
            </strong>
            <em>
              {language === 'de'
                ? 'alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;'
                : 'any information relating to an identified or identifiable natural person (hereinafter referred to as “data subject”); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;'}
            </em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Erläuterung:' : 'Explanation:'}
          </strong>
          {language === 'de'
            ? 'Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten wie etwa:'
            : 'Personal data is any data that can identify you as a person. These are typically data such as:'}
        </p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">
            {language === 'de' ? 'Name' : 'Name'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Adresse' : 'Address'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'E-Mail-Adresse' : 'Email address'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Post-Anschrift' : 'Postal address'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Telefonnummer' : 'Phone number'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Geburtsdatum' : 'Date of birth'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder Matrikelnummer' : 'Identification numbers such as social security number, tax identification number, ID card number or matriculation number'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.' : 'Bank details such as account number, credit information, account balances, etc.'}
          </li>
        </ul>
        <p>
          {language === 'de'
            ? 'Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre <strong class="adsimple-112709565">IP-Adresse zu den personenbezogenen Daten</strong>. IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in weiterer Folge Sie als Anschlussinhaber feststellen. Daher benötigt auch das Speichern einer IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte <strong class="adsimple-112709565">„besondere Kategorien“</strong> der personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:'
            : 'According to the European Court of Justice (ECJ), your <strong class="adsimple-112709565">IP address is also considered personal data</strong>. IT experts can determine at least the approximate location of your device and, subsequently, you as the connection holder based on your IP address. Therefore, storing an IP address also requires a legal basis under the GDPR. There are also so-called <strong class="adsimple-112709565">“special categories”</strong> of personal data that are particularly sensitive. These include:'}
        </p>
        <ul class="adsimple-112709565">
          <li class="adsimple-112709565">
            {language === 'de' ? 'rassische und ethnische Herkunft' : 'racial and ethnic origin'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'politische Meinungen' : 'political opinions'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'religiöse bzw. weltanschauliche Überzeugungen' : 'religious or philosophical beliefs'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'die Gewerkschaftszugehörigkeit' : 'trade union membership'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden' : 'genetic data such as data obtained from blood or saliva samples'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen Merkmalen, die eine Person identifizieren können). Gesundheitsdaten' : 'biometric data (information on psychological, physical, or behavioral characteristics that can identify a person). Health data'}
          </li>
          <li class="adsimple-112709565">
            {language === 'de' ? 'Daten zur sexuellen Orientierung oder zum Sexualleben' : 'data concerning sexual orientation or sex life'}
          </li>
        </ul>

        <h2 id="profiling" class="adsimple-112709565">
          {language === 'de' ? 'Profiling' : 'Profiling'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">
                {language === 'de' ? '„Profiling“' : '“Profiling”'}
              </strong>
              {language === 'de' ? 'jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;' : 'any type of automated processing of personal data that involves using personal data to evaluate certain personal aspects relating to a natural person, in particular to analyze or predict aspects concerning work performance, economic situation, health, personal preferences, interests, reliability, behavior, location or movements of that natural person;'}
            </em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Erläuterung:' : 'Explanation:'}
          </strong>
          {language === 'de'
            ? 'Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe ausgespielt werden kann.'
            : 'Profiling involves collecting various pieces of information about a person to learn more about them. On the web, profiling is often used for advertising purposes or credit assessments. Web and advertising analysis programs, for example, collect data about your behavior and interests on a website. This results in a specific user profile, which can then be used to target advertisements to a particular audience.'}
        </p>

        <h2 id="verantwortlicher" class="adsimple-112709565">
          {language === 'de' ? 'Verantwortlicher' : 'Controller'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <em>
              <strong class="adsimple-112709565">
                {language === 'de' ? '„Verantwortlicher“' : '“Controller”'}
              </strong>
              {language === 'de' ? 'die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;' : 'the natural or legal person, authority, agency, or other body that alone or jointly with others determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union law or the law of the Member States, the controller or the criteria for its designation may be provided for by Union law or the law of the Member States;'}
            </em>
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Erläuterung:' : 'Explanation:'}
          </strong>
          {language === 'de'
            ? 'In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der “Verantwortliche”. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister weitergeben, sind diese “Auftragsverarbeiter”. Dafür muss ein “Auftragsverarbeitungsvertrag (AVV)” unterzeichnet werden.'
            : 'In our case, we are responsible for processing your personal data and are therefore the “controller”. If we pass on collected data to other service providers for processing, they are considered “processors”. A “data processing agreement (DPA)” must be signed for this purpose.'}
        </p>

        <h2 id="verarbeitung" class="adsimple-112709565">
          {language === 'de' ? 'Verarbeitung' : 'Processing'}
        </h2>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Begriffsbestimmung nach Artikel 4 der DSGVO' : 'Definition according to Article 4 GDPR'}
          </strong>
        </p>
        <p>
          {language === 'de'
            ? 'Im Sinne dieser Verordnung bezeichnet der Ausdruck:'
            : 'For the purposes of this regulation, the term refers to:'}
        </p>
        <blockquote>
          <p>
            <strong class="adsimple-112709565">
              <em>{language === 'de' ? '„Verarbeitung“' : '“Processing”'}</em>
            </strong>
            {language === 'de'
              ? 'jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;'
              : 'any operation or set of operations performed on personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;'}
          </p>
        </blockquote>
        <p>
          <strong class="adsimple-112709565">
            {language === 'de' ? 'Anmerkung:' : 'Note:'}
          </strong>
          {language === 'de'
            ? 'Wenn wir in unserer Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur das Erheben sondern auch das Speichern und Verarbeiten von Daten.'
            : 'When we refer to processing in our privacy policy, we mean any type of data processing. This includes not only collection but also storage and processing of data.'}
        </p>

        <h2 id="schlusswort" class="adsimple-112709565">
          {language === 'de' ? 'Schlusswort' : 'Closing Remarks'}
        </h2>
        <p>
          {language === 'de'
            ? 'Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte Datenschutzerklärung „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer Datenschutzerklärung sehen, nehmen wir den Schutz Ihrer persönlichen Daten, alles andere als auf die leichte Schulter.<br />Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu informieren. Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die Beweggründe für die Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung sehr technisch und juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir auch sprachlich einen anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist dies natürlich aufgrund der Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der Datenschutzerklärung näher erläutert.<br />Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche Stelle zu kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald wieder begrüßen zu dürfen.'
            : 'Congratulations! If you are reading this, you have really fought your way through our entire privacy policy or at least scrolled down to this point. As you can see from the extent of our privacy policy, we take the protection of your personal data very seriously.<br />It is important for us to inform you to the best of our knowledge and belief about the processing of personal data. We want to not only tell you which data is processed but also explain the reasons for using various software programs. Privacy policies are usually very technical and legal. Since most of you are not web developers or lawyers, we wanted to take a different approach linguistically and explain the matter in simple and clear language. Of course, this is not always possible due to the subject matter. Therefore, the most important terms are explained at the end of the privacy policy.<br />If you have any questions regarding data protection on our website, please do not hesitate to contact us or the responsible party. We wish you a pleasant time and hope to welcome you back to our website soon.'}
        </p>
        <p>
          {language === 'de' ? 'Alle Texte sind urheberrechtlich geschützt.' : 'All texts are protected by copyright.'}
        </p>
        <p style={{ marginTop: "15px" }}>
          {language === 'de'
            ? 'Quelle: Erstellt mit dem '
            : 'Source: Created with the '}
            <a href="https://www.adsimple.at/datenschutz-generator/" title="Datenschutz Generator Österreich von AdSimple">Datenschutz Generator</a> von AdSimple
        </p>

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
