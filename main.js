'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');
const check = document.querySelectorAll('.js-checkInput');

let inputValue;


//for (const input of check) {

//}

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

renderList();


function renderList() {

  for (const items of tasks) {
    list.innerHTML += `<li><input type="checkbox"class = " js-checkInput"> ${items.name} </li> `
  }
  check.forEach(input => {

    if (input[0].completed == true) {

      input[0].classList.add("done");

    } else {

    }
  })

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


console.log(tasks);


