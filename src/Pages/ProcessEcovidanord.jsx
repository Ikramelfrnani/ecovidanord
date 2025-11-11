import React from 'react';
import './ProcessEcovidanord.css';
import NavBar from '../Components/NavBar';
import styled, { keyframes } from 'styled-components';
import Footer from '../Components/Footer';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
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
  background-image: url('${process.env.PUBLIC_URL}/images/depositphotos_648697550-stock-photo-concept-world-environment-world-grass (1).jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    animation: ${slideDown} 1s ease-out forwards;
    letter-spacing: 2px; 
    z-index: 2;
    position: relative;
  }
`;


export default function ProcessEcovidanord() {
  return (
    <>
      <NavBar />
      <HeroSection>
        <h1>Notre Processus Écologique</h1>
      </HeroSection>

      <section className="process-section">
        <h2 className="process-title">Notre Processus en 3 Étapes</h2>
        <p className="process-intro">
          Chez Ecovidanord, nous adoptons une approche écoresponsable et innovante pour la gestion des déchets industriels. 
          Découvrez notre processus en 3 étapes, conçu pour maximiser le recyclage et minimiser l'impact environnemental.
        </p>

        
        <div className="process-step">
          <div className="process-text">
            <h3>1. Collecte des déchets industriels</h3>
            <p>
              Nous assurons une collecte sécurisée des déchets auprès des entreprises locales, en respectant les normes environnementales les plus strictes.
              Cette étape clé nous permet de garantir une gestion des déchets optimale dès leur arrivée à notre centre.
            </p>
          </div>
          <div className="process-media">
            <img src={`${process.env.PUBLIC_URL}/images/WhatsApp Image 2025-05-03 à 16.56.44_ef65c785.jpg`} alt="Collecte des déchets" />
            <video className="process-video" src={`${process.env.PUBLIC_URL}/video/depositphotos_200449650-stock-video-garbage-disposal-machine-for-disposal.mp4`} controls poster={`${process.env.PUBLIC_URL}/images/fc5650c1-0f59-4428-8a41-1c3936390a56.png`} />
          </div>
        </div>

        
        <div className="process-step reverse">
          <div className="process-text">
            <h3>2. Tri des déchets</h3>
            <p>
              Après la collecte, les déchets sont triés avec soin par type de matière, maximisant ainsi leur potentiel de recyclage tout en réduisant les déchets non-recyclables.
            </p>
          </div>
          <div className="process-media">
            <img src="/images/tri.png" alt="Tri des déchets" />
            
            <video className="process-video" src={`${process.env.PUBLIC_URL}/video/depositphotos_200449650-stock-video-garbage-disposal-machine-for-disposal.mp4`} controls poster={`${process.env.PUBLIC_URL}/images/fc5650c1-0f59-4428-8a41-1c3936390a56.png`} />
          </div>
        </div>

        
        <div className="process-step">
          <div className="process-text">
            <h3>3. Recyclage et valorisation</h3>
            <p>
              Les matériaux recyclables sont transformés en ressources réutilisables ou valorisés énergétiquement, contribuant ainsi à une économie circulaire.
            </p>
          </div>
          <div className="process-media">
            <img src={`${process.env.PUBLIC_URL}/images/recyclage.png`} alt="Recyclage des déchets" />
            <video className="process-video" src={`${process.env.PUBLIC_URL}/video/depositphotos_200449650-stock-video-garbage-disposal-machine-for-disposal.mp4`} controls poster={`${process.env.PUBLIC_URL}/images/fc5650c1-0f59-4428-8a41-1c3936390a56.png`} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
