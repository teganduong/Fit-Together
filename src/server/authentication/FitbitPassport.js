const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const config = require('../config/api-keys.js');
const db = require('../db/connection.js');

passport.use(new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity', 'heartrate', 'location', 'profile', 'sleep'],
  callbackURL: config.Fitbit.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    const userData = {
      name: profile._json.user.fullName,
      username: profile._json.user.displayName,
      password: profile._json.user.displayName,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      bmi: 21.3,
      goal: accessToken,
      points: 0
    };
    process.nextTick(() => {
      db.none('insert into users(name, username, password, email, weight, bmi, goal)' +
        'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})',
         userData)
      .then(() => {
        return done(null, {
          accessToken: accessToken,
          profile: profile
        });
      })
      .catch((error) => {
        console.log(error);
        return done(error, null);
      });
    });
  })
);

passport.serializeUser((user, done) => {
  const userObj = {
    accessToken: user.accessToken,
    provider: user.profile.provider,
    id: user.profile.id,
    username: user.profile.displayName
  };
  console.log('insider serializeUser', userObj);
  done(null, userObj);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
