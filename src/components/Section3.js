import React, { useContext } from 'react';
import './Section3.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const App = () => {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

  const projects = [
    {
      imageSrc: 'Memoria.jpg',
      headerTextDe: 'Memoria',
      headerTextEn: 'Memoria ',
      url: '/memoria',
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

  // Funktion zum Aufteilen der Projekte in Reihen mit jeweils drei Projekten
  const chunkProjects = (array, size) => {
    const chunkedProjects = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedProjects.push(array.slice(i, i + size));
    }
    return chunkedProjects;
  };

  const chunkedProjects = chunkProjects(projects, 3);

  return (
    <div className="App">
      <div>
        <h1 className="header">
          {language === 'de' ? 'Unsere Projekte' : 'Our Projects'}
        </h1>
      </div>
      {chunkedProjects.map((row, rowIndex) => (
        <div className="project-container" key={rowIndex}>
          {row.map((project, index) => (
            <div className="project" key={index}>
              <a href={project.url} rel="noopener noreferrer">
                <img
                  src={project.imageSrc}
                  alt={language === 'de' ? project.headerTextDe : project.headerTextEn}
                  className="project-image"
                />
              </a>
              <h3 className="project-header">
                {language === 'de' ? project.headerTextDe : project.headerTextEn}
              </h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
