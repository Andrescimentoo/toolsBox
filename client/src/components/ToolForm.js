import React, { useState } from 'react';
import './ToolForm.css';

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
    <div className="tool-form-container">
      <h2>Registrar nova ferramenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
          className="tool-form-input"
        />
        <input
          type="text"
          name="name"
          placeholder="Nome da ferramenta"
          value={formData.name}
          onChange={handleChange}
          className="tool-form-input"
        />
        <input
          type="text"
          name="funcao"
          placeholder="Função da ferramenta"
          value={formData.funcao}
          onChange={handleChange}
          className="tool-form-input"
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
          className="tool-form-textarea"
        />
        <input
          type="text"
          name="documentacao"
          placeholder="Link da documentação"
          value={formData.documentacao}
          onChange={handleChange}
          className="tool-form-input"
        />
        <textarea
          name="anotacoes"
          placeholder="O que mais você quer acrescentar? Que problemas resolveu?"
          value={formData.anotacoes}
          onChange={handleChange}
          className="tool-form-textarea"
        />
        <button type="submit" className="tool-form-submit-btn">
          Registrar nova ferramenta
        </button>
        <button type="button" onClick={onCancel} className="tool-form-cancel-btn">
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default ToolForm;