$(document).ready(()=>{

	//selector ID

	var rojo = $("#rojo").css("background", "red");
	var amarillo = $("#amarillo").css("background", "yellow");
	var verde = $("#verde").css("background", "green");

	//class

	var nuevoXD = $(".nuevoXD");

	nuevoXD.click(function() {
		nuevoXD.css("color", "blue");	
	});


	//etiqueta.
	var p = $('p');

	p.css('cursor', 'pointer');
	p.click(function() {
		var esto = $(this);
			if (!esto.hasClass('grande')) {
		 	esto.addClass('grande');
			} else {
				esto.removeClass('grande');
			}
			
	});

})