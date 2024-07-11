// PRICING CALCULATOR BRAIN //

//Questions to ask
let questions = [
  'What kind of wedding are you planning?',
  'What type of Wedding video sounds better?',
  'Would you like to hear your vows and the speeches included in a highlights film?',
  'Do you want Photography included in your Wedding Film Package?',
  'Would you like to livestream the ceremony for absent family and friends',
  'Where is the wedding taking place? approximately?',
]
//possible answers per question
let answers = [
  [
    'Elopement',
    'An intimate gathering of less than 30 people',
    'A great party with 30 to 100 people',
    'A huge blowout with over 100 guests',
  ],
  ['a short highlights', 'the most detailed, most beautiful film possible '],
  ['Yes', 'No, just music is better'],
  [
    'Yes, please capture everything for us',
    'No, we will hire a photographer seperatly',
  ],
  ['Yes', 'No, we can share the other videos with people later'],
  [
    'Wellington',
    'The Wellington region',
    'Christchurch',
    'The Canterbury region',
    'Auckland',
    'The Auckland region',
    'Northland',
    'Waikato',
    'Bay of Plenty',
    'Gisborne',
    'Taranaki',
    'Manawatū-Whanganui',
    "Hawke's Bay",
    'Tasman',
    'Marlborough',
    'West Coast',
    'Southland',
    'Otago',
  ],
]

let progress = 0
let choices = []
// let progress = 3
// let choices = [1, 1, 1]

let question = document.getElementById('questionText')
let options = document.getElementById('options')
let continueButton = document.getElementById('continueButton')

//list for button clicks. log button clicked

function logClick(buttonClicked) {
  if (choices[progress] == buttonClicked) {
    choices.splice(progress, 1)
  } else {
    choices[progress] = buttonClicked
  }
  // console.log(choices)
}
function updateView() {
  if (progress === questions.length) {
    console.log('time to move on')
    localStorage.setItem('answers', JSON.stringify(choices))
    window.open('quote.html', '_self')
  }
  if (questions.length === progress) {
    // ConsLog()
    options.innerHTML = ''
    continueButton.innerHTML = ''
    question.innerHTML = ''
  } else {
    question.textContent = questions[progress]
    options.innerHTML = ''
    continueButton.innerHTML = ''
    for (let i = 0; i < answers[progress].length; i++) {
      var button = document.createElement('button')
      button.textContent = answers[progress][i]
      button.className = 'button-30'
      if (choices[progress] === i) {
        button.classList.toggle('active')
      }
      options.appendChild(button)
    }
    if (choices[progress] != null) {
      // console.log('log if there is any value')
      var button = document.createElement('button')
      button.textContent = 'Continue'
      button.className = 'button-continue'
      continueButton.appendChild(button)
      continueButton.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    readyForMoreClicks()
  }
}

function readyForMoreClicks() {
  var buttons = document.querySelectorAll('.button-30') // Get all buttons with the class '.button-30'
  buttons.forEach(function (button, index) {
    button.removeEventListener('click', handleButtonClick)
    button.addEventListener('click', handleButtonClick)
    function handleButtonClick() {
      logClick(index)
      updateView()
    }
  })
  var continueButton = document.querySelectorAll('.button-continue')
  // console.log('continueButton')
  continueButton.forEach(function (button) {
    button.removeEventListener('click', continueButtonClick)
    button.addEventListener('click', continueButtonClick)
    function continueButtonClick() {
      progress++
      updateView()
    }
  })
}

// function ConsLog() {
//   console.log('this works when called')
// }

// document.addEventListener('DOMContentLoaded', function () {
//   var buttons = document.querySelectorAll('.button-30') // Get all buttons with the class '.button-30'
//   buttons.forEach(function (button, index) {
//     button.addEventListener('click', function () {
// First, remove the 'active' class from all buttons
// buttons.forEach(function (otherButton) {
//   if (otherButton !== this) {
//     otherButton.classList.remove('active')
//   }
// })
// Then toggle the 'active' class on the clicked button
// this.classList.toggle('active')
// aButtonClicked = true
// logClick(index)
// updateView()
// // choices[progress] = index
//     })
//   })
// })

updateView()
