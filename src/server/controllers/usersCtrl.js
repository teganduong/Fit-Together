const db = require('../db/connection.js');

// Signup User
exports.addUser = (req, res) => {
  db.none('insert into users(name, username, password, email, weight, bmi, goal, points)' +
      'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal}, ${points})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted user into db'
        });
    })
    .catch((err) => {
      console.error('error in adding user: ', err);
    });
};

// Login User
// returned data => [anonymous {}] 
exports.findUser = (req, res) => {
  db.query('select * from users where username=${username}', req.body)
    .then((data) => {
      console.log('Data:', data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
};

exports.getUserInfo = (req, res) => {
  db.one('select * from users where username=${username}', req.params)
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
