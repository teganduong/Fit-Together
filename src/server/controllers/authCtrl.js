import passport from 'passport';
import User from './usersCtrl';

const signIn = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.status(401).send(info);
    } else {
      attemptSignIn(req, res, user);
    }
  })(req, res, next);
};

export default { signIn };
