module.exports = class Url {
  constructor (mongoose) {
    this._Schema = mongoose.Schema;   
    
    var personSchema = new this._Schema({
      name: {
        type: String,
        required: [true, 'Why no name?']
      },
      age: Number,
      favoriteFoods: [String]
    });


    return mongoose.model('Person', personSchema);
  }
}