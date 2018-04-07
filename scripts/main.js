bouton_a_cacher.onclick = function() {
	document.getElementById("bouton_a_cacher").style.visibility = "hidden";
	document.getElementById("a_cacher").style.visibility = "visible";
}


function getURL () {
let saisie = document.querySelector("#input").value;
let url = "https://www.google.fr/#q=" + saisie;
open(url);
}

setTimeout(function () {
	alert ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please!");
}, 10000);
