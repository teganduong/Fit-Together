var db = require('../db/config');
var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

var Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;