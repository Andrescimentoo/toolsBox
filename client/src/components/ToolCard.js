import React from 'react';
import './ToolCard.css';

/**
 * Componente que exibe os detalhes de uma ferramenta cadastrada.
 * Tool é a tabela em questão (ex: language: js area: back-end)
 */



function deleteTool() {
    
}

function updateTool() {
    
}

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      {tool.image && (
        <img
          src={tool.image}
          alt={tool.name}
          className="tool-card-image"
        />
      )}
      <h3>{tool.name}</h3>
      <p>
        <strong>Função:</strong> {tool.funcao}
      </p>
      <p>
        <strong>Descrição:</strong> {tool.descricao}
      </p>
      <p>
        <strong>Documentação:</strong>{' '}
        <a
          href={tool.documentacao}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-card-link"
        >
          {tool.documentacao}
        </a>
      </p>
      {tool.anotacoes && (
        <p>
          <strong>Anotações:</strong> {tool.anotacoes}
        </p>
      )}
      
      <button>Editar</button> 
      
      <button>Remover</button>
    </div>  
  );
}

export default ToolCard;