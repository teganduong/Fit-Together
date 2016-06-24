const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const config = require('../config.js');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity', 'heartrate', 'location', 'profile'],
  callbackURL: config.Fitbit.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    done(null, {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    });
  })
);

module.exports = passport;

