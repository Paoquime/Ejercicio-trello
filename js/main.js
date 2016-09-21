window.addEventListener("load", function() {
	var notaUno = document.getElementById("nota-inicial");
	var notaDos = document.getElementById("nota");

	notaUno.addEventListener("click", function(){
		mostrarInput(notaDos);
	});

	function mostrarInput(notaDos){
		notaDos.style = "block";
	}

});