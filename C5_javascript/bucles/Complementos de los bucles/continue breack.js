for(i = 0 ; i < 100 ; i += 1){
    let nombre = prompt("ingrese el nombre");
    if(nombre === ""){
        continue;
    }

    if (nombre === "exit"){
        break;
    }

    console.log(nombre);
}
console.log("programa finalizado")