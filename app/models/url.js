module.exports = class Url {
  constructor (Schema) {
    this._Schema = Schema;   
    
    var personSchema = new Schema({
      name: {
        type: String,
        required: [true, 'Why no name?']
      },
      age: Number,
      favoriteFoods: [String]
    });


  var Person = mongoose.model('Person', personSchema);
  }
  




}