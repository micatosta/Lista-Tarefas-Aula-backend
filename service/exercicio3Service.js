export function calcularMedia(pesos) {
    if(!array.isArray(pesos) || pesos.length !== 5) {
        throw new Error ("É nessecario um array com 5 pesos.");

    }
    const soma  = pesos.reduce ((acc,peso)=> acc + peso, 0);
    return soma / pesos.length;
}