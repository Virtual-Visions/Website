import React, { useContext } from 'react';
import './Section4.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

function Section1() {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

  return (
    <div className="container mt-4">
      <div className="section-title">
        <img src='./Virtual_Visions_Logo_No_Background.png' className='imgtext'></img>
        <h3>{language === 'de' ? 'Ihr Partner für VR-Anwendungen im Training- und Schulungsbereich' 
        : 'Your partner for VR applications in the training and education sector.'}</h3>
        <div>
          {language === 'de'
            ? `"In diesem Abschnitt zeigen wir Ihnen genauer die Vorteile auf, die der Einsatz unserer VR-Technologie ermöglicht: "Kostenreduzierung," "Vereinfachung," "Modernisierung" und "Wiederholbarkeit." Diese Konzepte sehen wir als entscheidende Faktoren, um Unternehmen noch effizienter und wettbewerbsfähiger zu machen."`
            : `"In this section, we will provide a more detailed insight into the benefits enabled by the use of our VR technology: "Cost Reduction," "Simplification," "Modernization," and "Repeatability." We see these concepts as crucial factors for making companies even more efficient and competitive."`}
        </div>
      </div>
    </div>
  );
}

export default Section1;
