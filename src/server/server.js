const express = require('express');
const path = require('path');
<<<<<<< 759bf23ff143af64949e283e260c5ac159307c66
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();
require('./routes/routes.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port));
=======
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
// const users = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
// app.use('/users', users);
app.use(express.static(path.join(__dirname, '../client')));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


const port = 3000;
app.listen(port, () => {
  console.log('Server is listening on port', port);
});
>>>>>>> Lint server

module.exports = app;
