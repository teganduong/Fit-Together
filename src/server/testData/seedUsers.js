// to seed users table, do 'npm run seed' from root directory
const usersCtrl = require('../controllers/usersCtrl.js');
const exampleUserData = [
  {
    name: 'Jessica Jones',
    username: 'jjones',
    password: 'jjones',
    email: 'jjones@gmail.com',
    weight: 145,
    bmi: 21.3,
    goal: 'Live a healthy lifestyle',
    points: 0
  },
  {
    name: 'John Jacobs',
    username: 'johnyj',
    password: 'johnyj',
    email: 'johnyj@gmail.com',
    weight: 180,
    bmi: 24.5,
    goal: 'Get super swole',
    points: 0
  },
  {
    name: 'Jeffrey Jordan',
    username: 'jeffj',
    password: 'jeffj',
    email: 'jeffj@gmail.com',
    weight: 170,
    bmi: 22.5,
    goal: 'Get more tone',
    points: 0
  }
];

// finds a user in the database
usersCtrl.findUser({ body: { username: 'jjones' } }, null);

// seeds users table with example data
exampleUserData.forEach((user, index) => {
  setTimeout(() => usersCtrl.addUser({ body: user }, null), index * 200);
});

setTimeout(process.exit, exampleUserData.length * 200);

