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
          {language === 'de' ? 'Impressum der Virtual Visions GbR' : 'Imprint of Virtual Visions GbR'}
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
        {language === 'de' ? 'Internet' : 'Internet'}:
        

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
