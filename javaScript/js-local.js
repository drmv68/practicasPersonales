var formularioBorrar = document.querySelector("#formularioBorrar");
var formulario = document.querySelector("#formulario");
var div = document.querySelector("#div");


formulario.addEventListener('submit', ()=>{
	var borrar = document.querySelector("#formularioBorrar").value
	var datos = document.querySelector("#inPut").value;
	if (datos.length >= 1) {
		localStorage.setItem(datos, datos);
	}
});

for(let i in localStorage){
	if(typeof localStorage[i] == "string")	{
		var li = document.createElement('li');
		li.append(localStorage[i]);
		div.append(li);
	}
};






formularioBorrar.addEventListener('submit', ()=>{
	var borrar = document.querySelector("#inPutBorrar").value
	if(borrar.length >=1)	{
				localStorage.removeItem(borrar);
				}
			});