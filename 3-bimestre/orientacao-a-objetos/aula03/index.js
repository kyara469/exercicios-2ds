class Animal {
    constructor(nome, espécie){
        this.nome = nome
        this.espécie = espécie
      }
  }   

  const Rex  = new Animal("Rex", "cachorro")
  const Mimi = new Animal("Mimi", "gato")

  module.exports = [Rex, Mimi]
