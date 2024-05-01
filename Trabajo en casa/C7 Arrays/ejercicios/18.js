function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var promedioAcomulador = 0
  var promedio = promedioAcomulador / resultadosTest.length
  for (var i = 0 ; i < resultadosTest.length ; i ++){
    promedioAcomulador += resultadosTest[i]
  }
  // console.log (promedioAcomulador)
  // console.log (promedioAcomulador = promedioAcomulador / resultadosTest.length )
  return promedioAcomulador / resultadosTest.length
}

module.exports = promedioResultadosTest;
