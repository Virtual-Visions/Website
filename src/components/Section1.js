import React, { useContext } from 'react';
import './Section1.css';
import { LanguageContext } from './LanguageProvider'; // Importieren Sie den LanguageContext

const TextPassage = ({ title, content, alignRight, icon }) => {
  const columnClass = alignRight ? 'align-right' : '';

  const paragraphStyle = {
    textAlign: 'justify',
  };

  return (
    <div className={`text-passage ${columnClass}`}>
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>
      <h3>{title }</h3>
      <p style={paragraphStyle}>{content}</p>
    </div>
  );
};

function Section1() {
  const { language } = useContext(LanguageContext); // Verwenden Sie den LanguageContext

  return (
    <div className="container mt-4">
      <div className="section-title">
        <h2>{language === 'de' ? 'Die Mission von Virtual Visions' : 'The Mission of Virtual Visions'}</h2>
        <div>
          {language === 'de'
            ? `"In diesem Abschnitt zeigen wir Ihnen genauer die Vorteile auf, die der Einsatz unserer VR-Technologie ermöglicht: "Kostenreduzierung," "Vereinfachung," "Modernisierung" und "Wiederholbarkeit." Diese Konzepte sehen wir als entscheidende Faktoren, um Unternehmen noch effizienter und wettbewerbsfähiger zu machen."`
            : `"In this section, we will provide a more detailed insight into the benefits enabled by the use of our VR technology: "Cost Reduction," "Simplification," "Modernization," and "Repeatability." We see these concepts as crucial factors for making companies even more efficient and competitive."`}
        </div>
      </div>
      <div className="text-passage-container">
        <TextPassage
          title={language === 'de' ? 'Kostenreduzierung' : 'Cost Reduction'}
          content={
            language === 'de'
              ? "Kostenreduzierung ist ein wesentliches Potential unserer VR-Anwendungen. Wir senken Ausgaben und Aufwendungen, die für Schulungs- und Trainingsprozesse sowie für die Optimierung der betrieblichen Abläufe anfallen. Durch den Einsatz unserer VR-Technologie können die Kosten für physische Schulungsmaterialien, Reisen und Mitarbeiterressourcen erheblich reduziert werden. Dies ermöglicht es Ihnen, Ihr Budget effizienter zu nutzen und gleichzeitig die Nachhaltigkeit von Schulungen und Qualifikationen zu steigern."
              : "Cost reduction is a significant potential of our VR applications. We reduce expenses associated with training processes and optimizing operational workflows. By utilizing our VR technology, costs related to physical training materials, travel, and staff resources can be substantially decreased. This allows you to allocate your budget more efficiently while simultaneously enhancing the sustainability of training and qualifications."
          }
          icon="Money_Icon.png"
        />
        <TextPassage
          title={language === 'de' ? 'Vereinfachung' : 'Simplification'}
          content={
            language === 'de'
              ? "Vereinfachung bedeutet, betriebliche Prozesse und Abläufe zu optimieren und benutzerfreundlicher zu gestalten. Mit unseren VR-Anwendungen bieten wir Ihnen eine intuitive und leicht verständliche Methode zur Schulung und zum Training. Sie ermöglicht es Mitarbeitern, sich in einer realistischen, immersiven Umgebung wohlzufühlen, effektiv zu lernen und Erfahrungen zu sammeln. Wir helfen Unternehmen dabei, Schulungen und Prozesse zu vereinfachen, sodass Zeit und Ressourcen effizient genutzt werden können."
              : "Simplification involves optimizing and making operational processes and workflows more user-friendly. With our VR applications, we provide you with an intuitive and easily comprehensible method for training and skill development. This allows employees to feel comfortable in a realistic, immersive environment and learn and gain experiences effectively. We assist companies in simplifying training and processes, enabling efficient use of time and resources."
          }
          alignRight
          icon="Simple_Icon.png"
        />
        <TextPassage
          title={language === 'de' ? 'Modernisierung' : 'Modernization'}
          content={
            language === 'de'
              ? "Die Modernisierung von Arbeitsabläufe und Schulungsmethoden ist ein entscheidender Faktor, um wettbewerbsfähig zu bleiben. Wir verstehen Modernisierung als den Einsatz fortschrittlicher Technologien wie Virtual Reality, um gewohnte Schulungs- und Arbeitsprozesse in ihrer Effizienz und Nachhaltigkeit zu revolutionieren. Mit unseren VR-Anwendungen bringen wir mit Ihnen Unternehmen auf den neuesten Stand der Technik."
              : "Modernizing workflows and training methods is a crucial factor in remaining competitive. We define modernization as the utilization of advanced technologies like Virtual Reality to revolutionize traditional training and work processes in terms of efficiency and sustainability. With our VR applications, we bring your company up to the latest technological standards."
          }
          alignRight
          icon="Modern_Icon.png"
        />
        <TextPassage
          title={language === 'de' ? 'Wiederholbarkeit' : 'Repeatability'}
          content={
            language === 'de'
              ? "Wiederholbarkeit ist ein weiterer entscheidender Faktor, wenn es darum geht, dass Schulungen und Training effektiv werden. Dies ermöglicht es Ihren Mitarbeitern, in realistischer Umgebung aktiv immer wieder Erfahrungen zu sammeln. Damit verbessern und erweitern sie ihr Wissen und ihre Fähigkeiten kontinuierlich. Trainings und Schulungen sind in Ihrer Regie jederzeit nach Bedarf möglich."
              : "Repeatability is another important factor when it comes to making training and learning effective. It allows your employees to actively gain experience in a realistic environment repeatedly. This continuous process enables them to improve and expand their knowledge and skills. Trainings and learning sessions can be conducted under your control whenever needed."
          }
          alignRight
          icon="Repeat_Icon.png"
        />
        {/* Fügen Sie weitere TextPassage-Komponenten mit Symbolen hinzu */}
      </div>
    </div>
  );
}

export default Section1;
