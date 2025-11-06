import Infos from "../Components/Infos";
import Footer from "../Components/Footer";
import ContactBanner from "../Components/ContactBanner";
import NavBar from "../Components/NavBar";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
`;
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

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('${process.env.PUBLIC_URL}/images/depositphotos_622480686-stock-photo-concept-world-environment-world-grasss.jpg');
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

function AboutUs() {
  return(
    <Container>  
        <NavBar/>
        <HeroSection>
          <Overlay>
            <Title>À propos de nous</Title>
          </Overlay>
        </HeroSection>
        <Infos />
        <ContactBanner />
        <Footer />
    </Container>
  )
}

export default AboutUs;
