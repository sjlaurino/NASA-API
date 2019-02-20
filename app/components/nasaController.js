import nasaService from "./nasaService.js";

let _nasaService = new nasaService()


function drawObject() {
  let object = _nasaService.Object
  let template = ''
  object.forEach(o => {
    template += o.grabTemplate
  })
  document.querySelector('.object').innerHTML = template

}




export default class nasaController {
  constructor() {
    _nasaService.addSubscriber('object', drawObject)
  }
}