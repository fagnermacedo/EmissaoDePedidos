const listaPedidos = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}

const criaPedido = (id, nome, preco, multiplo) =>{
    return fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            preco: preco,
            multiplo: multiplo
        })
    })
    .then(reposta => {
        return reposta.body
    })
}

const removePedido = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE',

    })
}

const carregaPedidoParaEdicao = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const carregaClientesParaEdicao = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaPedido = (id, nome, preco, multiplo) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            preco: preco,
            multiplo: multiplo
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

// ##############################################################
//Processos para serem usados quando a página for publicada

const listaPedidosSite = () => {
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/pedidoscompras/main/db.json`)
    .then(resposta => {
        return resposta.json()
    })
}

//###############################################################
export const pedidosService = {
    listaPedidos,
    criaPedido,
    removePedido,
    carregaPedidoParaEdicao,
    carregaClientesParaEdicao,
    atualizaPedido,

    listaPedidosSite
}