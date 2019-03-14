MVC.View =class View {

  constructor(elem) {
    this.elem = elem;

  }

  updateView(datos){
    for (let key in datos){

		const nodefields = document.querySelectorAll(`[name='${key}']`);

			if(nodefields.length > 1){
			const	fields = Array.from(nodefields);

			const correctField = fields.find(elem =>{
				return elem.value === datos[key];
			});

				correctField.checked = true;
				//Recorre solo los campos del formuario
			} else if (nodefields.length > 0){
				nodefields[0].value = datos[key];

      }
    }
  }
}
