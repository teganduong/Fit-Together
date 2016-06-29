const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addFood = (req, res) => {
  db.one('insert into food(protein, fats, carbs, calories, date_performed)' + 
      ' values(${protein}, ${fats}, ${carbs}, ${calories}, ${date_performed})' +
      ' returning id', req.body)
    .then((foodId) => {
      const userFood = {
        user_id: req.body.user_id,
        food_id: foodId.id
      };
      console.log('Successly inserted food', userFood);
      return db.none('insert into users_food(user_id, food_id)' + 
        'values(${user_id}, (select id from food where ' +
        'id=${food_id}))', userFood);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added new food'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};
