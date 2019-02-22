module.exports = class AddNewUrl {
  constructor (url) {
    this._url = url;    
  }
  
  invoke (req, res) {
    console.log(this._url);
    res.json({awesome: true});
  }

}