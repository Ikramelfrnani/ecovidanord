import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Section = styled.section`
  padding: 2rem;
  max-width: 40%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

const TitleGroup = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #8bc34a;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
`;

const MainTitle = styled.h2`
  font-size: 2rem;
  margin: 0.2rem 0;
  font-family: 'Inter', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 3px solid #8bc34a;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  background-color: #8bc34a;
  color: white;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 1.2rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-start;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const Label = styled.h4`
  margin: 0 0 0.3rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const InfoText = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function ContactInfoSection() {
  return (
    <Section>
      <TitleGroup>
        <SubTitle>Informations</SubTitle>
        <MainTitle>Nous contacter</MainTitle>
        <Description>
          Notre activité s'étend sur tous les domaines et notre savoir-faire nous permet de proposer des solutions constructives à chaque besoin.
        </Description>
      </TitleGroup>

      <ContactItem>
        <IconWrapper><FaMapMarkerAlt /></IconWrapper>
        <InfoWrapper>
          <Label>Centre de collecte</Label>
          <InfoText>Site industriels 1 : Sidi hajaj oulad mrah Casablanca</InfoText>
          <InfoText>Centre de tri : zone industrielle ain chegag fes</InfoText>
          <InfoText>Centre de tri : km 2 côté péage autoroute Oujda</InfoText>
        </InfoWrapper>
      </ContactItem>

      <ContactItem>
        <IconWrapper><FaEnvelope /></IconWrapper>
        <InfoWrapper>
          <Label>Email :</Label>
          <InfoText>ecovidanord.resiclage@gmail.com</InfoText>
        </InfoWrapper>
      </ContactItem>

      <ContactItem>
        <IconWrapper><FaPhoneAlt /></IconWrapper>
        <InfoWrapper>
          <Label>Téléphone :</Label>
          <InfoText>+212 668 161 530</InfoText>
          <InfoText>+212 648 222 042</InfoText>
        </InfoWrapper>
      </ContactItem>
    </Section>
  );
}

export default ContactInfoSection;
