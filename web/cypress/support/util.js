export function formatarDataAtual() {
    const data = new Date();

    // data.getMonth() retorna de 0 (Janeiro) a 11 (Dezembro), por isso somamos +1
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}