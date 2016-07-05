// to seed teams table, do 'npm run seed' from root directory
const teamsCtrl = require('../controllers/teamsCtrl.js');
const exampleTeamData = [
  {
    user_id: 1,
    name: 'Bay Area Hikers',
    description: 'This group is for people who love to hike in the great outdoors',
    team_icon: 'http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/0410-youcan-hiking-0008.jpg'
  },
  {
    user_id: 1,
    name: 'Yoga and Pilates',
    description: 'Wanna stretch and be enlightened? This group is for you',
    team_icon: 'http://www.pilatesstyle.com/wp-content/uploads/2016/03/pilates-mental-health.jpg'
  },
  {
    user_id: 1,
    name: 'Weekend Bootcamp',
    description: 'Wanna exercise during the weekend? Meet likemided people just like you',
    team_icon: 'http://fitnessworkoutideas.com/wp-content/uploads/2014/06/fitness-workout-ideas-group-fitness-games.jpg'
  },
  {
    user_id: 1,
    name: 'Eat Healthy with Me',
    description: 'I eat healthy, you eat healthy, we all eat healthy',
    team_icon: 'http://www.slt2008.org/wp-content/uploads/2014/02/aa-Healthy-Eating.jpg'
  },
  {
    user_id: 1,
    name: '30 Day Ab Challenge',
    description: 'Test yourself by doing different exercises that stimulate the abs everyday',
    team_icon: 'http://cdn-img.health.com/sites/default/files/styles/400x400/public/migration/img/web/2013/01/slides/no-crunch-abs-400x400.jpg?itok=ekwIZz_c'
  },
  {
    user_id: 1,
    name: '31 Day Yoga Challenge',
    description: 'Challenge yourself and get in touch with your inner yogi this month',
    team_icon: 'http://www.healthymonadnock.org/wp-content/uploads/2014/07/yoga-pose.jpg'
  },
  {
    user_id: 2,
    name: 'Walk and Talk',
    description: 'This group is for people who love to hike in the great outdoors',
    team_icon: 'http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/0410-youcan-hiking-0008.jpg'
  },
  {
    user_id: 2,
    name: 'Let\'s stretch',
    description: 'Wanna stretch and be enlightened? This group is for you',
    team_icon: 'http://www.pilatesstyle.com/wp-content/uploads/2016/03/pilates-mental-health.jpg'
  },
  {
    user_id: 2,
    name: 'Swoler Bears United',
    description: 'Wanna exercise during the weekend? Meet likemided people just like you',
    team_icon: 'http://fitnessworkoutideas.com/wp-content/uploads/2014/06/fitness-workout-ideas-group-fitness-games.jpg'
  },
  {
    user_id: 2,
    name: 'Yum Yum in my Tum',
    description: 'I eat healthy, you eat healthy, we all eat healthy',
    team_icon: 'http://www.slt2008.org/wp-content/uploads/2014/02/aa-Healthy-Eating.jpg'
  }
];

const exampleUserTeamData = [
  {
    user_id: 2,
    team_id: 1
  },
  {
    user_id: 2,
    team_id: 2
  },
  {
    user_id: 2,
    team_id: 3
  },
  {
    user_id: 2,
    team_id: 4
  },
  {
    user_id: 3,
    team_id: 1
  },
  {
    user_id: 3,
    team_id: 2
  },
  {
    user_id: 3,
    team_id: 3
  },
  {
    user_id: 3,
    team_id: 4
  },
  {
    user_id: 4,
    team_id: 1
  },
  {
    user_id: 4,
    team_id: 2
  },
  {
    user_id: 4,
    team_id: 3
  },
  {
    user_id: 4,
    team_id: 4
  }
];

// add members in postgres cli
// INSERT INTO users_teams (user_id, team_id) VALUES ((select id from users where id=2), (select id from teams where id=1));

// find team and members given a user_id and team_id
// teamsCtrl.findTeam({ body: { user_id: 1, team_id: 1 } }, null);

// seeds teams table with example data
exampleTeamData.forEach((team, index) => {
  setTimeout(() => teamsCtrl.createTeam({ body: team }, null), index * 200);
});

// seeds users_teams table with example data
// exampleUserTeamData.forEach((userTeam, index) => {
//   setTimeout(() => teamsCtrl.addToTeam({ body: userTeam }, null), index * 200);
// });

setTimeout(process.exit, exampleTeamData.length * 200);
