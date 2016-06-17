const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const db = require('./db/connection.js');

app.use('/', staticRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', routes);

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));
