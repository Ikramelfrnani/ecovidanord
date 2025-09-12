import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #7ac943;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 2rem;
  line-height: 1.4;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ContactButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #7ac943;
    color: white;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ContactBanner = () => {
  return (
    <Container>
      <Content>
        <Title>
          ÉVALUEZ LA COLLECTE ET LA VALORISATION DE VOS DÉCHETS DÈS MAINTENANT !
        </Title>
        <StyledLink to="/contact">
          <ContactButton>
            <FaPhoneAlt style={{ marginRight: '8px' }} />
            NOUS CONTACTER
          </ContactButton>
        </StyledLink>
      </Content>
    </Container>
  );
};

export default ContactBanner;
