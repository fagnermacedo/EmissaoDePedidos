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

export const pedidosService = {
    listaPedidos,
    criaPedido
}