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

inputAdd.addEventListener('input', () => {
  inputValue = inputAdd.value;

});
buttonAdd.addEventListener('click', taksPrint);


let lis = document.querySelectorAll('.listLi');   //el que tiene va a cambiar 
let check = document.querySelectorAll(".toggleSwitch");  //el que tiene addEventListener

console.log(tasks);
console.log(check);

const handleCollapsable = (event) => {

  const clickeditem = event.currentTarget;
  const clickedParent = clickeditem.parentNode;

  console.log(clickeditem);

  console.log(clickedParent);

  for (const li of lis) {

    if (li === clickedParent) {

      console.log("completa");
      li.classList.toggle("done");

    } else {
      console.log("no completa");
    }

  }
}

for (const inp of check) {
  inp.addEventListener("change", handleCollapsable);
}

function renderList() {

  for (const items of tasks) {

    list.innerHTML += `<li class = "listLi" ><input class ="toggleSwitch" type="checkbox" >${items.name} </li> `
  }
}

function taksPrint(event) {

  event.preventDefault();
  tasks.push({ name: inputValue });

  // Create a new list item
  const newListItem = document.createElement('li');
  newListItem.classList.add('listLi');
  newListItem.innerHTML = `<input class="toggleSwitch" type="checkbox"> ${inputValue}`;

  // Append the new list item to the list
  list.appendChild(newListItem);

  // Rebind event listener to the new checkbox
  const newCheckbox = newListItem.querySelector('.toggleSwitch');
  newCheckbox.addEventListener('change', handleCollapsable);
  inputAdd.value = " ";


  //list.innerHTML += `<li class= "listLi"><input class ="toggleSwitch" type="checkbox" > ${inputValue} </li> `


  // Actualiza los elementos. Me di cuenta que al añadir tareas no se actualizaban ni las lis ni los input
  /* lis = document.querySelectorAll('.listLi');
   check = document.querySelectorAll(".toggleSwitch");
   check.forEach(element => {
     element.addEventListener('change', handleCollapsable);
   });*/

  //Se cuaja lo anterior
  console.log(lis);
  console.log(check);
}



