function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  
  var meses = []
  for (var i = 0; i < array.length ; i ++){
    if (array[i] === "Enero" ){
      meses.push("Enero")
    }
    if (array[i] === "Marzo"){
      meses.push("Marzo")
    }
    if (array[i] === "Noviembre"){
      meses.push("Noviembre")
    
    }
  }
  if (meses.length === 3){
    return meses
  }else return "No se encontraron los meses pedidos"
}
mesesDelAño(["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Noviembre","Diciembre"])

module.exports = mesesDelAño;
