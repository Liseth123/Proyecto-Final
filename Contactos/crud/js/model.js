MVC.Model =  class Persona {
	constructor(endpoint, elem) {

		const request =  new XMLHttpRequest();

		request.open('GET',endpoint,true);

	  request.addEventListener('load',()=>{

	    if(request.status ===200){
				console.log(status);
				const onloadData = new CustomEvent("onLoadData",{ detail: JSON.parse(request.responseText), bubbles: true});
	      		elem.dispatchEvent(onloadData);

	    }else{
	      console.error(request.statusText);
	    }
	  });
		request.addEventListener('error',()=>{
	    console.log("Algun error de la red");
	  });
	  request.send(null);

	}
}

	/*	fetch(endpoint)
		.then(response => {
			return response.json();
			//manda valores al otro evento
		})

		.then(json => {
		const onloadData = new CustomEvent("onLoadData",{detail: json, bubbles: true});
		//dispara los valores
				elem.dispatchEvent(onloadData);
				})
				.catch(console.log)
			}
		}













		/**const elem = document.getElementById(idElem);
		//this.endpoint = endpoint;
		//disparar el evento y con document escuchamos
//const form= document.getElementById('contact_form');
	Llamada asincrona



/** @TODO: Almacenar las personas que enviamos desde el
formuario e imprimirlo en la consola
class Envios {
	constructor() {
		this.people = []
	}
} */
