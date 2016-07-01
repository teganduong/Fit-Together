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

exports.getActivities = (req, res) => {
  /** TESTING **/
  console.log('-----req for get act------', req);
  console.log('FOR TESTING PURPOSES, user_id = 1');
  req.body.user_id = 1;
  db.tx(t => {
    return t.batch([
      t.any('select users.id, sleep.date_performed, sleep.duration, ' +
        'sleep.quality from users, sleep where users.id=${user_id} ' +
        'and sleep.user_id=${user_id}', req.body),
      t.any('select users.id, exercise.date_performed, exercise.type, exercise.duration, ' +
        'exercise.distance, exercise.reps, exercise.sets from users, exercise where users.id=${user_id} ' +
        'and exercise.user_id=${user_id}', req.body),
      t.any('select users.id, food.date_performed, food.protein, ' +
        'food.fats, food.carbs, food.calories from users, food where users.id=${user_id} ' +
        'and food.user_id=${user_id}', req.body),
      t.any('select users.id, mem.date_performed, mem.mood, ' +
        'mem.energy, mem.motivation from users, mem where users.id=${user_id} ' +
        'and mem.user_id=${user_id}', req.body)              
      ]);
  })
  .then(data => {
    // console.log('----------tx server side-------------', data);
    res.status(200)
      .json({
        status: 'success',
        data: data[0].concat(data[1]).concat(data[2]).concat(data[3]),
        message: 'Retrieved user sleep information!'
      });
  });

};

