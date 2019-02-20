export default class Object {
  constructor(data) {
    this.url = data.url
  }


  grabTemplate() {
    return `
     <img src="${this.url}" alt="">
    `
  }
}