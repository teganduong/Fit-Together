const passport = require('passport');
const MovesStrategy = require('passport-moves').Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const fileHelper = require(__dirname + '/../fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const db = require('../db/connection.js');

passport.use(new MovesStrategy({
  clientID: config.Moves.clientID,
  clientSecret: config.Moves.clientSecret,
  scope: ['activity', 'location'],
  callbackURL: config.Moves.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      return done(null, {
        accessToken: accessToken,
        profile: profile
      });    
    });
  })
);

passport.serializeUser((user, done) => {
  const userObj = {
    accessToken: user.accessToken,
    provider: user.profile.provider,
    id: user.profile.id,
  };
  done(null, userObj);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;