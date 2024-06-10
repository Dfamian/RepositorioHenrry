function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var nuevoArray = []
  for (var i = 0 ; i < array.length ; i ++){
    if (array[i] % 2 === 0){
      nuevoArray.push(array[i])

    }
  }
  console.log(nuevoArray)
  return nuevoArray
}

module.exports = filtrarNumerosPares;









































// var verificacionPar = []
// for (var i = 0 ; i < array.length; i ++){
//   if ( array[i] % 2 === 0){
//     verificacionPar.push(array[i])
//   }
// }

// return verificacionPar
