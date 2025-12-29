import express from 'express';
import cors from 'cors';

// Importa as rotas das ferramentas
import toolRoutes from './routes/toolRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota principal de saúde
app.get('/', (req, res) => {
  res.send('Caixa de Ferramentas API');
});

// Rotas da API
app.use('/api/tools', toolRoutes);

// Inicializa servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;