$(document).ready(function(){
var tituloCaja = $("#titulo_caja");
	//mouseOver mouseOut

	tituloCaja.mouseover(function() {
		var that = $(this);
			that.css('background', 'red');
	});


	//focus mor and blur

	var Valor_data = $("#nombre");
	var dat = $("#datos");

	dat.focus(function() {
		$(this).css("border", "9px solid green");
	});

	Valor_data.blur(function() {
	//var datos1 = $("datos");
	$('this').css('border', '1px solid #900');
	$("#datos").text($(this).val()).show();	
	});
	

});