import React from 'react';

import { useLanguage } from './useLanguage';
const logoImageUrl = './Logo_No_Background_thin.png';

const textContent = {
  de: {
    main: 'Main',
    vision: 'Vision',
    aboutUs: 'Über Uns',
    projects: 'Projekte',
    language: 'EN',
  },
  en: {
    main: 'Main',
    vision: 'Vision',
    aboutUs: 'About Us',
    projects: 'Projects',
    language: 'DE',
  },
};

const menuBarStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '0.3rem',
};

const logoStyle = {
  height: '60px',
  marginLeft: '20px',
};

const menuItemContainerStyle = {
  padding: '0px 50px',
};

const menuItemStyle = {
  padding: '10px 20px',
  background: 'rgba(0, 0, 0, 0)',
  color: '#d5d5d5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'color 0.3s, background 0.3s',
};

const languageButtonStyle = {
  padding: '10px 20px',
  background: 'rgba(0, 0, 0, 0)',
  color: '#d5d5d5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'color 0.3s, background 0.3s',
};

const handleButtonHover = (event) => {
  event.target.style.color = '#d5d5d5';
  event.target.style.background = 'rgba(150,150,150,0.2)';
};

const handleButtonLeave = (event) => {
  event.target.style.color = '#d5d5d5';
  event.target.style.background = 'rgba(0, 0, 0, 0)';
};

const scrollToSection = (sectionID) => {
  const section = document.getElementById(sectionID);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function AnimatedHeadline() {
  const { language, toggleLanguage } = useLanguage(); // Verwenden Sie den Sprachstatus und die toggleLanguage-Funktion aus dem LanguageProvider

  return (
    <div>
      <div style={menuBarStyle}>
        <a href={"/"} rel="noopener noreferrer">
          <img
            src={logoImageUrl}
            alt="Logo"
            style={logoStyle}
          />
        </a>
        <div style={menuItemContainerStyle}>
          <button
            style={languageButtonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={toggleLanguage} // Beim Klicken ändern Sie die Sprache im LanguageProvider
          >
            {textContent[language].language}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimatedHeadline;
