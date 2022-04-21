
var numero1 = parseInt(prompt("mete un numero, porfa", 0));
var numero2 = parseInt(prompt("mete otro numero, porfa", 0));

while(isNaN(numero1) || isNaN(numero2)){
numero1 = parseInt(prompt("mete un numero de verdad porfa", 0));
numero2 = parseInt(prompt("mete otro numero realG porfa", 0));
} 
	for(let i = numero1; i <= numero2; i++){
		if (i % 2 !==0) {
			document.write(`este numero es impar ${i}`)
}			if (i % 2 == 0){
			document.write(`este numero es par ${i}`)
		} console.log(i);
}