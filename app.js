var nome = document.querySelector('form #nome')
var botaoEnviar = document.querySelector('form #botaoEnviar')
var botaoLimpar = document.querySelector('form #botaoLimpar')
var lista = document.querySelector('main #lista')


botaoEnviar.addEventListener ('click', validar)


function validar (event) {
    event.preventDefault()

    if (nome.value === '') {
        alert('Por favor, digite um nome.')
    } else {
        criarLinha(nome.value)
        nome.value = ''
        lista.focus()
    }
}

function criarLinha(texto) {
    var linha = document.createElement('li')
    var texto = document.createTextNode(texto)

    linha.appendChild(texto)
    lista.appendChild(linha)
}

//

botaoLimpar.addEventListener ('click', limpar)

function limpar (event) {
    event.preventDefault()

    lista.innerHTML = ''
}

var fundo = document.querySelector('body')
var fundoEscuro = document.querySelector('#theme #escuro')
var fundoClaro = document.querySelector('#theme #claro')
var cor = document.querySelectorAll('.cor')

fundoEscuro.addEventListener('click', function () {
    fundo.style.background = 'black';
    for (i=0; i<= 5; i++) {
        cor[i].style.color = 'black'
        nome.style.border = '1px solid black'
        botaoEnviar.style.backgroundColor = 'black'
        lista.style.color = 'black'
    }

})

fundoClaro.addEventListener('click', function () {
    fundo.style.background = 'rgb(28, 164, 255)'
    for (i=0; i<= 5; i++) {
        cor[i].style.color = 'rgb(28, 164, 255)'
        nome.style.border = '1px solid rgb(28, 164, 255)'
        botaoEnviar.style.backgroundColor = 'rgb(28, 164, 255)'
        lista.style.color = 'rgb(28, 164, 255)'
    }

})

