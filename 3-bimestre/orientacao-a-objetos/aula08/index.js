class Cofre{
    #codigo

    constructor(codigo){
        this.#codigo = codigo
    }

    verificarCodigo(codigo){
        if(codigo == this.#codigo){
            return true
    }else{
        return false
    }
  }
}

module.exports = new Cofre(1234)
