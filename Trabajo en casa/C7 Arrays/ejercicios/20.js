function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var verdaderoFalso = 0
  for (var i = 0; i < array.length ; i++){
    if (array[0] === array[i]){
      verdaderoFalso = true
    }else {verdaderoFalso = false}
  }
  console.log(verdaderoFalso)
  return verdaderoFalso
}

module.exports = todosIguales;
