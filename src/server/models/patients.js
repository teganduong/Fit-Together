const db = require('../db/connection.js');

exports.getPatients = (callback) => {
  const queryStr = 'select * from patients';
  db.any(queryStr, (err, results) => {
    callback(err, results);
  });
};

exports.addPatient = (params, callback) => {
  const queryStr = 'insert into patients(name, dob, phone, address, ssn, email, sex) values ($1, $2, $3, $4, $5, $6, $7)';
  db.any(queryStr, params, (err, results) => {
    callback(err, results);
  });
};
