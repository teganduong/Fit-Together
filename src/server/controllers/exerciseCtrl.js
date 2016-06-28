const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addExercise = (req, res) => {
  db.one('insert into exercise(type, duration, distance, reps, sets, date_performed)' + 
      ' values(${type}, ${duration}, ${distance}, ${reps}, ${sets}, ${date_performed})' +
      ' returning id', req.body)
    .then((exerciseId) => {
      const userExercise = {
        user_id: req.body.user_id,
        exercise_id: exerciseId.id
      };
      console.log('Successly inserted exercise', userExercise);
      return db.none('insert into users_exercise(user_id, exercise_id)' + 
        'values(${user_id}, (select id from exercise where ' +
        'id=${exercise_id}))', userExercise);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added new exercise'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};