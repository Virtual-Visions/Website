import React, { useContext } from 'react';
import MenuBar from './Menu_2';
import FooterBar from './Footer_2';
import './PhysicsBasedUI.css';
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
                <div className='header-image-physics-based-ui'></div>
                <h1 style={headerTextStyles}>
                    {language === 'de' ? 'Physics Based UI Toolkit' : 'Physics Based UI Toolkit'}
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
                                ? 'Das Physics Based UI Toolkit für Unity ermöglicht die Erstellung benutzerdefinierter UI-Elemente mit realistischen physikalischen Eigenschaften, die das Spielerlebnis oder Anwendungen verbessern.'
                                : 'The Physics Based UI Toolkit for Unity enables the creation of custom UI elements with realistic physical properties, enhancing the gaming experience or applications.'}
                        </p>
                    </section>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="UI_Trailer.mp4" type="video/mp4" />
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
                                ? 'Das Physics Based UI Toolkit ist eine äußerst nützliche Erweiterung für die Unity Engine, die es Entwicklern ermöglicht, benutzerdefinierte UI-Elemente zu erstellen, die vollständig auf die Physik-Engine von Unity zugeschnitten sind. Stell es dir wie einen vielseitigen Baukasten vor, der es dir ermöglicht, interaktive Benutzeroberflächen mit realistischen physikalischen Eigenschaften zu gestalten. Mit diesem Toolkit kannst du eine Vielzahl von UI-Elementen erstellen, die sich aufgrund der Physik-Engine von Unity realistisch verhalten. Einige der verfügbaren Beispiele umfassen einen Timer, eine Stoppuhr und Dropdown-Menüs. Diese Beispiele dienen als Ausgangspunkt für deine eigenen Projekte und zeigen, wie vielseitig das Toolkit ist.  Das Physics Based UI Toolkit nutzt die Unity-Physik-Engine, um realistische UI-Elemente zu erstellen, die das Spielerlebnis oder die Anwendungen verbessern können. Es eröffnet Entwicklern eine Fülle kreativer Möglichkeiten, um interaktive Benutzeroberflächen zu gestalten.'
                                : 'The Physics Based UI Toolkit is an extremely useful extension for the Unity Engine, enabling developers to create custom UI elements that are fully tailored to Unity\'s physics engine. Think of it as a versatile toolbox allowing you to design interactive user interfaces with realistic physical properties. With this toolkit, you can create a variety of UI elements that behave realistically due to Unity\'s physics engine. Some of the available examples include a timer, a stopwatch, and dropdown menus. These examples serve as starting points for your own projects and demonstrate the versatility of the toolkit. By leveraging the Unity physics engine, the Physics Based UI Toolkit creates realistic UI elements that can enhance the gaming experience or applications. It opens up a wealth of creative possibilities for developers to design interactive user interfaces.'}
                        </p>
                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Screenshots' : 'Screenshots'}
                    </h2>
                    <div style={imageContainerStyle}>
                        <img src="UI_01.jpg" alt={language === 'de' ? 'Bild 1' : 'Image 1'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_02.jpg" alt={language === 'de' ? 'Bild 2' : 'Image 2'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_03.jpg" alt={language === 'de' ? 'Bild 3' : 'Image 3'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_04.jpg" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_05.jpg" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_06.jpg" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_07.jpg" alt={language === 'de' ? 'Bild 7' : 'Image 7'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="UI_08.jpg" alt={language === 'de' ? 'Bild 8' : 'Image 8'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        { <img src="UI_09.jpg" alt={language === 'de' ? 'Bild 9' : 'Image 9'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} /> }


                    </div>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Links' : 'Links'}
                    </h2>
                    <p>
                        {/* <a href="https://memoria-vr.itch.io/memoria" style={linkStyle}>
                            {language === 'de' ? 'Itchi.io' : 'Itch.io'}
                        </a> */}
                        <a href="https://www.youtube.com/watch?v=GKOVZeHDU2E&ab_channel=VirtualVisions" style={linkStyle}>
                            {language === 'de' ? 'Trailer' : 'Trailer'}
                        </a>
                        <a href="https://www.youtube.com/watch?v=FK252CtPWMY&ab_channel=VirtualVisions" style={linkStyle}>
                            {language === 'de' ? 'Kurzer Trailer' : 'Short Trailer'}
                        </a>
                    </p>
                </section>
            </main>
            <FooterBar />
        </div>
    );
}

export default App;
