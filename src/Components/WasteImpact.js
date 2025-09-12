import React from 'react';
import './WasteImpact.css';

export default function WasteImpact() {
  return (
    <section className="waste-impact-section">
      <h2 className="waste-title">Pourquoi la gestion des déchets industriels est cruciale ?</h2>
      <div className="waste-content">
        <div className="waste-text">
          <p>
            Les déchets industriels représentent une source majeure de pollution de l'air, de l'eau et des sols.
            Une mauvaise gestion peut engendrer des risques pour la santé humaine et dégrader durablement notre environnement.
          </p>
          <p>
            Une gestion responsable permet non seulement de réduire l'empreinte carbone des entreprises,
            mais aussi de favoriser l'économie circulaire à travers le recyclage, la réutilisation et la valorisation des matériaux.
          </p>
          <ul>
            <li>✔️ Réduction de la pollution des sols et de l'eau</li>
            <li>✔️ Diminution des émissions de gaz à effet de serre</li>
            <li>✔️ Valorisation des déchets par le tri et le recyclage</li>
            <li>✔️ Préservation des ressources naturelles</li>
          </ul>
        </div>
        <div className="waste-image">
          <img src="/images/depositphotos_622480686-stock-photo-concept-world-environment-world-g.jpg" alt="Gestion des déchets industriels" />
        </div>
      </div>
    </section>
  );
}
