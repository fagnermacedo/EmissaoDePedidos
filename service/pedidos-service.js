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
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',

    })
}

// ##############################################################
//Processo para serem usado quando a página for publicada

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
    
    listaPedidosSite
}