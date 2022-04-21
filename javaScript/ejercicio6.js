"use strict"
var boton = document.querySelector("#boton");

function cambioDeColor(){
	console.log("cliqueado")
	var bg = boton.style.background;
	if(bg == "red"){
		boton.style.background = "green";
	} else {
		boton.style.background = "red";
	}
	return true;
};

boton.style.margin = "20px";
boton.style.padding = "15px";
boton.style.fontSize  = "44px";

//click
boton.addEventListener('click', function(){
	cambioDeColor();
});

//mause hover xD

boton.addEventListener('mouseover', function(){
	boton.style.background = "#888"
});

//mouse out
boton.addEventListener('mouseout', function(){
	boton.style.background = "#444"
});

//focus

