import React, { useContext } from 'react';
import './Section6.css';
import { LanguageContext } from './LanguageProvider';

function Section5() {
  const { language } = useContext(LanguageContext);

  return (
    <div className='container-s6 '>
      <h3 className="section-title-s6">
        {language === 'de' ? 'Unsere Dienstleistungen' : 'Our Services'}
      </h3>
      <div className="row-section6">
        <div className="column-section6">
          <div className='Text-section6'>
            <h2 className='headText-section6'>{language === 'de' ? 'Software Entwicklung' : 'Software Development'}</h2>
            <div className='explanationText-section6'>{language === 'de' ? 'Entwickeln sie mit uns maßgeschneiderte Softwarelösungen für VR-Anwendungen. Von der Idee bis zur Umsetzung ist unser stetes Ziel Qualität und Fachkompetenz. Lassen Sie uns gemeinsam Ihre digitalen Visionen verwirklichen.' : 'Collaborate with us to craft bespoke software solutions for VR applications. From ideation to execution, our commitment is to deliver quality and expertise. Let us bring your digital visions to life together.'}</div>
          </div>
        </div>
        <div className="column-section6">
            <img src="SoftwareDev.jpg" alt="Bild 1"/>
        </div>
      </div>

      <div className="row-section6">
        <div className="column-section6">
          <img src="Consulting.jpeg" alt="Bild 2"/>
        </div>
        <div className="column-section6">
          <div className='Text-section6'>
            <h2 className='headText-section6'>{language === 'de' ? 'Beratung & Ideenentwicklung' : 'Consulting and Idea Development'}</h2>
            <div className='explanationText-section6'>{language === 'de' ? 'Lassen Sie uns gemeinsam sprechen und Ihr Unternehmen durch den Einsatz von VR und KI vorantreiben. Nutzen Sie unser Wissen und unsere Erfahrung, um eine maßgeschneiderte Strategie zu definieren, die Ihre Geschäftsziele unterstützt und Sie in der digitalen Ära erfolgreich positioniert.' : 'Let us talk and propel your business through the implementation of VR and AI. Leverage our knowledge and experience to define a tailored strategy that aligns with your business goals and positions you successfully in the digital era.'}</div>
          </div>
        </div>
      </div>

      <div className="row-section6">
        <div className="column-section6">
          <div className='Text-section6'>
            <h2 className='headText-section6'>{language === 'de' ? 'Mithilfe bei Ausstellungen' : 'Exhibition Setup'}</h2>
            <div className='explanationText-section6'>{language === 'de' ? 'Wir unterstützen nicht nur beim Aufbau, sondern präsentieren auch selbstentwickelte VR-Applikationen in enger Zusammenarbeit mit Ihnen. Videos und Screenshots geben einen Vorgeschmack, doch wahre Virtual-Reality-Erlebnisse entstehen erst durch das Eintauchen in die virtuelle Welt. Mit uns kann jeder die volle Immersion einer VR-Anwendung erleben. ' : 'We not only assist in the setup but also showcase custom-developed VR applications in close collaboration with you. While videos and screenshots provide a glimpse, true virtual reality experiences come to life through immersion in the virtual world. With us, everyone can dive into the full immersion of a VR application.'}</div>
          </div>
        </div>
        <div className="column-section6">
          <img src="Memoria06.jpg" alt="Bild 3"/>
        </div>
      </div>
    </div>
  );
}

export default Section5;
