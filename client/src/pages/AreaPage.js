import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'; // legangue (roxo) é um objeto de UseParams do react router DOM
import ToolForm from '../components/ToolForm'; //é o componente que é responsavel por sobrescrever a pagina principal e mostrar os campos para cadastro
import ToolCard from '../components/ToolCard'; // é o componente que é resposável por renderizar a tabela Criada 



function AreaPage() {
  const { language, area } = useParams(); // language e area São Os enuns (ddaos que definimos com unicos Unique key?) 
  const [tools, setTools] = useState([]); // tools é um estado. Estado de que? 
  const [showForm, setShowForm] = useState(false); // show form é um estado; Estado de que? 




  
  const fetchTools = async () => { // é o processo final (de quando a geente aperta no botão registrar, o form some e são renderizados os novos dados )
    try {
      const response = await fetch('http://localhost:3001/api/tools'); //chama A caixa de ferramentas como Um todo {toolBox} 
      const data = await response.json(); // pega a resposta JSON da minha API {toolBox.json} 
      
      const filtered = data.filter( // catou o JSON da minha api e aplicou um filter, oq o filter faz?
        (tool) => tool.linguagem === language && tool.area === area // aqui filtramos os itens da tabela qie nós queremos  
      );
      setTools(filtered);
    } catch (error) {
      console.error('Erro ao buscar ferramentas', error);
    }
  };

  // do jeito que essa filtragem está hoje, esta errada é uma má pratica kkkkkk pq hojje, a gente pega TODA resposta do banco e filtra no front, a ideia 
  // futuramente é já pegar esses dados filtrados.

  useEffect(() => {
    fetchTools();
  }, [language, area]); // rlx é só um observador de eventos 

  

  // Envia os dados para criação de uma nova ferramenta
  const handleCreate = async (tool) => {  //POST
    try {
      await fetch('http://localhost:3001/api/tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tool),
      });
     
      setShowForm(false); //  botão salvar ferramenta é clicado, essa função é disparada, faz o post dos dados e já logo em seguida
      // tira de tela o FORM e oloca em tela o fetchTools, que são os dados já salvos na dataBase   
      fetchTools();
    
    
    } catch (error) {
      console.error('Erro ao criar ferramenta', error);
    }
  };

  // fim da declaração das funções que se comunicam com os endpoints GET e POST 

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

          onSubmit={handleCreate} /* Esse é simplismente o post, o componente FILHO Tool form vai receber os enuns e o handleCreate, no fim vai tudo pro back */
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