import React from 'react';
import './LanguageCard.css';

/**
 * Componente reutilizável para representar uma linguagem na tela inicial.
 * Recebe nome, ícone (opcional), imagem de fundo e callback para clique.
 */
function LanguageCard({icon, image, onClick }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="language-card" onClick={onClick} style={cardStyle}>
      <div className="language-card-overlay">
        {icon && <div className="language-card-icon">{icon}</div>}
        {/* O nome agora está integrado na imagem de fundo, conforme solicitado */}
      </div>
    </div>
  );
}

export default LanguageCard;