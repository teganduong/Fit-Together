// to seed activities table, do 'npm run seed' from root directory
const activitiesCtrl = require('../controllers/activitiesCtrl.js');
const exampleActivitiesData = [
  {
    user_id: 1,
    type: 'exercise',
    category: 'walking',
    description: 'at the park',
    date_performed: '2016-05-24',
    count: 1200,
    units: 'steps'
  },
  {
    user_id: 1,
    type: 'exercise',
    category: 'lifting',
    description: 'bench press, 3 sets of 10 reps',
    date_performed: '2016-05-24',
    count: 30,
    units: 'reps'
  },
  {
    user_id: 1,
    type: 'exercise',
    category: 'running',
    description: '3 mile run',
    date_performed: '2016-05-26',
    count: 20,
    units: 'minutes'
  },
  {
    user_id: 1,
    type: 'nutrition',
    category: 'breakfast',
    description: 'frosted flakes w/ protein shake',
    date_performed: '2016-05-26',
    count: 650,
    units: 'calories'
  },
  {
    user_id: 1,
    type: 'nutrition',
    category: 'lunch',
    description: 'burger, fries, and soda',
    date_performed: '2016-05-26',
    count: 1100,
    units: 'calories'
  },
  {
    user_id: 1,
    type: 'nutrition',
    category: 'dinner',
    description: 'steak and eggs',
    date_performed: '2016-05-26',
    count: 950,
    units: 'calories'
  }
];

// seeds activities table with example data
// activitiesCtrl.findUserActvities({ body: { username: 'jjones' } }, null);

exampleActivitiesData.forEach((activity, index) => {
  setTimeout(() => activitiesCtrl.addActivity({ body: activity }, null), index * 200);
});

setTimeout(process.exit, exampleActivitiesData.length * 200);
