window.onload = function() {
	document.getElementById("btnDiscreto").onclick = discreto;
}

function intrusivo() {
	//alert("Intrusivo");
	document.getElementById("info").innerHTML = "Intrusivo";
}

var discreto = function() {
	//alert("discreto");
	document.getElementById("info").innerHTML = "Discreto";
}