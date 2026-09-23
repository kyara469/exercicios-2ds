const Exposicao = require("./Exposicao")

class Arte extends Exposicao {
    descricao() {
        return "Exposição de arte aberta ao público"
    }
}

module.exports = Arte