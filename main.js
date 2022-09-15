//Array de Pizas = MENU DEL DIA
const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    precio: 500,
    ingredients: "muzzarella, salsa, aceitunas",
    img: "./assets/muzza.jpg",
  },

  {
    id: 2,
    nombre: "Cebolla",
    precio: 1500,
    ingredients: "muzzarella, cebolla, queso parmesano",
    img: "./assets/cebolla.jpeg",
  },

  {
    id: 3,
    nombre: "Napolitana",
    precio: 1350,
    ingredients: "muzzarella, aceitunas, tomate",
    img: "./assets/napo.jpeg",
  },

  {
    id: 4,
    nombre: "4 Quesos",
    precio: 1380,
    ingredients: "muzzarella, queso azul, parmesano, provoleta, aceitunas",
    img: "./assets/cuatroQ.jpeg",
  },

  {
    id: 5,
    nombre: "Especial",
    precio: 1000,
    ingredients: "muzzarella, jamon, morron, aceitunas",
    img: "./assets/special.jpeg",
  },

  {
    id: 6,
    nombre: "Anana",
    precio: 600,
    ingredients: "muzzarella, aceitunas, que asco no comas",
    img: "./assets/anana.jpeg",
  },
  //  {
  //    id: 7,
  //    nombre: "Palmitos",
  //    precio: 600,
  //    ingredients: "muzzarella, aceitunas, jamon cocido, palmitos,mostaza",
  //    img: "https://pizzasargentinas.com/wp-content/uploads/2020/10/pizza-de-palmitos-731x411.jpg",
  //  },
];

/*************/

//ARRAY DE PIZZAS GUARDADO EN LOCAL STORAGE
localStorage.setItem("MENU_DEL_DIA", JSON.stringify(pizzas));
// ARRAY DE PIZZAS TRAIDO DEL LOCAL STORAGE
let reChoice = JSON.parse(localStorage.getItem("MENU_DEL_DIA"));
Object.keys(reChoice).forEach((menu) => {
  // trasforme rechoice de objeto a array para poder aplicar forEach
  let optionDay = document.createElement("li"); // creacion de etiqueta li
  document.querySelector("#todayMenu").appendChild(optionDay); // el padre con id todayMenu posiciona a optionDay como hijo
  optionDay.innerHTML = `${pizzas[menu].id} - ${pizzas[menu].nombre}`; /// RENDERIZADO DE LOCAL, colocacion de LI(con nombre optionDay) en DOM
});

const form = document.getElementById("form"); // FORMULARIO
const error = document.getElementById("error"); // DIV ERROR
const pizzaName = document.getElementById("pizzaName"); // H2
const pizzaPrice = document.getElementById("pizzaPrice"); // H4
const container = document.querySelector(".img"); // CONTENEDOR DE IMAGEN
const numeroId = document.getElementById("pizzaId"); // INPUT
const ingMenu = document.getElementById("ingredients"); // P DE INGREDIENTES
const card = document.querySelector("section"); // seccion CARD

const init = () => {
  buttonSubmit.addEventListener("click", validation);
};
