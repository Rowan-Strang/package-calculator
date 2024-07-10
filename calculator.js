// PRICING CALCULATOR //

let pricingPieces = {
  nextDayFilm: {
    state: false,
    cost: 3400,
    name: 'The Next Day Film',
    button: document.getElementById('nextDayFilm'),
  },
  heirloomFilm: {
    state: true,
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

// function calculateTotal (){
//   var quoteTotal=0
//   for (const key in pricingPieces){
//     if
//   }
// }

function updateView() {
  var totalPrice = 0
  quoteList.innerHTML = ''
  quoteTotal.innerHTML = ''
  for (const key in pricingPieces) {
    if (pricingPieces[key].state) {
      pricingPieces[key].button.classList.add('active')
      ;(quoteList.innerHTML +=
        '<li>' +
        pricingPieces[key].name +
        ': $' +
        pricingPieces[key].cost +
        '</li>'),
        (totalPrice = totalPrice + pricingPieces[key].cost)
    } else {
      pricingPieces[key].button.classList.remove('active')
    }
  }
  quoteTotal.innerHTML = 'Total: $' + totalPrice
}

updateView()
readyForMoreClicks()

function readyForMoreClicks() {
  var buttons = document.querySelectorAll('.button-30') // Get all buttons with the class '.button-30'
  buttons.forEach(function (button) {
    button.removeEventListener('click', handleButtonClick)
    button.addEventListener('click', handleButtonClick)
    function handleButtonClick() {
      // console.log(button.id)
      if (button.id === 'heirloomFilm' || button.id === 'nextDayFilm') {
        pricingPieces.heirloomFilm.state = !pricingPieces.heirloomFilm.state
        pricingPieces.nextDayFilm.state = !pricingPieces.nextDayFilm.state
      } else {
        pricingPieces[button.id].state = !pricingPieces[button.id].state
      }
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

// updateView()
