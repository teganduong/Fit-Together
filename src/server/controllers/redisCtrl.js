const db = require('../db/connection.js');

const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = redis.createClient('6379', 'localhost');

client.on('error', (err) => {
  console.log('Error:', err);
});

// Current redisCopyTeams
// query Postgres to get all teams
// save array of teams in a hash (hmset) by team_id in Redis --> .hmsetAsync(team_id:xx:, team_obj)
exports.redisCopyTeams = (req, res) => {
  db.query('select * from teams')
    .then((data) => {
      data.forEach((team) => {
        client.hmsetAsync('team_id:' + team.id + ':', {
          name: team.name,
          description: team.description,
          team_icon: team.team_icon
        });
      });
    })
    .then(() => console.log('successfully added all teams to redis'))
    .catch((err) => console.log('error in sending to redis', err));
};

// Current getUserTeams
// query Postgres to get all team_id's for given user
// save array of team_id's in a unsorted set (sadd) in Redis --> .saddAsync(user_id:xx:yes:, value)
// query sadd by user_id --> .smembersAsync(user_id:xx:yes:)
// use multi (transaction) to make multiple queries --> input (array of team_id's), output (array of team objects)
// send response to specified route
exports.getUserTeams = (req, res) => {
  db.query('select team_id from users_teams where user_id=${user_id}', req.body)
    .then((data) => {
      console.log('data', data);
      data.forEach((team) => {
        console.log('id', team.team_id);
        client.saddAsync('user_id:' + req.body.user_id + ':yes:', team.team_id);
      });
    })
    .then(() => client.smembersAsync('user_id:' + req.body.user_id + ':yes:'))
    .then((data) => {
      console.log('unordered set', data); // unordered set of team ids
      const keys = data.map((key) => 'team_id:' + key + ':');
      console.log('keys', keys);
      let multi = client.multi({ pipeline: false });
      keys.forEach((key, index) => {
        multi = multi.hgetall(key);
      });
      return multi.execAsync();
    })
    .then((data) => {
      console.log('rep', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'successfully retrieved user\'s teams'
        });
    })
    .catch((err) => console.log('error in retrieving user teams', err));
};

// Current getOtherTeams
// query Postgres to get all team_id's not from give user
// save array of team_id's in a unsorted set (sadd) in Redis --> .saddAsync(user_id:xx:no:, value)
// query sadd by user_id --> .smembersAsync(user_id:xx:no:)
// use multi (transaction) to make multiple queries --> input (array of team_id's), output (array of team objects)
// send response to specified route

exports.getOtherTeams = (req, res) => {
  db.query('select team_id from users_teams where user_id!=${user_id}', req.body)
    .then((data) => {
      console.log('data', data);
      data.forEach((team) => {
        console.log('id', team.team_id);
        client.saddAsync('user_id:' + req.body.user_id + ':no:', team.team_id);
      });
    })
    .then(() => client.smembersAsync('user_id:' + req.body.user_id + ':no:'))
    .then((data) => {
      console.log('unordered set', data); // unordered set of team ids
      const keys = data.map((key) => 'team_id:' + key + ':');
      console.log('keys', keys);
      let multi = client.multi({ pipeline: false });
      keys.forEach((key, index) => {
        multi = multi.hgetall(key);
      });
      return multi.execAsync();
    })
    .then((data) => {
      console.log('rep', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'successfully retrieved other teams'
        });
    })
    .catch((err) => console.log('error in retrieving user teams', err));
};

// get other teams
// save all teams user is not part of ---> user_id:XX:no: using a unordered set (sadd) --> can remove and add
// ------> iterate through the set of team_ids to get the corresponding team using hmget

// join team
// -----given a user id, team_id --> add to users_teams table
// -----add team_id to :yes sadd 
// create new team
//-----given a user id, team --> add to users_teams and team table
//----- add team to hash using hmset, add team_id to :yes sadd

// add team members to a team to a unsorted set ---> sadd



