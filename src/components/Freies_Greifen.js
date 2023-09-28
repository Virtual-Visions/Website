import React, { useContext } from 'react';
import MenuBar from './Menu_2';
import FooterBar from './Footer_2';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    height: '100%',
    backgroundColor: 'black', // Ändere die Hintergrundfarbe nach Bedarf
    color: 'white', // Ändere die Textfarbe nach Bedarf
};

const headerStyle = {

    textAlign: 'left',
};

const headerImageStyle = {

    backgroundImage: 'url("Grabbing_Logo.png")', // Passe den Pfad zum Header-Bild an
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '0.4', // Die Opazität (Deckkraft) des Header-Bilds
    height: '40rem',
    marginBottom: '5rem',
};

const headerTextStyles = {

    margin: '10px',
    fontSize: '40px',
    paddingLeft: '10.5%',
    color: 'white', // Farbe des Texts im Header
    fontFamily: 'Georgia, serif', // Beispiel für eine andere Schriftart
};

const mainStyle = {
    padding: '0 10%',
    paddingBottom: '10rem',
};

const sectionStyle = {
    margin: '20px',
    textAlign: 'left',
    fontFamily: 'Georgia, serif', // Beispiel für eine andere Schriftart
};

const sectionTextStyle = {

    lineHeight: '1.5', // Erhöht den Zeilenabstand für eine bessere Lesbarkeit
};

const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Bilder werden in einer Zeile angeordnet und umgebrochen
    justifyContent: 'space-between', // Bilder werden gleichmäßig über die Breite verteilt
};

const imageStyle = {
    width: '30%', // Jedes Bild nimmt 30% der Breite ein, um drei Bilder pro Zeile zu ermöglichen
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px', // Abstand zwischen den Bildern
};

const linkStyle = {
    color: 'white', // Ändere die Linkfarbe nach Bedarf
    margin: '10px 0',
    fontSize: '20px',
    textDecoration: 'none', // Entfernt die Unterstreichung der Links
    display: 'block', // Zeigt die Links als Blockelemente an, um sie untereinander anzuordnen
};

function App() {
    const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

    return (
        <div style={appStyle}>
            <header style={headerStyle}>
                <div style={headerImageStyle}></div>
                <h1 style={headerTextStyles}>
                    {language === 'de' ? 'Freies Greifen in Virtual Reality' : 'Free Grasping in Virtual Reality'}
                </h1>
            </header>
            <MenuBar />
            <main style={mainStyle}>
                <section style={sectionStyle}>
                    <section style={sectionTextStyle}>
                        <h2>
                            {language === 'de' ? 'Projektbeschreibung' : 'Project Description'}
                        </h2>
                        <p>
                            {language === 'de'
                                ? 'Dieses Projekt entstand im Rahmen einer Abschlussbachelorarbeit und konzentriert sich auf die Implementierung eines innovativen freien Greif-Systems in VR. Dies bedeutet, dass Benutzer in der VR-Umgebung ihre Hände frei bewegen können, ohne auf Controller oder andere Eingabegeräte angewiesen zu sein und Gegenstände greifen können, wie sie es aus der Realität gewohnt sind. Diese fortschrittliche Technologie eröffnet aufregende Möglichkeiten für eine noch immersivere VR-Erfahrung und erlaubt natürliche Gesten und Interaktionen in virtuellen Welten.'
                                : 'This project was created as part of a bachelor\'s thesis and focuses on the implementation of an innovative free grasping system in VR. This means that users in the VR environment can freely move their hands without the need for controllers or other input devices and can grasp objects as they do in reality. This advanced technology opens up exciting possibilities for an even more immersive VR experience and allows for natural gestures and interactions in virtual worlds.'}
                        </p>
                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="Grabbing_Trailer.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Screenshots' : 'Screenshots'}
                    </h2>
                    <div style={imageContainerStyle}>
                        <img src="Grabbing01.png" alt={language === 'de' ? 'Bild 1' : 'Image 1'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Grabbing02.png" alt={language === 'de' ? 'Bild 2' : 'Image 2'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Grabbing03.png" alt={language === 'de' ? 'Bild 3' : 'Image 3'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />

                        {/* Füge weitere Bilder hinzu */}
                    </div>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Links' : 'Links'}
                    </h2>
                    <p>
                        <a href="https://github.com/BjarneZimmer/Bachelorarbeiten/blob/main/Bjarne_Zimmer_Bachelorarbeit_Freies_Greifen_Handtracking.pdf" style={linkStyle}>
                            {language === 'de' ? 'Bachelorarbeit Text' : 'Bachelor\'s Thesis Text'}
                        </a>
                    </p>
                </section>
            </main>
            <FooterBar />
        </div>
    );
}

export default App;
