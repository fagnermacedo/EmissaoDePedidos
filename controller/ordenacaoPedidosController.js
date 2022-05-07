$(function() {
    $('.tablesorter').tablesorter();
});

$(function() {
    $(".tablesorter").tablesorter({ sortList: [1,0] });
    
});

const tabela = document.querySelector('[data-botao]')

tabela.addEventListener('click', (evento) => {
    evento.preventDefault()
    console.log("teste")
})