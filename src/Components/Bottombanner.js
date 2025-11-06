import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(224, 224, 224);
  padding: 0 70px;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  width: 100%;
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.4s ease;

    &.visible {
      animation: ${slideInLeft} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const LearnMoreButton = styled.button`
  padding: 15px 30px;
  background-color: #6ab432;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #5a9f2b;
  }
`;

const Bottombanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <BannerContainer>
      <ImageSection ref={ref}>
        <img
          src={`${process.env.PUBLIC_URL}/images/fc5650c1-0f59-4428-8a41-1c3936390a56-removebg-preview.png`}
          alt="EcoVidaNord Recycling Truck"
          className={inView ? 'visible' : ''}
        />
      </ImageSection>
      <TextSection>
        <Description>
          Nos commerciaux vous conseillent techniquement sur la solution la plus adaptée à chaque cas spécifique, en réalisant une étude détaillée de chaque client et en proposant des solutions économiques et techniquement satisfaisantes. Chez ECOVIDANORD, nous vous proposons la solution la plus efficace pour recycler vos déchets.
        </Description>
        <Link to="/about-us">
          <LearnMoreButton>Savoir plus sur nous</LearnMoreButton>
        </Link>

      </TextSection>
    </BannerContainer>
  );
};

export default Bottombanner;
