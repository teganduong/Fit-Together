const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db/connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
require('./routes/routes.js')(app);

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));

