import { somarNumeros } from "../service/exercicio1Service.js";

export function somaDoisNumeros(req, res) {
  const { num1, num2 } = req.body;

  // Verifique se os números foram enviados e são válidos
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: "Os dados enviados devem ser números." });
  }

  const resultado = somarNumeros(num1, num2);
  res.status(200).json({ resultado });
}