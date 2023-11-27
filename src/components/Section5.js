import React, { useContext, useState } from 'react';
import './Section5.css';
import { LanguageContext } from './LanguageProvider';

function Section5() {
  const { language } = useContext(LanguageContext);
  const [selectedVideo, setSelectedVideo] = useState('RealisticGraphics.mp4');
  const [selectedText, setSelectedText] = useState({
    de: 'Die Implementierung wirklichkeitsnaher Grafik mittels fortschrittlicher Rendering-Technologien, hochauflösender Texturen und realistischer Beleuchtungstechniken.',
    en: 'The implementation of realistic graphics involves the use of advanced rendering technologies, high-resolution textures, and realistic lighting techniques.'
  });
  const [selectedPoster, setSelectedPoster] = useState('Realistic_Graphics.png');

  const handleButtonClick = (video, text, poster) => {
    setSelectedVideo(video);
    setSelectedText(text);
    setSelectedPoster(poster);
  };

  return (
    <div>
      <h3 className="section-title-s5">
        {language === 'de' ? 'Möglichkeiten der VR-Technologie' : 'Possibilities of VR Technology'}
      </h3>
      <div className="container-s5">
        <div className="section-content">
          <div className="video-container">
            <video key={selectedVideo} controls poster={selectedPoster}>
              <source src={selectedVideo} type="video/mp4" />
              {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
            </video>
            <p className="video-text">{selectedText[language]}</p>
          </div>
          <div className="button-list">
            <div className='buttons'>
              <button className="button-s5" onClick={() => handleButtonClick('RealisticGraphics.mp4', {
                de: 'Die Implementierung wirklichkeitsnaher Grafik mittels fortschrittlicher Rendering-Technologien, hochauflösender Texturen und realistischer Beleuchtungstechniken.',
                en: 'The implementation of realistic graphics involves the use of advanced rendering technologies, high-resolution textures, and realistic lighting techniques.'
              }, 'Realistic_Graphics.png')}>
                <div className="button-text">{language === 'de' ? 'Realistische Grafik' : 'Realistic Graphics'}</div>
                <div className='button-image-container'>
                  <img className="button-image" src="Realistic_Graphics.png" alt='' />
                </div>
              </button>
            </div>
            <div className='buttons'>
              <button className="button-s5" onClick={() => handleButtonClick('RealisticInteraction.mp4', {
                de: 'Mit Handtracking oder Controllern können Nutzer realistische Interaktionen mit virtuellen Gegenständen durchführen.',
                en: 'With hand tracking or controllers, users can perform realistic interactions with virtual objects.'
              }, 'Memoria01.png')}>
                <div className="button-text">{language === 'de' ? 'Übliche Interaktionen' : 'Usual Interactions'}</div>
                <div className='button-image-container'>
                  <img className="button-image" src="Memoria01.png" alt='' />
                </div>
              </button>
            </div>
            <div className='buttons'>
              <button className="button-s5" onClick={() => handleButtonClick('DigitalTwin.mp4', {
                de: 'Die Umsetzung digitaler Zwillinge in Virtual Reality ermöglicht es, virtuelle Repräsentationen von realen Objekten oder Umgebungen zu erstellen.',
                en: 'The implementation of digital twins in Virtual Reality allows the creation of virtual representations of real objects or environments.'
              }, 'HeroImage.png')}>
                <div className="button-text">{language === 'de' ? 'Digitale Zwillinge' : 'Digital Twins'}</div>
                <div className='button-image-container'>
                  <img className="button-image" src="HeroImage.png" alt='' />
                </div>
              </button>
            </div>
            {/* Weitere Buttons hier */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
