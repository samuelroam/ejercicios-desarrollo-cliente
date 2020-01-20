

var translator = $('body').translate({lang: "es", t: dict});
	var dict={
		"titulo": {
			es: "Hola, soy el titulo 1",
			en: "Hi, im title 1",
			it: "Ciao, sono il titolo 1"
		},
		"texto principal": {
			es: "No estoy entendiendo esta parte de la asignatura",
			en: "Im not understanding this point of the class",
			it: "Non capisco questa parte dell'argomento"
		},
		"correccion": {
			es: "Vale, por ahora ya me funciona",
			en: "Ok, this is working now",
			it: "Ok, per ora funziona"
		},
		"aclaracion": {
			es: "No hablo euskera, asi que me salto esa parte, pero quizá lo haga en otro idioma",
			en: "I dont speak basque, so im skipping this part, but maybe i will do it in otrer language",
			it: "Non parlo basco, quindi salto quella parte, ma forse lo faccio in un'altra lingua"
		},
		"tardio": {
			es: "La base es de un ejercicio hecho hace tiempo, cuando empezamos con el tema de traducción",
			en: "The basis is an exercise done long ago, when we started with the translation issue",
			it: "La base è un esercizio fatto molto tempo fa, quando abbiamo iniziato con il problema della traduzione"
		}

	}
//las funciones cambian el idioma y la variable de sesión, que se utilizará en funciones.js

	function cambiaraingles(){
		var translator = $('body').translate({lang: "en", t: dict});
		translator.lang("en");
		localStorage.setItem('translate','en');
	}
	function cambiaresp(){
		var translator = $('body').translate({lang: "es", t: dict});
		translator.lang("es");
		localStorage.setItem('translate','es');
	}
	function cambiarita(){
		var translator = $('body').translate({lang: "it", t: dict});
		translator.lang("it");
		localStorage.setItem('translate','it');
	}