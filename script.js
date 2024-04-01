// Variaveis da aplicação (Para facilitar o entendimento e tbm ajudar no clean code)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
let xAttempts = 1

//Criando o número aleatório 
let randomNumber = Math.round(Math.random () * 10)
// Variavel de controle para o número de tentativas 

// Eventos
btnTry.addEventListener('click', handleClick)
btnAgain.addEventListener('click', gameAgain)
document.addEventListener('keydown', clickEnter)

// Functions
function gameAgain (){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random () * 10)
}

function handleClick(event) {
  // Cancela o carregamento da página
  event.preventDefault()
  
  // Utiliza a DOM para pegar o ID/value do input
  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value == randomNumber)) {
    toggleScreen()
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }else if (Number(inputNumber.value) < 0) {
    alert("Erro! o número digitado é menor que 0.")
  }else if (Number(inputNumber.value) > 10){
    alert("Erro! o número digitado é menor que 10.")
  }
  inputNumber.value = ""
  xAttempts++
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function clickEnter(e) {
 if(e.key == 'Enter' && screen1.classList.contains("hide")) {
  gameAgain()
 }
}