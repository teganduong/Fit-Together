const patientsCtrl = require('../controllers/patientsCtrl.js');

const examplePatientData = [
  {
    name: 'Smith, Jennifer',
    dob: '1978-07-12',
    sex: 'F',
    address: '140 New Montgomery St, San Francisco, CA 94105',
    phone: '6087771234',
    email: 'jennifersmith@gmail.com',
    ssn: 276341234 
  },
  {
    name: 'Thomas, Dan',
    dob: '1962-09-17',
    sex: 'M',
    address: '3414 22nd St, San Francisco, CA 94110',
    phone: '4157771234',
    email: 'thomasdan22@gmail.com',
    ssn: 276671234 
  },
  {
    name: 'James, Annie',
    dob: '1987-07-12',
    sex: 'F',
    address: '501 Twin Peaks Blvd, San Francisco, CA 94114',
    phone: '2067771200',
    email: 'ajames12@gmail.com',
    ssn: 276341224 
  },
  {
    name: 'Morgan, Tawnie',
    dob: '1977-03-12',
    sex: 'F',
    address: '484 Ellis St, San Francisco, CA 94102',
    phone: '9257775700',
    email: 'morgant@gmail.com',
    ssn: 276661224 
  }
];

// seeds patients table with example data
examplePatientData.forEach((patient, index) => {
  setTimeout(() => patientsCtrl.addPatient({ body: patient }, null), index * 200);
});

setTimeout(process.exit, examplePatientData.length * 200);
