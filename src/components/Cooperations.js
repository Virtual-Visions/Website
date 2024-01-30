
import React, { useContext } from 'react';
import { LanguageContext } from "./LanguageProvider";
import './Cooperations.css'


function App() {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext
  return (
    <div className="cooperationSection">
      <hr className="abtrennungsLinie" />
      <h1 className='cooperationHeader'>{language === "de" ? "Kooperationspartner & Kunden" : "Cooperationpartner & Customers"}</h1>
      <div className='cooperation-image-container'>
        <img className="cooperation-image" src="startup-salzburg-logo.png" alt='' />
        <img className="cooperation-image" src="Pioniergarage_Logo.png" alt='' />
      </div>
    </div>
  );
}

export default App;