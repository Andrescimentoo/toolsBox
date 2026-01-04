import express from 'express';
const router = express.Router();
import * as toolController from '../controllers/toolController.js';

// Retorna todas as ferramentas
router.get('/', toolController.getTools); // problema era com a rota!

// Cria uma nova ferramenta
router.post('/', toolController.createTool);

// Atualiza uma ferramenta existente
router.put('/:', toolController.updateTool);

// Remove uma ferramenta
router.delete('/:', toolController.deleteTool);

export default router;