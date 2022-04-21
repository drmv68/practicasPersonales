var numero1 = parseInt(prompt("mete un numero, porfa", 0));
var numero2 = parseInt(prompt("mete otro numero, porfa", 1));

var resultadoMultiplicar = numero1 * numero2;
var resultadoSumar = numero1 + numero2;
var resultadoRestar = numero1 - numero2;
var resultadoDividir = numero1 / numero2;

while(isNaN(numero1) || isNaN(numero2) || numero2 == 0 ){
numero1 = parseInt(prompt("no metas letras... Gracias", 0));
numero2 = parseInt(prompt("mete un numero diferente a 0 y no letras, gracias.", 1));
}

document.write(`resultado de multiplicacion es: ${resultadoMultiplicar} <br/>`);
document.write(`resultado de sumar es: ${resultadoSumar} <br/>`);
document.write(`resultado de restar es: ${resultadoRestar} <br/>`);
document.write(`resultado de divir es: ${resultadoDividir} <br/>`);