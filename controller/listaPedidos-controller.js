import { pedidosService } from "../service/pedidos-service.js"

const criaNovaLinha = (id, nome, preco, multiplo) => {

    const novaLinhaPedio = document.createElement('tr')
    const conteudo = ` 
        <td class="td" data-td>${id}</td>
            <td>${nome}</td>
            <td>${preco}</td>
            <td>${multiplo}</td>
            <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_pedidos.html?id=${id}" class="botao-editar">Editar</a></li>
                          <li><button class="botao-excluir" type="button">Excluir</button></li>
                      </ul>
            </td> 
    `
    novaLinhaPedio.innerHTML = conteudo
    novaLinhaPedio.dataset.id = id
    return novaLinhaPedio
}

const tabela = document.querySelector('[data-tabela]')

// Processo para deletar 

tabela.addEventListener('click', (evento) =>{
    let ehBotaoExcluir = evento.target.className == 'botao-excluir'
    if(ehBotaoExcluir ){
        //buscando o elemnto pai mais próximo do botão, no caso a linha.
        const linhaPedido = evento.target.closest('[data-id]')
        let id = linhaPedido.dataset.id

        //quando executado, não remove da tabela, somente da API.
        pedidosService.removePedido(id)
        .then( () => {
            linhaPedido.remove()
        })
    }
})

pedidosService.listaPedidos()
.then(data => {
    data.forEach(element => {
    tabela.appendChild(criaNovaLinha(element.id, element.nome, element.preco, element.multiplo))
})})