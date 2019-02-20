import Object from "../models/object.js";
// @ts-ignore
let _objectApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=mIYetYxK8SIlUwY6chV7GvPoguenJxbzXFGyo2DK'
})

let _state = {
  object: []
}
let _subscribers = {
  object: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn())
}




export default class nasaService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Object() {
    return _state.object.map(o => new Object(o))
  }

  getAllObjects(url = '') {
    _objectApi.get(url)
      .then(response => {
        let object = response.data
        setState('object', object)
      })
      .catch(err => {
        console.error(err)
      })
  }
}