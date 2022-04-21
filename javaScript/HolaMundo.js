// var numero1 = parseInt(prompt("introduce el numero mor", 0));
// var numero2 = parseInt(prompt("introduce el segundo numero, caballero", 0));

// while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
// 	 numero1 = parseInt(prompt("no me ponga el cero.introduce el numero mor", 0));
// 	 numero2 = parseInt(prompt("ponga otro numero que no sea el cero o una puta letra o menor. introduce el segundo numero, caballero", 0));
// };

// if(numero1 < numero2) {
// 	alert(`cucho, el numero ${numero1} uno es menor que el ${numero2}.`)
// } else if(numero1 > numero2){
// 	alert(`mijo el ${numero1} es mayor que el ${numero2}. Pero estas re lindo hoy`)
// } else if (numero1 == numero2) {
// 	alert("oe, son iguales");
// } 
// console.log(numero1, numero2);


// var num1 = parseInt(prompt("numero uno"));
// var num2 = parseInt(("numero dos"));
// var (suma)=>{
// 	num1 + num2
// };

// while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
// 	 numero1 = parseInt(prompt("no me ponga el cero o menor , introduce otro numero mor", 0));
// 	 numero2 = parseInt(prompt("ponga otro numero que no sea el cero o una puta letra o menor. introduce el segundo numero, caballero", 0));
// } if (suma) {

// };

/*

//hacer un programa que muestre todos los numeros entre uno y el otro

	var numerito1 = parseInt(prompt("introduce numero", 0));
	var numerito2 = parseInt(prompt("mete el otro numero", 0));
	// var contenedor = 0;

// for (var i = numerito1; i <= numerito2; i++ ){
// 	if (true) {
// 	console.log(i);
// 	document.write(i);		
// 	} else if( false ) {
// 		for (i= numerito2; numerito2 <= numerito1; index--)
//     document.write(index);
//     console.log(index);
// }
// };


if (numerito1 < numerito1) {
	for (var i = numerito1; i <= numerito2; i--){
	
	}
}*/





//mostrar todos los numero inpares entre uno y el otro

var numeros = parseInt(prompt("numero", 0));
var numeros2 = parseInt(prompt("numero 2", 0));

	for(var i = numeros; i <= numeros2; i++){

		if (i % 2 != 0) {
			console.log(i);
			document.write(`es impar ${ i }`);
		}
	}



//mostrar todos los numero PARES entre uno y el otro

var numeros = parseInt(prompt("numero", 0));
var numeros2 = parseInt(prompt("numero 2", 0));

	for(var i = numeros; i <= numeros2; i++){

		if (i % 2 == 0) {
			console.log(i);
			document.write(`es par ${ i }`);
		}
	}




