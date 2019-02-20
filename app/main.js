import nasaController from "./components/nasaController.js";





class App {
  constructor() {
    this.controllers = {
      nasaController: new nasaController()
    }
  }
}
window['app'] = new App()