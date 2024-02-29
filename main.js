'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');
const check = document.querySelectorAll('.js-checkInput');

let inputValue;

let tasks = [];
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));


const GITHUB_USER = 'victoriagz';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;


if (tasksLocalStorage !== null) {

  //localStorage.removeItem("tasks");
  console.log("tengo tareas en localStorage");
  tasks = tasksLocalStorage;
  console.log(tasksLocalStorage);
  renderList(tasksLocalStorage);

} else {

  console.log("no tengo nada en el localStorage");
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      console.log(data);
      renderList(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));

    })
    .catch((error) => {
      console.error(error);
    });
}


function renderList(tasks) {


  for (const items of tasks) {

    if (items.completed) {
      list.innerHTML += `<li class = "done" ><input type="checkbox"class = " js-checkInput" id ="${items.name}" checked <span>${items.name}</span> </li> `
    } else {
      list.innerHTML += `<li><input type="checkbox"class = " js-checkInput" id ="${items.name}"> <span>${items.name}</span> </li> `
    }

  }
}

list.addEventListener("click", handleClickCheckbox);
console.log(list)

function handleClickCheckbox(event) {

  console.log("ejecuta la funcion")

  if (!event.target.id) {
    return;
  }
  list.innerHTML = "";
  const inputiD = event.target.id
  console.log(inputiD);
  const taskindex = tasks.findIndex((items) => {
    return items.name === inputiD;
  })
  console.log(taskindex);
  if (event.target.checked) {

    tasks[taskindex].completed = true;
  } else {
    tasks[taskindex].completed = false;
  }

  console.log(tasks);
  renderList(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function taksPrint(event) {

  event.preventDefault();

  const newTask = {
    name: inputValue,
    completed: false,
  };
  tasks.push(newTask);
  console.log(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  list.innerHTML = ` `;

  renderList(tasks);

  inputAdd.value = " ";

}

inputAdd.addEventListener('input', () => {
  inputValue = inputAdd.value;
});
buttonAdd.addEventListener('click', taksPrint);







