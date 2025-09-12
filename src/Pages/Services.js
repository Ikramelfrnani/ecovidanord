import React from 'react';
import ServiceCard from '../Components/Card';
import './Services.css';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';


function Services() {
  return (
    <>
        <NavBar/>
        <div className="hero-section">
            <div className="overlay">
                <h1 className="title">Nos Services</h1>
                <p className="description">
                Engagés pour un environnement sain : un traitement garanti, conforme et transparent.
                </p>
            </div>
        </div>
        <div className="services-intro">
            <h1>Services</h1>
            <p>
                Nous mettons notre expertise au service d'un avenir durable en assurant une gestionv responsable des déchets industriels. Collecte, tri, recyclage et sensibilisation : chaque étape est pensée pour préserver l’environnement et répondre aux exigences de conformité, de transparence et de performance.
            </p>
        </div>
        <div className="app-container">
            <div>
                <ServiceCard 
                    title="Collecte des déchets industriels"
                    slug="collecte"
                    description="Nous collectons une variété de déchets industriels, notamment les plastiques, les canettes et d’autres types de résidus issus des processus de production. Notre service est actuellement concentré dans la région de Tanger, où nous collaborons avec de nombreuses entreprises pour assurer une gestion efficace et responsable de leurs déchets. Grâce à notre réseau logistique, nous garantissons une collecte régulière et adaptée aux besoins spécifiques de chaque client."
                    image="/images/collecte.png"
                    imageAlt="Collecte de déchets industriels"
                />
                <ServiceCard 
                    title="Tri des déchets industriels"
                    slug="tri"
                    description="Le tri des déchets est une étape essentielle pour assurer un recyclage efficace. Dans notre entreprise, cette opération est principalement réalisée par nos employés qualifiés, qui séparent manuellement les différents matériaux. Pour optimiser et accélérer ce processus, nous utilisons également une sinta, un système de tapis roulant qui transporte les déchets et facilite leur tri. Cette méthode permet non seulement d'améliorer la productivité, mais aussi de garantir une meilleure précision dans la séparation des matières, contribuant ainsi à une démarche plus durable."
                    image="/images/tri.png"
                    imageAlt="Tri des déchets"
                />
                <ServiceCard 
                    title="Recyclage et valorisation des déchets"
                    slug="recyclage"
                    description="Après avoir soigneusement trié les déchets, nous les transformons en matières premières réutilisables. Les plastiques, canettes et autres matériaux passent par une étape de broyage pour réduire leur taille et faciliter leur traitement. Une fois broyés, ils sont préparés, conditionnés, puis vendus à des entreprises spécialisées dans le recyclage. Ce processus permet de réduire les déchets en décharge et de prolonger la vie des matériaux, contribuant ainsi à une économie circulaire durable."
                    image="/images/recyclage.png"
                    imageAlt="Recyclage et valorisation des déchets"
                />
                <ServiceCard 
                    title="Sensibilisation à la gestion des déchets"
                    slug="sensibilisation"
                    description="Conscients de l'importance de promouvoir une gestion responsable des déchets industriels, nous proposons également des services de sensibilisation destinés aux entreprises. À travers des sessions d'information et des conseils personnalisés, nous aidons nos partenaires à adopter de meilleures pratiques de tri et de réduction des déchets à la source. Notre objectif est de contribuer activement à une culture d’entreprise plus respectueuse de l'environnement et tournée vers un développement durable."
                    image="/images/sensibilisation.png"
                    imageAlt="Sensibilisation à la gestion des déchets"
                />
            </div>
        </div><br></br><br></br>
        <Footer />
    </>
  );
}

export default Services;
