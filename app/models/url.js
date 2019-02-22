module.exports = class Url {
  constructor (mongoose) {
    this._Schema = mongoose.Schema;   
    
    return mongoose.model('Person', new this._Schema({
      id: Number,
      url: String
    }));
  }
}