import { calcularSalario } from "../service/exercicio2Service.js";

export function calcularSalarioMensal(req, res) {
  const { valorPorHora, horasTrabalhadas } = req.body;

  if (typeof valorPorHora !== 'number' || typeof horasTrabalhadas !== 'number') {
    return res.status(400).json({ error: "Os dados enviados devem ser números." });
  }

  const salario = calcularSalario(valorPorHora, horasTrabalhadas);
  res.status(200).json({ salario });
}