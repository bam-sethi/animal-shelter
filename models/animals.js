var mongoose = require('mongoose');

//schemaaaaa


var animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  dob: Date,
  gender: String,
  family: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
})

var Animal = mongoose.model('Animal', animalSchema)

//export, make this model accesible to app.js
module.exports = Animal;
