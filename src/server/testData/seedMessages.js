const mongoCtrl = require('../controllers/mongoCtrl.js');

const exampleTeamMessages = [
  {
    team_id: 1,
    user_id: 1,
    message: 'Hey everyone welcome to Bay Area Hikers! Feel free to introduce yourselves and put in recommendations for some team meetups',
    date_entered: "2016-07-01T18:18:44.460Z"
  },
  {
    team_id: 1,
    user_id: 2,
    message: 'Hey Jessica, so glad to have joined!, I was thinking maybe we can go to Muir Woods during the next couple of weekends',
    date_entered: "2016-07-02T18:18:44.460Z"
  },
  {
    team_id: 1,
    user_id: 3,
    message: 'Oh yea, that sounds awesome! Count me in.',
    date_entered: "2016-07-03T18:18:44.460Z"
  },
  {
    team_id: 1,
    user_id: 4,
    message: 'Oh yea, that\'s rad! Im totally down brochachos.',
    date_entered: "2016-07-04T18:18:44.460Z"
  },
  {
    team_id: 2,
    user_id: 1,
    message: 'Hey everyone welcome to Yoga and Pilates! Im excited to get in a good strech with y\'all',
    date_entered: "2016-07-01T18:18:44.460Z"
  },
  {
    team_id: 2,
    user_id: 2,
    message: 'Hey Jessica, so glad to have joined, how bout we take this to a local park one of these weekends! ',
    date_entered: "2016-07-02T18:18:44.460Z"
  },
  {
    team_id: 2,
    user_id: 3,
    message: 'That would be great! Gimme a place and time and I\'ll be there',
    date_entered: "2016-07-03T18:18:44.460Z"
  },
  {
    team_id: 2,
    user_id: 4,
    message: 'I need to get my inner zen on real quick. IM EXCITED!',
    date_entered: "2016-07-04T18:18:44.460Z"
  }
];

// mongoCtrl.getMessagesByTeam({ body: { team_id: 1 }});

// exampleTeamMessages.forEach((message, index) => {
//   setTimeout(() => mongoCtrl.sendMessage({ body: message }, null), index * 200);
// });

// setTimeout(process.exit, exampleTeamMessages.length * 200);
