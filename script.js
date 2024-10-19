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

//Week 6: Image Carousel

const urls = [
  'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')

let currentImage = 0

setInterval(() => {
  currentImage++
  showImages()
}, 5000)
nextButton.addEventListener('click', () => {
  currentImage++
  showImages()
})
prevButton.addEventListener('click', () => {
  currentImage--
  showImages()
})

const showImages = () => {
  const offset = currentImage % urls.length
  images.forEach((image, index) => {
      const imageIndex = (index + offset + urls.length) % urls.length
      image.src = urls[imageIndex]
  })
}

showImages()

//Week 7: To Do List Array of Objects with Local Storage appended to the DOM as a list

const todokey = "todo-list"

let todos = JSON.parse(localStorage.getItem(todokey)) || [];


  //if one exists, append it to the DOM, else create an empty array to store the todos
  const ul = document.querySelector('.todo-list')
  const addButton = document.querySelector('#add-todo')
  const input = document.querySelector('#new-todo')

//function to render the todos to the DOM, 
  const renderTodos = () => { //returns renderTodos as a function that takes no arguments and can be called later
  ul.innerHTML = ''
  todos.forEach(todo => { 
      const li = document.createElement('li')
      li.classList.add('todo-item') //Returns the value of element's class content attribute. Can be set to change it.
      li.textContent = todo.text
      ul.appendChild(li)
  })
  }
  //on page load, this renders the todos
  renderTodos()

  addButton.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
          todos.push({ text, completed: false })
          localStorage.setItem(todokey, JSON.stringify(todos))
          renderTodos()
          input.value = ''
      }
  })