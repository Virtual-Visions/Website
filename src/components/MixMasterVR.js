import React, { useContext } from 'react';
import MenuBar from './Menu_2';
import FooterBar from './Footer_2';
import './MixMasterVR.css';
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
                    {language === 'de' ? 'Mix Master VR' : 'Mix Master VR'}
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
                                ? 'Die Barkeeper-Demo in VR bietet eine umfassende Anleitung zur Zubereitung von Cocktails. In der virtuellen Realität lernst du Schritt für Schritt, wie du verschiedene Getränke mixt.'
                                : 'The Bartending Demo in VR provides a comprehensive guide to mixing cocktails. Step by step, you will learn how to prepare various drinks in virtual reality.'}
                        </p>

                    </section>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="MixMasterVR/TrailerMixMaster.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video>
                    {/* <h2>
                        {language === 'de' ? 'Umgebungsaufbau' : 'Enivronmentbuilding'}
                    </h2>
                    <video controls width="100%">
                        <source src="Environment_building.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video> */}
                </section>


                <section style={sectionStyle}>
                    <section style={sectionTextStyle}>
                        <h2>
                            {language === 'de' ? 'Projektbeschreibung' : 'Project Description'}
                        </h2>
                        <p>
                        {language === 'de'
        ? 'Die Barkeeper-Demo in VR bietet eine detaillierte Anleitung zur Zubereitung von Cocktails. Schritt für Schritt lernst du, wie du verschiedene Getränke mixt und dabei realistische Handbewegungen ausführst. Ein interaktives Programm, das Videos und Multiple-Choice-Fragen umfasst, leitet dich durch die grundlegenden Techniken des Barkeepings – von Greifen und Schütten bis hin zu Schütteln und Servieren. Diese Tech-Demo zeigt, was alles in der virtuellen Realität möglich ist und ist ideal für Ausstellungen konzipiert. Hier kannst du eine praxisnahe und immersive Schulung erleben, die dir konkrete Kenntnisse im Mixen von Cocktails vermittelt und dabei den Spaß eines Spiels bietet. Mit zahlreichen Rezepten und kreativen Tipps wird jede Sitzung zu einem aufregenden Erlebnis.'
        : 'The Bartending Demo in VR provides a comprehensive guide to mixing cocktails. Step by step, you will learn how to prepare various drinks while performing realistic hand movements. An interactive program, featuring videos and multiple-choice questions, guides you through the fundamental bartending techniques – from grabbing and pouring to shaking and serving. This tech demo showcases the possibilities of virtual reality and is designed for exhibitions. Experience a hands-on and immersive training that imparts practical knowledge in cocktail mixing, all while enjoying the fun of a game. With numerous recipes and creative tips, each session becomes an exciting experience.'}
</p>

                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Screenshots' : 'Screenshots'}
                    </h2>
                    <div style={imageContainerStyle}>
                        <img src="MixMasterVR/BarShot.jpg" alt={language === 'de' ? 'Bild 1' : 'Image 1'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Buch.jpg" alt={language === 'de' ? 'Bild 2' : 'Image 2'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Carina.jpg" alt={language === 'de' ? 'Bild 3' : 'Image 3'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Cola_Einfuellen.jpg" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Intro.jpg" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Lobby.jpg" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Lime.jpg" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Shaken.jpg" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="MixMasterVR/Zusammenfassung.jpg" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
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
                        <a href="https://www.youtube.com/watch?v=nO5FOBfHhU8&ab_channel=VirtualVisions" style={linkStyle}>
                            {language === 'de' ? 'Mix Master VR Tutorial' : 'Mix Master VR Tutorial Playtrough'}
                        </a> 
                    </p>
                </section>
            </main>
            <FooterBar />
        </div>
    );
}

export default App;
