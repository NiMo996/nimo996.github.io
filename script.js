const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 0 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 24 // is it evening?

const welcomeMessage = document.querySelector('#welcome')

const messages = [ // array of objects
  { condition: isMorning, message: 'Good Morning!' },
  { condition: isAfternoon, message: 'Good Afternoon!' },
  { condition: isEvening, message: 'Good Evening!' }
]

let messageDisplayed = false // set to false so that the message is displayed only once

messages.forEach(display => {
    if (display.condition && !messageDisplayed) { // if the condition is true and the message is not displayed
        const h1 = document.createElement('h1') // create an h1 element
        h1.innerHTML = display.message  // set the message
        welcomeMessage.appendChild(h1) // append the message to the welcome div
        messageDisplayed = true // set to true so that the message is displayed only once
    }
}
)

//Week 4
const key="It's a secret to everybody."
localStorage.setItem(key, "WOW, thats a old reference! That was 10 years before my time!")