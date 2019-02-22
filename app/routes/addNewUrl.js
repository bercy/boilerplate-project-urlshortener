module.exports = class AddNewUrl {
  constructor (url, validator) {
    this._url = url;    
    this._validator = validator;
  }
  
  invoke (req, res) {
    if (this.valid(req.body.url)) {
        {"error":"invalid URL"}
    }
    console.log(this._url);
    res.json({awesome: true});
  }
  
  valid (url) {
    return this._validator.isUrl(url);  
  }

}