import React, { useContext } from 'react';
import './Imprint.css'; // Importiere die CSS-Datei
import Footer from './Footer_2.js'; // Importiere die Fußzeilenkomponente
import MenuBar from "./Menu_2.js";
import { LanguageContext } from './LanguageProvider'; // Importiere den LanguageContext

function Imprint() {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext
  return (
    <div className="imprint-container">
      <div><MenuBar/></div>
      <div className="main-content">
        <h1>
          {language === 'de' ? 'Impressum der Virtual Visions OG' : 'Imprint of Virtual Visions OG'}
        </h1>

        <b>Virtual Visions</b>
        <br />
        <address>
          Steinfeldstraße 9
          <br />
          8504 Preding
          <br />
          {language === 'de' ? 'Österreich' : 'Austria'}
          <br />
          <br />
          {language === 'de' ? 'Firmenbuchnummer: 616191p' : 'company register number: 616191p'}
          <br />
          <br />
          UID: ATU80353804
          <br />

        </address>
        <br />
        <b>
          {language === 'de' ? 'vertreten durch die Gesellschafter Bjarne Zimmer und Daniel Zirngast' : 'represented by the partners Bjarne Zimmer and Daniel Zirngast'}
        </b>
        <br />
        <br />
        <b>{language === 'de' ? 'Kontakt' : 'Contact'}</b>
        <br />
        {language === 'de' ? 'Telefon' : 'Phone'}: +43 650 2601493 / +49 151 42851038
        <br />
        E-Mail: business.virtualvisions@gmail.com
        <br />
        {language === 'de' ? 'Internet: virtual-visions.net' : 'Internet: virtual-visions.net'}:
        

      </div>
      <div>
        
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

export default Imprint;
