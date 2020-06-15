var elementos = [1,1,3,5,6,4,9,5,3,5,7,9,0,1];
var repetidos = [];
var temporal = [];

elementos.forEach((value,index)=>{
  temporal = Object.assign([],elementos); 
  temporal.splice(index,1); 
  if(repetidos.indexOf(value)==-1){
    repetidos.push(value);
  }     
});

// console.log(repetidos);  && repetidos.indexOf(value)==-1

var elementos1 = [1,1,3,5,6,4,9,5,3,5,7,9,0,1];
elementos1.sort();
console.log(elementos1);

