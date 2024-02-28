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
    list.innerHTML += `<li><input type="checkbox"class = " js-checkInput"> ${items.name} </li> `
  }
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







