import React, { useContext } from "react";
import './Footer.css'; // Importiere die CSS-Datei
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterRights,
  FooterLinkChild,
  Heading,
  Text,
} from "./FooterStyles";
import { LanguageContext } from "./LanguageProvider"; // Importiere den LanguageContext

const scrollToSection = (sectionID) => {
  const section = document.getElementById(sectionID);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext

  return (

    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              {language === "de" ? "Abschnitte" : "Sections"}
            </Heading>
            <FooterLink onClick={() => scrollToSection("section4")}>
              {language === "de" ? "Leistung" : "Services"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section1")}>
              {language === "de" ? "Vision" : "Vision"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section2")}>
              {language === "de" ? "Über uns" : "About us"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section3")}>
              {language === "de" ? "Projekte" : "Projects"}
            </FooterLink>
            
          </Column>
          <Column>
            <Heading>
              {language === "de" ? "Soziale Medien" : "Social Media"}
            </Heading>
            <FooterLink href="https://www.instagram.com/virtual___visions/">
              <i className="fab fa-instagram">

                  {language === "de" ? "Instagram" : "Instagram"}

              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/VirtualVisionV">
              <i className="fab fa-twitter">

                  {language === "de" ? "Twitter" : "Twitter"}

              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC-_iOjk6FTrQt0w5hVPYFMA">
              <i className="fab fa-youtube">

                  {language === "de" ? "Youtube" : "Youtube"}

              </i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/virtual-visions-45a712294/">
              <i className="fab fa-linkedIn">

                  {language === "de" ? "Linked In" : "Linked In"}

              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>
              {language === "de" ? "Kontakt" : "Contact Us"}
            </Heading>
            <Text>
              <b>E-Mail</b>{" "}
              {language === "de"
                ? "business.virtualvisions@virtual-visions.net"
                : "business.virtualvisions@virtual-visions.net"}
            </Text>
            <Text>
              <b>{language === "de" ? "Telefon" : "Phone"}</b>
              <br></br>
              +43 650 2601493 
              <br></br>
              +49 151 42851038
            </Text>
          </Column>
        </Row>
        <hr className="abtrennungsLinieFooter" />
        <div className="footer-links">
        <FooterRights >
              {language === "de" ? "© Virtual Visions OG 2024, alle Rechte vorbehalten" : "© Virtual Visions OG 2024, all rights reserved"}
            </FooterRights>
        <FooterLinkChild className="footer-links-child" href="/Imprint">
              {language === "de" ? "Impressum" : "Imprint"}
            </FooterLinkChild>
            <FooterLinkChild className="footer-links-child" href="/dataPrivacy">
              {language === "de" ? "Datenschutz" : "Data privacy policy (german only)"}
            </FooterLinkChild>
        </div>
      </Container>

    </Box>
    

  );
};

export default Footer;
