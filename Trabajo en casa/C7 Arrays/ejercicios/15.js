function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numero = array[0]
  var numeroMax = 0
  var pocicion = 0
  for (var i = 0 ; i < array.length ; i ++){
    if (array[i] > numero){
      numero = array[i]
      numeroMax = array[i]
      
      pocicion = i

    }
  }
  
  console.log(numeroMax)
  console.log( pocicion)
  return pocicion
}

encontrarIndiceMayor([1, 3, 2, 5, 4])
module.exports = encontrarIndiceMayor;