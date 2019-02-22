module.exports = class AddNewUrl {
  constructor (name) {
    this._name = name;    
  }
  
  sayHi () {
    return this._name;
  }
}