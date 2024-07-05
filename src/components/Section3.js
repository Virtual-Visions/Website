import React, { useContext, useRef } from 'react';
import './Section3.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const App = () => {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

  const projectContainerRef = useRef(null);

  const projects = [
    {
      imageSrc: 'Memoria01.png',
      headerTextDe: 'Memoria',
      headerTextEn: 'Memoria ',
      url: '/memoria',
    },
    {
      imageSrc: 'CNC_CoverImage.jpg',
      headerTextDe: 'CNC Fräse Einschulung',
      headerTextEn: 'CNC Milingmachine Introduction',
      url: '/cncMachine',
    },
    {
      imageSrc: 'MixMaster_VR_CoverImage.png',
      headerTextDe: 'MixMasterVR',
      headerTextEn: 'MixMasterVR',
      url: '/mixMasterVR',
    },
    {
      imageSrc: 'UI_Cover.png',
      headerTextDe: 'Physics Based UI',
      headerTextEn: 'Physics Based UI ',
      url: '/physicsBasedUI',
    },
    {
      imageSrc: 'Grabbing01.png',
      headerTextDe: 'Freies Greifen von Objekten',
      headerTextEn: 'Free Object Grasping ',
      url: '/grabbing',
    },
    {
      imageSrc: 'MainRedirectedWalking.png',
      headerTextDe: 'Redirected Walking',
      headerTextEn: 'Redirected Walking ',
      url: '/walking',
    },




    // Fügen Sie weitere Projekte hier hinzu
  ];

  const handleScroll = (scrollAmount) => {
    if (projectContainerRef.current) {
      const screenWidth = window.innerWidth;
      const scrollPercentage = screenWidth <= 1000 ? screenWidth <= 600 ? 0.6 : 0.4: 0.32; // Hier können Sie den Prozentsatz für verschiedene Bildschirmbreiten anpassen

      projectContainerRef.current.scrollBy({
        left: scrollAmount * projectContainerRef.current.offsetWidth *scrollPercentage,
        behavior: 'smooth',
      });
    }
  };

  // Center the arrow within the projects on initial render and window resize


  return (
    <div className="App ">

      <h1 className="header">
        {language === 'de' ? 'Unsere Projekte' : 'Our Projects'}
      </h1>


      <div className='absolute'>
        <div className="project-container" ref={projectContainerRef}>
          <div className="arrow" onClick={() => handleScroll(1)}>
            {/* Adjust the scroll amount as needed */}
            ❯
          </div>
          <div className="arrowLeft" onClick={() => handleScroll(-1)}>
            {/* Adjust the scroll amount as needed */}
            ❮
          </div>

          {projects.map((project, index) => (
            <div className="project" key={index}>
              <a href={project.url} rel="noopener noreferrer">
                <img
                  src={project.imageSrc}
                  alt={language === 'de' ? project.headerTextDe : project.headerTextEn}
                  className="project-image"
                />
              </a>
              <div className="project-header">
                {language === 'de' ? project.headerTextDe : project.headerTextEn}
              </div>
            </div>

          ))}

        </div>
      </div>

    </div >
  );
};

export default App;
