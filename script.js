'use strict'

//Random natural numero com trunc e +1 ao final para evitar o 0(null)
let secretNumber = Math.trunc(Math.random() * 50) + 1

// Variável de estado
let score = 10
let highscore = 0
let life = 3

// É um metodo de evento para alterar o .check ao usar o argumento "clicar (click)"
// A função vai executar uma ação após o click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  //sempre o campo do input sempre retorna uma string

  // ### Lógica ###

  // Quando o número for zero
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

    // highscore
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    // Somente numeros de 1 a 50 são permitidos no teste
  } else if (guess > 50 || guess < 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Between 1 and 50'

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      document.querySelector('.message').textContent = '💔 Lost one life'
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
    } else if (score <= 1) {
      document.querySelector('.message').textContent = '💔 Lost one life'
      document.querySelector('.score').textContent = 0
    }
  }

  // Números acima de 2 terão uma mensagem "too high"
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too High!'

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      document.querySelector('.message').textContent = '💔 Lost one life'
      document.querySelector('.score').textContent = 0
    }
  }

  // Números abaixo de 2 terão uma mensagem "too low"
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too Low!'

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      document.querySelector('.message').textContent = '💔 Lost one life'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  // Life (Continue)
  if (score <= 1 && life == 3) {
    document.querySelector('.life3').style.color = '#ff0000'
    document.querySelector('.message').textContent = '💕 You have 2 lifes'
    life = 2
  } else if (score <= 1 && life == 2) {
    document.querySelector('.life2').style.color = '#ff0000'
    document.querySelector('.message').textContent = '❤️ You have 1 life'
    life = 1
  } else if (score <= 1 && life == 1) {
    document.querySelector('.life1').style.color = '#ff0000'
    document.querySelector('.message').textContent = '💥💥💥 Game Over 💥💥💥'
  }

  // Restart
  score = 10
  secretNumber = Math.trunc(Math.random() * 50) + 1
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  // document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
