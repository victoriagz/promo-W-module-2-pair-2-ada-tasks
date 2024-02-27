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

renderList();

const lis = document.querySelectorAll('.listLi');
let check = document.querySelectorAll(".toggleSwitch");

console.log(check);
for (const inp of check) {

  inp.addEventListener("change", () => {

    if (check[0].checked) {
      tasks[0].completed === true;
      lis[0].classList.add("done");

    } else {
      tasks[0].completed === false;
      lis[0].classList.remove("done");
    }

  })
}

function renderList() {

  for (const items of tasks) {

    list.innerHTML += `<li class = "listLi" ><input class ="toggleSwitch" type="checkbox" >${items.name} </li> `

  }



}


function taksPrint(event) {

  event.preventDefault();

  tasks.push({ name: inputValue });
  list.innerHTML += `<li class= "listLi"><input type="checkbox" id = "toggleSwitch"> ${inputValue} </li> `
  inputAdd.value = " ";

}

inputAdd.addEventListener('input', () => {
  inputValue = inputAdd.value;
});
buttonAdd.addEventListener('click', taksPrint);

