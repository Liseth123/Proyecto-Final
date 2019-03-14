new MVC.Controller({
  model: MVC.Model,
  view: MVC.View,
  contentElem: document.querySelector('#contact_form'),
  //endpoint:'./models/persona.json'
  endpoint:'http://localhost:8080/api/contactos'
});
//Instancias las clases que vas a utilizar
//controllerInst.eventHandler();
//controllerInst.init();
//controller.getData('./models/persona.json','contact_form');
//console.log(personaInst);
