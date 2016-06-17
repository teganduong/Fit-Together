const patients = require('../controllers/patientsCtrl.js');
const doctors = require('../controllers/doctorsCtrl.js');

module.exports = (app) => {
  app.get('/api/patients', patients.getPatients);
  app.post('/api/patients', patients.addPatient);
  app.post('/api/patients/:patientId', patients.updatePatientInfo);

  app.get('/api/doctors', doctors.getDoctors);
  app.post('/api/doctors', doctors.addDoctor);
};
