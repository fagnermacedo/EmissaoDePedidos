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

const http = new XMLHttpRequest()

http.open('GET','http://localhost:3000/profile')
http.send()
http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.id, element.nome, element.preco, element.multiplo))
    })
}