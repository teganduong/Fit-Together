const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addSleep = (req, res) => {
  db.one('insert into sleep(duration, quality, date_performed)' + 
      ' values(${duration}, ${quality}, ${date_performed})' +
      ' returning id', req.body)
    .then((sleepId) => {
      const userSleep = {
        user_id: req.body.user_id,
        sleep_id: sleepId.id
      };
      console.log('Successfully inserted sleep', userSleep);
      return db.none('insert into users_sleep(user_id, sleep_id)' + 
        'values(${user_id}, (select id from sleep where ' +
        'id=${sleep_id}))', userSleep);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added new sleep'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

