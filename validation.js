init(); // Inicio en la validacion
function validation(e) {
  e.preventDefault(); // prevencion de submit
  let errorMessage = []; // mensaje de error vacio
  sourcePizza(); // funcion de buscar pizza

  /*validacion con if*/
  if (
    !numeroId.value ||
    numeroId.value === null ||
    numeroId.value < "1" ||
    isNaN(numeroId.value)
  ) {
    errorMessage.push("Identificador de pizza incorrecto, intente nuevamente");
    error.innerHTML = errorMessage; // MENSAJE DE ERROR 1
  } else if (!pizzaChoice) {
    errorMessage.push("Su pizza no esta en el menu de hoy, lo siento :(");
    error.innerHTML = errorMessage; // MENSAJE DE ERROR 2
  } else {
    errorMessage.pop(); // por las dudas pusheo mensaje vacio
    error.innerHTML = ""; // innerHtml en 0
    choiceCard(); // renderizado de eleccion de pizza
  }
  numeroId.value = ""; // valor del input en 0 despues de la eleccion
}
