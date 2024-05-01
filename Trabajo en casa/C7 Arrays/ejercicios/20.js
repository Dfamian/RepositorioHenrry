function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var arrayDuplicado = []
  
  for (var i = 1; i < array.length ; i ++){
    if (array[i] !== array[0]){
      
      return false
    }
    else return true
  }
}

module.exports = todosIguales;
