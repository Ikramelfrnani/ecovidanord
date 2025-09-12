import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  max-width: 100%;
  margin: auto;
  position: relative;
  height: 90vh;
  min-height: 300px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: ${({ active }) => (active ? 1 : 0)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

const Heading = styled.h1`
  position: absolute;
  left: 50px;
  top: 30%;
  color: white;
  font-size: 50px;
  font-family: 'Inter', sans-serif;
  padding: 10px 16px;
  animation: descend 1s ease-out;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
  max-width: 80%;

  @keyframes descend {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 30%;
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    font-size: 40px;
    left: 30px;
    max-width: 75%;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    // top: 20%;
    // max-width: 70%;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    // left: 15px;
    // top: 15%;
    // max-width: 90%;
  }
`;

const SubHeading = styled.h2`
  position: absolute;
  left: 3.3%;
  top: 50%;
  color: white;
  font-size: 25px;
  font-family: 'Inter', sans-serif;
  padding: 10px 16px;
  animation: ascend 1s ease-out;
  white-space: normal;
  line-height: 1.4;
  max-width: 80%;

  @keyframes ascend {
    0% {
      top: 60%;
      opacity: 0;
    }
    100% {
      top: 50%;
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    left: 7.5%;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 10;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background-color: ${({ active }) => (active ? "#717171" : "#bbb")};
  display: inline-block;
  transition: background-color 0.6s ease;
  border-radius: 50%;

  @media (max-width: 480px) {
    height: 10px;
    width: 10px;
    margin: 0 3px;
  }
`;

const Banner = () => {
  const slides = [
    {
      src: "/images/WhatsApp Image 2025-05-02 à 18.32.49_b3f41147.jpg",
      caption: "Optimisation des déchets industriels",
      sub: "Collecte, tri et valorisation pour une gestion durable au cœur des territoires industriels.",
    },
    {
      src: "/images/slide1.jpg",
      caption: "Acteur engagé du développement durable",
      sub: "Une coopérative implantée au nord du Maroc, au service de l'économie circulaire et de l’écosystème local.",
    },
    {
      src: "/images/depositphotos_622480686-stock-photo-concept-world-environment-world-grass.jpg",
      caption: "Éco-conscience et accompagnement",
      sub: "Nous sensibilisons et guidons entreprises et collectivités vers des pratiques plus responsables et durables.",
    },
  ];
  
  
  
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SlideshowContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentIndex}>
          <img src={slide.src} alt={`Slide ${index + 1}`} />
          {index === currentIndex && (
            <>
              <Heading>{slide.caption}</Heading>
              <SubHeading>{slide.sub}</SubHeading>
            </>
          )}
          <DotContainer>
            {slides.map((_, dotIndex) => (
              <Dot
                key={dotIndex}
                active={dotIndex === currentIndex}
                onClick={() => handleDotClick(dotIndex)}
              />
            ))}
          </DotContainer>
        </Slide>
      ))}
    </SlideshowContainer>
  );
};

export default Banner;