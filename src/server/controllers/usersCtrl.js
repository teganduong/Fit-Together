const db = require('../db/connection.js');

// Signup User
exports.addUser = (req, res) => {
  console.log('req.body in addUser: ', req.body);
  db.none('insert into users(name, username, password, email, weight, bmi, goal, points, user_icon)' +
      'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal}, ${points}, ${user_icon})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted user into db',
          data: req.body
        });
    })
    .catch((err) => {
      console.error('error in adding user: ', err);
    });
};

exports.getUserInfo = (req, res) => {
  db.one('select * from users where username=${username}', req.body)
    .then(user => {
      res.status(200)
        .json({
          status: 'success',
          data: user,
          message: 'Retrieved user information!'
        });
    })
    .catch((err) => {
      console.error('error in retrieving user info: ', err);
    });
};

