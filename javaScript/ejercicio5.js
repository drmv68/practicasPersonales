
var todos_los_div = document.getElementsByTagName('div');

//console.log(todos_los_div);

todos_los_div[0].style.background = "red";
todos_los_div[0].style.textAlign = "center";

var contenido_especifico = todos_los_div[2];

var valor;

for(valor in todos_los_div){
	var parr = document.createElement("p");
	var text = document.createTextNode(todos_los_div[valor].textContent);
	parr.append(text);
	document.querySelector("#contenedor").append(parr);
}

var rojo = document.getElementsByClassName("rojo");


var cambio_de_color;
for(cambio_de_color in rojo){
	if (rojo[cambio_de_color].className == "rojo") {
		rojo[cambio_de_color].style.background = "red";
	}
};



var amarillo = document.getElementsByClassName("amarillo");
var variableDondeGuarda;


for( variableDondeGuarda in amarillo){
	if (amarillo[variableDondeGuarda].className == "amarillo"){
		amarillo[variableDondeGuarda].style.background = "yellow";
	}
}



//POO

//CLASES es importante mor

// class Datos {
// 	constructor(nombre, apellido, edad, ciudad){
// 		this.nombre = nombre;
// 		this.apellido = apellido;
// 		this.edad = edad;
// 		this.ciudad = ciudad;
// 	}
// }

// const nuevosDatos = new Datos('daniel', 'mosquera', 18, 'medellín');
// console.log(nuevosDatos);



//se puede usar la extencion 'extends' para heredar variables de arriba a la nueva que vamos hacer...
// extends de datos y asi ereda todo.
//lo que quiera eredar lo pone en super() y las cosas que quiera eredar como solo nombre y apellido.
// y lo otro nuevo lo pone normal, mor.



// class Otros_datos_extra extends Datos{
// 	constructor(nombre, apellido, ciudad, materia){
// 		super(nombre, apellido, ciudad);
// 		this.materia = materia; //agregamos materia normal.
// 	}
// }

// const otros_datos = new Otros_datos_extra('daniel', 'mosquera', 'medellin', 'matematicas');
// console.log(otros_datos);




// //promesas
// //creo que al fin entendí esta mierda

// const mor = new Promise( (resolve, reject) => { //resolve es para algo que es verdad y reject algo que aun no es cierto o no es cierto del todo.
// 	const verdad = true;
// 	if(verdad){
// 		resolve('la variable "verdad" es true'); //el Promise se cumple
// 	} else {
// 		reject('la variable "verdad" es false'); // el Promise no se cumple
// 	}
// });

// //ahora, para poder ver los datos y no todo como un objeto en la consola debemos hacer lo siguiente:

// 																			mor //nos paramos sobre la variable
// /*y le agregamos el .then que dirá el resolve (o el primer "objeto")*/		.then( resultado_verdad => {console.log(resultado_verdad)}) //entonces, muestra la consola el primer campo y el console.log es para llamar el primer campo que lo definimos como resultado_verdad
// /*el .catch es para el segundo campo, trabajando sobre "mor"*/				.catch( segundo_campo_porSiEs_false => { console.log(segundo_campo_porSiEs_false)})			