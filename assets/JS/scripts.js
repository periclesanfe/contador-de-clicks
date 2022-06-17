var currentNumberWrapper = document.getElementById("currentNumber"); //inicia uma variavel com valor de uma tag html
var currentNumber = 0; //inicia variavel de contagem e da valor inicial "0"

function increment(){ //inicia função
    if (currentNumber < 10) { //para o botão quando a contagem chegar a 10
        currentNumber++; // adiciona 1 ao valor da variavel
        currentNumberWrapper.innerHTML = currentNumber; //da valor a variavel do html pela variavel do js
        if (currentNumber >= 0){ //troca a cor do contador se o numero for negativo
            document.getElementById('currentNumber').style.color='black'
        }
    } else {
        document.getElementById('adicionar').Disabled = true; //disabilita o botão
    }
}

function decrement(){
    if (currentNumber > -10) {
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber < 0){
            document.getElementById('currentNumber').style.color='red'
        }
    } else {
        document.getElementById('subtrair').Disabled = true;
    }
}
document.getElementById('adicionar').addEventListener('click',increment); //adiciona um evento de click a um elemento, chama a função com o evento
document.getElementById('subtrair').addEventListener('click', decrement);