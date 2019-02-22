module.exports = class Url {
  constructor (mongoose) {
    return new mongoose.model('Url', new mongoose.Schema({
      url : {type: String, required: true}
      //index : {type: Number, required: true}
    }));
  }
}