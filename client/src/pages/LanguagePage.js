import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Página que exibe a mensagem de boas‑vindas para a linguagem escolhida e
 * permite ao usuário selecionar a área (Front‑end ou Back‑end).
 */
function LanguagePage() {
  const { language } = useParams();
  const navigate = useNavigate();

  // Converte códigos de linguagem para nomes legíveis, se desejar
  const languageNames = {
    JS: 'JavaScript',
    TS: 'TypeScript',
    Python: 'Python',
    IA: 'IA',
  };

  const currentLanguage = languageNames[language] || language;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem‑vindo à caixa de ferramentas {currentLanguage}</h1>
      <p>Escolha abaixo qual parte da caixa de ferramentas você quer acessar.</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Componente de navegação para Front‑end */}
        <div
          onClick={() => navigate(`/${language}/FRONT`)}
          style={{
            cursor: 'pointer',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '0.5rem',
            flex: 1,
          }}
        >
          <h2>Front‑end</h2>
          <p>Ferramentas relacionadas à camada de apresentação.</p>
        </div>
        {/* Componente de navegação para Back‑end */}
        <div
          onClick={() => navigate(`/${language}/BACK`)}
          style={{
            cursor: 'pointer',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '0.5rem',
            flex: 1,
          }}
        >
          <h2>Back‑end</h2>
          <p>Ferramentas relacionadas à camada de serviços.</p>
        </div>
      </div>
    </div>
  );
}

export default LanguagePage;