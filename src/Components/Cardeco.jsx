import React from 'react';
import { Link } from 'react-router-dom';
import './Cardeco.css';

export default function Cardeco({ imageSrc, title, slug }) {
    return (
        <div className="cardeco">
            <Link to={`/services/${slug}`} className="cardeco-link-wrapper">
                <div className="cardeco-content">
                    <img src={imageSrc} alt={title} />
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>
    );
}
