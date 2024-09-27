let totalDeVitorias = ranked(150, 10);
let nivel = "";

function ranked(vitorias, derrotas) {
    let calculo = vitorias - derrotas;
    return calculo;
};

if (totalDeVitorias <= 10) {
    nivel = "Ferro"
} else if (totalDeVitorias > 10 && totalDeVitorias <= 20) {
    nivel = "Bronze"
} else if (totalDeVitorias > 20 && totalDeVitorias <= 50) {
    nivel = "Prata"
} else if (totalDeVitorias > 50 && totalDeVitorias <= 80) {
    nivel = "Ouro"
} else if (totalDeVitorias > 80 && totalDeVitorias <= 90) {
    nivel = "Diamante"
} else if (totalDeVitorias > 90 && totalDeVitorias <= 100) {
    nivel = "Lendário"
} else if (totalDeVitorias > 100) {
    nivel = "Imoral"
}

console.log(`O Herói tem de saldo de ${totalDeVitorias} e está no nível de ${nivel}`);