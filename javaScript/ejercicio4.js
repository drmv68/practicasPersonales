//pida 6 datos en pantalla.
//mostrar el array entero (todos los elemntos) en el cuerpo de la pag y consola
//mostrar ordenado
//invertir orden
//mostrar numero de elementos dentro
//que el usuario pueda buscar elemnto

var numero0 = parseInt(prompt("parcheme 6 numeritos todo bien."));
var numero1 = parseInt(prompt("parcheme 6 numeritos todo bien."));
var numero2 = parseInt(prompt("parcheme 6 numeritos todo bien."));
var numero3 = parseInt(prompt("parcheme 6 numeritos todo bien."));
var numero4 = parseInt(prompt("parcheme 6 numeritos todo bien."));
var numero5 = parseInt(prompt("parcheme 6 numeritos todo bien."));

var unionNum = new Array(numero0, numero1, numero2, numero3, numero4, numero5); 



var buscar = parseInt(prompt("que numero quieres saber si existe?", 0));

const resultado_busqueda = unionNum.findIndex(res => res == buscar);
if(resultado_busqueda && resultado_busqueda != -1){
    document.write(`el numero ${buscar} SI existe Mor! Que bueno. <br/>`);
    document.write(`está en la posicion ${resultado_busqueda}, como lo ves? <br/>`);
} else {
    document.write(`el numero ${buscar} No existe corazón, perdón. <br/>`);
};





unionNum.sort();


console.log(unionNum);
document.write(`numeros insertados ${unionNum} <br/> `) +
document.write(`el numero de caracteres inseratados son: ${unionNum.length}`);


