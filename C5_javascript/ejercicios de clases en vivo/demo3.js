function compra(nombre , objeto1 , objeto2 ,objeto3 ){
    var persona = nombre;
    var objetoCompra1 = objeto1;
    var objetoCompra2 = objeto2;
    var objetoCompra3 = objeto3;
console.log(persona + "compro");
console.log(objetoCompra1);
console.log(objetoCompra2);
console.log(objetoCompra3);
}

compra(camilo, huevo, arroz, leche);
compra(jhony, huevo, arroz, leche);
compra(juan, huevo, arroz, leche);
compra(javier, huevo, arroz, leche);
compra(lanin, huevo, arroz, leche);

module.exports = compra