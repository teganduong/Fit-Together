const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const LocalPassport = require('../authentication/LocalPassport');
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const passport = require('passport');
const flash = require('connect-flash');
const db = require('../db/connection.js');
const queryHelper = require('../queryHelper');

/**  Users **/
router.get('/api/users/:username', users.getUserInfo);
router.post('/api/users', users.addUser);
router.post('/userteams', teams.getUserTeams);
router.post('/teammembers', teams.getTeamMembers);
router.post('/createteam', teams.createTeam);
router.post('/deleteteam', teams.deleteTeam);
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

/**  Auth **/
router.get('/auth/fitbit',
  passport.authenticate('fitbit'));

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', { failureRedirect: '/login', failureFlash: true }),
  (req, res) => {
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

router.get('/api/checkAuth', (req, res, next) => {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
})

router.get('/signup', 
  passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup',
    failureFlash: true 
  })
);

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/', 
  failureRedirect: '/login', 
  failureFlash: true 
}));

module.exports = router;
