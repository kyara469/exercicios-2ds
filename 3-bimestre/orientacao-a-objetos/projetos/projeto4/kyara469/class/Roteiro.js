class Roteiro {
    constructor(nome) {
        this.nome = nome
        this.categorias = []
        this.membros = []
    }

    adicionarCategoria(sala) {
        this.categorias.push(sala)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = Roteiro