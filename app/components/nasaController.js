import nasaService from "./nasaService.js";

let _nasaService = new nasaService()


function drawObject() {
  let nasaAPOD = _nasaService.Object
  let template = ''
  // object.forEach(o => { DONT NEED FOR EACH. ONLY ONE OBJECT
  template += nasaAPOD.grabTemplate()
  // })
  document.querySelector('.object').innerHTML = template

}




export default class nasaController {
  constructor() {
    _nasaService.addSubscriber('object', drawObject)
    _nasaService.getAllObjects()
  }
  getObject(url) {
    _nasaService.getAllObjects(url)
  }
}