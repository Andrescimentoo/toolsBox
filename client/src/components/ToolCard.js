import React from 'react';

/**
 * Componente que exibe os detalhes de uma ferramenta cadastrada.
 * Tool é a tabela em questão (ex: language: js area: back-end)
 */
function ToolCard({ tool }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '0.5rem',
      }}
    >
      {tool.image && (
        <img
          src={tool.image}
          alt={tool.name}
          style={{ maxWidth: '100px', marginBottom: '0.5rem' }}
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
        >
          {tool.documentacao}
        </a>
      </p>
      {tool.anotacoes && (
        <p>
          <strong>Anotações:</strong> {tool.anotacoes}
        </p>
      )}
    </div>
  );
}

export default ToolCard;