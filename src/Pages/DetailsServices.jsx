import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import './DetailsServices.css';
import NavBar from '../Components/NavBar';
const serviceData = {
  collecte: {
    desc:"Notre service de collecte des déchets industriels s'adresse aux entreprises de la région de Tanger, avec une approche personnalisée et respectueuse de l’environnement. Nous prenons en charge une large gamme de déchets issus des processus industriels : plastiques, canettes, résidus métalliques, chutes textiles et autres matériaux non dangereux. Chaque client bénéficie d’une solution sur mesure, incluant la mise à disposition de bacs ou conteneurs adaptés à la nature et au volume de ses déchets. Notre flotte de véhicules spécialisés permet une collecte régulière, planifiée selon le rythme de production de nos partenaires. Grâce à un suivi logistique rigoureux, nous assurons la traçabilité des déchets collectés jusqu’à leur traitement final. En collaborant avec nous, les entreprises respectent la réglementation en vigueur tout en réduisant leur empreinte écologique.",
    
    img: `${process.env.PUBLIC_URL}/images/depositphotos_622480686-stock-photo-concept-world-environment-world-grass.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/f55ee624-a69a-43ca-afa1-46c8f6ed0524.png`,
    img1: `${process.env.PUBLIC_URL}/images/426e79ca-7ea1-47d7-924b-ef9211852ef4.png`,
    title: "Collecte des déchets industriels",
    description: "Nous collectons une variété de déchets industriels, en particulier différents types de plastiques tels que les boîtes en plastique, les canettes métalliques, et d'autres résidus plastiques issus des processus de production. Ce service est proposé principalement dans la région de Tanger.",
    details: [
        "Des tournées quotidiennes sont organisées pour garantir une collecte régulière et efficace.",
        "Fourniture de bacs et contenants adaptés pour chaque type de déchet.",
        "Tous les déchets collectés sont envoyés pour tri et recyclage."
      ],      
    image: `${process.env.PUBLIC_URL}/images/collecte.png`
  },
  tri: {
    desc:"Le tri constitue une phase fondamentale dans notre chaîne de traitement des déchets industriels. Il vise à séparer de manière rigoureuse les matériaux recyclables (plastiques, métaux, textiles, etc.) des déchets non valorisables. Chez ECOVIDANORD, ce processus repose sur une approche combinée entre savoir-faire humain et technologie. Nos équipes, spécialement formées, réalisent un tri manuel minutieux afin d’identifier et de séparer les différents types de déchets. Cette étape est cruciale pour éviter les contaminations croisées qui pourraient compromettre la qualité du recyclage. Pour renforcer l’efficacité de ce processus, nous avons intégré une sinta, un système de tapis roulant motorisé permettant de faire transiter les déchets de manière fluide et continue vers les postes de tri. Cette organisation améliore considérablement la cadence de tri tout en maintenant un haut niveau de précision. Grâce à cette méthode hybride, nous assurons une valorisation maximale des matières, tout en réduisant les volumes de déchets ultimes envoyés en décharge. Ce modèle contribue à notre mission : instaurer une économie circulaire locale, durable et performante.",
    
    img: `${process.env.PUBLIC_URL}/images/depositphotos_648697550-stock-photo-concept-world-environment-world-grass (1).jpg`,
    img1: `${process.env.PUBLIC_URL}/images/426e79ca-7ea1-47d7-924b-ef9211852ef4.png`,
    img2: `${process.env.PUBLIC_URL}/images/f55ee624-a69a-43ca-afa1-46c8f6ed0524.png`,
    title: "Tri des déchets industriels",
    description: "Le tri des déchets est réalisé de manière précise et efficace, en combinant une intervention manuelle et l'utilisation d'une sinta (table vibrante). Cette méthode permet une séparation optimale des matériaux recyclables des non-recyclables, garantissant ainsi une gestion des déchets plus respectueuse de l'environnement.",
    details: [
        "Personnel hautement qualifié, formé à la gestion minutieuse et au tri des déchets.",
        "Tri effectué par type de matériau : plastique etc., pour garantir une séparation optimale.",
        "Le processus de tri contribue à améliorer la qualité du recyclage tout en réduisant les déchets destinés à l'enfouissement."
      ],      
    image: `${process.env.PUBLIC_URL}/images/tri.png`
  },
  recyclage: {
    desc:"Une fois les déchets triés avec rigueur, ils sont transformés en matières premières secondaires prêtes à être réintroduites dans le circuit industriel. Les plastiques, canettes, textiles et autres matériaux passent par une phase de broyage mécanique afin de réduire leur volume et d’en faciliter la manipulation. Après le broyage, les matériaux sont nettoyés, triés une dernière fois si nécessaire, puis conditionnés sous forme de balles ou de sacs adaptés au transport. Ils sont ensuite acheminés vers des entreprises partenaires spécialisées dans le recyclage, qui les utiliseront comme matière première pour de nouveaux produits. Ce processus permet non seulement de réduire le volume de déchets envoyés en décharge, mais aussi de prolonger la durée de vie des ressources et de soutenir activement l’économie circulaire.",
    img: `${process.env.PUBLIC_URL}/images/depositphotos_775545668-stock-photo-earth-woman-holding-ball-halved.jpg`,
    img1: `${process.env.PUBLIC_URL}/images/426e79ca-7ea1-47d7-924b-ef9211852ef4.png`,
    img2: `${process.env.PUBLIC_URL}/images/f55ee624-a69a-43ca-afa1-46c8f6ed0524.png`,
    title: "Recyclage et valorisation des déchets",
    description: "Une fois triés, les matériaux sont soigneusement broyés, nettoyés et conditionnés pour être revendus à des entreprises spécialisées dans le recyclage, contribuant ainsi à la réduction de l'impact environnemental et à l'économie circulaire.",
    details: [
    "Recyclage mécanique : broyage précis, nettoyage et conditionnement des matériaux.",
    "Les matières sont compactées sous forme de balles ou de sacs pour faciliter leur transport et leur valorisation.",
    "Contribue activement à l'économie circulaire, réduisant ainsi la dépendance aux imports et favorisant la réutilisation des ressources."
    ],
    image: `${process.env.PUBLIC_URL}/images/recyclage.png`
  },
  sensibilisation: {
    desc:"Conscients de l'importance d'une gestion responsable des déchets industriels, nous offrons des services de sensibilisation destinés aux entreprises. Grâce à des sessions d'information interactives et des ateliers pratiques, nous accompagnons nos partenaires dans l’adoption de meilleures pratiques de tri, de réduction des déchets à la source et de valorisation des matériaux.En mettant en place des programmes personnalisés adaptés aux besoins spécifiques de chaque entreprise, nous visons à améliorer leur performance environnementale. Notre objectif est de favoriser une culture d’entreprise axée sur le respect de l'environnement et le développement durable, tout en optimisant leur gestion des déchets et en réduisant leur empreinte écologique.",
    img: `${process.env.PUBLIC_URL}/images/depositphotos_336627766-stock-photo-hands-trees-growing-seedlings-bokeh.jpg`,
    img1: `${process.env.PUBLIC_URL}/images/426e79ca-7ea1-47d7-924b-ef9211852ef4.png`,
    img2: `${process.env.PUBLIC_URL}/images/f55ee624-a69a-43ca-afa1-46c8f6ed0524.png`,
    title: "Sensibilisation à la gestion des déchets",
    description: "Nous organisons des sessions de sensibilisation à destination des entreprises afin de renforcer les bonnes pratiques de gestion des déchets dès leur source et favoriser une démarche écoresponsable.",
    details: [
        "Ateliers pratiques sur la réduction, le tri et la valorisation des déchets.",
        "Sensibilisation et formation des équipes internes aux enjeux environnementaux.",
        "Accompagnement personnalisé dans l'élaboration et l'adoption de politiques écologiques."
      ],      
    image: `${process.env.PUBLIC_URL}/images/sensibilisation.png`
  }
};

function DetailsPage() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Service non trouvé</h1>
        <p>Le service demandé n'existe pas.</p>
      </div>
    );
  }

  return (
    <>
    <NavBar/>
      <div className="hero-container">
        <img src={service.img} alt="Service" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">{service.title}</h1>
        </div>
      </div>
      <div className="service-long-description">
  <p>{service.desc}</p>
</div>

      {/* Contenu détaillé */}
      <div className="service-content">
        <img src={service.img1} alt="" />
        <img src={service.img2} alt="" />
        <img src={service.image} alt={service.title} className="service-illustration" />
        <p className="service-description">{service.description}</p>

        <ul className="service-details">
          {service.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default DetailsPage;
