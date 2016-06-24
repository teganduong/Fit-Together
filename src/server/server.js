const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const db = require('./db/connection.js');
const passport = require('passport');
const expressSession = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', routes);
app.use(expressSession({secret: 'FidgetyWidgets'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));
