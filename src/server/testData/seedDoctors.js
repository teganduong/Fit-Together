// to seed doctors table, do 'npm run seed' from root directory
const doctorsCtrl = require('../controllers/doctorsCtrl.js');

const exampleDoctorData = [
  {
    name: 'Doe, John',
    dob: '1956-03-12',
    office: '1450 Montgomery St, San Francisco, CA 94105',
    phone: '6087771234',
    sex: 'M'
  },
  {
    name: 'Williams, Bob',
    dob: '1966-05-10',
    office: '50 Powell St, San Francisco, CA 94104',
    phone: '6086653786',
    sex: 'M'
  },
  {
    name: 'Parks, Stephanie',
    dob: '1970-10-23',
    office: '100 Turk St, San Francisco, CA 94103',
    phone: '6089083467',
    sex: 'F'
  },
  {
    name: 'Smith, Hayley',
    dob: '1972-11-02',
    office: '4800 5th St, San Francisco, CA 94102',
    phone: '6088092158',
    sex: 'F' 
  }
];

// seeds doctors table with example data
exampleDoctorData.forEach((doctor, index) => {
  setTimeout(() => doctorsCtrl.addDoctor({body: doctor}, null), index * 200);
});

setTimeout(process.exit, exampleDoctorData.length * 200);