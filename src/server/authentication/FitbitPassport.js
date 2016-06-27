const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const config = require('../config.js');
const db = require('../db/connection.js');

passport.use(new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity', 'heartrate', 'location', 'profile'],
  callbackURL: config.Fitbit.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    const userData = {
      name: profile._json.user.fullName,
      username: profile._json.user.fullName,
      password: profile._json.user.encodedId,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      bmi: 21.3,
      goal: 'refactored',
      points: 0
    };
    console.log(profile);
    process.nextTick(() => {
      usersCtrl.addUser({ body: userData });
     });
   }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;

