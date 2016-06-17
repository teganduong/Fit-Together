const doctor = require('../models/doctors.js');

exports.getDoctors = (req, res) => {
  doctor.getDoctors((err, results) => {
    if (err) { console.error('Error in getting doctors: ', err); }
    res.json(results);
  });
};

exports.addDoctor = (req, res) => {
  const params = [req.body.name, req.body.dob, req.body.office, req.body.phone, req.body.sex];
  doctor.addDoctor(params, (err, results) => {
    if (err) { console.error('Error in adding doctor: ', err); }
    res.sendStatus(201);
  });
};
