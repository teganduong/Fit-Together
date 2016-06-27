const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const LocalPassport = require('../authentication/LocalPassport');
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const passport = require('passport');
const flash = require('connect-flash');
import { browserHistory } from 'react-router';

/**  Users **/
router.get('/api/users/:username', users.getUserInfo);
router.post('/api/users', users.addUser);
router.post('/userteams', teams.getUserTeams);
router.post('/teammembers', teams.getTeamMembers);
router.post('/createteam', teams.createTeam);
router.post('/deleteteam', teams.deleteTeam);

/**  Auth **/
router.get('/auth/fitbit',
  passport.authenticate('fitbit'));

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', { failureRedirect: '/login', failureFlash: true }),
  (req, res) => {
    console.log('inside callback', req, req.user);
    let username = req.user;
    res.send(req.user);
    res.redirect('/dashboard');
  });


router.get('/auth/moves', passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('inside callback', req.user);
    let username = req.user;
    res.redirect(`/dashboard/${username}`);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/signup', 
  passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup',
    failureFlash : true 
  })
);

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

// router.get('/login', 
//   passport.authenticate('local-login', {
//     successRedirect : '/dashboard', 
//     failureRedirect : '/login',
//     failureFlash : true 
//   })
// );
module.exports = router;
