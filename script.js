'use strict'

//Random natural numero com trunc e +1 ao final para evitar o 0(null)
let secretNumber = Math.trunc(Math.random() * 50) + 1

// Variável de estado
let score = 5
let highscore = 0
let life = 3

// Função para refatorar
const displayMessage = message =>
  (document.querySelector('.message').textContent = message)

const body = document.querySelector('body')
// É um metodo de evento para alterar o .check ao usar o argumento "clicar (click)"
// A função vai executar uma ação após o click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  //sempre o campo do input sempre retorna uma string

  // ### Lógica ###

  // Quando o número for zero
  if (!guess) {
    displayMessage('⛔ No number!')

    // Quando o jogador ganha
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')
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
      displayMessage('😢 Between 1 and 50')

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      displayMessage('💔 Lost one life')
      document.querySelector('.score').textContent = 0
    }

    // Números próximos entre 3 terão uma mensagem "too close"
  } else if (
    // ### REFATORADO ###
    // guess + 1 === secretNumber ||
    // guess + 2 === secretNumber ||
    // guess - 1 === secretNumber ||
    // guess - 2 === secretNumber

    // ### REFATORADO ###
    guess < secretNumber + 4 &&
    guess > secretNumber - 4
  ) {
    if (score > 1) {
      displayMessage('🔔 Too Close')

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      displayMessage('💔 Lost one life')
      document.querySelector('.score').textContent = 0
    }
  }

  // Números acima de 3 terão uma mensagem "too high" e abaixo de 3 "too low"
  else if (guess !== secretNumber) {
    if (score > 1) {
      // ### REFATORADO ###
      displayMessage(guess > secretNumber ? '⬆️ Too High!' : '⬇️ Too Low!')

      score--
      document.querySelector('.score').textContent = score
    } else if (score <= 1) {
      displayMessage('💔 Lost one life')
      document.querySelector('.score').textContent = 0
    }
  }

  // ### REFATORADO ###
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('⬇️ Too Low!')

  //     score--
  //     document.querySelector('.score').textContent = score
  //   } else if (score <= 1) {
  //     displayMessage('💔 Lost one life')
  //     document.querySelector('.score').textContent = 0
  //   }
  // }
})

// Again!
document.querySelector('.again').addEventListener('click', function () {
  // Life (Continue)
  if (score <= 1 && life == 3) {
    document.querySelector('.life3').style.color = '#fff'
    displayMessage('💕 You have 2 lifes')
    life = 2
  } else if (score <= 1 && life == 2) {
    document.querySelector('.life2').style.color = '#fff'
    displayMessage('❤️ You have 1 life')
    life = 1
  } else if (score <= 1 && life == 1) {
    document.querySelector('.body-2').style.backgroundColor = '#000000'
    document.querySelector('.life1').style.color = '#fff'
    document.querySelector('.message').classList.add('shine')
    displayMessage('💥💥💥 Game Over 💥💥💥')
  }

  // Restart
  score = 5
  secretNumber = Math.trunc(Math.random() * 50) + 1
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  // displayMessage('Start guessing...')
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})

// Rules!
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelector('.show-modal')

const closeModel = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const openModel = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

// Abrindo as regras
btnOpenModal.addEventListener('click', openModel)
// Fechamento no botão com a função
btnCloseModal.addEventListener('click', closeModel)
// Fechamento clicando fora do model (overlay) com a função
overlay.addEventListener('click', closeModel)
