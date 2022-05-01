import { pedidosService } from "../service/pedidos-service.js"

const criaNovaLinha = (nome) => {
        
    const criaTagOption = document.createElement("option")    
    criaTagOption.innerText = `${nome}`    
    criaTagOption.className = "comboOpcoes"
    criaTagOption.setAttribute("data-nome", "data-nome")

    return criaTagOption
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