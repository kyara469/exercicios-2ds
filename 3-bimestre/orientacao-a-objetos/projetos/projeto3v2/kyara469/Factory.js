const CupomFiscal = require("./CupomFiscal")

class Factory{
    static criar(tipo, cliente){

        if(tipo === "avista"){
            return new CupomFiscal.AVista(cliente)
        }

        if(tipo === "parcelado"){
            return new CupomFiscal.Parcelado(cliente)
        }
        
        if(tipo === "trocaCredito"){
            return new CupomFiscal.TrocaCredito(cliente)
        }

        throw new Error("Tipo de cupom fiscal inválido")
        
    }
}

module.exports = Factory