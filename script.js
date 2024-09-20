const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 0 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 24 // is it evening?

const welcomeMessage = document.querySelector('#welcome')

const messages = [
  { condition: isMorning, message: 'Good Morning!' },
  { condition: isAfternoon, message: 'Good Afternoon!' },
  { condition: isEvening, message: 'Good Evening!' }
]

let messageDisplayed = false

messages.forEach(display => {
    if (display.condition && !messageDisplayed) {
        const h1 = document.createElement('h1')
        h1.innerHTML = display.message 
        welcomeMessage.appendChild(h1) // append the message to the welcome div
        messageDisplayed = true // set to true so that the message is displayed only once
    }
}
)
console.log(messages)