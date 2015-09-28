var express = require('express');
var path = require('path');
var debug = require("debug");
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

/////////// require file path ith exports
var Animal = require('./models/animals')

//Mongo DB protocol
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animalshelter');


//CONFIG
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views/layout.ejs'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


//DATA

var gazza = Animal({
  name: 'Gazza',
  breed: 'Colly',
  dob: 23/12/1989,
  gender: 'bi-sexual',
  family: 'dog',
  status: 'orphan',
  createdAt: new Date,
  updateAt: new Date
});

gazza.save(function(err, animal){
  if(err) console.log(err);
  console.log('Gazza has been created');
});


var kane = Animal({
  name: 'Harry Kane',
  breed: 'Tabby',
  dob: 1921-12-3,
  gender: 'boy',
  family: 'cat',
  status: 'adopted',
  createdAt: new Date,
  updateAt: new Date
});

kane.save(function(err, animal){
  if(err) console.log(err);
  console.log('Harry Kane has been created');
});

var pantimolean = Animal({
  name: 'Pantimolean',
  breed: 'xx',
  dob: 2067-12-3,
  gender: 'post gender',
  family: 'Deamon',
  status: 'orphan',
  createdAt: new Date,
  updateAt: new Date
});

pantimolean.save(function(err, animal){
  if(err) console.log(err);
  console.log('Pantimolean has been created');
});


////////ROUTES//////////////

//INDEX
app.get('/', function (req, res){
  // var all = db.animalshelter.find()  
  var animals = Animal.find();
  // res.json(animals);
  res.render('animal', animals);
  console.log(req.body);

});


// CREATE

app.post('/animals', function (req, res) {
  console.log(req.body);
  var newAnimal = req.body;
  

});




Animal.find({}, function(err, animals) {
  if (err) console.log(err);
  console.log(animals);
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