const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./db/connection.js');
const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const session = require('express-session');
const app = express();
const config = require('./config.js');
const MovesStrategy = require('passport-moves').Strategy;
const usersCtrl = require('./controllers/usersCtrl.js');
const LocalPassport = require('./authentication/LocalPassport');

// LocalPassport();

app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'FidgetyWidgets'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

const fitbitStrategy = new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity','heartrate','location','profile'],
  callbackURL: config.Fitbit.callbackURL
}, (accessToken, refreshToken, activity, done) => {
  process.nextTick(() => {
    const userData = {
      name: activity._json.user.displayName,
      username: activity._json.user.displayName,
      password: activity._json.user.encodedId,
      email: activity._json.user.encodedId,
      weight: activity._json.user.weight,
      bmi: 21.3,
      goal: 'Live a healthy lifestyle',
      points: 0
    };
  console.log('INSIDE FITBIT', userData);
    // usersCtrl.findUser({ body: userData.name });
}, function(accessToken, refreshToken, profile, done) {

    usersCtrl.findUser({ body: userData.name }, function(err, user) {
      if(err) {
        return done(err);
      } 
      if(user) {
        return done(null, user);
      } else {
        
        usersCtrl.addUser({ body: userData.name }, function(err, user) {
          if(err) {
            return done(err, null);
          } else {
            return done(null, user);
          }
        });
    }
  });

  // done(null, {
  //   accessToken: accessToken,
  //   refreshToken: refreshToken,
  //   profile: profile
  // });
  }
);
});

passport.use(fitbitStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/',
  failureRedirect: '/auth/fitbit/failure'
});

app.get('/auth/fitbit', fitbitAuthenticate);
app.get('/auth/fitbit/callback', fitbitAuthenticate);
app.get('/auth/fitbit/success', function(req, res, next) {
  res.send(req.user);
});

passport.use(new MovesStrategy({
  clientID: config.Moves.clientID,
  clientSecret: config.Moves.clientSecret,
  scope: ['activity', 'location'],
  callbackURL: config.Moves.callbackURL
},
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
    clientID: config.Moves.clientID,
    clientSecret: config.Moves.clientSecret,
    scope: ['activity','location'],
    callbackURL: config.Moves.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      
      // To keep the example simple, the user's Foursquare profile is returned
      // to represent the logged-in user.  In a typical application, you would
      // want to associate the Foursquare account with a user record in your
      // database, and return that user instead.
      return done(null, profile);
    });
  }
));


app.get('/auth/moves',
  passport.authenticate('moves'));

app.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));
