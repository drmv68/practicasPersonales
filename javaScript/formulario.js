"use strict"

window.addEventListener('load', function(){
	console.log("DOM CARGADIÑO");

	var enviar = document.querySelector(".formulario");

	var div = document.querySelector(".div");

		enviar.addEventListener('submit', function(){
			var nombre = document.querySelector(".datosCliente1").value;
			var apellido = document.querySelector(".datosCliente2").value;
			var edad = document.querySelector(".datosCliente3").value;

				var datosEscritosString = [nombre, apellido, edad];	
				for(var i in datosEscritosString){
				let resultados =  document.createElement('p');
				resultados.append(datosEscritosString[i]);
				div.append(resultados);
			 }
		})

})

