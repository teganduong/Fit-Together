const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addFood = (req, res) => {
  db.one('insert into food(protein, fats, carbs, calories, date_performed, user_id)' + 
      ' values(${protein}, ${fats}, ${carbs}, ${calories}, ${date_performed},' + 
      ' (select id from users where id=${user_id}))', req.body)
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
