import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 50vh;
  padding: 2rem;
  background-color: #fff;
  width: 55%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  line-height: 1.5;
`;

const TextSection = styled.section`
  flex: 1 1 55%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ImageSection = styled.section`
  flex: 1 1 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Logo = styled.img`
  max-width: 95%;
  height: auto;
  border-radius: 50%;
`;

const Subtitle = styled.h5`
  color: #6bbd44;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 0.95rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Infos = () => {
  return (
    <Container>
      <Content>
        <TextSection>
          <Subtitle>À PROPOS DE NOUS</Subtitle>
          <Title>
            Eco Vida Nord Expert en Gestion <br /> des Déchets Industriels
          </Title>
          <Paragraph>
            Eco Vida Nord est une coopérative engagée dans la gestion responsable des déchets industriels. 
            Fondée sur des valeurs de solidarité, d'engagement environnemental et de service collectif, elle 
            propose des solutions complètes incluant la collecte, le tri, ainsi que le recyclage et la valorisation 
            des déchets. Grâce à une approche participative et à l'implication de ses membres, la coopérative 
            accompagne les entreprises dans la mise en place de pratiques durables et respectueuses de l'environnement.
          </Paragraph>
          <Paragraph>
            Notre approche commence par une analyse minutieuse des processus et des
            flux de déchets de votre entreprise. Cette compréhension approfondie
            nous permet de concevoir des stratégies de gestion des déchets qui
            maximisent l'efficacité opérationnelle tout en minimisant l'impact
            environnemental.
          </Paragraph>
        </TextSection>
        <ImageSection>
          <Logo src="/images/eco.png" alt="Eco Vida Nord Logo" />
        </ImageSection>
      </Content>
    </Container>
  );
};

export default Infos;
