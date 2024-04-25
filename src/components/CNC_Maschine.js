import React, { useContext } from 'react';
import MenuBar from './Menu_2';
import FooterBar from './Footer_2';
import './CNC_Maschine.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    height: '100%',
    backgroundColor: 'black', // Ändere die Hintergrundfarbe nach Bedarf
    color: 'white', // Ändere die Textfarbe nach Bedarf
};

const headerStyle = {
    paddingBottom: '20px',
    textAlign: 'left',
};


const headerTextStyles = {
    margin: '10px',
    marginTop: '4rem',
    fontSize: '40px',
    paddingLeft: '10%',
    color: 'white', // Farbe des Texts im Header
    fontFamily: 'Georgia, serif', // Beispiel für eine andere Schriftart
};

const mainStyle = {
    padding: '0 10%',
    paddingBottom: '10rem',
};

const sectionStyle = {
    margin: '60px 20px', // oben rechts unten links
    textAlign: 'left',
    fontFamily: 'Georgia, serif', // Beispiel für eine andere Schriftart
};

const sectionTextStyle = {
    fontSize: '18px',
    lineHeight: '1.5', // Erhöht den Zeilenabstand für eine bessere Lesbarkeit
};

const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Bilder werden in einer Zeile angeordnet und umgebrochen
    justifyContent: 'space-between', // Bilder werden gleichmäßig über die Breite verteilt
};

const imageStyle = {
    width: '30%', // Auf kleineren Bildschirmen die volle Breite verwenden
    maxWidth: '100%', // Maximale Breite auf 100% setzen
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
                <div className='header-image'></div>
                <h1 style={headerTextStyles}>
                    {language === 'de' ? 'CNC-Fräsen Einschulung' : 'CNC Milingmachine Introduction'}
                </h1>
            </header>
            <MenuBar />
            <main style={mainStyle}>

                <section style={sectionStyle}>
                    <section style={sectionTextStyle}>
                        <h2>
                            {language === 'de' ? 'Kurzbeschreibung' : 'Short Description'}
                        </h2>
                        <p>
                            {language === 'de'
                                ? 'Die CNC-Fräsen-Einschulung bietet eine umfassende Anleitung zur Nutzung der Maschine und der erforderlichen Software. In VR erlebst du schrittweise, wie die CNC-Fräse bedient wird. '
                                : 'The CNC Milling Training covers both the necessary software for the machine and its practical usage. Step by step, you will navigate through the CNC milling process in VR. '}
                        </p>
                    </section>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="CNC_video.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video>
                    <h2>
                        {language === 'de' ? 'Umgebungsaufbau' : 'Enivronmentbuilding'}
                    </h2>
                    <video controls width="100%">
                        <source src="Environment_building.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video>
                </section>


                <section style={sectionStyle}>
                    <section style={sectionTextStyle}>
                        <h2>
                            {language === 'de' ? 'Projektbeschreibung' : 'Project Description'}
                        </h2>
                        <p>
                            {language === 'de'
                                ? 'Die CNC-Fräsen-Einschulung bietet eine detaillierte Anleitung zur Nutzung der Maschine und der erforderlichen Software. Schritt für Schritt begibst du dich durch den CNC-Fräsprozess in der virtuellen Realität. Durch interaktive Videos und Multiple-Choice-Fragen wird dir ein Programm zur Festlegung der Fräswege vermittelt. Nach erfolgreicher Bewältigung dieser Phase übernimmst du eigenverantwortlich die Schritte, die für einen reibungslosen Fräsbetrieb (Von Opferplatte einlegen, Nullpunkt an der Maschine bestimmen und das zu fräsende Objekt befestigen wird hier alles realitätsnah ausgeführt) und die Einhaltung aller Sicherheitsvorkehrungen erforderlich sind. Wenn alle Einstellungen korrekt vorgenommen wurden und die Maschine betriebsbereit ist, steht dem Fräsen nichts mehr im Weg. Dieses Projekt wurde exklusiv für die Pioniergarage Salzburg konzipiert. Erlebe eine praxisnahe Schulung, die dir konkrete Kenntnisse im Umgang mit CNC-Fräsen vermittelt.'
                                : 'The CNC Milling Training provides a comprehensive guide on using the machine and the necessary software. Step by step, you navigate through the CNC milling process in virtual reality. An interactive program, featuring videos and multiple-choice questions, guides you in establishing milling paths. After successfully mastering this phase, you take responsibility for the steps required for smooth milling operations (realistically demonstrated, from inserting the sacrificial plate to determining the machines zero point and securing the object to be milled). All procedures adhere strictly to safety measures. Once all settings are correctly configured, and the machine is operational, nothing stands in the way of milling. This project was exclusively designed for the Pioniergarage Salzburg. Experience a hands-on training that imparts practical knowledge in CNC milling.'}
                        </p>
                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Screenshots' : 'Screenshots'}
                    </h2>
                    <div style={imageContainerStyle}>
                        <img src="CNC_8.jpg" alt={language === 'de' ? 'Bild 1' : 'Image 1'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Environment.jpg" alt={language === 'de' ? 'Bild 2' : 'Image 2'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_6.jpg" alt={language === 'de' ? 'Bild 3' : 'Image 3'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_5.jpg" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_3.PNG" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_7.jpg" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_9.jpg" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_12.jpg" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="CNC_11.jpg" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />



                    </div>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Links' : 'Links'}
                    </h2>
                    <p>
                        {/* <a href="https://memoria-vr.itch.io/memoria" style={linkStyle}>
                            {language === 'de' ? 'Itchi.io' : 'Itch.io'}
                        </a>
                        <a href="https://portfolio.fh-salzburg.ac.at/projects/2022-memoria-mmp3" style={linkStyle}>
                            {language === 'de' ? 'Portfolio FH Salzburg' : 'FH Salzburg Portfolio'}
                        </a>*/}
                        <a href="https://www.youtube.com/watch?v=IS9g_EJFyIA&ab_channel=VirtualVisionss" style={linkStyle}>
                            {language === 'de' ? 'CNC Einschulungvideo' : 'CNC Introduction video'}
                        </a> 
                    </p>
                </section>
            </main>
            <FooterBar />
        </div>
    );
}

export default App;
