import { pedidosService } from "../service/pedidos-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault()

    const id = evento.target.querySelector('[data-id]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const multiplo = evento.target.querySelector('[data-multiplo]').value

    pedidosService.criaPedido(id, nome, preco, multiplo)
    .then(() =>{
        window.location.href = "../telas/edicao_concluida.html"
    })
})