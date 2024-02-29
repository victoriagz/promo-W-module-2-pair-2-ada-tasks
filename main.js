'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');
const check = document.querySelectorAll('.js-checkInput');
const GITHUB_USER = 'victoriagz';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
let inputValue;
let tasks = [];



function getTasks(){ 
fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    const tasks = data.results;
    localStorage.setItem('tasks', JSON.stringify(tasks))

  })
}


function renderList() {
  for (const items of tasks) {
    if (items.completed) {
      list.innerHTML += `<li class = "done" ><input type="checkbox"class = " js-checkInput" id ="${items.name}" checked <span>${items.name}</span> </li> `
    } else {
      list.innerHTML += `<li><input type="checkbox"class = " js-checkInput" id ="${items.name}"> <span>${items.name}</span> </li> `
    }

  }
}


function handleClickCheckbox(event) {
  list.innerHTML = ` `;
  const inputiD = event.target.id
  const taskindex = tasks.findIndex((items) => {
    return items.name === inputiD;
  })
  if (event.target.checked) {
    tasks[taskindex].completed = true;
  } else {
    tasks[taskindex].completed = false;
  }



  renderList(tasks);

}

function taksPrint(event) {
  event.preventDefault();

  tasks.push({ name: inputValue });
  list.innerHTML += `<li><input type="checkbox"> ${inputValue} </li> `
  inputAdd.value = " ";

}

inputAdd.addEventListener('input', () => {
  inputValue = inputAdd.value;
});





buttonAdd.addEventListener('click', taksPrint);
list.addEventListener("click", handleClickCheckbox);






