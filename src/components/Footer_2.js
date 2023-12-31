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
import { LanguageContext } from "./LanguageProvider";

const Footer = () => {
  const { language } = useContext(LanguageContext); // Verwende den LanguageContext
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/Imprint">Imprint</FooterLink>
            <FooterLink href="/">Home</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
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
            <FooterLink href="https://www.linkedin.com/in/virtual-visions-45a712294/">
              <i className="fab fa-LinkedIn">

                  {language === "de" ? "Linked In" : "Linked In"}

              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Text>
              <b>E-Mail</b> business.virtualvisions@gmail.com
            </Text>
            <Text>
              <b>Telefon</b> <br></br>+43 650 2601493 +49 151 42851038
            </Text>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
