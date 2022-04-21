//hacer las tabala de  multiplicar de un numero incertado 


var numero = parseInt(prompt("quiere saber las tablas de multiplicar? meta el numero"));
var contenedor = 0;

for(var i = contenedor; i <= 20;  i++){
	let resultado =	numero * i;
	document.write(`resultado de ${numero} por ${i} es igual a: ${resultado} <br/> `);
};