const passport = require('passport');
const MovesStrategy = require('passport-moves').Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const config = require('../config.js');

export default () => {
  passport.use(new MovesStrategy({
    clientID: config.Moves.clientID,
    clientSecret: config.Moves.clientSecret,
    scope: ['activity', 'location'],
    callbackURL: config.Moves.callbackURL
  }, (accessToken, refreshToken, profile, done) => {
    done(null, {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    });
  })
);

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};

