import React, { useContext } from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
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
              {language === "de" ? "Über uns" : "About us"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section1")}>
              {language === "de" ? "Vision" : "Vision"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section2")}>
              {language === "de" ? "Team" : "Team"}
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("section3")}>
              {language === "de" ? "Projekte" : "Projects"}
            </FooterLink>
            <FooterLink href="/Imprint">
              {language === "de" ? "Impressum" : "Imprint"}
            </FooterLink>
          </Column>
          <Column>
            <Heading>
              {language === "de" ? "Soziale Medien" : "Social Media"}
            </Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">

                  {language === "de" ? "Instagram(In Arbeit)" : "Instagram(WIP)"}

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
            <FooterLink href="#">
              <i className="fab linked-in">

                  {language === "de" ? "Linked In(In Arbeit)" : "Linked In(WIP)"}

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
                ? "business.virtualvisions@gmail.com"
                : "business.virtualvisions@gmail.com"}
            </Text>
            <Text>
              <b>{language === "de" ? "Telefon" : "Phone"}</b>
              <br></br>+43 650 2601493 +49 151 42851038
            </Text>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
