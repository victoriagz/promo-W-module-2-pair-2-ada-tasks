'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');
const check = document.querySelectorAll('.js-checkInput');

let inputValue;

let tasks = [];

const GITHUB_USER = 'victoriagz';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    tasks = data.results;
    renderList();
    console.log(data);
  })



// renderList();


function renderList() {
  for (const items of tasks) {


    /* const checked = tasks.completed ? "checked" : " ";
     const classLi = tasks.completed ? "done" : " ";
 
     list.innerHTML = `<li class = ${classLi}><input type="checkbox"class = js-checkInput" ${checked} > <span>${items.name}</span> </li> `*/

    if (items.completed) {
      list.innerHTML += `<li class = "done" ><input type="checkbox"class = " js-checkInput" id ="${items.name}" checked <span>${items.name}</span> </li> `
    } else {
      list.innerHTML += `<li><input type="checkbox"class = " js-checkInput" id ="${items.name}"> <span>${items.name}</span> </li> `
    }

  }
}

list.addEventListener("click", handleClickCheckbox);

function handleClickCheckbox(event) {
  list.innerHTML = ` `;
  const inputiD = event.target.id
  console.log(inputiD);
  const taskindex = tasks.findIndex((items) => {
    return items.name === inputiD;
  })
  console.log(taskindex);

  tasks[taskindex].completed = true;
  console.log(tasks);

  renderList(tasks);

}

// function taksPrint(event) {

//   event.preventDefault();

//   tasks.push({ name: inputValue });
//   list.innerHTML += `<li><input type="checkbox"> ${inputValue} </li> `
//   inputAdd.value = " ";

// }

// inputAdd.addEventListener('input', () => {
//   inputValue = inputAdd.value;
// });
// buttonAdd.addEventListener('click', taksPrint);







