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
const logMem = require('../controllers/memCtrl');
const logExercise = require('../controllers/exerciseCtrl');
const logFood = require('../controllers/foodCtrl');
const logSleep = require('../controllers/sleepCtrl');

// ------------Controller Functions--------------- 
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const sleep = require('../controllers/sleepCtrl');
const redis = require('../controllers/redisCtrl');

/**  Users **/
router.post('/api/users', users.addUser);
router.post('/api/userteams', redis.getUserTeams);
router.post('/api/teammembers', teams.getTeamMembers);
router.post('/api/createteam', redis.createTeam);
router.post('/api/leaveteam', redis.leaveTeam);
router.post('/api/otherteams', redis.getOtherTeams);
router.post('/api/jointeam', redis.joinTeam);

router.post('/api/createteam', teams.createTeam);
router.post('/api/deleteteam', teams.deleteTeam);
router.post('/api/otherteams', teams.getOtherTeams);
router.get('/api/usersleep', sleep.getSleep);
router.post('/api/addMem', logMem.addMem);
router.post('/api/addExercise', logExercise.addExercise);
router.post('/api/addFood', logFood.addFood);
router.post('/api/addSleep', logSleep.addSleep);

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

      res.redirect('/dashboard');
    }
  }
);

router.get('/auth/moves', passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('inside callback of moves', req.user);
    const username = req.user;
    var accessToken = req.user.accessToken;
    queryHelper.getUsername(accessToken);
    res.redirect('/dashboard');
  }
);

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


module.exports = router;