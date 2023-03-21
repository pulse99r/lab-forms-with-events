// console.log("Code your solution!")

//beginning HTML setup
const header = document.querySelector('h1')
header.innerText = "Kenti's To Do List";
const errorMssg = "Please enter a todo!!"

const submitButton = document.querySelector('form')

submitButton.addEventListener('submit', (e) => {
  e.preventDefault()
  newListItem(e)
})

const newListItem = (e) => {
  const dataSubmitted = document.querySelector('#new-to-do').value 
  let ultodos = document.querySelector('ul')
  
  if(dataSubmitted.length === 0) {
    const paragraph = document.querySelector('p')
    paragraph.innerText = errorMssg
  } else {
    
    let todoListItem = document.createElement('li')
    todoListItem.textContent = dataSubmitted
    ultodos.append(todoListItem)
  
    let currentListItems = document.querySelectorAll('li')
    currentListItems.innerText = dataSubmitted;
    todoListItem.addEventListener('click',(event) => {
      todoListItem.style.textDecoration = 'line-through'
    })
  }

}
