import React from 'react';

/**
 * Componente reutilizável para representar uma linguagem na tela inicial.
 * Recebe nome, ícone e callback para clique.
 */
function LanguageCard({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        minWidth: '120px',
      }}
    >
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <div>{name}</div>
    </div>
  );
}

export default LanguageCard;