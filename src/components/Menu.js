import React, { useState } from 'react';

import { useLanguage } from './useLanguage';
const logoImageUrl = './Logo_No_Background_thin.png';

const textContent = {
  de: {
    main: 'Main',
    vision: 'Vision',
    company: "Über Uns",
    aboutUs: 'Team',
    projects: 'Projekte',
    language: 'EN',
  },
  en: {
    main: 'Main',
    vision: 'Vision',
    company: "About Us",
    aboutUs: 'Team',
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
const menuBarStyleSmall = {
  position: 'fixed',
  top: '75px',
  right: '0',
  width: '20%',


  alignItems: 'flex-end', // Ausrichtung am unteren Rand
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '0.3rem',
};


const logoStyle = {
  height: '60px',
  marginLeft: '20px',
};

const menuItemContainerStyle = {
  padding: '0px 0px',
  display: 'grid',
};
const menuItemContainerStyleBig = {
  padding: '0px 20px',

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
const menuSmallItemStyle = {
  padding: '10px 10px',
  background: 'rgba(0, 0, 0, 0)',
  color: '#d5d5d5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'color 0.3s, background 0.3s',
};

const languageButtonStyle = {
  padding: '10px 5px 10px 5px',
  marginLeft: '15px',
  background: 'rgba(0, 0, 0, 0)',
  color: '#d5d5d5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '17px',
  transition: 'color 0.3s, background 0.3s',
  fontFamily: 'Georgia',
};

const MenuButtonStyle = {
  padding: '10px 5px 10px 5px',
  marginRight: '40px',
  marginLeft: '15px',
  background: 'rgba(0, 0, 0, 0)',
  color: '#d5d5d5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '17px',
  transition: 'color 0.3s, background 0.3s',
  fontFamily: 'Georgia',
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
        {window.innerWidth <= 768 ? (
          <div>
            <button
              style={MenuButtonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={toggleMobileMenu}
            >
              ☰
            </button>

          </div>
        ) : (
          <div style={menuItemContainerStyleBig}>
            <button
              style={menuItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('containerStyle')}
            >
              {textContent[language].main}
            </button>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section4')}
            >
              {textContent[language].company}
            </button>
            <button
              style={menuItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section3')}
            >
              {textContent[language].projects}
            </button>
            <button
              style={menuItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section1')}
            >
              {textContent[language].vision}
            </button>
            <button
              style={menuItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section2')}
            >
              {textContent[language].aboutUs}
            </button>
            |
            <button
              style={languageButtonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={toggleLanguage}
            >
              {textContent[language].language}
            </button>
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div style={menuBarStyleSmall}>
          <div style={menuItemContainerStyle}>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('containerStyle')}
            >
              {textContent[language].main}
            </button>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section4')}
            >
              {textContent[language].company}
            </button>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section3')}
            >
              {textContent[language].projects}
            </button>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section1')}
            >
              {textContent[language].vision}
            </button>
            <button
              style={menuSmallItemStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => scrollToSection('section2')}
            >
              {textContent[language].aboutUs}
            </button>
            
            
            <button
              style={languageButtonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={toggleLanguage}
            >
              {textContent[language].language}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimatedHeadline;
