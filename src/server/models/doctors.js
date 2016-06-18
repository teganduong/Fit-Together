const db = require('../db/connection.js');

exports.getDoctors = (callback) => {
  const queryStr = 'select * from doctors';
  console.log('I M getDoctor!!!', queryStr, params);

  db.any(queryStr, (err, results) => {
    callback(err, results);
  });
};

exports.addDoctor = (params, callback) => {
  const queryStr = 'insert into doctors(name, dob, office, phone, sex) values ($1, $2, $3, $4, $5)';
  db.any(queryStr, params, function(err, results) {
    callback(err, results);
  });
};