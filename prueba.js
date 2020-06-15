// esta es la cadena donde buscaremos
let cadena = "faby";
// esta es la palabra a buscar
let termino = "e";
// para buscar la palabra hacemos
let posicion = cadena.toLowerCase().indexOf(termino.toLowerCase());
if (posicion !== -1)
    console.log("La palabra está en la posición " + posicion);
else
    console.log("No encontré lo que esás buscando");