class Produto {
    constructor(nome, preço, categoria){
        this.nome = nome
        this.preco = preço
        this.categoria = categoria
    }
}

const produto = new Produto("Notebook", 3500, "Eletrônicos")


module.exports = produto