const MVC ={

  Model: class Persona {}
  View: class View{}
  Controller: class Controller {}

};

new MVC.Controller({
  model: MVC.Model,
  view: MVC.View,
  contentElem: document.querySelector('#contact_form'),
  endpoint:'./models/persona.json'
});

const MVC = {};
MVC.Model = class Persona{....};
MVC.View = class View{....};
MVC.Controller = class Controller{...};

new MVC.Controller({
  model: MVC.Model,
  view: MVC.View,
  contentElem: document.querySelector('#contact_form'),
  endpoint:'./models/persona.json'
});
