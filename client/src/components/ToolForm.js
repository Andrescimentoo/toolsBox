import React, { useState } from 'react';

/**
 * Formulário para criação de uma nova ferramenta. Recebe a linguagem e área
 * selecionadas para preencher automaticamente esses campos no payload.
 */
function ToolForm({ language, area, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    funcao: '',
    descricao: '',
    documentacao: '',
    anotacoes: '',
    linguagem: language,
    area: area,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama callback com dados preenchidos
    onSubmit(formData);
  };

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
      }}
    >
      <h2>Registrar nova ferramenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="text"
          name="name"
          placeholder="Nome da ferramenta"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="text"
          name="funcao"
          placeholder="Função da ferramenta"
          value={formData.funcao}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="text"
          name="documentacao"
          placeholder="Link da documentação"
          value={formData.documentacao}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <textarea
          name="anotacoes"
          placeholder="O que mais você quer acrescentar? Que problemas resolveu?"
          value={formData.anotacoes}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
        />
        <button type="submit" style={{ marginRight: '0.5rem' }}>
          Registrar nova ferramenta
        </button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default ToolForm;