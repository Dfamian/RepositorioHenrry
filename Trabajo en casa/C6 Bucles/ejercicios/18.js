function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acomulador = 1
  for ( var i = a ; i <= b ; i++){
    acomulador = acomulador *= i
    
    console.log(acomulador)
  }
  if (Math.min(a,b) <= 0){
    return 0
  }
  return acomulador
  
}
productoEntreNúmeros ( -5, 5)
module.exports = productoEntreNúmeros;