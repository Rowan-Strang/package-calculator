// PRICING CALCULATOR //

let pricingPieces = {
  nextDayFilm: {
    state: true,
    cost: 3400,
    name: 'The Next Day Film',
    button: document.getElementById('nextDayFilm'),
  },
  heirloomFilm: {
    state: false,
    cost: 4500,
    name: 'The Heirloom Film',
    button: document.getElementById('heirloomFilm'),
  },
  spokenMoments: {
    state: true,
    cost: 1000,
    name: 'Spoken Moments',
    button: document.getElementById('spokenMoments'),
  },
  photography: {
    state: false,
    cost: 1000,
    name: 'Photogrpahy',
    button: document.getElementById('photography'),
  },
  liveStream: {
    state: true,
    cost: 50,
    name: 'Ceremony Livestream',
    button: document.getElementById('liveStream'),
  },
}
function thereCanBeOnlyOne() {
  if (pricingPieces.nextDayFilm.state) {
    pricingPieces.heirloomFilm.state = false
  } else {
    pricingPieces.heirloomFilm.state = true
  }
}

let cost = 0
let quoteList = document.querySelector('.quote ul')
let quoteTotal = document.getElementById('total')

function updateViewNew() {
  quoteList.innerHTML = ''
  quoteTotal.innerHTML = ''
  for (const key in pricingPieces) {
    if (pricingPieces[key].state) {
      // console.log('happy boy')
      pricingPieces[key].button.classList.add('active')
      quoteList.innerHTML +=
        '<li>' +
        pricingPieces[key].name +
        ': $' +
        pricingPieces[key].cost +
        '</li>'
    } else {
      pricingPieces[key].button.classList.remove('active')
    }
  }
}

// function addSomeItems() {
//   quoteList.innerHTML += '<li>Next Day Film: $3400</li>'
//   quoteList.innerHTML += '<li>Heirloom Film: $3400</li>'
//   quoteList.innerHTML += '<li>Something New: $3400</li>'
// }
updateViewNew()
// addSomeItems()

// console.log(
//   'next day film: ' +
//     pricingPieces.nextDayFilm.state +
//     '   Heirloom Film: ' +
//     pricingPieces.heirloomFilm.state
// )

// let nextDayFilm = {
//   state: true,
//   cost: 3400,
//   name: 'The Next Day Film',
//   button: document.getElementById('nextDayFilm'),
// }
// let heirloomFilm = {
//   state: false,
//   cost: 4500,
//   name: 'The Heirloom Film',
//   button: document.getElementById('heirloomFilm'),
// }
// let spokenMoments = {
//   state: false,
//   cost: 1000,
//   name: 'and Spoken Moments',
//   button: document.getElementById('spokenMoments'),
// }
// let photography = {
//   state: false,
//   cost: 1000,
//   name: 'with Photogrpahy',
//   button: document.getElementById('photography'),
// }
// let liveStream = {
//   state: true,
//   cost: 50,
//   name: 'plus a Ceremony Livestream',
//   button: document.getElementById('liveStream'),
// }

// function updateView() {
//   if (nextDayFilm.state) {
//     nextDayFilm.button.classList.add('active')
//     heirloomFilm.button.classList.remove('active')
//   } else {
//     heirloomFilm.button.classList.add('active')
//     nextDayFilm.button.classList.remove('active')
//   }
//   if (spokenMoments.state) {
//     spokenMoments.button.classList.add('active')
//   }
//   if (photography.state) photography.button.classList.add('active')
//   if (liveStream.state) liveStream.button.classList.add('active')
//   quoteList.innerHTML = ''
// }

// updateView()
//list for button clicks. log button clicked

// function logClick(buttonClicked) {
//   if (choices[progress] == buttonClicked) {
//     choices.splice(progress, 1)
//   } else {
//     choices[progress] = buttonClicked
//   }
//   console.log(choices)
// }
// function updateViewOLD() {
//   if (questions.length === progress) {
//     options.innerHTML = ''
//     continueButton.innerHTML = ''
//     question.innerHTML = ''
//   } else {
//     question.textContent = questions[progress]
//     options.innerHTML = ''
//     continueButton.innerHTML = ''
//     for (let i = 0; i < answers[progress].length; i++) {
//       var button = document.createElement('button')
//       button.textContent = answers[progress][i]
//       button.className = 'button-30'
//       if (choices[progress] === i) {
//         button.classList.toggle('active')
//       }
//       options.appendChild(button)
//     }
//     if (choices[progress] != null) {
//       var button = document.createElement('button')
//       button.textContent = 'Continue'
//       button.className = 'button-continue'
//       continueButton.appendChild(button)
//     }
//     readyForMoreClicks()
//   }
// }

// function readyForMoreClicks() {
//   var buttons = document.querySelectorAll('.button-30') // Get all buttons with the class '.button-30'
//   buttons.forEach(function (button, index) {
//     button.removeEventListener('click', handleButtonClick)
//     button.addEventListener('click', handleButtonClick)
//     function handleButtonClick() {
//       logClick(index)
//       updateView()
//     }
//   })
//   var continueButton = document.querySelectorAll('.button-continue')
//   continueButton.forEach(function (button) {
//     button.removeEventListener('click', continueButtonClick)
//     button.addEventListener('click', continueButtonClick)
//     function continueButtonClick() {
//       progress++
//       updateView()
//     }
//   })
// }

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

// updateView()
