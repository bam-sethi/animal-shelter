var express = require('express');
var path = require('path');
var debug = require("debug");
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

/////////// require file path with exports
var Animal = require('./models/animals')

//Mongo DB protocol
var moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/animalshelter');


//CONFIG
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


//DATA

var Obama = Animal({
  name: 'Obama',
  breed:
  dob:
  gender:
  family: 
  status:
})






////////ROUTES//////////////

//INDEX
app.get('/', function(req, res){
  //render animals index as json
  res.render('blah')
})





















// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(3000)