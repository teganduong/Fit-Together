const doctor = require('../models/doctors.js');

exports.getDoctors = (req, res) => {
  doctor.getDoctors((err, results) => {
    if (err) { console.error('Error in getting doctors: ', err); }
    res.json(results);
  });
};