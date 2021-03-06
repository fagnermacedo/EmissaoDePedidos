const listaPedidos = () => {
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json`)
    .then( resposta => {
         return resposta.json()
    })
}

const criaPedido = (id, nome, preco, multiplo) =>{
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json`,{
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
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json/${id}`,{
        method: 'DELETE',  
    })
}

const carregaPedidoParaEdicao = (id) => {
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const carregaClientesParaEdicao = () => {
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json`)
    .then(resposta => {
        return resposta.json()
    })
} 

const atualizaPedido = (id, nome, preco, multiplo) => {
    return fetch(`https://raw.githubusercontent.com/fagnermacedo/EmissaoDePedidos/main/db.json/${id}`, {
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