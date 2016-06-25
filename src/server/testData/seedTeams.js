// to seed teams table, do 'npm run seed' from root directory
const teamsCtrl = require('../controllers/teamsCtrl.js');
const exampleTeamData = [
  {
    user_id: 1,
    name: 'Bay Area Hikers',
    description: 'This group is for people who love to hike in the great outdoors'
  },
  {
    user_id: 2,
    name: 'Yoga and Pilates',
    description: 'Wanna stretch and be enlightened? This group is for you'
  },
  {
    user_id: 3,
    name: 'Weekend Bootcamp',
    description: 'Wanna exercise during the weekend? Meet likemided people just like you'
  }
];

const exampleUserTeamData = [
  {
    user_id: 1,
    team_id: 2
  },
  {
    user_id: 1,
    team_id: 3
  },
  {
    user_id: 2,
    team_id: 1
  },
  {
    user_id: 2,
    team_id: 3
  }
];

// find team and members given a user_id and team_id
// teamsCtrl.findTeam({ body: { user_id: 1, team_id: 1 } }, null);

// seeds teams table with example data
exampleTeamData.forEach((team, index) => {
  setTimeout(() => teamsCtrl.createTeam({ body: team }, null), index * 200);
});

// seeds users_teams table with example data
exampleUserTeamData.forEach((userTeam, index) => {
  setTimeout(() => teamsCtrl.addToTeam({ body: userTeam }, null), index * 200);
});

setTimeout(process.exit, exampleTeamData.length * 200);
