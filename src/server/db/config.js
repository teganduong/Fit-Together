var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vital-health');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to mongodb'));
db.once('open', function() {
  console.log('connected to mongodb');
});

module.exports = db;