const listaPedidos = () => {
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json`,{
        mode: 'no-cors'
    })
    .then( resposta => {
        console.log(resposta)
        return resposta.json()
    })
}

const criaPedido = (id, nome, preco, multiplo) =>{
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        mode: 'no-cors',
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
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json/${id}`,{
        method: 'DELETE',
        mode: 'no-cors'

    })
}

const carregaPedidoParaEdicao = (id) => {
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json/${id}`,{
    mode: 'no-cors'
    })
    .then(resposta => {
        return resposta.json()
    })
}

const carregaClientesParaEdicao = () => {
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json`,{
    mode: 'no-cors'
    })
    .then(resposta => {
        return resposta.json()
    })
} 

const atualizaPedido = (id, nome, preco, multiplo) => {
    return fetch(`https://github.com/fagnermacedo/EmissaoDePedidos/blob/main/db.json/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        mode: 'no-cors',
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

export const pedidosService = {
    listaPedidos,
    criaPedido,
    removePedido,
    carregaPedidoParaEdicao,
    carregaClientesParaEdicao,
    atualizaPedido,    
}