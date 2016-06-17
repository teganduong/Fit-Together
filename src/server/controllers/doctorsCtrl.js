const doctor = require('../models/doctors.js');

exports.getDoctors = (req, res) => {
  doctor.getDoctors((err, results) => {
    if (err) { console.error('Error in getting doctors: ', err); }
    res.json(results);
  });
};

exports.addDoctor = (req, res) => {
  doctor.addDoctor((err, results) => {
    if (err) { console.error('Error in adding doctor: ', err); }
    res.sendStatus(201);
  });
};