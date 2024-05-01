function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var duplicarArray = array
  var nuevaCadena = []
  
  for (var i = 0 ; i < array.length ; i ++){
    if ( array[i] === 'Enero'){
      nuevaCadena.push('Enero')
    } 
    if (array[i] === 'Marzo'){
      nuevaCadena.push('Marzo')
    }
    if (array[i] === 'Noviembre'){
      nuevaCadena.push('Noviembre')
    }
  }

  if( nuevaCadena.length === 3 ){
    return nuevaCadena
  } else return "No se encontraron los meses pedidos"
  
  
}

module.exports = mesesDelAño;
