let ataque;

class sobreHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        console.log(`O ${heroi.tipo} atacou usando ${ataque}`);
    }
}
let heroi = new sobreHeroi("dev", 23, "guerreiro");

if (heroi.tipo === "mago") {
    ataque = "magia";
} else if (heroi.tipo === "guerreiro") {
    ataque = "espada";
} else if (heroi.tipo === "monge") {
    ataque = "arte marciais";
} else if (heroi.tipo === "ninja") {
    ataque = "shuriken";
}

heroi.atacar();