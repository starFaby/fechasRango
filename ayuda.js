var array1=new Array(1,2,3,4,5,6);
var array2=new Array(2,4,6,78);
 
var iguales=0;
for(var i=0;i<array1.length;i++)
{
	for(var j=0;j<array1.length;j++)
	{
		if(array1[i]==array2[j])
			iguales++;
	}
}
console.log(iguales);
