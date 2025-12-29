import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import ToolForm from '../components/ToolForm';

/**
 * Página que lista as ferramentas de uma área específica (Front ou Back) para
 * determinada linguagem e permite registrar novas ferramentas.
 */
function AreaPage() {
  const { language, area } = useParams();
  const [tools, setTools] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Obtém a lista de ferramentas do back‑end e filtra por linguagem/área
  const fetchTools = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/tools');
      const data = await response.json();
      
      const filtered = data.filter(
        (tool) => tool.linguagem === language && tool.area === area
      );
      setTools(filtered);
    } catch (error) {
      console.error('Erro ao buscar ferramentas', error);
    }
  };

  useEffect(() => {
    fetchTools();
  }, [language, area]);

  // Envia os dados para criação de uma nova ferramenta
  const handleCreate = async (tool) => {
    try {
      await fetch('http://localhost:3001/api/tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tool),
      });
      setShowForm(false);
      fetchTools();
    } catch (error) {
      console.error('Erro ao criar ferramenta', error);
    }
  };

  // Converte identificadores para exibição
  const languageNames = {
    JS: 'JavaScript',
    TS: 'TypeScript',
    Python: 'Python',
    IA: 'IA',
  };
  const areaNames = {
    FRONT: 'Front‑end',
    BACK: 'Back‑end',
  };
  const currentLanguage = languageNames[language] || language;
  const currentArea = areaNames[area] || area;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>
        Aba {currentArea} da Caixa de Ferramentas {currentLanguage}
      </h1>
      <p>
        Adicione uma ferramenta {currentLanguage} {currentArea} à sua caixa de
        ferramentas
      </p>
      <button onClick={() => setShowForm(true)} style={{ marginBottom: '1rem' }}>
        +
      </button>
      {showForm && (
        <ToolForm
          language={language}
          area={area}
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      )}
      <div style={{ marginTop: '1rem' }}>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default AreaPage;