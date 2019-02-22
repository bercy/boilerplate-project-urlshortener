'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var AddNewUrl = require('./app/routes/addNewUrl');
var Url = require('./app/models/url');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

app.use(cors());

/** this project needs to parse POST bodies **/
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post('/api/shorturl/new', function (req, res) {
  
  var Person = new Url(mongoose);
  
  res.json({hi: 'j'});
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});