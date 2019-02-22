module.exports = class AddNewUrl {
  constructor (url, validator) {
    this._url = url;    
    this._validator = validator;
  }
  
  invoke (req, res) {
    if (!this.valid(req.body.url)) {
      return res.json({error: 'invalid URL'});
    }
    
    this._url.create({url: req.body.url}, (err, data) => {
      if (err) {
        res.json({error: "can't write db"});
      }
      res.json({original_url: data.url, short_url: data.id});
    });
  }
  
  valid (url) {
    return this._validator.isURL(url);  
  }
}