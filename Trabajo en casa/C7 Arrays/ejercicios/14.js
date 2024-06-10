function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var numerosMayoresA10 = []
  var contador = 0
  for (var i = 0 ; i < array.length ; i ++){
    if (array[i] > 10){
      numerosMayoresA10.push(array[i])
      contador ++
    }
  }
  console.log(numerosMayoresA10)
  console.log(contador)
  return contador
}

module.exports = contarElementosMayoresA10;