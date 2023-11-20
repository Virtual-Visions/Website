import React, { useContext } from 'react';
import './Section2.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const ImageCard = ({ imageSrc, headerTextDe, headerTextEn, description }) => {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext
  const headerText = language === 'de' ? headerTextDe : headerTextEn;

  return (
    <div className="image-card">
      <img src={imageSrc} alt={headerText} className="round-image" />
      <h2 className="image-header">{headerText}</h2>
      <p className='quote'>{description}</p>
    </div>
  );
};

const ImageRow = () => {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext
  const headerTextDe = '"Virtual Reality wird Schulungsprozesse und Arbeitsweisen in Unternehmen neu definieren."';
  const headerTextEn = '"Virtual Reality will redefine training processes and work practices in companies."';

  return (
    <div>
      <div className="Header">
        <h1>{language === 'de' ? headerTextDe : headerTextEn}</h1>
      </div>
      <div className="image-rows">
        <ImageCard
          imageSrc="./Daniel_Bild.jpg" // Ersetzen Sie dies durch Ihre Bildquelle
          headerTextDe="Daniel Zirngast"
          headerTextEn="Daniel Zirngast"
          description={
            language === 'de'
              ? '"Die VR-Branche wächst exponentiell, und Pioniere gestalten die Zukunft. Wir bei Virtual Visions sind Visionäre und wollen die nächste Ära der Immersion selbst gestalten."'
              : '"The VR industry is growing exponentially, and pioneers are shaping the future. At Virtual Visions, we are visionaries and want to shape the next era of immersion ourselves."'
          }
        />
        <ImageCard
          imageSrc="./Bjarne_Bild.jpg" // Ersetzen Sie dies durch Ihre Bildquelle
          headerTextDe="Bjarne Zimmer"
          headerTextEn="Bjarne Zimmer"
          description={
            language === 'de'
              ? '"Die virtuelle Realität ist für nicht nur eine Technologie, sondern eine Brücke zu unendlichen Möglichkeiten. In dieser digitalen Sphäre finden wir die Freiheit, Ideen zu manifestieren und gleichzeitig die reale Welt neu zu interpretieren."'
              : '"Virtual reality is not just a technology, but a bridge to infinite possibilities. In this digital realm, we find the freedom to manifest ideas while reinterpreting the real world."'
          }
        />
      </div>
    </div>
  );
};

export default ImageRow;
