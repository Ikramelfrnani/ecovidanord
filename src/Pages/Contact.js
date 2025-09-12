import ContactInfoSection from "../Components/ContactInfoSection"; 
import Footer from "../Components/Footer";
import styled, { keyframes } from "styled-components";
import MapEmbed from "../Components/MapEmbed";
import NavBar from "../Components/NavBar";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('/images/depositphotos_622480686-stock-photo-concept-world-environment-world-grasss.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: 1.5rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  animation: ${slideDown} 1s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

function Contact() {
  return (
    <Container>
      <NavBar />
      <HeroSection>
        <Overlay>
          <Title>Contact</Title>
        </Overlay>
      </HeroSection>
      <ContactInfoSection />
      <MapEmbed />
      <Footer />
    </Container>
  );
}

export default Contact;
