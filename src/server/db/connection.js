const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const fileHelper = require(__dirname + '/../fileHelper.js');
const connectionString = require(fileHelper.apiKeyPath).Aws.rds.key;

// const connectionString = {
//   host: 'fidgetywidget.c67fs1cxhe7n.us-west-2.rds.amazonaws.com',
//   port: 5432,
//   database: 'fidgetywidget',
//   user: 'fidgetywidget',
//   password: 'widget123'
// };

const db = pgp(connectionString);

module.exports = db;
