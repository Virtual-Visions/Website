import React, { useContext } from 'react';
import { LanguageContext } from "./LanguageProvider";
import './Cooperations.css';

function App() {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext
  return (
    <div className="cooperationSection" id='cooperationSection'>
      <hr className="abtrennungsLinie" />
      <h1 className='cooperationHeader'>{language === "de" ? "Kooperationspartner & Kunden" : "Cooperationpartner & Customers"}</h1>

      {/* Die ersten drei Logos */}
      <div className='cooperation-image-container'>
        <img className="cooperation-image" src="startup-salzburg-logo.png" alt='' />
        <img className="cooperation-image" src="Pioniergarage_Logo.png" alt='' />
        <img className="cooperation-image" src="Scientific_Partner.png" alt='' />
      </div>


      <hr className="abtrennungsLinie-zusatz" />


      <div className="cooperation-item-container">
        <div className="cooperation-item">
        <a href="https://www.packmasdigital.de" target="_blank" rel="noreferrer noopener">
            <img className="cooperation-image" src="Logo-Pack-mas-digital.png" alt="Packmas Digital Logo" />
          </a>
          <p className="cooperation-text">
            Wir unterstützen die IHK-Initiative Pack ma's digital, um der Wirtschaft in Oberbayern bei der Digitalisierung weiter zu helfen und die Zukunft des Standorts zu sichern.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
