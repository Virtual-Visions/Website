import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Imprint.css'; // Importiere die CSS-Datei
import Footer from './Footer.js'; // Importiere die Footer-Komponente
import AnimatedHeadline from './AnimatedHeadline.js'; // Importiere die AnimatedHeadline-Komponente
import { LanguageContext } from './LanguageProvider'; // Importiere den LanguageContext

function Imprint() {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext

  return (
    <div className="imprint-container">
      <div className="main-content">
        <h1>
          {language === 'de' ? 'Impressum der Virtual Visions OG' : 'Imprint of Virtual Visions OG'}
        </h1>

        <b>Virtual Visions</b>
        <br />
        <address>
          {language === 'de' ? 'Steinfeldstraße 9' : 'Steinfeldstraße 9'}
          <br />
          {language === 'de' ? '8504 Preding' : '8504 Preding'}
          <br />
          {language === 'de' ? 'Österreich' : 'Austria'}
          <br />
        </address>
        <br />
        <b>
          {language === 'de'
            ? 'vertreten durch die Gesellschafter Bjarne Zimmer und Daniel Zirngast'
            : 'represented by the partners Bjarne Zimmer and Daniel Zirngast'}
        </b>
        <br />
        <br />
        <b>{language === 'de' ? 'Kontakt' : 'Contact'}</b>
        <br />
        {language === 'de' ? 'Telefon: +43 650 2601493 / +49 151 42851038' : 'Phone: +43 650 2601493 / +49 151 42851038'}
        <br />
        {language === 'de' ? 'E-Mail: business.virtualvisions@gmail.com' : 'Email: business.virtualvisions@gmail.com'}
        <br />
        {language === 'de' ? 'Internet: virtual-visions.net' : 'Website: virtual-visions.net'}
      </div>
      <Footer />
    </div>
  );
}

export default Imprint;
