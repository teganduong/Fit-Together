const db = require('../db/connection.js');

// Add activity from User Profile / Dashboard

// insert activity in daily_activities table, select the daily_activities_id from table, insert dl_id and user_id to join table

exports.addActivity = (req, res) => {
  db.none('insert into daily_activities(type, description, date_performed, count)' + 
      'values(${type}, ${description}, ${date_performed}, ${count})', req.body)
    .then(() => {
      console.log('Successly inserted daily activity');
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

