const passport = require('passport');
const MovesStrategy = require('passport-moves').Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const config = require('../config/api-keys.js');
const db = require('../db/connection.js');

passport.use(new MovesStrategy({
  clientID: config.Moves.clientID,
  clientSecret: config.Moves.clientSecret,
  scope: ['activity', 'location'],
  callbackURL: config.Moves.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
<<<<<<< 238ca0c661d7827e2884ad758aaadd13e59bcf81
    console.log('this is id', profile._json.userId, accessToken, refreshToken);
    const userData = {
      name: profile._json.userId,
      username: 'test',
      password: 'test',
      email: 'test@test.com',
      weight: 123,
      bmi: 123,
      goal: accessToken,
      points: 0
    };
    process.nextTick(() => {
      db.one('insert into users(name, username, password, email, weight, bmi, goal)' +
        'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})  returning username',
         userData)
      .then(data => {
        console.log('data inside nexttick', data);
        return done(null, data.name);
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
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;


=======
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

module.exports = passport;
>>>>>>> complete fitbit and moves integration

