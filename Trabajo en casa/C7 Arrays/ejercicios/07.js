function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  
  //comparar valores tipo string

  array.sort((ItemA , ItemB) => {
    console.log(ItemA.localeCompare(ItemB))
    return ItemA.LocaleCompare(ItemB)
  })
// comparar valores numericos
array.sort((ItemA , ItemB) => {
  console.log(ItemA - ItemB)
  return ItemA - ItemB
})
} 
ordenarArray  ("cafe", "discord")
ordenarArray  (1,2,3,4,5)

module.exports = ordenarArray;
