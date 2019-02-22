'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var validator = require('validator');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

// static files
app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  

let Url = mongoose.model('Url', new mongoose.Schema({
  url : {type: String, required: true}
}));

app.post('/api/shorturl/new', (req, res) => {
  if (!validator.isURL(req.body.url)) {
      return res.json({error: 'invalid URL'});
  }
    
  Url.create({url: req.body.url}, (err, data) => {
    if (err) {
      return res.json({error: "can't write db"});
    }
    
    res.json({original_url: data.url, short_url: data.id});
  });
});


app.get('/api/shorturl/:id', (req, res) => {
  Url.findById(req.params.id, (err, data) => {
    if (err) {
      return res.json({error: "did not find url with this id"});
    }

    res.redirect(data.url);
  });
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});