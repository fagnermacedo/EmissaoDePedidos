import { pedidosService } from "../service/pedidos-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputId = document.querySelector('[data-id]')
const inputNome = document.querySelector('[data-nome]')
const inputPreco = document.querySelector('[data-preco]')
const inputMultiplo = document.querySelector('[data-multiplo]')

pedidosService.carregaPedidoParaEdicao(id)
.then( dados => {
    
    inputId.value = dados.id
    inputNome.value = dados.nome 
    inputPreco.value = dados.preco 
    inputMultiplo.value = dados.multiplo     
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    pedidosService.atualizaPedido(id, inputNome.value, inputPreco.value, inputMultiplo.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})

