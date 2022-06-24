'use strict'

// // forma de manipular o css/html com o javascript
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = '🎉  Correct Number!'

// document.querySelector('.number').textContent = 15
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

//Random natural numero com trunc e +1 ao final para evitar o 0(null)
const secretNumber = Math.trunc(Math.random() * 20) + 1

// Variável de estado
let score = 20
document.querySelector('.number').textContent = secretNumber
console.log(secretNumber)

// É um metodo de evento para alterar o .check ao usar o argumento "clicar (click)"
// A função vai executar uma ação após o click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  //sempre o campo do input sempre retorna uma string
  console.log(typeof guess)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!'
  } else if (guess > 20 || guess < 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Between 1 and 20'

      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 Game Over'
    }
  } else if (
    guess + 1 === secretNumber ||
    guess + 2 === secretNumber ||
    guess - 1 === secretNumber ||
    guess - 2 === secretNumber
  ) {
    document.querySelector('.message').textContent = '🔔 Too Close'

    score--
    document.querySelector('.score').textContent = score
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '⬆️ Too High!'

    score--
    document.querySelector('.score').textContent = score
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '⬇️ Too Low!'

    score--
    document.querySelector('.score').textContent = score
  }
})
