import express from 'express';
import { somaDoisNumeros } from './controller/exercicio1Controller.js';
import { calcularSalarioMensal } from './controller/exercicio2Controller.js';
// Importe os outros controllers aqui

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas para cada exercício
app.post('/exercicio1', somaDoisNumeros);
app.post('/exercicio2', calcularSalarioMensal);
// Adicione as outras rotas aqui

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});