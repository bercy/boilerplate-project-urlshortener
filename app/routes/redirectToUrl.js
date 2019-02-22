module.exports = class RedirectToUrl {
  constructor (url) {
    this._url = url;    
  }
  
  invoke (req, res) {
    this._url.findById(req.params.id, (err, data) => {
      if (err) {
        res.json({error: "did not find url with this id"});
      }
      res.json({original_url: data.url, short_url: data.id});
    });
  }
}