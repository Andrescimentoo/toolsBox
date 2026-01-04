import { prisma } from "../../prisma/prismaClient.js";

// Controlador para listar ferramentas
export const getTools = async (req, res) => {
  try {
    const tools = await prisma.tool.findMany();
    res.json(tools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tools' });
  }
};










// Controlador para criar uma nova ferramenta
export const createTool = async (req, res) => {
  const { image, name, funcao, descricao, documentacao, anotacoes, linguagem, area } = req.body;
  try {
    const tool = await prisma.tool.create({
      data: {
        image,
        name,
        funcao,
        descricao,
        documentacao,
        anotacoes,
        linguagem,
        area,
      },
    });
    res.status(201).json(tool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create tool' });
  }
};

// cuidaos a se tomar c esse tool

// lembra que vamos guardar na dataBase dados de diferentes tipos , então pra cada campo
// é crucial especificar o tipo de dado q vamos guardar e requsitar.

//ex:img: é uma IMAGEM;
// documentacao: é uma URL
// o resto são strings

// além de adicionar verificação obrigatória: Todos os campos devem ser preenchidos

//isso tudo se configura no SGB , ou manualmente ou via ORM 












// Controlador para atualizar uma ferramenta
export const updateTool = async (req, res) => {
  const { id } = req.params;
  const { image, name, funcao, descricao, documentacao, anotacoes, linguagem, area } = req.body;
  try {
    const tool = await prisma.tool.update({
      where: { id: parseInt(id) },
      data: {
        image,
        name,
        funcao,
        descricao,
        documentacao,
        anotacoes,
        linguagem,
        area,
      },
    });
    res.json(tool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update tool' });
  }
};









// Controlador para deletar uma ferramenta
export const deleteTool = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.tool.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete tool' });
  }
};