function sourcePizza() {
  const pizza = +numeroId.value.trim(); // conversion numero.Id a NUMBER
  pizzaChoice = pizzas.find((nombre) => nombre.id === pizza); // buscador de pizzas en pizzachoice (eleccion)
}
function choiceCard() {
  card.classList.add("card");
  pizzaName.innerHTML = pizzaChoice.nombre;
  pizzaPrice.innerHTML = `$ ${pizzaChoice.precio}`;
  ingMenu.innerHTML = `Ingredientes: ${pizzaChoice.ingredients}`;
  container.innerHTML = `<img class="pizzaImg" src=${pizzaChoice.img} alt="">`;
}
