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
    padding: '20px',
    textAlign: 'left',
};

const headerImageStyle = {
    backgroundImage: 'url("RedirectedWalking_TitleImage.png")', // Passe den Pfad zum Header-Bild an
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
                    {language === 'de' ? 'Endless Running - Systeme für Redirected Walking in Virtual Reality' : 'Endless Running - Systems for Redirected Walking in Virtual Reality'}
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
                                ? 'Dieses Projekt wurde im Rahmen einer Bachelor-Abschlussarbeit entwickelt und erforscht eine potenzielle alternative Möglichkeit zur Fortbewegung in der virtuellen Realität (VR). Redirected Walking ist ein Ansatz, bei dem der Nutzer nicht auf gängige Methoden wie Teleportation oder Joystick-Bewegungen angewiesen ist. Stattdessen wird der gesamte physisch verfügbare Raum effektiv genutzt. Bei dieser Methode wird der Nutzer durch das System auf verschiedene Weisen gelenkt. Entweder wird er ständig in die Mitte des virtuellen Raums geführt oder er bewegt sich auf einer Umlaufbahn um das Zentrum herum. Diese Umleitung erfolgt, indem die Kamera in der virtuellen Umgebung kontinuierlich um einen geringen Winkel angepasst und gedreht wird. Da diese Anpassung minimal ist, nimmt der Spieler sie nicht bewusst wahr. Für ihn sieht es so aus, als ob er sich geradlinig bewegt, obwohl er in Wirklichkeit Kurven läuft.'
                                : 'This project was developed as part of a bachelor\'s thesis and explores a potential alternative way of moving in virtual reality (VR). Redirected Walking is an approach where the user is not reliant on common methods like teleportation or joystick movements. Instead, the entire physically available space is effectively utilized. In this method, the user is guided in various ways by the system. Either they are constantly directed to the center of the virtual space, or they move in an orbit around the center. This redirection is achieved by continuously adjusting and rotating the camera in the virtual environment at a slight angle. Since this adjustment is minimal, the player does not consciously perceive it. For them, it appears as if they are moving in a straight line, even though they are actually walking in curves.'}
                        </p>
                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="RedirectedWalking_Trailer.mp4" type="video/mp4" />
                        {language === 'de' ? 'Dein Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
                    </video>
                </section>
                <section style={sectionStyle}>
                    <div style={imageContainerStyle}>
                    </div>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Links' : 'Links'}
                    </h2>
                    <p>
                        <a href="https://github.com/VirtualVisionsDaniel/RedirectedWalking/blob/master/Endless-Running_Redirected-Walking.pdf" style={linkStyle}>
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
