const Arte = require("./Arte")
const Historia = require("./Historia")
const Ciencia = require("./Ciencia")

class ExposicaoFactory {
    static criar(tipo, titulo, anoDeInauguracao) {

        if (tipo === "arte") {
            return new Arte(titulo, anoDeInauguracao)
        }

        if (tipo === "historia") {
            return new Historia(titulo, anoDeInauguracao)
        }

        if (tipo === "ciencia") {
            return new Ciencia(titulo, anoDeInauguracao)
        }

        throw new Error("Tipo de exposição inválido")
    }
}

module.exports = ExposicaoFactory