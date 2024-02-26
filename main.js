'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector ('.js-add-btn');
const message = document.querySelector('.js-message');


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


function taksPrint(tasks) {
    for (const items of tasks){
        list.innerHTML += `<li class= "items"><input type="checkbox"> ${items.name} </li> `
    }
}

taksPrint (tasks);



buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();

  inputValue = inputAdd.value.trim(); // Eliminar espacios en blanco al principio y al final

  if (inputValue !== '') { 
    tasks.push({ name: inputValue }); // Añadir la nueva tarea al array de tareas
    taksPrint([{ name: inputValue }]); // Llamar a la función taksPrint con la nueva tarea como argumento
    inputAdd.value = ''; // Limpiar el input después de añadir la tarea
  }
});