class Produto{
    #preco

    constructor(preco){
        this.#preco = preco
    }

    get preco(){
        return this.#preco
    }

    set preco(novopreco){
        if(novopreco >= 0){
            return this.#preco = novopreco
        }
    }
}

const produto = new Produto(100)

module.exports = produto