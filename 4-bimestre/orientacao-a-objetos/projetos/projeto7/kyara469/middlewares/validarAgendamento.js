function validarAgendamento(req, res, next) {
    const { tutor, servico, valor } = req.body

    if (!tutor) {
        return res.status(400).json({
            erro: "O campo tutor e obrigatorio"
        })
    }

    if (!servico) {
        return res.status(400).json({
            erro: "O campo servico e obrigatorio"
        })
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    if (valor <= 0) {
        return res.status(400).json({
            erro: "O campo valor deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarAgendamento