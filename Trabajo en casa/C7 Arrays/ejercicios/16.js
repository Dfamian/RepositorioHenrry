function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicando = []
  for (var i = 0 ; i < array.length ; i ++){
    multiplicando.push( array[i] * i)
  }
  return multiplicando
}

module.exports = multiplicarElementosPorIndice;








































//   var multiplicando = []
// for ( var i = 0 ; i < array.length ; i ++){
    
//   multiplicando.push(array[i] * i)
  
// }

// return multiplicando