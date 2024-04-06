function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var ciclo = 0
  do {
    ciclo ++;
    num = num += 5
  }
  while(ciclo < 8)
return num
}
doWhile(5)
module.exports = doWhile;