const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const users = require('../controllers/usersCtrl');
const passport = require('passport');
// const passport = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;

router.post('/api/users', users.addUser);

router.get('/auth/fitbit', 
  passport.authenticate('fitbit', {
    successRedirect: '/auth/fitbit/success',
    failureRedirect: '/auth/fitbit/failure'
  })
);
router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', {
    successRedirect: '/auth/fitbit/success',
    failureRedirect: '/auth/fitbit/failure'
  })
);

router.get('/auth/fitbit/success', (req, res, next) => {
  res.send(req.user);
});

router.get('/auth/moves',
  passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
});

module.exports = router;
