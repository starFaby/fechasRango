
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
var startDate = new Date("02-18-2018" );
var endDate = new Date("10-18-2018");
var resultProductData = arreglo.filter(function (a) {
    var hitDates = a.name || {};
    //extract all date strings
    hitDates = Object.keys(hitDates);
    //improvement: use some. this is an improment because .map()
    //and .filter() are walking through all elements.
    //.some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
    hitDateMatchExists = hitDates.some(function (dateStr) {
        var date = new Date(dateStr);
        return date >= startDate && date <= endDate
    });
    return hitDateMatchExists;
});
console.log(resultProductData);