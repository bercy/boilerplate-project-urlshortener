module.exports = class AddNewUrl {
  constructor (url, validator) {
    this._url = url;    
    this._validator = validator;
  }
  
  invoke (req, res) {
    if (!this.valid(req.body.url)) {
      return res.json({error: 'invalid URL'});
    }
    
    this._url.create({url: req.body.url}, (err, small) => {
      if (err) return handleError(err);
      // saved!
    });
    
    res.json({awesome: true});
  }
  
  valid (url) {
    return this._validator.isURL(url);  
  }
}