window.addEventListener("load", function() {
	var notaUno = document.getElementById("nota-inicial");
	var notaDos = document.getElementById("nota");
	var boton = document.getElementById("boton")

	notaUno.addEventListener("click", function(e){
		mostrarInput(notaDos);
	});

	function mostrarInput(notaDos){
		notaDos.style.display = "block";
		boton.style.display =  "block";
	}

});