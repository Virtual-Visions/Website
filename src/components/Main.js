import React from 'react';
import './Main.css';
import AnimatedHeadline from './AnimatedHeadline.js'; // Importiere die Komponente
import Sections from './Sections.js'; // Importiere die Komponente
import Footer from './Footer.js'


function Main() {
  return (

    <div className="Main">
      <header className="Main-header">
        <AnimatedHeadline /> {/* Verwende die animierte Überschriftskomponente */}
        
      </header> 

      <Sections />
      <Footer/>
    </div>

  );
}



export default Main;