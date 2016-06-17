const patient = require('../models/patients.js');

exports.getPatients = (req, res) => {
  patient.getPatients((err, results) => {
    if (err) { console.error('Error in getting patients: ', err); }
    res.json(results);
  });
};

exports.addPatient = (req, res) => {
  const params = [req.body.name, req.body.dob, req.body.phone, req.body.address, req.body.ssn, req.body.email, req.body.sex];
  patient.addPatient(params, (err, results) => {
    if (err) { console.error('Error in adding patient: ', err); }
    res.sendStatus(201);
  });
};
