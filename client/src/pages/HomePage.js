import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageCard from '../components/LanguageCard';

// Lista de linguagens suportadas (com ícones simbólicos)
const languages = [
  { id: 'JS', name: 'JavaScript', icon: '🟨' },
  { id: 'TS', name: 'TypeScript', icon: '🟦' },
  { id: 'Python', name: 'Python', icon: '🐍' },
  { id: 'IA', name: 'IA', icon: '🤖' },
];

/**
 * Página inicial que apresenta as quatro caixas de ferramentas disponíveis.
 */
function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Caixa de Ferramentas</h1>
      <p>Escolha uma linguagem para acessar a caixa correspondente:</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {languages.map((lang) => (
          <LanguageCard
            key={lang.id}
            name={lang.name}
            icon={lang.icon}
            onClick={() => navigate(`/${lang.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;