function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var numero_ecnotrado = 0
  for (var i = 0; i < secuencia.length ; i ++){
    if ( secuencia[i] % n === 0){
      numero_ecnotrado = secuencia[i]
      
      break
    }else { numero_ecnotrado = undefined}
  } 
  
  return numero_ecnotrado
}


module.exports = encontrarPrimerMultiploDeN;







































// var numeroEncontrado = undefined
// for (var i = 0 ; i < secuencia.length ; i++){
//   if(secuencia[i] % n === 0){
//    numeroEncontrado = secuencia[i]
//    break
//   }
// }

// return numeroEncontrado