import { pedidosService } from "../service/pedidos-service.js"

const criaNovaLinha = (nome) => {
    
    const novaLinhaPedido = document.createElement('select')
    const conteudo = ` 
        <option class="comboxOpcoes" value="" data-combo>${nome}</option>
        `
    novaLinhaPedido.innerHTML = conteudo
    return novaLinhaPedido
}

const combobox = document.querySelector('[data-combobox]')

let listaDeClientes = new Array ();
let cont = 1

pedidosService.carregaClientesParaEdicao()
.then((resposta) => {
    resposta.forEach((element) =>{        
         listaDeClientes[cont] = (element.nome)  
         combobox.appendChild(criaNovaLinha(element.nome))       
    })
})
// .then(() => {
//     combobox.appendChild(criaNovaLinha(listaDeClientes[cont].nome))   
    
// })