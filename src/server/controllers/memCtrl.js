const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addMem = (req, res) => {
  db.one('insert into mem(mood, energy, motivation, date_performed)' + 
      ' values(${mood}, ${energy}, ${motivation}, ${date_performed})' +
      ' returning id', req.body)
    .then((memId) => {
      const userMem = {
        user_id: req.body.user_id,
        mem_id: memId.id
      };
      console.log('Successfully inserted mem', userMem);
      return db.none('insert into users_mem(user_id, mem_id)' + 
        'values(${user_id}, (select id from mem where ' +
        'id=${mem_id}))', userMem);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added new mem'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};
