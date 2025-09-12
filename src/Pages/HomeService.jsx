import React from 'react';
import Cardeco from "../Components/Cardeco";
import './HomeServices.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Bottombanner from '../Components/Bottombanner';
import WasteImpact from '../Components/WasteImpact';
export default function HomeServices() {
    const services = [
        {
            title: "Collecte des déchets industriels",
            slug: "collecte",
            imageSrc: "/images/collecte.png"
        },
        {
            title: "Tri des matériaux recyclables",
            slug: "tri",
            imageSrc: "/images/tri.png"
        },
        {
            title: "Recyclage et valorisation ",
            slug: "recyclage",
            imageSrc: "/images/recyclage.png"
        },
        {
            title: "Sensibilisation à la gestion des déchets",
            slug: "sensibilisation",
            imageSrc: "/images/sensibilisation.png"
        }
    ];

    return (
        <>
            <NavBar/>
            <Banner/>
            <div className="intro-section">
                <img src="/images/ecovidaLogo[1].png" alt="Logoecovidanord" />
                <h3>
                Ecovidanord est une coopérative engagée dans la gestion durable des déchets industriels,
                 spécialisée dans la collecte, le tri, le recyclage et la valorisation des matériaux. 
                 Elle joue également un rôle essentiel dans la sensibilisation à la protection de 
                 l’environnement, en accompagnant les entreprises et les collectivités vers des 
                 pratiques plus responsables. Implantée au nord du Maroc, Ecovidanord contribue 
                 activement à la préservation de l’écosystème local en transformant les déchets 
                 en ressources valorisables, tout en générant un impact économique, social et 
                 environnemental positif au sein de la région.
                </h3>
            </div>
            <Bottombanner/><br></br>
            <h2 className='h22'>DOMAINES D'ACTIVITÉ</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <Cardeco
                        key={index}
                        imageSrc={service.imageSrc}
                        title={service.title}
                        slug={service.slug}
                    />
                ))}
            </div>
            <WasteImpact/>
            <Footer/>
        </>
    );
}
