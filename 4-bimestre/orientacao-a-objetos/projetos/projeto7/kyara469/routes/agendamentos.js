const express = require("express")
const router = express.Router()

const validarAgendamento = require("../middlewares/validarAgendamento")

let agendamentos = [
    { id: 1, tutor: "Ana", servico: "Banho", valor: 45, situacao: "cancelado" },
    { id: 2, tutor: "Bruno", servico: "Tosa", valor: 60, situacao: "atendido" },
    { id: 3, tutor: "Carla", servico: "Consulta", valor: 120, situacao: "atendido" }
]

router.get("/", (req, res) => {
    let resultado = agendamentos

    const { situacao, valorMin } = req.query

    if (situacao) {
        resultado = resultado.filter(a => a.situacao === situacao)
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(a => a.valor >= Number(valorMin))
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const agendamento = agendamentos.find(a => a.id === id)

    if (!agendamento) {
        const erro = new Error("Agendamento nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(agendamento)
})

router.post("/", validarAgendamento, (req, res) => {
    const { tutor, servico, valor } = req.body

    const novoAgendamento = {
        id: Math.max(...agendamentos.map(a => a.id)) + 1,
        tutor,
        servico,
        valor,
        situacao: "marcado"
    }

    agendamentos.push(novoAgendamento)

    res.status(201).json({
        mensagem: "Registro de agendamento criado"
    })
})

module.exports = router