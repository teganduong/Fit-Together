const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const passport = require('passport');
const flash = require('connect-flash');
const db = require('../db/connection.js');
const queryHelper = require('../queryHelper');
const activities = require('../controllers/activitiesCtrl');
const entries = require('../controllers/entriesCtrl');

// ------------Controller Functions--------------- 
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const sleep = require('../controllers/sleepCtrl');
const redis = require('../controllers/redisCtrl');

/**  Users **/
router.post('/api/users', users.addUser);
router.post('/api/userteams', redis.getUserTeams);
router.post('/api/teammembers', teams.getTeamMembers);
router.post('/api/createteam', teams.createTeam);
router.post('/api/deleteteam', teams.deleteTeam);
router.post('/api/otherteams', redis.getOtherTeams);

router.get('/api/usersleep', sleep.getSleep);

router.get('/api/user', (req, res) => {
  if (req.user) {
    console.log('insider req', req.user.username);
    db.any('select * from users where username=$1', [req.user.username])
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    console.error('error in adding user: ', error);
  });
  }
});


/** Entries **/
router.get('/api/entries', entries.getEntries);


/** GET USER STATS **/
router.get('/api/useractivities', activities.getActivities);

/**  Auth **/
router.get('/auth/fitbit',
  passport.authenticate('fitbit'));

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', { failureRedirect: '/login', failureFlash: true }),
  (req, res) => {
    console.log('inside /fitbit/callback of router >>');
    if (req.user) {
      const userData = {
        accessToken: req.user.accessToken,
        id: req.user.profile.id,
        username: req.user.profile.displayName
      };
      queryHelper.getUserData(userData.id, userData.accessToken);
      res.redirect('/dashboard');
    }
  }
);

router.get('/auth/moves', passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('inside callback', req.user);
    const username = req.user;
    res.redirect('/dashboard');
  }
);

// router.post('/signout', (req, res) => {
//   req.session.destroy((err) => {
//     res.redirect('/'); 
//   });
//   console.log('logged out');
// });

router.get('/signout', (req, res) => {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

router.get('/signup', 
  passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup',
    failureFlash: true 
  })
);

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/login', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));

module.exports = router;
