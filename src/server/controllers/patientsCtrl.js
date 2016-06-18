const db = require('../db/connection.js');

exports.getPatients = (req, res) => {
  db.any('select * from patients')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL patients'
        });
    })
    .catch((err) => {
      console.error('error in retrieving patients: ', err);
    });
};

exports.addPatient = (req, res) => {
  db.none('insert into patients(name, dob, phone, address, ssn, email, sex)' +
      'values(${name}, ${dob}, ${phone}, ${address}, ${ssn}, ${email}, ${sex})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted patient into db'
        });
    })
    .catch((err) => {
      console.error('error in adding patient: ', err);
    });
};
