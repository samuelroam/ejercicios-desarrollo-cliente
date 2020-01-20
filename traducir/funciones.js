//Al cargar la página, recoge el valor de la variable de sesión, y dependiendo de cual sea
//llama a una funcion u otra para cambiar el idioma
window.onload = function (){
	$(document).ready(function(){
		if(localStorage.getItem('translate')=='es'){
            cambiaresp()
		}else if(localStorage.getItem('translate')=='en'){
            cambiaraingles()
		}else if(localStorage.getItem('translate')=='it'){
            cambiarita()
		}
    })
}
