function validaEntrada (texto) {
    const regexPreco = /\w\S+/gm
    const entradaFormulario = texto.match(regexPreco)

    return entradaFormulario

}

function validaFormularioCliente() {
    const valorPreco = document.getElementById("preco").value
    const valorMultiplo = document.getElementById("multiplo").value    

    if(validaEntrada(valorPreco) ){
        document.getElementsByClassName("checkId")[0].style.display = "block"
        document.getElementsByClassName("validaId")[0].style.color = "green"        
    }else {
        document.getElementsByClassName("checkId")[0].style.display = "none"
        document.getElementsByClassName("validaId")[0].style.color = "red" 
    }
    
    if(validaEntrada(valorMultiplo) ){
        document.getElementsByClassName("checkNome")[0].style.display = "block"
        document.getElementsByClassName("validaPreco")[0].style.color = "green"        
    }else {
        document.getElementsByClassName("checkNome")[0].style.display = "none"
        document.getElementsByClassName("validaPreco")[0].style.color = "red"
    }
    
}

