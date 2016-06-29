const db = require('../db/connection.js');

// Insert a new daily_activity given a user_id and daily_activity
// [1] Given a daily_activity --> insert into the daily_activity table --> return daily_activity_id
// [2] Given a user_id and daily_activity_id --> insert into the users_daily_activities table
exports.addActivity = (req, res) => {
  db.one('insert into daily_activities(type, category, description, date_performed, ' +
      'count, units) values(${type}, ${category}, ${description}, ${date_performed}, ' +
      '${count}, ${units}) returning id', req.body)
    .then((activityId) => {
      const userActivity = {
        user_id: req.body.user_id,
        daily_activity_id: activityId.id
      };
      console.log('Successly inserted daily activity', userActivity);
      return db.none('insert into users_daily_activities(user_id, daily_activity_id)' + 
        'values(${user_id}, (select id from daily_activities where ' +
        'id=${daily_activity_id}))', userActivity);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully created new daily activity'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(404);
    });
};

