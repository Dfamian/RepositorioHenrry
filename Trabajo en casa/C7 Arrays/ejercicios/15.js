function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 var contador = 0 
 for ( i = 0 ; i < array.length ; i ++){
  if (array[i] > array[contador]){
    contador = i
    
  }
 }
 return contador

}
encontrarIndiceMayor([2,1,4,5,22,11,100,99])
module.exports = encontrarIndiceMayor;
