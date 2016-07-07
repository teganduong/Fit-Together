// to seed location table, do 'npm run seed' from root directory
const usersCtrl = require('../controllers/usersCtrl.js');
const exampleLocationData = [
  
];


exampleLocationData.forEach((user, index) => {
  setTimeout(() => usersCtrl.addUser({ body: user }, null), index * 200);
});

setTimeout(process.exit, exampleLocationData.length * 200);
