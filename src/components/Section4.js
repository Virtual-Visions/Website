import React, { useContext } from 'react';
import './Section4.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

function Section1() {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

  return (
    <div className="container mt-4">
      <div className="section-title">
        <img src='./Virtual_Visions_Logo_No_Background.png' alt='Logo' className='imgtext'></img>
        <h3>{language === 'de' ? 'Ihr Partner für VR-Anwendungen im Training- und Schulungsbereich' 
        : 'Your partner for VR applications in the training and education sector.'}</h3>
        <div className='phrase'>
          {language === 'de'
            ? `Willkommen bei Virtual Visions, Ihrem Partner für innovative Virtual-Reality-Anwendungen im Training- und Schulungsbereich. Tauchen Sie ein in eine Welt grenzenloser Möglichkeiten, wo wir zusammen die Kraft der virtuellen Realität nutzen können, Anwendungen auf ein neues Niveau zu heben.
            \n Unsere Expertise liegt in der Schaffung immersiver und interaktiver VR-Lösungen, die es Unternehmen ermöglichen, effektive und maßgeschneiderte Schulungsprogramme zu entwickeln. Mit modernster Technologie ist es unser Ziel, die Brücke zwischen der realen Welt und der digitalen Sphäre zu schlagen, um Lernen zu erleichtern und Fachkenntnisse zu vertiefen.
            \n Bei Virtual Visions verstehen wir, dass jedes Unternehmen einzigartig ist. Daher entwickeln wir maßgeschneiderte VR-Anwendungen, die auf die spezifischen Anforderungen unserer Kunden zugeschnitten sind. Unser Ziel ist es, realistische und immersive Trainingserfahrungen zu schaffen, die nicht nur Wissen vermitteln, sondern auch die Teilnehmer inspirieren und motivieren.
            `
            : `Welcome to Virtual Visions, your partner for innovative Virtual Reality applications in the training and education sector. Dive into a world of boundless possibilities, where together we can harness the power of virtual reality to elevate applications to new heights. 
            \nOur expertise lies in creating immersive and interactive VR solutions that enable businesses to develop effective and customized training programs. With state-of-the-art technology, our goal is to bridge the gap between the real world and the digital sphere, making learning easier and deepening expertise. 
            \nAt Virtual Visions, we understand that every company is unique. Therefore, we create customized VR applications tailored to our clients' specific needs. Our objective is to create realistic and immersive training experiences that not only impart knowledge but also inspire and motivate participants.`}
        </div>
      </div>
    </div>
  );
}

export default Section1;
