
// class  https://robertnyman.com/2008/10/14/javascript-how-to-get-private-privileged-public-and-static-members-properties-and-methods/

//http://www.variablenotfound.com/2011/12/funciones-constructoras-en-javascript.html


    function Cliente(nombre, fecha) {
 
        //Propiedades privadas
        var edad;
 
        //Métodos privados
        var calcularEdad = function() {
            var actual = new Date().getYear();
            var nacimiento = fecha.getYear();
 
            if (actual <= nacimiento)
                edad = "Error: no se ha podido calcular";
            else
                edad = actual - nacimiento;
        };
 
        //Propiedades públicas
        this._nombre = nombre;
        this._fechaNacimiento = fecha;
        this._edad = edad;
        this._direccion = direccion;
 
        //Métodos públicos
        this._presentarse = function() {
            calcularEdad();
 
            document.write(
                "Hola, mi nombre es " + this._nombre + 
                " y tengo " + this._edad + " años."
            );
        };
    }




    function Constructor(msjPrivado, msjPublico) {
 
        var propiedadPrivada = msjPrivado;
        this.propiedadPublica = msjPublico;
 
        var metodoPrivado = function () {
            alert(propiedadPrivada);
            alert(this.propiedadPublica);
        };
 
        this.metodoPublico = function () {
            metodoPrivado();
        };
    }
 
    var obj = new Constructor("mensaje privado", "mensaje público");
    obj.metodoPublico();










$(document).ready(function(){
	$("#btn_calcular_edad").click(function() {
	  $("#mostrarResultado").text(new Date());
	  mostrarResultados("hola","");
	});
});

var mostrarResultados = function(texto, estilo) {
	alert(texto);
}