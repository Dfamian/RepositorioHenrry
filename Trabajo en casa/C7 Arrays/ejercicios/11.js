function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var mul2 = []

  for ( var i = 0 ; i < array.length ; i ++){
    if ( typeof array[i] === 'number'){
      mul2.push(array[i] * 2)
    }else return undefined
  }
  return mul2
}

module.exports = duplicarElementos;
