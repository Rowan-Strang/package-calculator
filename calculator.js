// PRICING CALCULATOR //

let answers

try {
  answers = JSON.parse(localStorage.getItem('answers'))
} catch (error) {
  console.error('Error parsing answers from localStorage:', error)
}
if (!answers) {
  answers = [0, 0, 0, 0] // Default answers
  localStorage.setItem('answers', JSON.stringify(answers)) // Optional: save defaults back to local storage
}

function processAnswers() {
  // What type of Wedding video sounds better?, 0 = NextDayFilm 1 = Heirloom
  if (answers[1] === 0) {
    pricingPieces.nextDayFilm.state = true
    pricingPieces.heirloomFilm.state = false
  } else if (answers[1] === 1) {
    pricingPieces.nextDayFilm.state = false
    pricingPieces.heirloomFilm.state = true
  }
  // What kind of wedding are you planning?' 0 & 1 are small weddings so override their preffernce for a longer film and suggest a next day film
  if (answers[0] <= 1) {
    pricingPieces.nextDayFilm.state = true
    pricingPieces.heirloomFilm.state = false
  }
  // Would you like to hear your vows and the speeches included in a highlights film?, 0= Yes, Spoken Moments 1 = No
  if (answers[2] === 0) {
    pricingPieces.spokenMoments.state = true
  } else if (answers[2] === 1) {
    pricingPieces.spokenMoments.state = false
  }
  // Do you want Photography included in your Wedding Film Package?, 0= Yes, Photography
  if (answers[3] === 0) {
    pricingPieces.photography.state = true
  } else if (answers[3] === 1) {
    pricingPieces.photography.state = false
  }
  // Would you like to livestream, 0= Yes
  if (answers[4] === 0) {
    pricingPieces.liveStream.state = true
  } else if (answers[4] === 1) {
    pricingPieces.liveStream.state = false
  }
}

console.log(answers)
let pricingPieces = {
  nextDayFilm: {
    state: true,
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
    state: false,
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
    state: false,
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
processAnswers()
thereCanBeOnlyOne()
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
