//Array de Pizas = menuDay
const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    precio: 500,
    ingredients: "muzzarella, salsa, aceitunas",
    img: "./Assets/muzza.jpg",
  },

  {
    id: 2,
    nombre: "Cebolla",
    precio: 1500,
    ingredients: "muzzarella, cebolla, queso parmesano",
    img: "./Assets/cebolla.jpeg",
  },

  {
    id: 3,
    nombre: "Napolitana",
    precio: 1350,
    ingredients: "muzzarella, aceitunas, tomate",
    img: "./Assets/napo.jpeg",
  },

  {
    id: 4,
    nombre: "4 Quesos",
    precio: 1380,
    ingredients: "muzzarella, queso azul, parmesano, provoleta, aceitunas",
    img: "./Assets/cuatroQ.jpeg",
  },

  {
    id: 5,
    nombre: "Especial",
    precio: 1000,
    ingredients: "muzzarella, jamon, morron, aceitunas",
    img: "./Assets/special.jpeg",
  },

  {
    id: 6,
    nombre: "Anana",
    precio: 600,
    ingredients: "muzzarella, aceitunas, que asco no comas",
    img: "./Assets/anana.jpeg",
  },
  //{   A AGREGAR
  //  id: 7,
  //  nombre: "Palmitos",
  //  precio: 600,
  //  ingredients: "muzzarella, aceitunas, jamon cocido, palmitos,mostaza",
  //  img: "./Assets/anana.jpeg",
  //},
];

const form = document.getElementById("form"); // FORMULARIO
const error = document.getElementById("error"); // DIV ERROR
const pizzaName = document.getElementById("pizzaName"); // H2
const pizzaPrice = document.getElementById("pizzaPrice"); // H4
const container = document.querySelector(".img"); // CONTENEDOR DE IMAGEN
const numeroId = document.getElementById("pizzaId"); // INPUT
const ingMenu = document.getElementById("ingredients"); // P DE INGREDIENTES
const card = document.querySelector("section");

//ARRAY DE PIZZAS GUARDADO EN LOCAL STORAGE
const todayMenu = localStorage.setItem("MENU_DEL_DIA", JSON.stringify(pizzas));
// ARRAY DE PIZZAS TRAIDO DEL LOCAL STORAGE
let reChoice = JSON.parse(localStorage.getItem("MENU_DEL_DIA"));

//MENU DEL DIA ---->  OBJETOS DEL ARRAY
Object.keys(reChoice).forEach((menu) => {
  let optionDay = document.createElement("li");
  document.querySelector("#todayMenu").appendChild(optionDay);
  optionDay.innerHTML = `${pizzas[menu].id} - ${pizzas[menu].nombre}`; /// RENDERIZADO DE LOSCAL
});

function eleccionPizza(e) {
  e.preventDefault();
  let errorMessage = [];
  //************************VALIDACION?
  if (
    !numeroId.value ||
    numeroId.value === "0" ||
    numeroId.value === null ||
    isNaN(numeroId.value)
  ) {
    errorMessage.push("Ah elegido un Identificador de pizza incorrecto");
    error.innerHTML = errorMessage; // MENSAJE DE ERROR 1
  } else {
    errorMessage.pop();
    error.innerHTML = errorMessage;
    const pizza = +numeroId.value.trim();

    let pizzaChoice = pizzas.find((nombre) => nombre.id === pizza);
    if (!pizzaChoice) {
      errorMessage.push("Su pizza no esta en el menu de hoy, lo siento :(");
      error.innerHTML = errorMessage; // MENSAJE DE ERROR 2
    } else {
      card.classList.add("card");
      pizzaName.innerHTML = pizzaChoice.nombre;
      pizzaPrice.innerHTML = `$ ${pizzaChoice.precio}`;
      ingMenu.innerHTML = `Ingredientes base: ${pizzaChoice.ingredients}`;
      container.innerHTML = `<img class="pizzaImg" src=${pizzaChoice.img} alt="">`;

      numeroId.value = "";

      console.log("control de Validacion Ok");
    }
  }
}

const init = () => {
  buttonSubmit.addEventListener("click", eleccionPizza);
};
init();


