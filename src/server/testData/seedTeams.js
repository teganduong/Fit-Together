// to seed teams table, do 'npm run seed' from root directory
const teamsCtrl = require('../controllers/teamsCtrl.js');
const exampleTeamData = [
  {
    name: '',
    description: ''
  },
  {
    name: '',
    description: ''
  },
  {
    name: '',
    description: ''
  },
  {
    name: '',
    description: ''
  }
];

// finds a team and members of team given user_id 
usersCtrl.findTeam({ body: { user_id: 1234 } }, null);

// seeds teams table with example data
exampleTeamData.forEach((team, index) => {
  setTimeout(() => teamsCtrl.createTeam({ body: team }, null), index * 200);
});

setTimeout(process.exit, exampleUserData.length * 200);