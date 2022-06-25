'use strict'

// // forma de manipular o css/html com o javascript
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = '🎉  Correct Number!'

// document.querySelector('.number').textContent = 15
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

//Random natural numero com trunc e +1 ao final para evitar o 0(null)
let secretNumber = Math.trunc(Math.random() * 20) + 1

// Variável de estado
let score = 20

// É um metodo de evento para alterar o .check ao usar o argumento "clicar (click)"
// A função vai executar uma ação após o click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  //sempre o campo do input sempre retorna uma string
  console.log(typeof guess)

  // ### Lógica ###

  // Quando o numero for zero
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'

    // Quando o jogador ganha
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!'

    document.querySelector('.number').textContent = secretNumber
    console.log(secretNumber)

    // Em JavaScript as nomenclaturas com 2 nome e ífen, sofrem o camelcase
    // As propriedades do CSS são escritas com ""
    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    // Somente numeros de 1 a 20 são permitidos no teste
  } else if (guess > 20 || guess < 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Between 1 and 20'

      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 Game Over'

      document.querySelector('.score').textContent = 0
    }

    // Números próximos entre 2 terão uma mensagem "too close"
  } else if (
    guess + 1 === secretNumber ||
    guess + 2 === secretNumber ||
    guess - 1 === secretNumber ||
    guess - 2 === secretNumber
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔔 Too Close'

      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 Game Over'

      document.querySelector('.score').textContent = 0
    }
  }

  // Números acima de 2 terão uma mensagem "too hith"
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too High!'

      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 Game Over'

      document.querySelector('.score').textContent = 0
    }
  }

  // Números abaixo de 2 terão uma mensagem "too low"
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too Low!'

      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 Game Over'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
