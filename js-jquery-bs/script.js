
// class  https://robertnyman.com/2008/10/14/javascript-how-to-get-private-privileged-public-and-static-members-properties-and-methods/

//http://www.variablenotfound.com/2011/12/funciones-constructoras-en-javascript.html


    function usuario(nombre, fecha) {
 
        //Propiedades privadas
        var edad;
 
        //Métodos privados
        var calcularEdad = function() {
            var actual = new Date().getFullYear();
            var nacimiento = fecha.getFullYear();
 
            if (actual <= nacimiento)
                edad = "Error: no se ha podido calcular";
            else
                edad = actual - nacimiento;
            	
        };
 
        //Propiedades públicas
        this._nombre = nombre;
        this._fechaNacimiento = fecha;
        this._edad = edad;
 
        //Métodos públicos
        this._presentarse = function() {
            calcularEdad();
            var result = "Hola, mi nombre es "+ nombre +" y tengo " + edad + " años"
            var estilo = $("#mostrarResultado").css('background', 'yellow');
 			mostrarResultados(result, estilo);
        };
    }

$(document).ready(function(){
	$("#btn_calcular_edad").click(function() {

	var nombre = $("#name").val();
	var fecha_nacimiento = $("#fecha_nacimiento").val();

    var user = new usuario(nombre, new Date(fecha_nacimiento));
	});
});

/*$(document).ready(function(){
	$("#btn_azul").on('click','li',function (){
	    $("#mostrarResultado").text($(this).text());
	    $("#mostrarResultado").css('background', 'blue');
	});
});*/

$(document).ready(function(){
	$("#btn_azul").click(function() {
        var estilo = $("#mostrarResultado").css('background', 'blue');
        var result = $("#thing1").text();
        limpiarTextArea();
        mostrarResultados(result,estilo);
	});
});
$(document).ready(function(){
	$("#btn_rojo").click(function() {
        var estilo = $("#mostrarResultado").css('background', 'red');
        var result = $(".special").text()
        limpiarTextArea();
        mostrarResultados(result,estilo);
	});
});

$(document).ready(function(){
	$("#btn_verde").click(function() {         
        var estilo = $("#mostrarResultado").css('background', 'green');
        var result = $('span').text();
        limpiarTextArea();
        mostrarResultados(result,estilo);
	});
});

$(document).ready(function(){
	$("#btn_amarillo").click(function() {
		$("#mostrarResultado").css('background', 'yellow');
                var result = $("#thing1").text();
                $(".special").text(result);
	});
});

$(document).ready(function(){
	$("#btn_rosado").click(function() {		
        var estilo = $("#mostrarResultado").css('background', '#FF00FF');
        var result = $('#languages > li').text();
        limpiarTextArea();
        mostrarResultados(result,estilo);        
	});
});

var mostrarResultados = function(texto, estilo) {
	$("#mostrarResultado").text(texto);
}

var limpiarTextArea = function(){
    $("#mostrarResultado").text("");
}