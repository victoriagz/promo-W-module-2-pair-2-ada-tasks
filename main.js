'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');


let inputValue;


const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

console.log(tasks);

for (const items of tasks) {
  list.innerHTML += `<li><input type="checkbox"> ${items.name} </li> `
}

function taksPrint(tasks) {

  inputAdd.addEventListener('input', () => {
    inputValue = inputAdd.value;
  });
  buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    list.innerHTML = ` `
    tasks.push({ name: inputValue });
    console.log(tasks);

    for (const items of tasks) {
      list.innerHTML += `<li><input type="checkbox"> ${items.name} </li> `
    }
  })

}

taksPrint(tasks);




