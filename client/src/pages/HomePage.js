import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageCard from '../components/LanguageCard';
import './HomePage.css';
import imgJs from '../assets/imgJsBackGroundCardTools.jpeg';
import imgTs from '../assets/imgTs.jpeg';
import imgPy from '../assets/imgPyBackGroundCardTools.jpeg';
import imgAI from '../assets/imgAI.jpeg';

// Lista de linguagens suportadas (com ícones simbólicos)
const languages = [
  { id: 'JS', name: 'JavaScript', icon: '', image: imgJs },
  { id: 'TS', name: 'TypeScript', icon: '', image: imgTs },
  { id: 'Python', name: 'Python', icon: '', image: imgPy },
  { id: 'IA', name: 'IA', icon: '', image: imgAI },
];

/**
 * Página inicial que apresenta as quatro caixas de ferramentas disponíveis.
 */
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Elementos do Mundo Invertido */}
      <div className="upside-down-effects">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="spore"></div>
        ))}
      </div>

      <h1>Caixa de Ferramentas</h1>
      <p>Escolha uma linguagem para acessar a caixa correspondente:</p>
      <div className="languages-grid">
        {languages.map((lang) => (
          <LanguageCard
            key={lang.id}
            icon={lang.icon}
            image={lang.image}
            onClick={() => navigate(`/${lang.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;