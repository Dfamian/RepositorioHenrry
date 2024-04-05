function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var numero = 1
   for ( var i = 1 ; i <= n ; i ++){
   numero = numero += i
   if ( numero >= 100){
      break
   }
   else return numero
   }
}

module.exports = sumarHastaNConBreak;
