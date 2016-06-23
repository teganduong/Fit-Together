const db = require('../db/connection.js');

// insert a new team
exports.createTeam = (req, res) => {
  db.none('insert into teams(name, description)' + 
      'values(${name}, ${description}', req.body)
    .then(() => {
      console.log('Successly inserted team');
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

// Find a team and members given a user_id
// [1] Given a user_id --> get the team_id from the users_teams table --> return team_id
// [2] Given a team_id --> get the team from the team table --> return team
// [3] Given a team_id --> get all user_id's of the team except for current user_id --> return array of users_id's
// [4] Given an array of the user_id's --> get all the users ---> return array of users 
// [5] Should send the team and array of users in the response
exports.findTeam = (req, res) => {
  db.query('select team_id from users_teams where user_id=${user_id}', req.body)
    .then((teamId) => {
      return db.query('select * from teams where team_id=${team_id}', teamId);
    })
    .then((teamObj) => {
      return db.query('select * from users_teams where team_id=${team_id}', teamObj.team_id);
    })
    .then((userIds) => {
    	db.query('')
    })
    .catch((err) => {
    	console.log('Error:', err);
    });
};


