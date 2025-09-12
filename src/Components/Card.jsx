import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const ServiceCard = ({ title, description, image, imageAlt,slug}) => {
  return (
    <div className="service-card">
      <div className="image-container">
        <img src={image} alt={imageAlt} className="service-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <Link to={`/services/${slug}`} className="cta-button">
          En savoir plus 
          <span className="arrow-icon">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;