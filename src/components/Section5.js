import React, { useContext, useState } from 'react';
import './Section5.css';
import { LanguageContext } from './LanguageProvider';

function Section5() {
  const { language } = useContext(LanguageContext);
  const [selectedVideo, setSelectedVideo] = useState('RealisticGraphics.mp4');
  const [selectedText, setSelectedText] = useState({
    de: 'Die Implementierung wirklichkeitsnaher Grafik beinhaltet die Verwendung fortschrittlicher Rendering-Technologien, hochauflösender Texturen und realistischer Beleuchtungstechniken in digitalen Umgebungen. Durch diese Maßnahmen wird eine immersive visuelle Darstellung erzielt, die der Realität nahekommt und die Benutzererfahrung in Anwendungen wie Simulationen verbessert.',
    en: 'The implementation of realistic graphics involves the use of advanced rendering technologies, high-resolution textures, and realistic lighting techniques in digital environments. These measures result in an immersive visual representation that closely resembles reality, enhancing the user experience in applications such as simulations.'
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
                de: 'Die Implementierung wirklichkeitsnaher Grafik beinhaltet die Verwendung fortschrittlicher Rendering-Technologien, hochauflösender Texturen und realistischer Beleuchtungstechniken in digitalen Umgebungen. Durch diese Maßnahmen wird eine immersive visuelle Darstellung erzielt, die der Realität nahekommt und die Benutzererfahrung in Anwendungen wie Simulationen verbessert.',
                en: 'The implementation of realistic graphics involves the use of advanced rendering technologies, high-resolution textures, and realistic lighting techniques in digital environments. These measures result in an immersive visual representation that closely resembles reality, enhancing the user experience in applications such as simulations.'
              }, 'Realistic_Graphics.png')}>
                <div className="button-text">{language === 'de' ? 'Implementierung wirklichkeitsnaher Grafik' : 'Implementation of Realistic Graphics'}</div>
                <div className='button-image-container'>
                  <img className="button-image" src="Realistic_Graphics.png" alt='' />
                </div>
              </button>
            </div>
            <div className='buttons'>
              <button className="button-s5" onClick={() => handleButtonClick('RealisticInteraction.mp4', {
                de: 'Mit Handtracking können Nutzer realistische Interaktionen mit virtuellen Gegenständen durchführen, indem sie ihre Hände im virtuellen Raum nutzen, um Objekte zu greifen und zu bewegen. Diese Technologie ermöglicht eine immersive Erfahrung, bei der die Bewegungen der Hände präzise erfasst werden.',
                en: 'With hand tracking, users can perform realistic interactions with virtual objects by using their hands in the virtual space to grab and move objects. This technology enables an immersive experience where hand movements are accurately captured.'
              }, 'Grabbing02.png')}>
                <div className="button-text">{language === 'de' ? 'Realistische Interaktionen mit Gegenständen' : 'Realistic Interactions with Objects'}</div>
                <div className='button-image-container'>
                  <img className="button-image" src="Grabbing02.png" alt='' />
                </div>
              </button>
            </div>
            <div className='buttons'>
              <button className="button-s5" onClick={() => handleButtonClick('DigitalTwin.mp4', {
                de: 'Die Umsetzung digitaler Zwillinge in Virtual Reality (VR) ermöglicht es, virtuelle Repräsentationen von realen Objekten oder Umgebungen zu erstellen. Dies erfolgt durch die Integration von hochauflösenden 3D-Modellen und Sensordaten, um eine immersive und präzise VR-Erfahrung zu schaffen, die den realen Gegenstücken in Grafik, Sound und Interaktion so nah wie möglich kommt.',
                en: 'The implementation of digital twins in Virtual Reality (VR) allows the creation of virtual representations of real objects or environments. This is achieved by integrating high-resolution 3D models and sensor data to create an immersive and precise VR experience that closely resembles the real counterparts in graphics, sound, and interaction.'
              }, 'HeroImage.png')}>
                <div className="button-text">{language === 'de' ? 'Umsetzung digitaler Zwillinge in VR' : 'Implementation of Digital Twins in VR'}</div>
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
