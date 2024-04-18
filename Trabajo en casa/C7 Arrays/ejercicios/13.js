function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var verificacionPar = []
  for (var i = 0 ; i < array.length; i ++){
    if ( array[i] % 2 === 0){
      verificacionPar.push(array[i])
    }
  }
  
  return verificacionPar

}
filtrarNumerosPares([1, 2, 3, 4, 5, 6])
module.exports = filtrarNumerosPares;
