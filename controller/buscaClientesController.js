import { pedidosService } from "../service/pedidos-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')


pedidosService.carregaClientesParaEdicao(id)
.then(function(response){
    response.json()
    .then(function(data){
        console.log(data);
    })
})

// const formulario = document.querySelector('[data-form]')

// formulario.addEventListener('submit', (evento) => {
//     evento.preventDefault()

//     pedidosService.atualizaPedido(id, inputNome.value, inputPreco.value, inputMultiplo.value)
//     .then(() => {
//         window.location.href = "../telas/edicao_concluida.html"
//     })
// })