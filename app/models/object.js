export default class Object {
  constructor(data) {
    this.name = data.name
  }


  grabTemplate() {
    return
    `
    <img src="${this.name}" alt="">
    `
  }
}