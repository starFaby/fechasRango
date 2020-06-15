function fechaFil() {
    header = [];
    rows = [];
    rows1 = [];
    array = [];
    conteoRepetidos = 0;
    conteoNoRepetidos = 0;
    let arreglo = [
        { "id": "1", "name": "fiebre", "amount": "150", "date": "02-18-2018" },
        { "id": "2", "name": "fiebre", "amount": "150", "date": "02-18-2018" },
        { "id": "3", "name": "artritis", "amount": "150", "date": "02-18-2018" },
        { "id": "3", "name": "artritis", "amount": "150", "date": "02-18-2018" },
        { "id": "4", "name": "fiebre", "amount": "150", "date": "02-18-2018" },
        { "id": "5", "name": "fiebre", "amount": "150", "date": "02-18-2018" },
        { "id": "6", "name": "temperatura", "amount": "150", "date": "02-18-2018" },
        { "id": "7", "name": "dolor", "amount": "150", "date": "02-18-2018" },
        { "id": "8", "name": "temperatura", "amount": "150", "date": "02-18-2018" },
        { "id": "9", "name": "temperatura", "amount": "150", "date": "02-18-2018" },
        { "id": "10", "name": "dolor", "amount": "150", "date": "02-18-2018" },
        { "id": "11", "name": "dolor", "amount": "150", "date": "02-18-2018" },
        { "id": "12", "name": "dolor", "amount": "150", "date": "02-18-2018" },
        { "id": "13", "name": "dolor", "amount": "150", "date": "02-18-2018" },
        { "id": "14", "name": "artritis", "amount": "150", "date": "03-18-2018" },
        { "id": "15", "name": "gonorrea", "amount": "200", "date": "04-18-2018" },
        { "id": "16", "name": "temperatura", "amount": "600", "date": "04-18-2018" },
        { "id": "17", "name": "comeson", "amount": "700", "date": "05-18-2018" },
        { "id": "18", "name": "diarrea", "amount": "800", "date": "06-18-2018" },
        { "id": "19", "name": "papiloma", "amount": "800", "date": "07-18-2018" },
        { "id": "20", "name": "dolor", "amount": "800", "date": "08-18-2018" },
        { "id": "21", "name": "diarrea", "amount": "800", "date": "09-18-2018" },
        { "id": "22", "name": "fiebre", "amount": "800", "date": "10-18-2018" }
    ];
    console.log('Bloque 0');

    let fechasFiltradas = arreglo.filter(function (fechas) {
        if (fechas.date >= "02-18-2018" && fechas.date <= "10-18-2018") {
            return true;
        }
    });
    //*************** */
    var fechasNoRepeat = [];
    var arr = fechasFiltradas.filter(function (el) {
        // si no es duplicado retorna true
        if (fechasNoRepeat.indexOf(el.date) == -1) {
            fechasNoRepeat.push(el.date);
            return true;
        }
        return false;
    });
    // console.log(fechasNoRepeat);

    // fechaEncontrada;
    for (let i = 0; i < arr.length; i++) {
        console.log('==========================> ',arr[i].date);
        for (let j = 0; j < fechasFiltradas.length; j++) {
            
        }
    }
    // console.log(rows);
    console.log('Bloque 2');
    let headerRow = fechasFiltradas.filter(function (d) {
        if (arr== d.date) {
            return d.date;
        }
     });
     console.log(headerRow);
    

    /*** para sacar la cantiddad de fechas pero no repetidas*/
    var dups = [];
    var arr = fechasFiltradas.filter(function (el) {
        dups.push(el.name);

    });
    //console.log(dups);
    const cantidadNombres = dups.reduce((contadorNombre, nombre) => {
        contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
        return contadorNombre;
    }, {});
    // console.log(cantidadNombres);
    console.log('Bloque 3');

  
    

}
// if(str1.equals(str2) == true)
