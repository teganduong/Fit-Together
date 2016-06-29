const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./db/connection.js');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const FitbitPassport = require('./authentication/FitbitPassport');
const MovesPassport = require('./authentication/MovesPassport');
const config = require('./config/api-keys');
const app = express();
const port = process.env.PORT || 3000;
const redisClient = require('./db/redisConnection.js');

app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'FidgetyWidgets' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));
