function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
var numerofaltante = 0
if (numeros.length === 0 || numeros.length === numeros[numeros.length - 1]){
  return null
}

  for (var i = 0; i < numeros.length ; i++){
    if (numeros[i] + 1!== numeros[i+1]){
       numerofaltante = numeros[i] + 1
       break
    }
  }

  return numerofaltante
}

module.exports = encontrarNumeroFaltante;