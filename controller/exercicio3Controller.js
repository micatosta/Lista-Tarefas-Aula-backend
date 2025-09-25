import { calcularMedia } from "../service/exercicio3Service.js";

export function mediaPesos(req, res) {
  const { pesos } = req.body;

  if (!Array.isArray(pesos) || pesos.length !== 5 || pesos.some(p => typeof p !== 'number')) {
    return res.status(400).json({ error: "É necessário um array com 5 pesos (números)." });
  }

  const media = calcularMedia(pesos);
  res.status(200).json({ media });
}