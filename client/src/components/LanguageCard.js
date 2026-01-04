import React from 'react';
import './LanguageCard.css';

/**
 * Componente reutilizável para representar uma linguagem na tela inicial.
 * Recebe nome, ícone e callback para clique.
 */
function LanguageCard({ name, icon, onClick }) {
  return (
    <div className="language-card" onClick={onClick}>
      <div className="language-card-icon">{icon}</div>
      <div className="language-card-name">{name}</div>
    </div>
  );
}

export default LanguageCard;