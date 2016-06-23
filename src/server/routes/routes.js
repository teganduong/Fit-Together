const express = require('express');
const router = express.Router();
// const patients = require('../controllers/patientsCtrl');
const doctors = require('../controllers/doctorsCtrl');
const users = require('../controllers/usersCtrl');

// router.get('/api/patients', patients.getPatients);
// router.post('/api/patients', patients.addPatient);
// router.post('/api/patients/:patientId', patients.updatePatientInfo);
// router.get('/api/doctors', doctors.getDoctors);
router.post('/api/doctors', doctors.addDoctor);
router.post('/api/users', users.addUser);

module.exports = router;
