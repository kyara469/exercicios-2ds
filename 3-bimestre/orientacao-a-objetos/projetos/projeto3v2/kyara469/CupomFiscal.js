class CupomFiscal{

    constructor(cliente){

        this.cliente = cliente
    }
    emitir(){
        return ""
    }
}

class AVista extends CupomFiscal{
    emitir(){
        return `Cupom fiscal à vista emitido para: ${this.cliente}`
    }
}

class Parcelado extends CupomFiscal{
    emitir(){
        return `Cupom fiscal parcelado emitido para: ${this.cliente}`
    }
}

class TrocaCredito extends CupomFiscal{
    emitir(){
        return `Cupom fiscal de troca (crédito) emitido para: ${this.cliente}`
    }
}

module.exports = CupomFiscal
module.exports.AVista = AVista
module.exports.Parcelado = Parcelado
module.exports.TrocaCredito = TrocaCredito