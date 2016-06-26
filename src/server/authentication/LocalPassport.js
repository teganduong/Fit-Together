// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const usersCtrl = require('../controllers/usersCtrl.js');
// const config = require('../config.js');

// passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true 
// },
//   function(req, email, password, done) { 
//     done(null, {
//       email: email

//     });
//   }
// )

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });
