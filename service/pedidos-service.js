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
    return novaLinhaPedio
}

const tabela = document.querySelector('[data-tabela]')

const listaPedidos = () => {
    const promise = new Promise ((resolve, reject) =>{
        const http = new XMLHttpRequest()
        http.open('GET','http://localhost:3000/profile')
        
        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }   
        
        http.send()
    })
    console.log("Teste promise")
    return promise
}


listaPedidos()
.then(data => {
    data.forEach(element => {
    tabela.appendChild(criaNovaLinha(element.id, element.nome, element.preco, element.multiplo))
})})