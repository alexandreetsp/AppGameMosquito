var altura = 0
var largura = 0
valor = 1
cro = 60
var criamosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'Normal'){
    criamosquito =  1500
} else if (nivel ==='Dificil'){
    criamosquito =  1000
} else if (nivel === 'Brabo'){
    criamosquito =  720
}


function dimensao() {

    altura = window.innerHeight
    largura = window.innerWidth
    

}

dimensao()

var cronometro = setInterval(function () {

    cro -= 1

    

  if(cro < 0 ){

    window.location.href = 'Vitoria.html'

  } else{
    document.getElementById('cronometro').innerHTML = cro
  }
    
}, 1000);

function getmove(){


    if (document.getElementById('mosquito')) {

        document.getElementById('mosquito').remove()

      if (valor >= 4){

        window.location.href = 'gameover.html'

    } else{

        document.getElementById('v' + valor).src = "./img/coracao_vazio.png"

        valor++
    }
    } 

  
    


var x = Math.floor(Math.random() * largura) - 90
var y = Math.floor(Math.random() * altura) - 90

x = x < 0 ? 0 : x

y = y < 0 ? 0 : y

//Criar elementos Html

var mosquito = document.createElement('img')
mosquito.src = './img/mosca.png'
mosquito.className = varia() + ' ' + varia1()
mosquito.style.left = x + 'px'
mosquito.style.top = y + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}
document.body.appendChild(mosquito)



}

function varia () {

    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
        return 'mosquito1'
        case 1:
        return 'mosquito2'
        case 2:
        return 'mosquito3'
    }

}

function varia1 () {

    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
        return 'LadoA'
        case 1:
        return 'LadoB'
    }

}



