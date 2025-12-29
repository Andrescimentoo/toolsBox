import express from 'express';
const router = express.Router();
import * as toolController from '../controllers/toolController.js';

// Retorna todas as ferramentas
router.get('/', toolController.getTools);

// Cria uma nova ferramenta
router.post('/', toolController.createTool);

// Atualiza uma ferramenta existente
router.put('/:id', toolController.updateTool);

// Remove uma ferramenta
router.delete('/:id', toolController.deleteTool);

export default router;