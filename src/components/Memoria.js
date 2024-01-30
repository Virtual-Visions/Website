import React, { useContext } from 'react';
import MenuBar from './Menu_2';
import FooterBar from './Footer_2';
import './Memoria.css';
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


const headerTextStyles = {
    margin: '10px',
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
                <div className='header-image-Memoria'></div>
                <h1 style={headerTextStyles}>
                    {language === 'de' ? 'Memoria' : 'Memoria'}
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
                                ? 'Das Bachelor-Abschlussprojekt Memoria nutzt virtuelle Realität, um gesunden Menschen die Erfahrung von Demenzsymptomen näherzubringen, mit dem Ziel, Empathie und Bewusstsein für die Herausforderungen von Menschen mit Demenz zu fördern.'
                                : 'The Bachelor project Memoria utilizes virtual reality to immerse healthy individuals in the experience of dementia symptoms, aiming to foster empathy and awareness regarding the challenges faced by people living with dementia.'}
                        </p>
                    </section>
                </section>

                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Trailer' : 'Trailer'}
                    </h2>
                    <video controls width="100%">
                        <source src="Memoria_Trailer.mp4" type="video/mp4" />
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
                                ? 'Unser Bachelor Abschlussprojekt hatte ein ehrgeiziges Ziel: Es ermöglichte gesunden Menschen, eine Vorstellung davon zu bekommen, wie es ist, an Demenz zu leiden. Wir nutzen die Kraft der virtuellen Realität, um die Perspektive derjenigen einzunehmen, die mit dieser Erkrankung leben. Die Nutzer tauchen in eine virtuelle Welt ein, die typische Symptome und Herausforderungen des Demenzkrankseins nachbildet. Dazu gehören Gedächtnisverlust, Desorientierung und andere Symptome. Während dieser Erfahrung werden die Nutzer aufgefordert, alltägliche Aufgaben zu erledigen, die für Menschen mit Demenz zunehmend schwieriger werden. Unser Projekt zielte darauf ab, Empathie und Verständnis für Demenzkrankheiten zu fördern. Indem wir die Erfahrung nachvollziehbar machen, haben wir gehofft, das Bewusstsein für die Bedürfnisse und Herausforderungen von Menschen mit Demenz zu schärfen und gleichzeitig die Sensibilität gegenüber diesem Thema in der Gesellschaft zu erhöhen.'
                                : 'Our bachelor\'s degree project had an ambitious goal: it allowed healthy people to get an idea of what it is like to suffer from dementia. We used the power of virtual reality to take on the perspective of those living with this condition. Users dive into a virtual world that replicates typical symptoms and challenges of dementia, including memory loss, disorientation, and other symptoms. During this experience, users are prompted to perform everyday tasks that become increasingly difficult for people with dementia. Our project aimed to promote empathy and understanding of dementia. By making the experience relatable, we hoped to raise awareness of the needs and challenges of people with dementia while increasing sensitivity to this issue in society.'}
                        </p>
                    </section>
                </section>
                <section style={sectionStyle}>
                    <h2>
                        {language === 'de' ? 'Screenshots' : 'Screenshots'}
                    </h2>
                    <div style={imageContainerStyle}>
                        <img src="Memoria02.png" alt={language === 'de' ? 'Bild 1' : 'Image 1'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria03.png" alt={language === 'de' ? 'Bild 2' : 'Image 2'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria.jpg" alt={language === 'de' ? 'Bild 3' : 'Image 3'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria07.png" alt={language === 'de' ? 'Bild 4' : 'Image 4'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria08.png" alt={language === 'de' ? 'Bild 5' : 'Image 5'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria09.png" alt={language === 'de' ? 'Bild 6' : 'Image 6'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria04.jpg" alt={language === 'de' ? 'Bild 7' : 'Image 7'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria05.jpg" alt={language === 'de' ? 'Bild 8' : 'Image 8'} style={{
                            ...imageStyle,
                            ...(window.innerWidth <= 768 ? { width: '100%', maxWidth: '100%' } : {}),
                        }} />
                        <img src="Memoria06.jpg" alt={language === 'de' ? 'Bild 9' : 'Image 9'} style={{
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
                        <a href="https://memoria-vr.itch.io/memoria" style={linkStyle}>
                            {language === 'de' ? 'Itchi.io' : 'Itch.io'}
                        </a>
                        <a href="https://portfolio.fh-salzburg.ac.at/projects/2022-memoria-mmp3" style={linkStyle}>
                            {language === 'de' ? 'Portfolio FH Salzburg' : 'FH Salzburg Portfolio'}
                        </a>
                        <a href="https://www.youtube.com/watch?v=2nfMrxMgm1o&feature=youtu.be&ab_channel=VirtualVisions" style={linkStyle}>
                            {language === 'de' ? 'Memoria Playtrough' : 'Memora Playtrough'}
                        </a>
                    </p>
                </section>
            </main>
            <FooterBar />
        </div>
    );
}

export default App;
