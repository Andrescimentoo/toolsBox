import { PrismaClient } from '@prisma/client';

// Instância única do Prisma Client
const prisma = new PrismaClient();

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