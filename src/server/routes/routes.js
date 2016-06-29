const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const passport = require('passport');

/**  Users **/
router.get('/api/users/:username', users.getUserInfo);
router.post('/api/users', users.addUser);
router.post('/userteams', teams.getUserTeams);
router.post('/teammembers', teams.getTeamMembers);
router.post('/createteam', teams.createTeam);
router.post('/deleteteam', teams.deleteTeam);

/**  Auth **/
router.get('/auth/fitbit', 
  passport.authenticate('fitbit', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/fitbit/failure'
  })
);

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/fitbit/failure'
  })
);

router.get('/auth/fitbit/success', (req, res, next) => {
  res.send(req.user);
});

router.get('/auth/moves', passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
