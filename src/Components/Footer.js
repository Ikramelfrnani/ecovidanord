import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContainer = styled.footer`
  background-color: #0d0d0d;
  color: #fff;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Section = styled.div`
  flex: 1 1 0;
  min-width: 0;
  &:not(:first-child) {
    margin-top: 60px;
  }

  &:first-child {
    margin-right: 150px;
  }

  @media (max-width: 1024px) {
    &:not(:first-child) {
      margin-top: 40px;
    }
    &:first-child {
      margin-right: 100px;
    }
  }

  @media (max-width: 768px) {
    &:not(:first-child),
    &:first-child {
      margin: 0;
    }
  }
`;

const Description = styled.p`
  margin-top: 10px;
  line-height: 1.6;
  opacity: 0.7;
`;

const SocialLinks = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  background-color: #333;
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  font-family: 'Inter', sans-serif;
`;

const Divider = styled.div`
  width: 30px;
  height: 3px;
  background-color: #7ac943;
  margin-bottom: 10px;
`;

const List = styled.ul`
  line-height: 2;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(Link)`
  display: block;
  line-height: 2;
  opacity: 0.7;
  color: inherit;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #222;
  margin-top: 30px;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;

  @media (max-width: 480px) {
    padding-top: 15px;
    font-size: 12px;
  }
`;

const Logo = styled.img`
  max-width: 200px;

  @media (max-width: 480px) {
    max-width: 160px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Section>
          <Logo src="/images/ecovida_white.png" alt="Eco Vida Nord Logo" />
          <Description>
            Eco Vida Nord se positionne en tant que référence dans le domaine de la gestion globale des déchets industriels.
            Forts d'une expertise éprouvée et d'un engagement sans faille envers l'environnement, nous offrons à nos clients industriels
            des solutions sur mesure pour répondre à leurs besoins spécifiques.
          </Description>
          <SocialLinks>
            <SocialIcon href="#"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
          </SocialLinks>
        </Section>

        <Section>
          <SectionTitle>Nos Services</SectionTitle>
          <Divider />
          <List>
            <ListItem to="/services/collecte">Collecte des déchets industriels</ListItem>
            <ListItem to="/services/tri">Tri des déchets</ListItem>
            <ListItem to="/services/recyclage">Recyclage et valorisation des déchets</ListItem>
            <ListItem to="/services/sensibilisation">Sensibilisation à la gestion des déchets</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Nos Contacts</SectionTitle>
          <Divider />
          <ContactItem>
            <MdEmail /> <strong>Email :</strong>&nbsp;
            <a href="mailto:ecovidanord.resiclage@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              ecovidanord.resiclage@gmail.com
            </a>
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt /> <strong>Téléphone :</strong>
            <a href="tel:+212668161530" style={{ color: 'inherit', textDecoration: 'none' }}>
              +212 668 161 530
            </a>
          </ContactItem>
          <ContactItem style={{ paddingLeft: "110px" }}>
            <a href="tel:+212648222042" style={{ color: 'inherit', textDecoration: 'none' }}>
              +212 648 222 042
            </a>
          </ContactItem>
        </Section>
      </ContentWrapper>

      <Copyright>
        © {new Date().getFullYear()} Eco Vida Nord. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
