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
      username: profile._json.user.displayName,
      password: profile._json.user.displayName,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      bmi: 21.3,
      goal: accessToken,
      points: 0
    };
    process.nextTick(() => {
      db.one('insert into users(name, username, password, email, weight, bmi, goal)' +
        'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})  returning username',
         userData)
      .then(data => {
        return done(null, data.username);
      })
      .catch((error) => {
        console.log(error);
        return done(error, null);
      });
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

