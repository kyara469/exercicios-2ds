class Exposicao {
    constructor(titulo, anoDeInauguracao) {
        this.titulo = titulo
        this.anoDeInauguracao = anoDeInauguracao
        this.registros = []
    }

    descricao() {
        return "Exposição cadastrada no sistema"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Exposicao