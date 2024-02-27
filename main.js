'use strict';

const list = document.querySelector('.js-taks-list');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-add-btn');
const lis = document.querySelectorAll('.listLi');

let check = document.querySelectorAll("input[id=toggleSwitch]");

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

/*check.forEach(ch => {

  ch.addEventListener("change", () => {


    if (ch.checked == true) {
      console.log("checkeao");

    } else {
      console.log("no checkeao");
    }

  })
})*/



function renderList() {

  for (const items of tasks) {

    if (items.completed === true) {

      list.innerHTML += `<li class = "listLi done" ><input type="checkbox" id="toggleSwitch" checked> ${items.name} </li> `
    } else {

      list.innerHTML += `<li class = "listLi" ><input type="checkbox" id="toggleSwitch" >${items.name} </li> `
    }
  }


}

//si checked toggle de la clase done



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


